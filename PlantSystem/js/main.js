import { Store } from './store.js';
lucide.createIcons();
// 前端路由
const navBtns = document.querySelectorAll('.nav-btn');
const pageViews = document.querySelectorAll('.page-view');

navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetViewId = e.target.getAttribute('data-target');
        navBtns.forEach(b => b.classList.remove('active-nav'));
        e.target.classList.add('active-nav');
        pageViews.forEach(view => {
            view.classList.remove('active-view');
            if (view.id === `view-${targetViewId}`) {
                view.classList.add('active-view');
            }
        });
        if (targetViewId === 'system') {
            renderRecords();
        }
    });
});
function renderRecords() {
    const listContainer = document.getElementById('record-list');
    const data = Store.getData();
    listContainer.innerHTML = '';
    data.historyRecords.forEach(record => {
        const item = document.createElement('div');
        item.className = 'p-6 bg-[#0f172a] border border-white/5 rounded-2xl';
        item.innerHTML = `
            <div class="flex items-center gap-3 mb-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <h4 class="font-bold text-slate-200">${record.title}</h4>
                <span class="text-[10px] text-slate-500 font-mono">${record.time}</span>
            </div>
            <p class="text-sm text-slate-400">${record.content}</p>
        `;
        listContainer.appendChild(item);
    });
}
console.log("系统启动，数据：", Store.getData());