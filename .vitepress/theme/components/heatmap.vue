<template>
    <div class="cal-heatmap-container">
        <div class="cal-heatmap-header">
            <span class="cal-heatmap-header-title">学习指数</span>
            <div class="cal-heatmap-header-direct">
                <a-button-group shape="round" size="mini">
                    <a-button @click="(e) => { e.preventDefault(); cal.previous(); }">← Prev</a-button>
                    <a-button @click="(e) => { e.preventDefault(); cal.next(); }">Next →</a-button>
                </a-button-group>
            </div>
            <div class="cal-heatmap-legend-container">
                <span class="cal-heatmap-legend-text">懈怠</span>
                <div id="cal-heatmap-legend"></div>
                <span class="cal-heatmap-legend-text">努力</span>
            </div>
        </div>
        <div id="cal-heatmap"></div>
    </div>
</template>

<script setup lang="ts">
import CalHeatmap from 'cal-heatmap'
import Tooltip from 'cal-heatmap/plugins/Tooltip'
import LegendLite from 'cal-heatmap/plugins/LegendLite'
import CalendarLabel from 'cal-heatmap/plugins/CalendarLabel'
import 'cal-heatmap/cal-heatmap.css'
import dayjs from 'dayjs'
import heatmapData from '../../../heatmap-data.json'

import { useData } from "vitepress"
import { watch } from "vue"
const { isDark } = useData();

const yyDaysTemplate: CalHeatmap.Template = DateHelper => {
    const ALLOWED_DOMAIN_TYPE: CalHeatmap.DomainType[] = ['month'];
    return {
        name: 'yyDay',
        allowedDomainType: ALLOWED_DOMAIN_TYPE,
        rowsCount: () => 7,
        columnsCount: (ts) => {
            // 当前月要额外处理，减少多于空间
            if (DateHelper.date(ts).startOf('month').valueOf() !== DateHelper.date().startOf('month').valueOf()) {
                return DateHelper.getWeeksCountInMonth(ts)
            } else {
                let firstBlockDate = DateHelper.getFirstWeekOfMonth(ts);
                // 计算从今天到第一个块的时间间隔
                let interval = DateHelper.intervals('day', firstBlockDate, DateHelper.date()).length;
                // 计算需要规划几列
                let intervalCol = Math.ceil((interval + 1) / 7);
                return intervalCol;
            }
        },
        mapping: (startTimestamp, endTimestamp) => {
            const clampStart = DateHelper.getFirstWeekOfMonth(startTimestamp);
            const clampEnd = dayjs().startOf('day').add(8-dayjs().day(), 'day')
            
            let x = -1;
            const pivotDay = clampStart.weekday();

            return DateHelper.intervals('day', clampStart, clampEnd).map((ts) => {
                const weekday = DateHelper.date(ts).weekday();
                if (weekday === pivotDay) {
                    x += 1;
                }

                return {
                    t: ts,
                    x,
                    y: weekday,
                };
            });
        },
        extractUnit: (ts) => {
            return DateHelper.date(ts).startOf('day').valueOf();
        },
    };
};

function paint(cal: CalHeatmap, theme: 'light' | 'dark') {
    cal.addTemplates(yyDaysTemplate);
    cal.paint(
        {
            theme: theme,
            data: {
                // source: '../../../heatmap.json',
                source: heatmapData,
                type: 'json',
                x: 'date',
                y: (datum) => +datum['file'],
                groupY: 'sum',
            },
            date: {
                start: dayjs().subtract(12, 'month').valueOf(),
                min: dayjs("2025-01-01").valueOf(),
                max: dayjs(),
                locale: 'zh',
                timezone: 'Asia/Shanghai',
            },
            range: 13,
            scale: {
                color: {
                    type: 'threshold',
                    range: ['#daf6ea', '#c7f0df', '#82edc0', '#0bd07d', '#00663b'],
                    domain: [2, 4, 6, 8],
                },
            },
            domain: {
                type: 'month',
                gutter: 5,
                label: { text: 'M月', textAlign: 'middle', position: 'bottom' },
            },
            subDomain: { type: 'yyDay', radius: 2, width: 16, height: 16, gutter: 5 },
            itemSelector: '#cal-heatmap',
        },
        [
            [
                Tooltip,
                {
                    text: function (timestamp: number, value: number, dayjsDate: dayjs.Dayjs) {
                        if (timestamp > Date.now()) {
                            return dayjsDate.format('别急，这一天还没来🫣')
                        }
                        if (!value) {
                            return dayjsDate.format('YYYY-MM-DD 未更新');
                        } else {
                            return dayjsDate.format('于 YYYY-MM-DD 更新了 ') + value + ' 篇博文';
                        }
                    },
                },
            ],
            [
                LegendLite,
                {
                    itemSelector: '#cal-heatmap-legend',
                    includeBlank: true,
                    radius: 2,
                    width: 14,
                    height: 14,
                    gutter: 5,
                },
            ],
            [
                CalendarLabel,
                {
                    width: 25,
                    textAlign: 'start',
                    text: function () {
                        return ['一', '', '三', '', '五', '', '日']
                    },
                },
            ],
        ]
    );
}

function destory(cal: CalHeatmap) {
    cal.destroy()
}

let cal: CalHeatmap;
watch(
    isDark,
    () => {
        if (isDark.value) {
            if (cal !== undefined) destory(cal);
            cal = new CalHeatmap();
            paint(cal, 'dark');
        } else {
            if (cal !== undefined) destory(cal);
            cal = new CalHeatmap();
            paint(cal, 'light');
        }
    },
    {
        immediate: true,
    }
);
</script>

<style scoped lang="scss">
:deep(.ch-domain-text) {
    font-size: 12px;
    color: var(--vp-home-heatmap-legend-text);
}

:deep(.ch-plugin-calendar-label-text) {
    font-size: 12px !important;
    color: var(--vp-home-heatmap-legend-text);
}

.cal-heatmap-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    max-width: 100%;
}

@media screen and (max-width: 768px) {
    .cal-heatmap-container {
        overflow: auto;
    }
}

.cal-heatmap-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
}

.cal-heatmap-header-title {
    flex: 1;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
}

.cal-heatmap-header-direct {
    flex: 1;
}

.cal-heatmap-legend-container {
    display: flex;
    justify-content: space-between;
}

.cal-heatmap-legend-text {
    color: var(--vp-home-heatmap-legend-text);
    font-size: 14px;
}

#cal-heatmap-legend {
    display: flex;
    align-items: center;
    margin: 0 12px;
}
</style>
