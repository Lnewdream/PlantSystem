import { Store } from './store.js';
import { initKnowledge } from './knowledge.js';
import { initPapers } from './papers.js';
lucide.createIcons();
initKnowledge();
initPapers();
const navBtns = document.querySelectorAll('.nav-btn');
const pageViews = document.querySelectorAll('.page-view');
navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetViewId = e.target.getAttribute('data-target');
        navBtns.forEach(b => b.classList.remove('active-nav'));
        e.target.classList.add('active-nav');
        pageViews.forEach(view => {
            view.classList.remove('active-view');
            if (view.id === `view-${targetViewId}`) view.classList.add('active-view');
        });
        if (targetViewId === 'records') renderRecords();
    });
});
// 添加记录
document.getElementById('btn-add-record').addEventListener('click', () => {
    const titleInput = document.getElementById('record-title');
    const contentInput = document.getElementById('record-content');
    if (!titleInput.value.trim() || !contentInput.value.trim()) {
        alert('标题和内容均不能为空！');
        return;
    }
    Store.addRecord(titleInput.value, contentInput.value);
    titleInput.value = '';
    contentInput.value = '';
    renderRecords(); 
});
function renderRecords() {
    const listContainer = document.getElementById('record-list');
    const data = Store.getData();
    listContainer.innerHTML = '';
    if (data.historyRecords.length === 0) {
        listContainer.innerHTML = '<div class="text-center py-10 text-slate-500">暂无任何防管或收藏记录</div>';
        return;
    }
    data.historyRecords.forEach(record => {
        const item = document.createElement('div');
        item.className = 'p-6 bg-[#0f172a] border border-white/5 rounded-2xl hover:border-green-500/30 transition-colors';
        item.innerHTML = `<div class="flex items-center gap-3 mb-2"><span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span><h4 class="font-bold text-slate-200">${record.title}</h4><span class="text-[10px] text-slate-500 font-mono">${record.time}</span></div><p class="text-sm text-slate-400">${record.content}</p>`;
        listContainer.appendChild(item);
    });
}