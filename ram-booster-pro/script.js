let selected=false;

function selectRam(el){
document.querySelectorAll(".card").forEach(c=>c.style.background="transparent");
el.style.background="#00e5ff";
selected=true;
}

function upgrade(){
if(!selected){
alert("RAM seç!");
return;
}

let bar=document.getElementById("bar");
let percent=document.getElementById("percent");

let p=0;

let i=setInterval(()=>{
p++;
bar.style.width=p+"%";
percent.innerText="%"+p;

if(p>=100){
clearInterval(i);
document.getElementById("popup1").style.display="flex";
}
},30);
}

function showJoke(){
document.getElementById("popup1").style.display="none";
document.getElementById("popup2").style.display="flex";
}

/* Ziyaretçi sayacı (sahte basit demo) */
let c=0;
setInterval(()=>{
c++;
document.getElementById("counter").innerText=c;
},2000);