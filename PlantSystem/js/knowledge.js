import { Store } from './store.js';
const db = [
    { id:'k1', crop:'小麦', name:'条锈病 (Wheat Stripe Rust)', type:'真菌', symptom:'由条形柄锈菌小麦专化型引起。主要危害叶片，夏孢子堆呈鲜黄色至橙黄色，狭长形，与叶脉平行排列成条状。后期形成黑色线状冬孢子堆。严重时导致叶片早枯，破坏光合作用，造成严重减产。', plan:'农业防治：种植抗病品种，适期晚播，清除自生麦苗。化学防治：严格执行“发现一点，防治一片”策略，病叶率达5%时立即喷施三唑酮、戊唑醇、氟环唑或嘧菌酯进行大面积统防统治。' },
    { id:'k2', crop:'小麦', name:'赤霉病 (Wheat Fusarium Head Blight)', type:'真菌', symptom:'由禾谷镰孢菌引起。穗腐初期在小穗颖壳上现水渍状褐斑，逐渐蔓延至全穗。高湿条件下病穗颖壳交接处产生粉红色胶状霉层。严重导致籽粒干瘪，且病麦含有呕吐毒素(DON)，人畜食用会导致中毒。', plan:'坚持“立足预防，适期用药”。在小麦抽穗至扬花初期（见花打药），如遇连阴雨或大雾天气，必须喷施氰烯菌酯、咪鲜胺、丙硫菌唑或戊唑醇，视天气情况隔5-7天再喷一次。' },
    { id:'k3', crop:'小麦', name:'白粉病 (Wheat Powdery Mildew)', type:'真菌', symptom:'由禾本科布氏白粉菌引起。初期叶片表面产生白色絮状霉层，后期霉层变灰褐色，其上散生黑色针头状小颗粒（闭囊壳）。病叶发黄早枯，茎秆受害易引起倒伏。', plan:'合理密植，控制氮肥用量，增施磷钾肥。发病初期（病叶率达10%时）选用三唑酮、戊唑醇、醚菌酯或氟环唑进行喷雾防治，可与锈病合并防治。' },
    { id:'k4', crop:'小麦', name:'纹枯病 (Wheat Sharp Eyespot)', type:'真菌', symptom:'由禾谷丝核菌引起。主要发生在叶鞘和茎秆基部，初现云纹状（梭形）水渍状病斑，中央灰白边缘浅褐。严重时菌丝侵入茎秆内部，导致茎秆枯死，形成“枯白穗”。', plan:'播种前必须使用咯菌腈或戊唑醇进行种子包衣/拌种。小麦返青拔节期，病株率达10%时，对准茎基部喷施井冈霉素、噻呋酰胺或苯甲·丙环唑。' },
    { id:'k5', crop:'水稻', name:'稻瘟病 (Rice Blast)', type:'真菌', symptom:'由稻瘟病菌引起。叶瘟呈梭形病斑，边缘红褐色，中央灰白色，潮湿时病斑背面生灰绿色霉层；穗颈瘟侵染穗颈变褐枯死，造成白穗；节瘟导致茎节变黑易折断。是水稻第一大毁灭性病害。', plan:'采用抗病品种，播种前使用咪鲜胺浸种消毒。发病初期或破口抽穗期，重点喷施三环唑（保护性极强）、稻瘟灵、春雷霉素或吡唑醚菌酯。必须科学管控氮肥，增施硅钾肥。' },
    { id:'k6', crop:'水稻', name:'纹枯病 (Rice Sheath Blight)', type:'真菌', symptom:'由立枯丝核菌引起。主要危害叶鞘和叶片。初生椭圆形暗绿色水渍状病斑，后扩大成云纹状大斑，边缘暗褐色，中央灰绿色。高湿时病斑表面产生蛛丝状菌丝体及褐色的萝卜籽状菌核，易导致水稻倒伏。', plan:'农业防治：打捞菌核，实行浅水勤灌，适时晒田，防止群体过密。药剂防治：在水稻分蘖盛期至拔节期，重点对茎基部喷施井冈霉素、噻呋酰胺、苯甲·丙环唑或己唑醇。' },
    { id:'k7', crop:'水稻', name:'白叶枯病 (Rice Bacterial Blight)', type:'细菌', symptom:'由水稻白叶枯病菌引起。病斑多从叶尖或叶缘开始，初为暗绿色水浸状线斑，后沿叶脉向下扩展为黄白色枯斑，病健交界处呈波纹状。潮湿时病部渗出蜜黄色珠状菌脓。', plan:'严禁使用带菌种子，培育无病壮秧，严防田间串灌漫灌。发病初期立即喷施噻唑锌、叶枯唑、中生菌素或氯溴异氰尿酸，大风暴雨后必须补防。' },
    { id:'k8', crop:'水稻', name:'稻曲病 (Rice False Smut)', type:'真菌', symptom:'由稻绿核菌引起。仅在穗部发病，受害谷粒颖壳微张，露出淡黄色块状物（孢子座），逐渐膨大包裹整个谷粒，后转为墨绿色或龟裂，表面平滑，内部为菌丝体。', plan:'防重于治，错过破口期用药则无效。必须在水稻破口抽穗前5-7天，选用戊唑醇、井冈霉素、苯甲·丙环唑或氟环唑喷雾预防，如遇阴雨天气，齐穗期需再防一次。' },
    { id:'k9', crop:'玉米', name:'大斑病 (Corn Northern Leaf Blight)', type:'真菌', symptom:'由大斑凸脐蠕孢菌引起。主要危害叶片，初为水渍状青灰色小斑，后沿叶脉扩展为大型梭状或长条形病斑，中央灰褐色，边缘暗褐色。高湿时病斑正反两面均产生黑色绒状霉层，致使叶片枯死。', plan:'选用高抗或耐病品种。化学防治：在玉米抽雄前后，病情指数达到10%时，喷施代森锰锌、百菌清、苯醚甲环唑或吡唑醚菌酯，重点保护穗位叶及以上叶片。' },
    { id:'k10', crop:'玉米', name:'小斑病 (Corn Southern Leaf Blight)', type:'真菌', symptom:'由玉蜀黍平脐蠕孢引起。病斑比大斑病小，常呈椭圆形或纺锤形，边缘紫红色或深褐色，中央灰褐色。病斑数量多且密集，严重时病斑连片融合，导致叶片枯黄干死。', plan:'清洁田园，秸秆深翻或粉碎还田。发病初期，可选用代森锰锌、多菌灵、吡唑醚菌酯或戊唑醇进行喷雾，每隔7-10天喷1次，连喷2-3次。' },
    { id:'k11', crop:'玉米', name:'南方锈病 (Corn Southern Rust)', type:'真菌', symptom:'由多堆柄锈菌引起。爆发性极强，主要发生在高温高湿季节。叶片正反两面密布生出橘黄色至红褐色的小突起（夏孢子堆），破裂后散出大量铁锈色粉末，造成全株迅速枯黄。', plan:'密切关注气象预警，在台风或连阴雨过后及时巡查。发病初期立即全田喷施三唑酮、戊唑醇、苯醚甲环唑或丙环唑，抑制夏孢子萌发和侵染。' },
    { id:'k12', crop:'番茄', name:'晚疫病 (Tomato Late Blight)', type:'卵菌', symptom:'属卵菌侵染病害。叶片发病多从边缘起，初为暗绿色不规则水渍斑，后转褐；高湿时病健交界处背面生白色霉层。茎部发病呈黑褐色水腐状，易折断。果实受害形成不规则褐斑并呈云纹状硬腐。', plan:'生态调控：加强棚室通风透光，控制相对湿度在80%以下。药剂防治：发现中心病株立即清除，并选用精甲霜灵·锰锌、霜脲·锰锌、氟吡菌胺等内吸性药剂交替喷雾。' },
    { id:'k13', crop:'番茄', name:'早疫病 (Tomato Early Blight)', type:'真菌', symptom:'由茄链格孢菌引起。叶片病斑呈深褐色近圆形，具有明显的同心轮纹，外围常有黄色晕圈。通常从下部老叶开始发病，逐渐向上蔓延。严重时叶片枯黄脱落。', plan:'加强大棚通风，降低湿度。发病初期交替喷施百菌清、代森锰锌、苯醚甲环唑或异菌脲，重点喷洒植株中下部叶片。' },
    { id:'k14', crop:'黄瓜', name:'霜霉病 (Cucumber Downy Mildew)', type:'卵菌', symptom:'由古巴假霜霉菌引起。病斑受叶脉限制呈多角形，初为水渍状褪绿斑，后变黄褐色；潮湿时叶片背面产生紫黑色或灰黑色霉层。被称为“跑马干”，蔓延速度极快。', plan:'加强大棚控温控湿，可采用高温闷棚法杀菌。发病前喷百菌清保护；发病初期立即喷施霜脲·锰锌、烯酰吗啉、氟吡菌胺或甲霜灵，需正反两面均匀喷透。' },
    { id:'k15', crop:'葡萄', name:'霜霉病 (Grape Downy Mildew)', type:'卵菌', symptom:'由葡萄生单轴霉引起。叶片正面现淡黄色至黄绿色不规则水渍状病斑，边缘不明显；背面对应部位产生密集的白色霜样霉层。病叶极易干枯早落。新梢受害呈半透明水渍状，后变褐畸形。', plan:'预防为主：雨季到来前或初发期使用波尔多液、代森锰锌等保护性杀菌剂。治疗控制：发病后立即喷施烯酰吗啉、甲霜灵·锰锌、霜脲·锰锌或氟吗啉，喷药需细致覆盖叶背。' },
    { id:'k16', crop:'苹果', name:'轮纹病 (Apple Ring Rot)', type:'真菌', symptom:'由葡萄座腔菌引起。枝干发病以皮孔为中心形成红褐色至暗褐色疣状突起（粗皮病）。果实受害以皮孔为中心生水渍状浅褐色圆斑，迅速扩大呈同心轮纹状，病部软腐，渗茶褐色粘液，发酸臭味。', plan:'休眠期刮除枝干粗皮病斑并涂抹腐必清或石硫合剂。生长期实行套袋保护。谢花后10天至套袋前是防病关键期，需定期喷施代森锰锌、多菌灵、戊唑醇或吡唑醚菌酯。' },
    { id:'k17', crop:'大豆', name:'锈病 (Soybean Rust)', type:'真菌', symptom:'由豆薯层锈菌引起。主要危害叶片，初期叶面现褪绿小斑点，后背面突起形成多角形黄褐色夏孢子堆，表皮破裂后散出大量粉状孢子。发病重时叶片迅速发黄枯死，提前脱落，籽粒干瘪。', plan:'合理密植，开沟排水，降低田间湿度。在发病初期（或开花结荚期发现中心病株时），立即喷施三唑酮、戊唑醇、苯醚甲环唑或嘧菌酯，隔7-10天再喷一次。' }
];
const grid = document.getElementById('knowledge-grid');
const searchInput = document.getElementById('search-input');
const filterTagsContainer = document.getElementById('filter-tags');
const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body');
export function initKnowledge() {
    const crops = ['all', ...new Set(db.map(item => item.crop))];
    filterTagsContainer.innerHTML = crops.map(crop => {
        if(crop === 'all') return `<button data-filter="all" class="filter-btn active-filter px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-sm transition-colors">全部</button>`;
        return `<button data-filter="${crop}" class="filter-btn px-5 py-2.5 rounded-xl text-sm font-bold bg-white text-slate-700 border border-slate-300 hover:text-emerald-700 hover:bg-slate-50 shadow-sm transition-colors">${crop}</button>`;
    }).join('');
    renderCards(db);
    searchInput.addEventListener('input', applyFilters);
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => { b.classList.remove('active-filter', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-300'); b.classList.add('bg-white', 'text-slate-700', 'border-slate-300'); });
        e.target.classList.remove('bg-white', 'text-slate-700', 'border-slate-300');
        e.target.classList.add('active-filter', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-300');
        applyFilters();
    }));
    document.getElementById('modal-overlay').addEventListener('click', closeModal);
    document.getElementById('close-modal').addEventListener('click', closeModal);
}
function applyFilters() {
    const kw = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.active-filter').dataset.filter;
    const res = db.filter(i => (i.name.includes(kw) || i.crop.includes(kw) || i.symptom.includes(kw)) && (activeFilter === 'all' || i.crop === activeFilter));
    renderCards(res);
}
function renderCards(data) {
    grid.innerHTML = data.length ? data.map(item => `<div class="main-card p-6 cursor-pointer bg-white border border-slate-300 shadow-sm transition-colors hover:border-emerald-400" onclick="window.openDetail('${item.id}')"><div class="flex justify-between items-start mb-4"><span class="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded text-slate-700 border border-slate-200">${item.crop}</span><span class="text-[10px] font-bold px-2 py-1 bg-red-50 text-red-700 rounded border border-red-200">${item.type}</span></div><h3 class="text-xl font-black text-slate-900 mb-2 leading-snug">${item.name}</h3><p class="text-sm text-slate-700 line-clamp-2 font-medium">${item.symptom}</p></div>`).join('') : '<div class="col-span-3 text-center py-20 text-slate-500 font-bold text-lg">暂无对应的病害词条记录</div>';
}
window.openDetail = (id) => {
    const item = db.find(i => i.id === id);
    modalBody.innerHTML = `<div class="flex items-center gap-4 mb-8"><span class="px-3 py-1 bg-emerald-50 text-emerald-800 font-bold text-sm rounded border border-emerald-300">${item.crop}</span><h2 class="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">${item.name}</h2></div><div class="space-y-6"><div class="bg-slate-50 p-6 rounded-2xl border border-slate-300"><h4 class="text-[11px] text-emerald-700 font-bold uppercase tracking-widest mb-3">详细病理表征 (Symptoms)</h4><p class="text-base text-slate-800 font-medium leading-relaxed">${item.symptom}</p></div><div class="bg-slate-50 p-6 rounded-2xl border border-slate-300"><h4 class="text-[11px] text-emerald-700 font-bold uppercase tracking-widest mb-3">权威防治方案 (Treatments)</h4><p class="text-base text-slate-800 font-medium leading-relaxed">${item.plan}</p></div></div><div class="mt-8 flex justify-end"><button onclick="window.addToPlan('${item.name}')" class="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 transition-colors text-white font-bold rounded-xl flex items-center gap-2 shadow-sm"><i data-lucide="plus" class="w-4 h-4"></i>加入农事防管记录</button></div>`;
    lucide.createIcons();
    modal.classList.remove('hidden');
};
window.addToPlan = (name) => { Store.addRecord(`执行防治计划`, `已查阅并采纳 [${name}] 的专家防治意见，转入待办。`); closeModal(); alert(`已成功提取防治方案并加入本地日程！`); };
function closeModal() { modal.classList.add('hidden'); } 