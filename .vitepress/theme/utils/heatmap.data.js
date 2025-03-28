import { execSync } from 'child_process';
import fs from 'fs';
import dayjs from 'dayjs';

// 设置日期范围
const sinceDate = "2024-04-17T00:00:00Z"; 
const untilDate = dayjs().add(1, 'day').format('YYYY-MM-DDT23:59:59Z');

// 使用git log命令获取指定日期范围内的提交信息，包含文件名
const gitLogCmd = `git log --since="${sinceDate}" --until="${untilDate}" --name-only --pretty=format:"%cd" --date=format:"%Y-%m-%dT%H:%M:%SZ"`;
const output = execSync(gitLogCmd, { encoding: 'utf-8' });

// 上一个日期变量，用来判断是否是新的提交记录开始
let lastDate = null;
const lines = output.split('\n');
const results = [];

lines.forEach(line => {
    // 如果是日期行，保存该日期
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(line.trim())) {
        lastDate = line.trim();
    } else if (/^posts\/.+README\.md$/.test(line.trim()) && lastDate) {
        results.push({ date: lastDate, file: line.trim() });
    }
});

// 过滤一下同一天内的重复文件
function filterData(data) {
    // 将数据按日期分组
    const groupedData = data.reduce((acc, obj) => {
        const date = obj.date.split('T')[0];
        acc[date] = acc[date] || [];
        acc[date].push(obj.file);
        return acc;
    }, {});

    // 去除每个日期组内的重复文件
    for (const date in groupedData) {
        groupedData[date] = [...new Set(groupedData[date])];
    }

    // 重新构建结果数组
    const filteredData = [];
    for (const date in groupedData) {
        filteredData.push({ date: `${date}`, file: groupedData[date].length });
    }

    return filteredData;
}

const filteredData = filterData(results);

fs.writeFileSync('heatmap-data.json', JSON.stringify(filteredData))