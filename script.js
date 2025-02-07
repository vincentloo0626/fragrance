// script.js
const oils = [
    { name: "乳香", effects: ["淡疤", "修复肌肤", "抗衰老"] },
    { name: "檀香", effects: ["改善老化", "抗衰老"] },
    { name: "永久花", effects: ["修复疤痕", "促新生", "改善黑眼圈"] },
    { name: "德国洋甘菊", effects: ["抗菌抗炎", "改善粗糙", "修复肌肤", "抗过敏"] },
    { name: "罗马洋甘菊", effects: ["温和舒敏", "修复泛红干痒"] },
    { name: "胡萝卜籽", effects: ["改善干燥", "修复受损"] },
    { name: "真实薰衣草", effects: ["抗菌消炎", "修复肌肤"] },
    { name: "甜橙", effects: ["保湿美白", "平衡ph值", "促胶原", "改善皱纹"] },
    { name: "玫瑰天竺葵", effects: ["平滑肌肤", "平衡油脂", "亮肤抗衰", "滋润保湿"] },
    { name: "欧薄荷", effects: ["舒缓抗菌", "收缩毛孔", "改善黑头粉刺"] },
    { name: "橙花", effects: ["增加皮肤弹性", "亮肤抗衰", "抗皱淡纹"] },
    { name: "玫瑰", effects: ["增强肌肤免疫", "柔肤保湿", "抗老化"] },
    { name: "茉莉", effects: ["增加皮肤弹性", "柔润保湿", "延缓皮肤衰老", "缓解敏感", "淡化疤痕"] },
    { name: "莳萝", effects: ["收敛皮肤", "促进伤口愈合"] },
    { name: "肉桂", effects: ["温和收敛", "紧致抗衰"] },
    { name: "甜茴香", effects: ["抗老化", "平衡油脂", "抗炎保湿"] },
    { name: "丁香", effects: ["平滑肌肤", "抗炎消肿"] },
    { name: "没药", effects: ["杀菌消炎", "抗皱抗衰", "滋润皮肤"] },
    { name: "安息香", effects: ["保湿弹润", "有助于伤口恢复", "抗红抗痒"] },
    { name: "花梨木", effects: ["抗皱抗衰", "促进细胞再生", "润泽肌肤", "改善过敏"] },
    { name: "苦橙叶", effects: ["平衡油脂分泌", "抑菌抗菌", "改善肤色"] },
    { name: "桃金娘", effects: ["净化肌肤", "收缩毛孔"] },
    { name: "杜松子", effects: ["消炎杀菌", "收敛毛孔平衡油脂分泌"] },
    { name: "雪松", effects: ["收敛抗菌", "平衡油脂"] },
    { name: "丝柏", effects: ["改善粗大毛孔", "控油补水", "增加肌肤弹性"] },
    { name: "马郁兰", effects: ["美白淡斑", "收缩毛孔", "控油"] },
    { name: "岩兰草", effects: ["杀菌消炎", "控油抚纹", "促进细胞再生"] },
    { name: "牛膝草", effects: ["淡化皱纹", "延缓肌肤衰老", "消炎杀菌"] },
    { name: "香蜂草", effects: ["抗过敏", "润泽肌肤"] },
    { name: "玫瑰草", effects: ["促进细胞再生", "抗皱抚纹", "柔润保湿"] },
    { name: "马鞭草", effects: ["柔润皮肤", "消除水肿"] },
    { name: "迷迭香", effects: ["紧致抗皱", "消退浮肿", "抗氧化", "收敛毛孔"] },
    { name: "快乐鼠尾草", effects: ["抗炎控油", "收缩毛孔"] },
    { name: "罗勒", effects: ["清洁皮脂", "预防粉刺", "紧致抗老", "滋养皮肤"] },
    { name: "柠檬草", effects: ["平衡油脂", "抗菌抑菌", "改善毛孔粗大"] },
    { name: "红柑", effects: ["润泽亮肤", "抗皱抚纹"] },
    { name: "橘", effects: ["抗皱抚纹", "提亮肤色"] },
    { name: "柠檬", effects: ["改善肤色", "平衡油脂分泌", "杀菌抑菌", "收敛毛孔", "软化角质"] },
    { name: "佛手柑", effects: ["消炎抗菌", "平衡油脂"] },
    { name: "绿花白干层", effects: ["促进伤口愈合", "平衡油脂分泌"] },
    { name: "西洋蓍草", effects: ["平衡油脂", "修复损伤", "消炎", "刺激毛发生长"] },
    { name: "白玉兰", effects: ["抗衰抗皱", "修复受损", "淡斑亮肤", "净化收敛毛孔"] },
    { name: "海茴香", effects: ["舒缓保湿", "修复受损", "抗氧化"] },
    { name: "蓝艾菊", effects: ["舒缓保湿", "抗炎抗敏"] },
    { name: "茶树", effects: ["杀菌抗炎", "调理头皮", "抗氧控油"] },
    { name: "岩玫瑰", effects: ["止血促愈合", "抗菌抗感染", "抗皱紧致"] },
    { name: "依兰", effects: ["平衡油脂分泌", "舒缓敏感", "抗炎抗菌", "护发极佳"] },
    { name: "广藿香", effects: ["平衡油脂", "收敛毛孔", "舒缓抗炎"] },
    { name: "桂花", effects: ["保湿美白", "抗菌抗炎", "抗皱抗衰", "促进细胞再生", "舒敏修复"] }
];

function displayOils() {
    const oilList = document.getElementById('oil-list');
    oilList.innerHTML = oils.map(oil => `<li>${oil.name}: ${oil.effects.join(', ')}</li>`).join('');
}

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const results = oils.filter(oil => oil.effects.some(effect => effect.toLowerCase().includes(query)));
    const resultsList = document.getElementById('results');
    resultsList.innerHTML = results.map(oil => `<li>${oil.name}: ${oil.effects.join(', ')}</li>`).join('');
});

document.getElementById('toggle-list').addEventListener('click', function() {
    const oilSection = document.getElementById('oils');
    if (oilSection.style.display === 'none') {
        oilSection.style.display = 'block';
        this.textContent = '隐藏精油列表';
    } else {
        oilSection.style.display = 'none';
        this.textContent = '显示精油列表';
    }
});

displayOils();
