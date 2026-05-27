import { Store } from './store.js';
const papersDb = [
    { id: 'p1', year: '2011', title: '番茄病害胁迫声发射信号采集与声源定位', author: '王秀清，等', journal: '《农业机械学报》', abstract: '以番茄为研究对象,利用声发射检测系统对番茄植株的声发射信号进行连续采集,利用上位机软件对采集到的数据进行处理和分析。对番茄的晚疫病病害胁迫声发射信号随病害程度变化进行了统计分析,得出染病植株的声发射现象并不像健康植株那样按照一定的生理周期规律发生,在染病早期作物声发射信号的频次大大增加并且随着病害严重程度而逐渐降低,并出现多峰现象。利用声发射信号到达两路传感器的时差和采集到的两路声发射信号频谱分布变化可以进行声发射源定位判断。' },
    { id: 'p2', year: '2023', title: '基于深度学习的番茄叶片病害分类识别研究', author: '马丽，等', journal: '《中国农机化学报》', abstract: '对番茄病害进行及早的诊断与治疗有助于提升番茄的产量，将人工智能与农业生产相结合可以对番茄病害进行快速地无损伤检测。基于此提出一种基于深度学习的番茄叶片病害分类识别研究方法，选取番茄叶片的5类常见病害进行试验，以MobileNetV3为基础模型进行改进，分析不同学习方式、激活函数及优化算法对该模型准确性的影响。并将该模型与MobileNetV3、VGG16、ResNet50和InceptionV3作对比，同时采用十折交叉验证对模型的鲁棒性进行评估。研究表明，该模型分类性能良好，对常见的番茄叶片病害图像的平均识别准确率可达97.29%,无论模型大小、运行时间还是分类精度上都优于其他几个模型，为番茄叶片常见病害识别提供一定的可参考性。' },
    { id: 'p3', year: '2021', title: '近年我国水稻五大产区主要病害发生情况分析', author: '亓璐，等', journal: '《中国植保导刊》', abstract: '为系统全面地掌握我国水稻病害的发生形势,为我国水稻病害分区域治理提供科学依据,本文以2010—2020年《全国植保专业统计资料》为主要依据,重点分析了我国水稻纹枯病、稻瘟病、病毒病、稻曲病、白叶枯病和恶苗病的发生及防控情况,并对水稻五大产区间病害发生情况进行了比较研究。结果表明,水稻纹枯病、稻瘟病和稻曲病是我国水稻的三大病害,广泛发生于我国水稻主产区。我国水稻五大产区病害发生为害情况不同,华中稻区和华南稻区以水稻纹枯病为害最重,造成产量损失占病害造成总损失的比例高达73.13%和69.26%,西南稻区水稻纹枯病和稻瘟病造成的产量损失接近,东北稻区稻瘟病造成的产量损失高于水稻纹枯病,华北稻区稻瘟病造成的产量损失低于水稻纹枯病。我国水稻三大病害不同年份间的防控产量损失挽回率维持在较高水平,且相对稳定,而水稻病毒病、白叶枯病和恶苗病的产量损失挽回率在不同年份间展现出一定波动。其中,水稻白叶枯病是挽回损失率最低的病害。' },
    { id: 'p4', year: '2024', title: '基于改进YOLOv8的轻量化小麦病害检测方法', author: '马超伟，等', journal: '《农业工程学报》', abstract: '为提高小麦病害检测精度，实现将模型方便快速部署到移动端，该研究提出了一种基于改进YOLOv8的轻量化小麦病害检测方法。首先，使用PP-LCNet模型替换YOLOv8网络结构的骨干网络，并在骨干网络层引入深度可分离卷积（depthwise separable convolution, DepthSepConv）结构，减少模型参数量，提升模型检测性能；其次，在颈部网络部分添加全局注意力机制（global attention mechanism, GAM）模块，强化特征中语义信息和位置信息，提高模型特征融合能力；然后，引入轻量级通用上采样内容感知重组（content-aware reassembly of features,CARAFE）模块，提高模型对重要特征的提取能力；最后，使用Wise-IoU(weighted interpolation of sequential evidence for intersection over union)边界损失函数代替原损失函数，提升网络边界框回归性能和对小目标病害的检测效果。试验结果表明，对于大田环境下所采集的小麦病害数据集，改进后模型的参数量及模型大小相比原YOLOv8n基线模型分别降低了12.5%和11.3%，同时精确度（precision）及平均精度均值（mean average precision,m AP）相较于原模型分别提高了4.5和1.9个百分点，优于其他对比目标检测算法，可为小麦病害检测无人机等移动端检测装备的部署和应用提供参考。' },
    { id: 'p5', year: '2017', title: '小麦赤霉病发生危害形势及防控对策', author: '陈云，等', journal: '《植物保护》', abstract: '小麦赤霉病已成为当前制约我国小麦生产安全及麦类食品质量安全的最重要的病害之一。本文分析了当前我国小麦赤霉病发生及危害现状,解析了赤霉病频繁暴发危害的原因,综述了国内外小麦赤霉病防控研究进展。针对当前形势,提出"立足预防、分区施策、全程防控"的赤霉病防控对策建议。' },
    { id: 'p6', year: '2016', title: '小麦赤霉病抗性机理研究进展', author: '刘易科，等', journal: '《中国农业科学》', abstract: '赤霉病(Fusarium head blight,FHB)是小麦最主要的病害之一,严重影响小麦生产安全和食品安全,研究小麦赤霉病抗性机理对于解决小麦赤霉病这一世界性难题具有重要意义。根据对赤霉病的抗性表现形式,将小麦赤霉病抗性分为五个大类,分别为抗侵入(Type I)、抗扩展(Type II)、籽粒抗感染(Type III)、耐病性(TypeⅣ)和抗毒素积累(Type V)。小麦赤霉病的抗性机理可以分为形态机制和生理机制,形态抗性机制是被动的,株高、抽穗期、花期长短、花药挤出程度、有芒无芒、穗长、穗密度、颖壳张开程度和穗部蜡质程度等形态特征均可能与赤霉病抗侵染特性有关。细胞学研究表明,病原菌侵染后抗病品种可迅速从细胞结构和生理生化方面产生防卫反应,通过乳突、胞壁沉积物的形成以及木质素、硫堇、富含羟脯氨酸糖蛋白和水解酶类等的增长来协同抵御病菌在体内的扩展。在植物复杂的信号途径中,水杨酸(SA)、茉莉酸(JA)和乙烯(ET)3种信号途径在植物抵御病原菌入侵中的作用最为重要,SA和ET信号途径对小麦赤霉病抗性方面的作用目前还存在一定争议,而JA信号途径在小麦赤霉病抗性中积极作用已经被多数研究者所证实。迄今为止,人类定位了200个以上不同类型的抗赤霉病QTL位点,这些位点分布于所有的小麦染色体,其中的22个QTL位点被不同的作图群体所定位,包括2个定位在3BS和6BS染色体上稳定的抗扩展位点Fhb1和Fhb2,以及2个定位在4B和5A染色体上的抗侵染位点Fhb4和Fhb5。在受到病原菌侵染后,植物会产生一系列复杂的信号途径激活应答反应,诱导抗病相关基因的表达,进而引起蛋白以及代谢水平的变化,抵御病原菌的侵袭,研究表明,病程相关蛋白基因、抗菌肽基因、转录因子基因、脱毒相关蛋白基因以及其他赤霉病抗性相关基因均参与了小麦赤霉病抗性提高的过程。随着生物工程技术和生物信息技术的迅猛发展,将来可利用图位克隆技术分离抗赤霉病主效基因,并在全基因组关联分析和各种组学技术的基础上,从全基因组和基因调控网络水平上研究小麦赤霉病抗性机理,以期在更深层次上理解小麦赤霉病的抗性机理。' },
    { id: 'p7', year: '2024', title: '基于深度学习的玉米和番茄病虫害检测技术研究进展', author: '张友为，等', journal: '《江苏农业科学》', abstract: '近年来，病虫害严重影响了农作物的生长和产量，在当前人口剧增、粮食短缺的背景下，解决这一问题具有急迫性和重要性。因此，深度学习凭借学习能力强和高准确性等优势，逐渐成为农业病虫害检测技术的研究热点之一。深度学习结合多种技术可以更加高效地帮助农民检测病虫害，从而及时采取措施对农作物病虫害进行防治，提高农作物产量和质量。本文以玉米和番茄为研究对象，针对农作物病虫害检测技术对病虫害检测研究中常用的深度学习模型进行了概述，并分别对深度学习与传感器技术和遥感技术结合的病虫害检测系统和不同应用场景上深度学习结合不同技术对病虫害检测起到的应用效果进行阐述；同时总结了玉米和番茄的常见害虫种类、害虫体型特点和啃食特点。最后，讨论了深度学习技术在实际应用中存在的问题和未来深度学习技术的发展方向。深度学习与先进技术的结合将为农民和农作物专家提供有效的工具，帮助他们及时发现和应对病虫害问题，提高农作物的产量和质量。' },
    { id: 'p8', year: '2020', title: '基于迁移学习的卷积神经网络玉米病害图像识别', author: '许景辉，等', journal: '《农业机械学报》', abstract: '为实现小数据样本复杂田间背景下的玉米病害图像识别,提出了一种基于迁移学习的卷积神经网络玉米病害图像识别模型。在VGG-16模型的基础上,设计了全新的全连接层模块,并将VGG-16模型在Image Net图像数据集训练好的卷积层迁移到本模型中。将收集到的玉米病害图像数据集按3∶1的比例分为训练集与测试集。为扩充图像数据,对训练集原图进行了旋转、翻转等操作。基于扩充前后的训练集,对只训练模型的全连接层和训练模型的全部层(卷积层+全连接层)两种迁移学习方式进行了试验,结果表明,数据扩充和训练模型的全部层能够提高模型的识别能力。在训练模型全部层和训练集数据扩充的条件下,对玉米健康叶、大斑病叶、锈病叶图像的平均识别准确率为95. 33%。与全新学习相比,迁移学习能够明显提高模型的收敛速度与识别能力。将训练好的模型用Python开发为图形用户界面,可实现田间复杂背景下玉米大斑病与锈病图像的智能识别。' }
];
export function initPapers() {
    const list = document.getElementById('papers-list');
    // 论文
    list.innerHTML = papersDb.map(p => `
        <div class="main-card p-6 border-l-4 border-l-green-500 transition-all hover:bg-[#1e293b]">
            <div class="flex justify-between items-start mb-2"><h3 class="text-xl font-bold text-white">${p.title}</h3><span class="text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded">${p.year}</span></div>
            <div class="text-sm text-slate-400 mb-4 font-mono">${p.author} · ${p.journal}</div>
            <div class="flex gap-4">
                <button data-id="${p.id}" class="toggle-abstract text-xs font-bold text-slate-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded flex items-center gap-2 transition-all"><i data-lucide="chevron-down" class="w-3 h-3"></i>展开摘要</button>
                <button data-id="${p.id}" class="save-paper text-xs font-bold text-green-400 bg-green-500/10 hover:bg-green-500/20 px-4 py-2 rounded flex items-center gap-2 transition-all"><i data-lucide="bookmark" class="w-3 h-3"></i>收藏至记录本</button>
            </div>
            <div id="abstract-${p.id}" class="abstract-content mt-4 text-sm text-slate-400 leading-relaxed pl-4 border-l border-white/10 italic">核心结论：${p.abstract}</div>
        </div>
    `).join('');
    lucide.createIcons();
    // 展开
    document.querySelectorAll('.toggle-abstract').forEach(btn => btn.addEventListener('click', (e) => {
        const content = document.getElementById(`abstract-${e.currentTarget.dataset.id}`);
        const icon = e.currentTarget.querySelector('i');
        content.classList.toggle('expanded');
        if(content.classList.contains('expanded')) {
            e.currentTarget.innerHTML = `<i data-lucide="chevron-up" class="w-3 h-3"></i>收起摘要`;
            e.currentTarget.classList.add('bg-white/10');
        } else {
            e.currentTarget.innerHTML = `<i data-lucide="chevron-down" class="w-3 h-3"></i>展开摘要`;
            e.currentTarget.classList.remove('bg-white/10');
        }
        lucide.createIcons();
    }));
    // 收藏
    document.querySelectorAll('.save-paper').forEach(btn => btn.addEventListener('click', (e) => {
        const paper = papersDb.find(p => p.id === e.currentTarget.dataset.id);
        Store.addRecord(`文献收藏: ${paper.title}`, `来源: ${paper.journal}摘要: ${paper.abstract}`);
        alert('文献已成功保存至您的农事记录中！');
    }));
}