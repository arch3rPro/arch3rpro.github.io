<template>
    <div v-if="frontmatter.articleGPT" class="article-summary">
      <div class="summary-container">
        <!-- 标题区域 -->
        <div class="header">
          <div class="title-section">
            <div class="icon">
              <el-icon>
                <DataAnalysis />
              </el-icon>
            </div>
            <span>AI文摘</span>
            <el-icon class="arrow">
              <ArrowRight />
            </el-icon>
          </div>
          <div class="action-section">
            <el-tooltip content="朗读文本" placement="top" :show-after="300">
              <div class="speak-button" @click="toggleSpeak" :class="{ speaking: isSpeaking }">
                <el-icon>
                  <Microphone />
                </el-icon>
              </div>
            </el-tooltip>
            <div class="gpt-tag" @click="handleFakeGPTClick" :class="{ active: showFakeGPT }">
              FakeGPT
            </div>
          </div>
        </div>
  
        <!-- FakeGPT 提示 -->
        <div v-if="showFakeGPT" class="content-box fake-gpt-tip">
          <p class="text">
            {{ fakeGPTText }}
            <span v-if="fakeGPTTyping" class="cursor">|</span>
          </p>
        </div>
  
        <!-- 内容区域 -->
        <div v-else class="content-box">
          <p class="text" :class="{ 'is-typing': loading }">
            {{ abstractData === "" ? "正在分析文章内容..." : abstractData }}
            <span v-if="loading" class="cursor">|</span>
          </p>
        </div>
  
        <!-- 底部信息 -->
        <div class="footer">
          <div class="meta-info">
            <el-icon>
              <InfoFilled />
            </el-icon>
            <span>此内容由DeepSeek-R1支持生成，仅用于文章内容的解释与总结</span>
          </div>
          <a class="report-link" @click.prevent="handleReport">投诉</a>
        </div>
      </div>
    </div>

    <!-- 投诉弹窗 -->
    <el-dialog
      v-model="showReportDialog"
      title="内容投诉"
      width="500px"
      :close-on-click-modal="false"
      destroy-on-close
    >
      <div class="report-dialog-content">
        <p class="report-tip">如果您对AI生成的内容有任何疑问或建议，请在下方填写详细信息：</p>
        
        <el-form :model="reportForm" label-position="top">
          <el-form-item label="投诉类型">
            <el-select v-model="reportForm.type" placeholder="请选择投诉类型" style="width: 100%">
              <el-option label="内容不准确" value="inaccurate" />
              <el-option label="内容有害" value="harmful" />
              <el-option label="内容不相关" value="irrelevant" />
              <el-option label="其他问题" value="other" />
            </el-select>
          </el-form-item>
          
          <el-form-item label="详细描述">
            <el-input
              v-model="reportForm.description"
              type="textarea"
              :rows="4"
              placeholder="请详细描述您遇到的问题..."
            />
          </el-form-item>
          
          <el-form-item label="联系方式（选填）">
            <el-input v-model="reportForm.contact" placeholder="您的邮箱或其他联系方式" />
          </el-form-item>
        </el-form>
      </div>
      
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="showReportDialog = false">取消</el-button>
          <el-button type="primary" @click="submitReport" :loading="submitting">
            提交
          </el-button>
        </div>
      </template>
    </el-dialog>
  </template>
  
  <script setup>
  import { useData } from "vitepress";
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import { DataAnalysis, ArrowRight, Microphone, InfoFilled } from '@element-plus/icons-vue';
  
  const { frontmatter } = useData();
  const loading = ref(true);
  const waitTimeOut = ref(null);
  const abstractData = ref("");
  const showIndex = ref(0);
  
  // FakeGPT 相关状态
  const showFakeGPT = ref(false);
  const fakeGPTText = ref("");
  const fakeGPTTyping = ref(false);
  
  // 语音相关状态
  const isSpeaking = ref(false);
  const speechSynth = window.speechSynthesis;
  let utterance = null;
  
  const typeWriter = (text = null, targetRef = abstractData, callback = null) => {
    try {
      const data = text || frontmatter.value.articleGPT;
      if (!data) return false;
  
      let index = 0;
      const type = () => {
        if (index < data.length) {
          targetRef.value += data.charAt(index++);
          const delay = Math.random() * (100 - 20) + 20;
          setTimeout(type, delay);
        } else {
          if (callback) callback();
          if (targetRef === abstractData) loading.value = false;
          if (targetRef === fakeGPTText) fakeGPTTyping.value = false;
        }
      };
      type();
    } catch (error) {
      loading.value = false;
      fakeGPTTyping.value = false;
      targetRef.value = "生成失败";
      console.error("生成失败：", error);
    }
  };
  
  const handleFakeGPTClick = () => {
    if (fakeGPTTyping.value) return;
  
    showFakeGPT.value = true;
    fakeGPTText.value = "";
    fakeGPTTyping.value = true;
    stopSpeak(); // 停止朗读
  
    typeWriter("并非实时GPT生成，只是读取本地GPT生成的摘要！", fakeGPTText, () => {
      setTimeout(() => {
        showFakeGPT.value = false;
        fakeGPTText.value = "";
      }, 3000);
    });
  };
  
  const toggleSpeak = () => {
    if (isSpeaking.value) {
      stopSpeak();
    } else {
      startSpeak();
    }
  };
  
  const startSpeak = () => {
    if (!abstractData.value || loading.value) return;
  
    utterance = new SpeechSynthesisUtterance(abstractData.value);
    utterance.lang = 'zh-CN';
    utterance.rate = 1;
    utterance.pitch = 1;
  
    utterance.onend = () => {
      isSpeaking.value = false;
    };
  
    isSpeaking.value = true;
    speechSynth.speak(utterance);
  };
  
  const stopSpeak = () => {
    speechSynth.cancel();
    isSpeaking.value = false;
  };
  
  // 投诉相关状态
const showReportDialog = ref(false);
const reportForm = ref({
  type: '',
  description: '',
  contact: ''
});
const submitting = ref(false);

const handleReport = () => {
  // 打开投诉弹窗
  showReportDialog.value = true;
  // 重置表单
  reportForm.value = {
    type: '',
    description: '',
    contact: ''
  };
};

const submitReport = () => {
  // 表单验证
  if (!reportForm.value.type) {
    ElMessage.warning('请选择投诉类型');
    return;
  }
  if (!reportForm.value.description) {
    ElMessage.warning('请填写详细描述');
    return;
  }
  
  // 显示提交中状态
  submitting.value = true;
  
  // 模拟提交过程
  setTimeout(() => {
    submitting.value = false;
    showReportDialog.value = false;
    ElMessage.success('感谢您的反馈，我们会尽快处理');
    
    // 实际项目中，这里应该发送请求到后端API
    console.log('提交的投诉内容:', reportForm.value);
  }, 1000);
};
  
  const initAbstract = () => {
    waitTimeOut.value = setTimeout(
      () => {
        abstractData.value = "";
        typeWriter();
      },
      Math.random() * (2000 - 1000) + 1000,
    );
  };
  
  onMounted(() => {
    if (frontmatter.value.articleGPT) initAbstract();
  });
  
  onBeforeUnmount(() => {
    clearTimeout(waitTimeOut.value);
    stopSpeak();
  });
  </script>
  
  <style scoped>
  .article-summary {
    margin: 1.5rem 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  
  .summary-container {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
    border: 1px solid rgba(235, 235, 235, 0.8);
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .title-section {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #4169E1;
    border-radius: 6px;
    color: white;
  }
  
  .icon :deep(svg) {
    width: 16px;
    height: 16px;
  }
  
  .title-section span {
    font-size: 15px;
    font-weight: 600;
    color: #2c3e50;
    letter-spacing: 0.3px;
  }
  
  .arrow {
    font-size: 14px;
    color: #8590a6;
  }
  
  .action-section {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .speak-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #f0f2f5;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #8590a6;
  }
  
  .speak-button:hover {
    background: #e6e8eb;
    color: #4169E1;
  }
  
  .speak-button.speaking {
    background: #4169E1;
    color: white;
    animation: pulse 2s infinite;
  }
  
  .gpt-tag {
    background: #4169E1;
    color: white;
    padding: 6px 14px;
    border-radius: 16px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    letter-spacing: 0.3px;
  }
  
  .gpt-tag:hover {
    background: #3756c5;
  }
  
  .gpt-tag.active {
    background: #2b44a9;
  }
  
  .content-box {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 12px;
    min-height: 50px;
  }
  
  .text {
    margin: 0;
    line-height: 1.8;
    color: #2c3e50;
    font-size: 14.5px;
    letter-spacing: 0.2px;
  }
  
  .text.is-typing {
    color: #5c6b7f;
  }
  
  .cursor {
    display: inline-block;
    animation: blink 1s infinite;
    color: #4169E1;
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
  }
  
  .meta-info {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #8590a6;
    font-size: 12px;
  }
  
  .report-link {
    color: #4169E1;
    font-size: 12px;
    cursor: pointer;
    transition: color 0.2s ease;
  }
  
  .report-link:hover {
    color: #3756c5;
    text-decoration: underline;
  }
  
  @keyframes blink {
  
    0%,
    100% {
      opacity: 1;
    }
  
    50% {
      opacity: 0;
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
  
    50% {
      transform: scale(1.05);
    }
  
    100% {
      transform: scale(1);
    }
  }
  
  /* 深色模式适配 */
  :root.dark .summary-container {
    background: #1a1a1a;
    border-color: rgba(55, 55, 55, 0.8);
  }
  
  :root.dark .title-section span {
    color: #e5e6eb;
  }
  
  :root.dark .content-box {
    background: #2a2a2a;
  }
  
  :root.dark .text {
    color: #e5e6eb;
  }
  
  :root.dark .text.is-typing {
    color: #8590a6;
  }
  
  :root.dark .speak-button {
    background: #2a2a2a;
  }
  
  :root.dark .speak-button:hover {
    background: #363636;
  }
  
  .content-box {
    background: #f2f3f5;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 12px;
    min-height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.03);
  }
  </style>