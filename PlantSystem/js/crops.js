import { Store } from './store.js';
const leafDb = [
    { id: 'L1', name: '小麦锈病', type: '小麦', img: './images/wheat_rust.jpg' },
    { id: 'L2', name: '小麦赤霉病', type: '小麦', img: './images/wheat_fusarium_head_blight.jpg' },
    { id: 'L3', name: '小麦白粉病', type: '小麦', img: './images/wheat_powdery_mildew.jpg' },
    { id: 'L4', name: '小麦纹枯病', type: '小麦', img: './images/wheat_sharp_eyespot.jpg' },
    { id: 'L5', name: '水稻稻瘟病', type: '水稻', img: './images/rice_blast.jpg' },
    { id: 'L6', name: '水稻纹枯病', type: '水稻', img: './images/rice_sheath_blight.jpg' },
    { id: 'L7', name: '水稻白叶枯病', type: '水稻', img: './images/rice_bacterial_blight.jpg' },
    { id: 'L8', name: '玉米大斑病', type: '玉米', img: './images/corn_northern_blight.jpg' },
    { id: 'L9', name: '玉米南方锈病', type: '玉米', img: './images/corn_southern_rust.jpg' },
    { id: 'L10', name: '番茄晚疫病', type: '番茄', img: './images/tomato_late_blight.jpg' },
    { id: 'L11', name: '番茄早疫病', type: '番茄', img: './images/tomato_early_blight.jpg' },
    { id: 'L12', name: '葡萄霜霉病', type: '葡萄', img: './images/grape_downy_mildew.jpg' },
    { id: 'L13', name: '大豆锈病', type: '大豆', img: './images/soybean_rust.jpg' },
    { id: 'L14', name: '大豆白粉病', type: '大豆', img: './images/soybean_powdery_mildew.jpg' },
    { id: 'L15', name: '大豆褐斑病', type: '大豆', img: './images/soybean_brown_spot.jpg' }
];
const gallery = document.getElementById('crop-gallery');
const filterBtns = document.querySelectorAll('.crop-filter-btn');
export function initCrops() {
    renderGallery('all');
    filterBtns.forEach(btn => btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => { b.classList.remove('bg-emerald-50', 'text-emerald-700', 'border-emerald-200'); b.classList.add('bg-white', 'text-gray-700'); });
        e.target.classList.remove('bg-white', 'text-gray-700');
        e.target.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-200');
        renderGallery(e.target.dataset.type);
    }));
}
function renderGallery(type) {
    const data = type === 'all' ? leafDb : leafDb.filter(c => c.type === type);
    gallery.innerHTML = data.map(c => `
        <div class="crop-card group w-[92%] mx-auto" style="aspect-ratio: 1 / 1;">
            <img src="${c.img}" alt="${c.name}" class="crop-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="absolute inset-0 bg-gray-100 hidden flex-col items-center justify-center text-gray-400 text-xs font-bold border border-gray-200 rounded-xl">
                <i data-lucide="image-off" class="w-8 h-8 mb-2 opacity-30"></i>本地图片待放入
            </div>
            <div class="crop-overlay">
                <h3 class="text-xl font-black text-white mb-2 drop-shadow-md">${c.name}</h3>
                <div class="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span class="text-xs text-gray-200 font-medium">${c.type}病害</span>
                    <button onclick="window.markDisease('${c.name}')" class="px-2.5 py-1.5 bg-emerald-500 rounded flex items-center justify-center hover:bg-emerald-400 transition-colors shadow-lg text-white text-[11px] font-bold gap-1"><i data-lucide="plus" class="w-3 h-3"></i>加入农事防管记录</button>
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