const reveals=[...document.querySelectorAll('.reveal')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});
reveals.forEach(el=>io.observe(el));
const progress=document.getElementById('progress');
const update=()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;progress.style.width=(max?100*h.scrollTop/max:0)+'%'};
document.addEventListener('scroll',update,{passive:true});update();
