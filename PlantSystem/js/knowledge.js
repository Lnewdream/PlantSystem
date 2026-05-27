import { Store } from './store.js';
const db = [
    { id:'k1', crop:'水稻', name:'稻瘟病', type:'真菌', symptom:'叶部病斑呈梭形，中心灰白边缘红褐。潮湿时叶背产生灰绿色霉层。严重时造成穗颈枯死（穗颈瘟）。', plan:'发病初期使用三环唑、稻瘟灵或肟菌·戊唑醇喷雾。必须控制氮肥用量，增施硅钾肥。' },
    { id:'k2', crop:'水稻', name:'纹枯病', type:'真菌', symptom:'主要危害叶鞘，初生椭圆形暗绿色水渍状病斑，后扩大成云纹状。湿度大时病斑上可见蛛丝状菌丝体，严重导致倒伏。', plan:'避免偏施氮肥，浅水勤灌以降低田间湿度。发病初期选用井冈霉素、苯甲·丙环唑或噻呋酰胺进行茎基部喷雾。' },
    { id:'k3', crop:'番茄', name:'早疫病', type:'真菌', symptom:'叶片出现深褐色近圆形病斑，具明显的同心轮纹，外围常有黄色晕圈。通常从下部老叶开始发病，逐渐向上蔓延。', plan:'加强棚室通风透光，降低环境湿度。发病前或初期交替喷施百菌清、代森锰锌或苯醚甲环唑。' },
    { id:'k4', crop:'番茄', name:'病毒病', type:'病毒', symptom:'叶片出现黄绿相间的花叶、皱缩、蕨叶畸形，植株明显矮化，果实常出现坏死斑或呈“花脸”状。', plan:'防病必先防虫，悬挂黄板并使用吡虫啉消灭蚜虫、白粉虱等传毒媒介。初期可喷施氨基寡糖素或盐酸吗啉胍以抑制病毒增殖。' }
];
const grid = document.getElementById('knowledge-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body');
export function initKnowledge() {
    renderCards(db);
    searchInput.addEventListener('input', applyFilters);
    filterBtns.forEach(btn => btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active-filter', 'text-green-500', 'bg-green-500/10'));
        filterBtns.forEach(b => b.classList.add('text-slate-400'));
        e.target.classList.add('active-filter', 'text-green-500', 'bg-green-500/10');
        e.target.classList.remove('text-slate-400');
        applyFilters();
    }));
    document.getElementById('modal-overlay').addEventListener('click', closeModal);
    document.getElementById('close-modal').addEventListener('click', closeModal);
}
function applyFilters() {
    const kw = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.active-filter').dataset.filter;
    const res = db.filter(item => {
        const matchKw = item.name.includes(kw) || item.crop.includes(kw) || item.symptom.includes(kw);
        const matchCrop = activeFilter === 'all' || item.crop === activeFilter;
        return matchKw && matchCrop;
    });
    renderCards(res);
}
function renderCards(data) {
    grid.innerHTML = data.length ? data.map(item => `
        <div class="main-card p-6 card-hover cursor-pointer transition-all" onclick="window.openDetail('${item.id}')">
            <div class="flex justify-between items-start mb-4">
                <span class="text-[10px] font-bold px-2 py-1 bg-white/5 rounded text-slate-400">${item.crop}</span>
                <span class="text-[10px] font-bold px-2 py-1 bg-red-500/10 text-red-400 rounded border border-red-500/20">${item.type}</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-2">${item.name}</h3>
            <p class="text-sm text-slate-400 line-clamp-2">${item.symptom}</p>
        </div>
    `).join('') : '<div class="col-span-3 text-center py-20 text-slate-500">未检索到相关知识记录</div>';
}
window.openDetail = (id) => {
    const item = db.find(i => i.id === id);
    modalBody.innerHTML = `
        <div class="flex items-center gap-4 mb-8"><span class="px-3 py-1 bg-green-500/20 text-green-400 font-bold text-sm rounded">${item.crop}</span><h2 class="text-4xl font-black">${item.name}</h2></div>
        <div class="space-y-6">
            <div class="bg-white/5 p-5 rounded-2xl border border-white/5"><h4 class="text-[10px] text-green-500 font-bold uppercase tracking-widest mb-2">典型表征</h4><p class="text-sm text-slate-300 leading-relaxed">${item.symptom}</p></div>
            <div class="bg-white/5 p-5 rounded-2xl border border-white/5"><h4 class="text-[10px] text-green-500 font-bold uppercase tracking-widest mb-2">防治方案</h4><p class="text-sm text-slate-300 leading-relaxed">${item.plan}</p></div>
        </div>
        <div class="mt-8 flex justify-end"><button onclick="window.addToPlan('${item.name}')" class="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl flex items-center gap-2"><i data-lucide="plus" class="w-4 h-4"></i>加入防管记录</button></div>
    `;
    lucide.createIcons();
    modal.classList.remove('hidden');
};
window.addToPlan = (name) => {
    Store.addRecord(`防管计划创建`, `已将 [${name}] 的防治方案加入执行计划，需密切关注田间发病动态。`);
    closeModal();
    alert(`成功加入农事记录！`);
};
function closeModal() { modal.classList.add('hidden'); }