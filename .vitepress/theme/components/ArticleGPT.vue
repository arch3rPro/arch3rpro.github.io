<template>
  <div v-if="frontmatter.articleGPT" class="article-summary">
    <div class="summary-container">
      <!-- 标题区域 -->
      <div class="header">
        <div class="title-section">
          <div class="icon">
            <!-- 数据分析图标 -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4v2h2v-2c0-1.1.9-2 2-2s2 .9 2 2v2h2v-2c0-2.21-1.79-4-4-4zm-2 10c0 1.1.9 2 2 2s2-.9 2-2-2-4-2-4-2 2.9-2 4z"/>
            </svg>
          </div>
          <span>AI文摘</span>
          <!-- 箭头图标 -->
          <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="14" height="14">
            <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"/>
          </svg>
        </div>
        <div class="action-section">
          <!-- 朗读按钮 -->
          <div class="tooltip">
            <div class="speak-button" @click="toggleSpeak" :class="{ speaking: isSpeaking }">
              <!-- 麦克风图标 -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
              </svg>
            </div>
            <span class="tooltiptext">朗读文本</span>
          </div>
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
          <!-- 信息图标 -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="12" height="12">
            <path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 64a384 384 0 1 0 0 768 384 384 0 0 0 0-768z"/>
            <path fill="currentColor" d="M480 352a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v32a32 32 0 0 1-32 32h-32a32 32 0 0 1-32-32v-32z"/>
            <path fill="currentColor" d="M480 448a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v160a32 32 0 0 1-32 32h-32a32 32 0 0 1-32-32V448z"/>
          </svg>
          <span>此内容由DeepSeek-R1支持生成，仅用于文章内容的解释与总结</span>
        </div>
        <a class="report-link" @click.prevent="handleReport">投诉</a>
      </div>
    </div>
  </div>

  <!-- 投诉弹窗 -->
  <div v-if="showReportDialog" class="modal-overlay" @click.self="showReportDialog = false">
    <div class="modal-container">
      <div class="modal-header">
        <h3>内容投诉</h3>
        <button class="close-button" @click="showReportDialog = false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="16" height="16">
            <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/>
          </svg>
        </button>
      </div>
      <div class="modal-body">
        <p class="report-tip">如果您对AI生成的内容有任何疑问或建议，请在下方填写详细信息：</p>
        
        <div class="form-group">
          <label for="report-type">投诉类型</label>
          <select id="report-type" v-model="reportForm.type" class="form-select">
            <option value="" disabled>请选择投诉类型</option>
            <option value="inaccurate">内容不准确</option>
            <option value="harmful">内容有害</option>
            <option value="irrelevant">内容不相关</option>
            <option value="other">其他问题</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="report-description">详细描述</label>
          <textarea 
            id="report-description"
            v-model="reportForm.description"
            rows="4"
            placeholder="请详细描述您遇到的问题..."
            class="form-textarea"
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="report-contact">联系方式（选填）</label>
          <input 
            id="report-contact"
            type="text"
            v-model="reportForm.contact"
            placeholder="您的邮箱或其他联系方式"
            class="form-input"
          />
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="btn btn-cancel" @click="showReportDialog = false">取消</button>
        <button class="btn btn-primary" @click="submitReport" :disabled="submitting">
          <span v-if="submitting" class="loading-spinner"></span>
          <span>{{ submitting ? '提交中...' : '提交' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useData } from "vitepress";
import { ref, onMounted, onBeforeUnmount } from "vue";

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
    alert('请选择投诉类型');
    return;
  }
  if (!reportForm.value.description) {
    alert('请填写详细描述');
    return;
  }
  
  // 显示提交中状态
  submitting.value = true;
  
  // 模拟提交过程
  setTimeout(() => {
    submitting.value = false;
    showReportDialog.value = false;
    alert('感谢您的反馈，我们会尽快处理');
    
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
  width: 32px;
  height: 32px;
  background: #4169E1;
  border-radius: 8px;
  color: white;
  transition: all 0.2s ease;
}

.icon:hover {
  background: #3756c5;
  transform: scale(1.05);
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

/* 工具提示 */
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 80px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -40px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.speak-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #f0f2f5;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #4169E1;
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
  background: #f2f3f5;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
  min-height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.03);
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

/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background-color: #fff;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #8590a6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}

.close-button:hover {
  color: #2c3e50;
}

.modal-body {
  padding: 20px;
}

.report-tip {
  margin-top: 0;
  margin-bottom: 16px;
  color: #5c6b7f;
  font-size: 14px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #2c3e50;
}

.form-select,
.form-textarea,
.form-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  color: #2c3e50;
  background-color: #fff;
  transition: border-color 0.2s;
}

.form-select:focus,
.form-textarea:focus,
.form-input:focus {
  outline: none;
  border-color: #4169E1;
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px;
  border-top: 1px solid #eee;
  gap: 12px;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-cancel {
  background-color: #f0f2f5;
  color: #606266;
}

.btn-cancel:hover {
  background-color: #e6e8eb;
}

.btn-primary {
  background-color: #4169E1;
  color: white;
}

.btn-primary:hover {
  background-color: #3756c5;
}

.btn-primary:disabled {
  background-color: #a0cfff;
  cursor: not-allowed;
}

.loading-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s linear infinite;
  margin-right: 6px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
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

:root.dark .modal-container {
  background-color: #1a1a1a;
  border: 1px solid #333;
}

:root.dark .modal-header,
:root.dark .modal-footer {
  border-color: #333;
}

:root.dark .modal-header h3 {
  color: #e5e6eb;
}

:root.dark .report-tip {
  color: #8590a6;
}

:root.dark .form-group label {
  color: #e5e6eb;
}

:root.dark .form-select,
:root.dark .form-textarea,
:root.dark .form-input {
  background-color: #2a2a2a;
  border-color: #444;
  color: #e5e6eb;
}

:root.dark .form-select:focus,
:root.dark .form-textarea:focus,
:root.dark .form-input:focus {
  border-color: #4169E1;
}

:root.dark .btn-cancel {
  background-color: #2a2a2a;
  color: #c0c4cc;
}

:root.dark .btn-cancel:hover {
  background-color: #363636;
}
</style>