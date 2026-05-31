let selected=false;

/* kart seçme */
document.querySelectorAll(".card").forEach(c=>{
c.onclick=()=>{
document.querySelectorAll(".card").forEach(x=>x.style.background="transparent");
c.style.background="cyan";
selected=true;
}
});

/* RAM yükselt */
function start(){
if(!selected){
alert("RAM seç!");
return;
}

let p=0;
let bar=document.getElementById("bar");
let percent=document.getElementById("percent");

let i=setInterval(()=>{
p++;
bar.style.width=p+"%";
percent.innerText="%"+p;

if(p>=100){
clearInterval(i);
document.getElementById("p1").style.display="flex";
}
},30);
}

/* şaka */
function joke(){
document.getElementById("p1").style.display="none";
document.getElementById("p2").style.display="flex";
}

/* 🔥 GERÇEK ZİYARETÇİ SAYACI */
fetch("https://api.countapi.xyz/hit/rambooster-ultra/site")
.then(r=>r.json())
.then(data=>{
document.getElementById("visits").innerText=data.value;
});