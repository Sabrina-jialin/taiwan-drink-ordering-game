const state = {
  page: 'home',
  showEnglish: false,
  showPinyin: false,
  selectedDrinkId: 'grapefruit',
  size: 'large',
  sugar: 'half',
  ice: 'less',
  topping: 'pearl'
};

const drinks = [
  {id:'ceylon', icon:'🍂', category:'原味茶系列', name:'錫蘭紅茶', en:'Ceylon Black Tea', py:'xí lán hóng chá', priceL:40, priceBottle:65, cup:['☕','🍂']},
  {id:'lightoolong', icon:'🍃', category:'原味茶系列', name:'青茶', en:'Light Oolong Tea', py:'qīng chá', priceL:40, priceBottle:65, cup:['🍵','🍃']},
  {id:'mountainoolong', icon:'🌿', category:'原味茶系列', name:'高山烏龍茶', en:'High Mountain Oolong Tea', py:'gāo shān wū lóng chá', priceL:45, priceBottle:70, cup:['🍵','🌿']},
  {id:'jinxuan', icon:'🌱', category:'原味茶系列', name:'高山金萱茶', en:'High Mountain Jin Xuan Tea', py:'gāo shān jīn xuān chá', priceL:45, priceBottle:70, cup:['🍵','🌱']},
  {id:'wintermelon', icon:'🧉', category:'原味茶系列', name:'冬瓜茶', en:'Winter Melon Tea', py:'dōng guā chá', priceL:45, priceBottle:70, cup:['🧋','🧉']},
  {id:'wintermelonlight', icon:'🧋', category:'原味茶系列', name:'冬瓜青', en:'Winter Melon Light Oolong Tea', py:'dōng guā qīng', priceL:50, priceBottle:75, cup:['🧋','🍃']},
  {id:'mango', icon:'🥭', category:'果粒茶系列', name:'芝芝芒果果粒', en:'Cheese Mango Fruit Tea', py:'zhī zhī máng guǒ guǒ lì', priceL:105, priceBottle:125, cup:['🥭']},
  {id:'grapefruit', icon:'🍊', category:'果粒茶系列', name:'葡萄柚果粒茶', en:'Grapefruit Fruit Tea', py:'pú táo yòu guǒ lì chá', priceL:95, priceBottle:115, cup:['🍊']},
  {id:'yangzhi', icon:'🥭', category:'鮮果茶飲', name:'楊枝甘露2.0', en:'Mango Pomelo Sago 2.0', py:'yáng zhī gān lù èr diǎn líng', priceL:95, priceBottle:115, cup:['🥭','🍊']},
  {id:'orange', icon:'🍊', category:'鮮果茶飲', name:'柳橙果粒茶', en:'Orange Fruit Tea', py:'liǔ chéng guǒ lì chá', priceL:90, priceBottle:110, cup:['🍊']},
  {id:'plum', icon:'🫒', category:'鮮果茶飲', name:'梅子綠茶', en:'Plum Green Tea', py:'méi zi lǜ chá', priceL:80, priceBottle:100, cup:['🫒']},
  {id:'latte', icon:'🧋', category:'奶茶系列', name:'波霸紅茶拿鐵', en:'Boba Black Tea Latte', py:'bō bà hóng chá ná tiě', priceL:75, priceBottle:95, cup:['🧋']}
];

const categories = ['原味茶系列','果粒茶系列','鮮果茶飲','奶茶系列'];
let activeCategory = '原味茶系列';

const phrases = [
  {zh:'我要一杯…', en:'I would like one cup of…', py:'wǒ yào yì bēi…'},
  {zh:'我想要大杯。', en:'I would like a large size.', py:'wǒ xiǎng yào dà bēi'},
  {zh:'請問可以推薦嗎？', en:'Could you recommend something?', py:'qǐng wèn kě yǐ tuī jiàn ma'},
  {zh:'半糖、少冰。', en:'Half sugar and less ice.', py:'bàn táng, shǎo bīng'},
  {zh:'我要加珍珠。', en:'I would like to add boba.', py:'wǒ yào jiā zhēn zhū'}
];

const dialogue = [
  {roleZh:'店員', roleEn:'Clerk', emoji:'👩🏻‍🍳', zh:'您好，請問要喝什麼？', en:'Hello. What would you like to drink?', py:'nín hǎo, qǐng wèn yào hē shén me'},
  {roleZh:'學生', roleEn:'Student', emoji:'👦🏻', zh:'我要一杯楊枝甘露2.0。', en:'I would like one Mango Pomelo Sago 2.0.', py:'wǒ yào yì bēi yáng zhī gān lù èr diǎn líng'},
  {roleZh:'店員', roleEn:'Clerk', emoji:'👩🏻‍🍳', zh:'要大杯還是中杯？', en:'Would you like a large or medium?', py:'yào dà bēi hái shì zhōng bēi'},
  {roleZh:'學生', roleEn:'Student', emoji:'👦🏻', zh:'大杯，微糖，去冰。', en:'Large, light sugar, no ice.', py:'dà bēi, wēi táng, qù bīng'},
  {roleZh:'店員', roleEn:'Clerk', emoji:'👩🏻‍🍳', zh:'好的，一共95元。', en:'Sure. That will be 95 dollars.', py:'hǎo de, yí gòng jiǔ shí wǔ yuán'}
];

const sugarCards = [
  {zh:'全糖', en:'Full sugar', py:'quán táng', icon:'🟪🟪🟪🟪'},
  {zh:'半糖', en:'Half sugar', py:'bàn táng', icon:'🟪🟪'},
  {zh:'微糖', en:'Light sugar', py:'wēi táng', icon:'🟪'},
  {zh:'無糖', en:'No sugar', py:'wú táng', icon:'🚫🟪'}
];

const iceCards = [
  {zh:'正常冰', en:'Regular ice', py:'zhèng cháng bīng', icon:'🧊🧊🧊🧊'},
  {zh:'少冰', en:'Less ice', py:'shǎo bīng', icon:'🧊🧊'},
  {zh:'微冰', en:'Light ice', py:'wēi bīng', icon:'🧊'},
  {zh:'去冰', en:'No ice', py:'qù bīng', icon:'🚫🧊'},
  {zh:'熱', en:'Hot', py:'rè', icon:'♨️'}
];

function getSelectedDrink(){
  return drinks.find(d => d.id === state.selectedDrinkId) || drinks[0];
}

function escapeText(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function speak(text){
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = /[\u4e00-\u9fff]/.test(text) ? 'zh-TW' : 'en-US';
  utterance.rate = /[\u4e00-\u9fff]/.test(text) ? 0.86 : 0.94;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function playDialogue(){
  dialogue.forEach((d, i) => setTimeout(() => speak(d.zh), i * 1600));
}

function py(text){ return `<span class="py-text">${escapeText(text)}</span>`; }
function en(text){ return `<span class="en-text">${escapeText(text)}</span>`; }

function labelSize(){ return state.size === 'large' ? '大杯' : '中杯'; }
function labelSugar(){ return {normal:'正常', less:'少糖', half:'半糖', light:'微糖', none:'無糖'}[state.sugar]; }
function labelIce(){ return {normal:'正常冰', less:'少冰', light:'微冰', none:'去冰', room:'常溫', hot:'熱飲'}[state.ice]; }
function labelTopping(){ return {pearl:'珍珠', coconut:'椰果', jelly:'寒天', none:'不加料'}[state.topping]; }

function updateToggles(){
  document.body.classList.toggle('hide-english', !state.showEnglish);
  document.body.classList.toggle('hide-pinyin', !state.showPinyin);
  document.getElementById('englishToggle').textContent = `英文：${state.showEnglish ? '開' : '關'}`;
  document.getElementById('pinyinToggle').textContent = `拼音：${state.showPinyin ? '開' : '關'}`;
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.page === state.page));
}

function toggleEnglish(){ state.showEnglish = !state.showEnglish; render(); }
function togglePinyin(){ state.showPinyin = !state.showPinyin; render(); }
function setPage(page){ state.page = page; render(); }
window.setPage = setPage;
window.toggleEnglish = toggleEnglish;
window.togglePinyin = togglePinyin;
window.selectDrink = function(id){ state.selectedDrinkId = id; render(); };
window.setOption = function(key, val){ state[key] = val; render(); };
window.setCategory = function(cat){ activeCategory = cat; const first = drinks.find(d => d.category === cat); if (first) state.selectedDrinkId = first.id; render(); };
window.speak = speak;
window.playDialogue = playDialogue;

function cupHTML(drink, size='normal'){
  const colors = {
    ceylon:['#f9ddb8','#d79657'], lightoolong:['#f3f6c9','#9ec86f'], mountainoolong:['#f6efbf','#c7a952'], jinxuan:['#f5f0c2','#c5b269'], wintermelon:['#f2deb6','#bb8747'], wintermelonlight:['#f5e6be','#b89557'], mango:['#f8e099','#f39a36'], grapefruit:['#f9d7cf','#e95d4d'], yangzhi:['#f7e0a1','#ef9f3d'], orange:['#f8ddb1','#ee9546'], plum:['#ebf4bc','#a6ca54'], latte:['#f3e6cf','#c79a65']
  };
  const [c1, c2] = colors[drink.id] || ['#f9d7cf','#e95d4d'];
  const largeClass = size === 'large' ? ' large' : '';
  const smallClass = size === 'small' ? ' small' : '';
  const pearls = ['latte','grapefruit','yangzhi'].includes(drink.id) ? '<div class="pearls">' + '<i></i>'.repeat(size === 'small' ? 8 : size === 'large' ? 14 : 10) + '</div>' : '';
  return `<div class="drink-cup${largeClass}${smallClass}" style="--c1:${c1};--c2:${c2}"><span class="fruit">${drink.icon}</span>${pearls}</div>`;
}

function homePage(){
  return `
  <div class="page">
    <section class="hero">
      <div class="hero-copy">
        <span class="pill">⭐ Taiwan Drink Culture Lab</span>
        <h2>學中文，從點一杯台灣手搖飲開始！</h2>
        ${py('xué zhōng wén, cóng diǎn yì bēi tái wān shǒu yáo yǐn kāi shǐ')}
        <p class="subtitle">模擬台灣飲料店點餐情境，聽、說、練一次到位！</p>
        <div class="hero-actions">
          <button class="btn" onclick="setPage('order')">🥤 開始模擬點餐 ›</button>
          <button class="btn secondary" onclick="speak('您好，請問要喝什麼？')">🔊 聽店員示範</button>
        </div>
      </div>
      <div class="hero-visual card">
        <div class="shelf"></div>
        <div class="shelf-items">🍓 🫙 🫙 🫙</div>
        <div class="pop-board"><strong>人氣推薦</strong>▸ 芝芝芒果果粒茶<br>▸ 葡萄柚綠茶<br>▸ 梅子綠茶<br>▸ 珍珠奶茶</div>
        <div class="plant">🪴</div>
        <div class="drink-line drink-stack">
          ${cupHTML(drinks.find(d => d.id==='mango'))}
          ${cupHTML(drinks.find(d => d.id==='grapefruit'))}
          ${cupHTML(drinks.find(d => d.id==='latte'))}
        </div>
        <div class="clerk-area">
          <div class="clerk-face">👩🏻‍🍳</div>
          <div class="wave-badge">您好！歡迎光臨</div>
        </div>
        <div class="counter"></div>
      </div>
    </section>

    <section class="section-grid-3">
      ${featureCard('🎧','聽力練習','聽店員與顧客對話','listen')}
      ${featureCard('🗣️','口說練習','跟著說：我要一杯…','speak')}
      ${featureCard('📋','文化小教室','認識甜度、冰塊、加料等台灣飲料文化','phrases')}
    </section>

    <section class="flow-grid">
      <div>
        <h2 style="font-size:46px;margin:0">點飲料流程</h2>
        ${py('diǎn yǐn liào liú chéng')}
        <p class="subtitle">跟著步驟完成點餐，體驗道地手搖飲文化！</p>
      </div>
      <div class="flow-steps">
        ${stepCard(1,'📋','選飲料','從菜單中選擇你想喝的飲料')}
        ${stepCard(2,'🥤','選大小','選擇杯子大小，大杯或中杯')}
        ${stepCard(3,'🧊','選甜度冰塊','調整甜度與冰塊')}
        ${stepCard(4,'🛍️','結帳取餐','結帳後取餐')}
      </div>
    </section>
  </div>`;
}

function featureCard(icon, title, desc, page){
  return `<button class="card feature-card" onclick="setPage('${page}')"><div class="feature-icon">${icon}</div><div><h3>${title}</h3><p>${desc}</p><div class="phrase-chip" style="margin-top:14px;display:inline-block">開始練習</div></div></button>`;
}
function stepCard(num, icon, title, desc){
  return `<div class="card step-card"><div class="num">${num}</div><div class="emoji">${icon}</div><h4>${title}</h4><p>${desc}</p></div>`;
}

function orderPage(){
  const filtered = drinks.filter(d => d.category === activeCategory);
  return `
  <div class="page layout-2">
    <section>
      <div class="page-head">
        <div>
          <h2>開始點餐</h2>
          ${py('kāi shǐ diǎn cān')}
          <p class="subtitle">選擇你想喝的飲料吧！</p>
        </div>
        <button class="audio-box" onclick="speak('請問想喝什麼？')">🔊 聽店員說：請問想喝什麼？ ▶</button>
      </div>
      <div class="category-tabs">
        ${categories.map(cat => `<button class="category-tab ${cat===activeCategory ? 'active' : ''}" onclick="setCategory('${cat}')">${cat}</button>`).join('')}
      </div>
      <div class="menu-board card">
        <div class="menu-header">
          <div>品項</div>
          <div class="center">L</div>
          <div class="center">瓶</div>
        </div>
        <div class="menu-section">
          <div class="menu-section-title">${activeCategory}</div>
          <div class="menu-list">
            ${filtered.map(menuRow).join('')}
          </div>
        </div>
      </div>
      ${phraseStrip()}
    </section>

    <aside class="sticky">
      ${clerkTip()}
      ${orderPanel()}
    </aside>
  </div>`;
}

function menuRow(drink){
  const active = drink.id === state.selectedDrinkId ? 'active' : '';
  return `
    <div class="menu-row ${active}" onclick="selectDrink('${drink.id}')">
      <div class="item-info">
        <div class="item-icon">${drink.icon}</div>
        <div class="item-text">
          <div class="item-main-line">
            ${en(drink.en)}
            <strong>${drink.name}</strong>
            ${py(drink.py)}
          </div>
        </div>
      </div>
      <div class="item-price">${drink.priceL}</div>
      <div class="item-price">${drink.priceBottle}</div>
    </div>`;
}

function clerkTip(){
  return `<div class="card clerk-tip"><div class="avatar">👩🏻‍🍳</div><div><h3>店員小提醒</h3><p class="subtitle" style="margin:0">選好飲料後，別忘了選擇甜度和冰塊喔！</p></div></div>`;
}

function optionChip(key, value, label){
  return `<button class="chip ${state[key]===value ? 'active' : ''}" onclick="setOption('${key}','${value}')">${label}</button>`;
}

function orderPanel(){
  const d = getSelectedDrink();
  return `<div class="card order-panel">
    <h3>我的點餐</h3>
    <div class="selected-item">
      ${cupHTML(d, 'small')}
      <div><strong>${d.name}</strong>${en(d.en)}${py(d.py)}<div class="price">$${d.priceL}</div></div>
    </div>
    <div class="option-block"><h5>選擇杯型</h5><div class="chips">${optionChip('size','large','大杯')}${optionChip('size','medium','中杯')}</div></div>
    <div class="option-block"><h5>選擇甜度</h5><div class="chips">${optionChip('sugar','normal','正常')}${optionChip('sugar','less','少糖')}${optionChip('sugar','half','半糖')}${optionChip('sugar','light','微糖')}${optionChip('sugar','none','無糖')}</div></div>
    <div class="option-block"><h5>選擇冰塊</h5><div class="chips">${optionChip('ice','normal','正常冰')}${optionChip('ice','less','少冰')}${optionChip('ice','light','微冰')}${optionChip('ice','none','去冰')}${optionChip('ice','room','常溫')}${optionChip('ice','hot','熱飲')}</div></div>
    <div class="option-actions">
      <button class="btn" onclick="setPage('custom')">下一步：客製化飲料 ›</button>
      <button class="btn ghost" onclick="selectDrink('grapefruit')">清空品項</button>
    </div>
  </div>`;
}

function phraseStrip(){
  return `<div class="card phrase-strip"><div class="phrase-strip-row"><strong>🔊 你可以這樣說</strong>${phrases.slice(0,3).map(p => `<button class="phrase-chip" onclick="speak('${p.zh}')">${p.zh}${py(p.py)}${en(p.en)}</button>`).join('')}</div></div>`;
}

function customPage(){
  const d = getSelectedDrink();
  return `<div class="page custom-layout">
    <section class="card custom-card">
      <h2>客製化你的飲料</h2>
      ${py('kè zhì huà nǐ de yǐn liào')}
      <p class="subtitle">選大小、甜度、冰塊與加料</p>
      <div class="custom-main">
        <div class="product-show">${cupHTML(d, 'large')}<h3>${d.name}</h3>${en(d.en)}${py(d.py)}<p class="subtitle">清爽果茶搭配果粒口感，酸甜解膩，人氣推薦！</p></div>
        <div>
          ${customSection(1, '杯型', [bigOption('size','medium','M','中杯'), bigOption('size','large','L','大杯')])}
          ${customSection(2, '甜度', [bigOption('sugar','normal','□','正常糖'), bigOption('sugar','less','□','少糖'), bigOption('sugar','half','□','半糖'), bigOption('sugar','light','□','微糖'), bigOption('sugar','none','□','無糖')])}
          ${customSection(3, '冰塊', [bigOption('ice','normal','🧊','正常冰'), bigOption('ice','less','🧊','少冰'), bigOption('ice','light','🧊','微冰'), bigOption('ice','none','🚫','去冰'), bigOption('ice','hot','♨️','熱飲')])}
          ${customSection(4, '加料', [bigOption('topping','pearl','🟤','珍珠'), bigOption('topping','coconut','◻️','椰果'), bigOption('topping','jelly','▫️','寒天'), bigOption('topping','none','🚫','不加料')])}
        </div>
      </div>
    </section>

    <aside class="side-stack">
      ${dialogueCard()}
      ${summaryCard()}
    </aside>
  </div>`;
}

function customSection(num, title, items){
  return `<div><div class="section-title"><div class="num">${num}</div><h4>${title}</h4></div><div class="big-options">${items.join('')}</div></div>`;
}

function bigOption(key, value, symbol, label){
  return `<button class="big-option ${state[key]===value ? 'active' : ''}" onclick="setOption('${key}','${value}')"><span class="symbol">${symbol}</span>${label}</button>`;
}

function dialogueCard(full = false){
  const lines = full ? dialogue : dialogue.slice(0,4);
  return `<div class="card dialogue-card"><div class="panel-title">對話練習</div><div class="dialogue-lines">${lines.map(line => {
      const student = line.roleZh === '學生';
      return `<div class="dialogue-line ${student ? 'student' : ''}"><div class="dialogue-avatar">${line.emoji}</div><button class="bubble ${student ? 'student' : 'clerk'}" onclick="speak('${escapeText(line.zh)}')"><strong>${line.roleZh}：</strong>${line.zh} 🔊${py(line.py)}${en(line.en)}</button></div>`;
    }).join('')}</div><div class="recorder"><div class="recorder-top"><div style="font-size:34px;color:#c44827">🎙️</div><div class="wave">${Array.from({length:24}).map((_,i)=>`<span style="height:${10 + (i * 7) % 22}px"></span>`).join('')}</div><div class="recorder-time">00:06 / 00:06</div></div><div style="margin-top:14px"><button class="btn" style="width:100%" onclick="speak('半糖，少冰，謝謝。')">錄音跟讀</button></div></div></div>`;
}

function summaryCard(){
  const d = getSelectedDrink();
  return `<div class="card summary-card"><div class="panel-title">目前訂單</div><div class="summary-row">${cupHTML(d, 'small')}<div class="summary-details"><p>☀️ ${d.name}${en(d.en)}${py(d.py)}</p><p>🥤 ${labelSize()}</p><p>□ ${labelSugar()}</p><p>🧊 ${labelIce()}</p><p>🟤 ${labelTopping()}</p></div></div><div class="total">共 <strong>${d.priceL}</strong> 元</div><button class="btn" style="width:100%" onclick="setPage('cart')">🛒 加入購物車</button><button class="btn ghost" style="width:100%;margin-top:10px" onclick="playDialogue()">🔊 重聽對話</button></div>`;
}

function speakPage(){
  return `<div class="page"><div style="margin-bottom:16px"><h2 style="font-size:54px;margin:0">情境口說練習</h2>${py('qíng jìng kǒu shuō liàn xí')}<p class="subtitle">跟著說，熟悉台灣飲料點餐流程</p></div><div class="custom-layout"><section class="card custom-card"><div class="panel-title">模擬點餐</div><div class="roleplay-layout"><div class="mini-scene"><div class="big-emoji">👩🏻‍🍳</div><strong>店員</strong></div><div>${dialogueCard(true)}</div><div class="mini-scene"><div class="big-emoji">👦🏻</div><strong>學生</strong></div></div><div class="speak-actions"><button class="btn ghost" onclick="playDialogue()">▶ 播放示範</button><button class="btn" onclick="speak('請跟著說。')">🎙️ 開始錄音</button></div></section><aside class="side-stack">${phrasesPanel()}${culturePanel()}</aside></div>${achievement()}</div>`;
}

function phrasesPanel(){
  return `<div class="card custom-card"><div class="panel-title">常用句型</div>${phrases.map(p => `<button class="phrase-chip" style="display:block;width:100%;text-align:left;margin-top:10px" onclick="speak('${p.zh}')">${p.zh} 🔊${py(p.py)}${en(p.en)}</button>`).join('')}</div>`;
}

function culturePanel(){
  return `<div class="card culture-wrap">
    <section class="culture-section card" style="box-shadow:none"><div class="culture-title">🧁 甜度量表</div><div class="culture-cards">${sugarCards.map(card => cultureCard(card)).join('')}</div></section>
    <section class="culture-section card" style="box-shadow:none"><div class="culture-title">🧊 冰塊量表</div><div class="culture-cards">${iceCards.map(card => cultureCard(card)).join('')}</div></section>
  </div>`;
}

function cultureCard(card){
  return `<div class="culture-card"><div class="culture-emoji">${card.icon}</div><h4>${card.zh}</h4>${py(card.py)}${en(card.en)}<button class="btn audio" onclick="speak('${card.zh}')">🔊 播放</button></div>`;
}

function achievement(){
  const items = [
    {t:'點飲料', s:'學會說出想喝的飲料', e:'🥤'},
    {t:'選大小', s:'學會選擇杯子大小', e:'🥛'},
    {t:'說甜度', s:'學會甜度與冰塊用語', e:'🧊'},
    {t:'完成付款', s:'學會確認金額與付款', e:'👛'}
  ];
  return `<section class="achievement">${items.map(i => `<div class="done">✅ ${i.e} ${i.t}<small>${i.s}</small></div>`).join('')}<div class="card medal"><div class="medal-icon">🏅</div><h3>太棒了！</h3><p>繼續練習，成為點餐高手吧！</p></div></section>`;
}

function listPage(type){
  const title = type === 'listen' ? '聽力練習' : '常用句型';
  const desc = type === 'listen' ? '聽店員與顧客對話' : '點選句型，練習發音';
  const list = type === 'listen' ? dialogue.map(d => ({zh:d.zh, en:d.en, py:d.py})) : phrases;
  return `<div class="page"><section class="card list-page"><h2>${title}</h2><p class="subtitle">${desc}</p>${list.map(item => `<button class="list-item" onclick="speak('${item.zh}')"><strong>${item.zh} 🔊</strong>${py(item.py)}${en(item.en)}</button>`).join('')}</section></div>`;
}

function cartPage(){
  return `<div class="page" style="max-width:760px">${summaryCard()}<section class="card complete-card"><div class="ok">✅</div><h2>訂單完成練習！</h2><p class="subtitle">你已經完成一次完整的飲料點餐流程。</p></section></div>`;
}

function render(){
  updateToggles();
  const app = document.getElementById('app');
  if (state.page === 'home') app.innerHTML = homePage();
  else if (state.page === 'order') app.innerHTML = orderPage();
  else if (state.page === 'custom') app.innerHTML = customPage();
  else if (state.page === 'speak') app.innerHTML = speakPage();
  else if (state.page === 'listen') app.innerHTML = listPage('listen');
  else if (state.page === 'phrases') app.innerHTML = listPage('phrases');
  else app.innerHTML = cartPage();
}

render();
