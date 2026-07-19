(function(){
  function convertJournal(scope=document){
    scope.querySelectorAll('.journal-block').forEach(block=>{
      const controls=[...block.querySelectorAll('label')];
      if(!controls.length) return;
      const intro=document.createElement('div');
      intro.className='notebook-direction';
      intro.innerHTML='<strong>Write this by hand.</strong> Open your private notebook, date the page, and copy each heading below before answering it. The website does not save personal answers.';
      block.prepend(intro);
      controls.forEach((label,i)=>{
        const next=label.nextElementSibling;
        const item=document.createElement('article');
        item.className='notebook-prompt';
        item.innerHTML=`<span>${i+1}</span><div><h4>${label.textContent}</h4><p>${discern(label.textContent)}</p></div>`;
        label.replaceWith(item);
        if(next && (next.matches('textarea')||next.matches('input'))) next.remove();
      });
      block.querySelectorAll('button').forEach(b=>b.remove());
    });
  }
  function discern(t){
    const s=t.toLowerCase();
    if(s.includes('fact')||s.includes('evidence')) return 'Record only what could be observed, dated, counted or shown. Put assumptions and fears on a separate line.';
    if(s.includes('kind of matter')||s.includes('sin, habit')||s.includes('believe this is')) return 'More than one category may apply. Ask which remedy belongs to each part: confession, contrary habit, practical action, boundary, professional care or patient uncertainty.';
    if(s.includes('responsibility')) return 'Name what you chose, omitted or can now repair. Do not claim responsibility for another person’s motives, response or every outcome.';
    if(s.includes('resolved')) return 'Describe a sufficient and truthful condition, not perfection. Ask what would make the matter safe, just, orderly or contained.';
    if(s.includes('next physical action')||s.includes('concrete amendment')) return 'Use a visible verb and object: telephone, list, remove, apologise, pay, clean, schedule, ask. It should be possible to know when it is done.';
    if(s.includes('result')||s.includes('practice')||s.includes('happened')) return 'Compare what actually changed with what you expected. Do not judge the whole effort by mood alone.';
    if(s.includes('failure')||s.includes('resisted')) return 'Identify the trigger, the first avoidable step and the missing safeguard. Avoid both excuses and global self-condemnation.';
    if(s.includes('continue')||s.includes('close')) return 'Choose one status only: complete, continue with next action, schedule, seek help, or deliberately defer with a review date.';
    if(s.includes('prayer')||s.includes('confession')||s.includes('healthcare')||s.includes('counsel')) return 'Match the matter to the proper help. Sacramental, pastoral, clinical and practical remedies may work together but are not interchangeable.';
    if(s.includes('teaching')||s.includes('own words')) return 'Close the book first. Write the central claim from memory, then reopen it and correct any distortion or omission.';
    if(s.includes('recognised')||s.includes('myself')) return 'Give one concrete example. Ask whether this is a repeated pattern, a single incident, or only a fear.';
    if(s.includes('virtue')||s.includes('remedy')) return 'Name the contrary virtue and the author’s proposed means. Prefer the smallest faithful practice that can be repeated.';
    if(s.includes('when and where')||s.includes('calendar')) return 'Assign a real day, start time and place. Include travel, cost, preparation and recovery where relevant.';
    if(s.includes('help')||s.includes('cost')||s.includes('materials')) return 'List what must exist before action begins. Distinguish essential support from delay disguised as preparation.';
    if(s.includes('grace')||s.includes('progress')) return 'Record help received, restraint shown, duty completed or a quicker return after falling. Gratitude should remain factual.';
    if(s.includes('project')) return 'Record the learner’s experience before proposing improvements. One observed friction point is more useful than a wholesale redesign.';
    return 'Answer with a concrete example, then test whether your conclusion is truthful, charitable, proportionate and within your responsibility.';
  }
  function addDiscernmentGuide(target){
    const main=document.querySelector(target||'main');
    if(!main || main.querySelector('.discernment-guide')) return;
    const box=document.createElement('section');
    box.className='discernment-guide';
    box.innerHTML='<h3>How to discern an answer</h3><ol><li><strong>State the fact.</strong> What happened, when, how often and with what consequence?</li><li><strong>Name your part.</strong> What did you choose, neglect, permit or fail to repair?</li><li><strong>Test the interpretation.</strong> What motive, future outcome or judgement are you adding without proof?</li><li><strong>Identify the proper good.</strong> What do truth, justice, charity, health and duty require?</li><li><strong>Choose the proper remedy.</strong> Confession, apology, restitution, contrary practice, boundary, practical action, professional care or patient waiting.</li><li><strong>Check proportion.</strong> Is the response sufficient and sustainable, or dramatic, punitive and likely to collapse?</li><li><strong>Seek counsel where needed.</strong> Serious sin, dependency, health risk, trauma or complicated relationships may require a priest or qualified professional.</li></ol>';
    const firstJournal=main.querySelector('.journal-block');
    if(firstJournal) firstJournal.before(box); else main.append(box);
  }
  window.HANDWRITING={convertJournal,addDiscernmentGuide};
})();