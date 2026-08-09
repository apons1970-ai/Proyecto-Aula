const normalize=s=>(s||'').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

export function renderActivity(a,idx){
  if(a.type==='info') return `<article class="activity"><h3>${a.title}</h3><p class="instruction">${a.instruction}</p><div class="group-grid">${a.groups.map(([h,v])=>`<div class="mini"><b>${h}</b><p>${v}</p></div>`).join('')}</div></article>`;
  if(a.type==='choice') return `<article class="activity" data-type="choice" data-idx="${idx}"><h3>${a.title}</h3><p class="instruction">${a.instruction}</p>${a.questions.map((q,i)=>`<div class="question" data-q="${i}"><b>${i+1}. ${q.q}</b><div class="options">${q.options.map((o,j)=>`<button class="option" data-answer="${j}">${o}</button>`).join('')}</div><small class="result"></small></div>`).join('')}<button class="check">COMPROBAR</button><div class="score"></div></article>`;
  if(a.type==='gaps') return `<article class="activity" data-type="gaps" data-idx="${idx}"><h3>${a.title}</h3><p class="instruction">${a.instruction}</p>${a.items.map((it,i)=>`<div class="gap-row" data-q="${i}"><span>${it.text}</span><input autocomplete="off"/><small class="result"></small></div>`).join('')}<button class="check">COMPROBAR</button><div class="score"></div>${a.optionalMeaning?'<div class="optional-slot"></div>':''}</article>`;
  if(a.type==='open') return `<article class="activity"><h3>${a.title}</h3><p class="instruction">${a.instruction}</p><textarea placeholder="Escribe aquí…"></textarea><button class="secondary model-btn">VER UN MODELO</button><div class="feedback model" hidden>${a.model}</div></article>`;
  return '';
}

export function bindActivities(container,activities){
  container.querySelectorAll('.activity[data-type="choice"]').forEach(el=>{
    const a=activities[Number(el.dataset.idx)];
    el.querySelectorAll('.question').forEach(qel=>qel.querySelectorAll('.option').forEach(btn=>btn.addEventListener('click',()=>{qel.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');qel.dataset.selected=btn.dataset.answer;qel.querySelector('.result').textContent='';el.querySelector('.score').textContent='';})));
    el.querySelector('.check').addEventListener('click',()=>{
      let score=0;a.questions.forEach((q,i)=>{const qel=el.querySelector(`.question[data-q="${i}"]`);const selected=Number(qel.dataset.selected);const res=qel.querySelector('.result');if(Number.isNaN(selected)){res.className='result bad';res.textContent='Completa esta pregunta antes de comprobar.';}else if(selected===q.answer){score++;res.className='result ok';res.textContent='✓ Correcto';}else{res.className='result bad';res.textContent=`✗ ${q.feedback||'Revisa la pista y vuelve a intentarlo.'}`;}});el.querySelector('.score').textContent=`${score} / ${a.questions.length} correctas`;
    });
  });
  container.querySelectorAll('.activity[data-type="gaps"]').forEach(el=>{
    const a=activities[Number(el.dataset.idx)];
    el.querySelectorAll('input').forEach(input=>input.addEventListener('input',()=>{input.closest('.gap-row').querySelector('.result').textContent='';el.querySelector('.score').textContent='';}));
    el.querySelector('.check').addEventListener('click',()=>{let score=0;a.items.forEach((it,i)=>{const row=el.querySelector(`.gap-row[data-q="${i}"]`);const input=row.querySelector('input');const value=input.value;const ok=it.answers.map(normalize).includes(normalize(value));const res=row.querySelector('.result');if(!value.trim()){res.className='result bad';res.textContent='Completa este hueco.';}else if(ok){score++;res.className='result ok';res.textContent='✓ Correcto';}else{res.className='result bad';res.textContent=`✗ ${it.feedback||'Revisa la forma y vuelve a intentarlo.'}`;}});el.querySelector('.score').textContent=`${score} / ${a.items.length} correctas`;const slot=el.querySelector('.optional-slot');if(slot&&score===a.items.length){slot.innerHTML=`<div class="optional"><b>✓ ¡Muy bien!</b><p>¿Quieres practicar también el significado?</p><button class="secondary meaning-btn">🇩🇪 Con alemán</button><div class="meaning-list" hidden>${a.items.map(x=>`<p><b>${esc(x.text.replace('___',x.answers[0]))}</b><br><span>${esc(x.meaning||'')}</span></p>`).join('')}</div></div>`;slot.querySelector('.meaning-btn').addEventListener('click',()=>slot.querySelector('.meaning-list').toggleAttribute('hidden'));}});
  });
  container.querySelectorAll('.model-btn').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.querySelector('.model').toggleAttribute('hidden')));
}
