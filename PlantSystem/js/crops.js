import { Store } from './store.js';
const leafDb = [
    { id: 'L1', name: '水稻稻瘟病 (典型)', type: '粮食', stage: '发病中期', img: './images/binghai1.jpg' },
    { id: 'L2', name: '水稻纹枯病 (茎基)', type: '粮食', stage: '发病后期', img: './images/binghai2.jpg' },
    { id: 'L3', name: '番茄早疫病 (轮纹)', type: '蔬菜', stage: '发病初期', img: './images/binghai3.jpg' },
    { id: 'L4', name: '番茄病毒病 (皱缩)', type: '蔬菜', stage: '发病中期', img: './images/binghai4.jpg' }
    // 如果你有更多图片，就在这里继续加，改好名字对应上即可
];
const gallery = document.getElementById('crop-gallery');
const filterBtns = document.querySelectorAll('.crop-filter-btn');
export function initCrops() {
    renderGallery('all');
    filterBtns.forEach(btn => btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => {
            b.classList.remove('bg-green-500/20', 'text-green-400', 'border-green-500/30');
            b.classList.add('bg-[#1e293b]', 'text-slate-400');
        });
        e.target.classList.remove('bg-[#1e293b]', 'text-slate-400');
        e.target.classList.add('bg-green-500/20', 'text-green-400', 'border-green-500/30');
        renderGallery(e.target.dataset.type);
    }));
}
function renderGallery(type) {
    const data = type === 'all' ? leafDb : leafDb.filter(c => c.type === type);
    gallery.innerHTML = data.map(c => `
        <div class="crop-card group">
            <!-- 遇到图片加载失败时，显示一个深色背景占位 -->
            <img src="${c.img}" alt="${c.name}" class="crop-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="absolute inset-0 bg-[#1e293b] hidden flex-col items-center justify-center text-slate-500 text-xs">
                <i data-lucide="image-off" class="w-8 h-8 mb-2 opacity-50"></i>图片待放入
            </div>
            <div class="crop-overlay">
                <span class="text-[10px] font-bold px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded w-max mb-3 uppercase tracking-widest">${c.stage}</span>
                <h3 class="text-xl font-black text-white mb-4">${c.name}</h3>
                <div class="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="text-xs text-slate-300 font-bold">${c.type}类病害</span>
                    <button onclick="window.markDisease('${c.name}')" class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors shadow-lg"><i data-lucide="alert-triangle" class="w-4 h-4 text-white"></i></button>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}
window.markDisease = (name) => {
    Store.addRecord(`标定病害样本: ${name}`, `从本地图谱中将 ${name} 加入比对记录，请注意近期田间防范。`);
    alert(`已将【${name}】标记入防管记录本！`);
};