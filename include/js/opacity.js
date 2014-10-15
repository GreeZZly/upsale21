/*
Скрипт opacity (прозрачность).
Автор проекта: Алексей Конан 2013 г. (www.akonan.ru).
Разрешено свободное использование приложения и его модификаций в некомерческих целях.
*/
opacities=new Array();
function o_object(id){
var d=document.getElementById(id);
this.id=id;
this.v=this.a=this.fn=this.alpha=0;
if(d.style.opacity!=undefined)this.an=d.currentStyle?d.currentStyle["opacity"]*100:window.getComputedStyle(d,"").getPropertyValue("opacity")*100;
else this.an=100;
this.dt=40;
}
function o_alpha(e){
e.alpha=1;
var d=document.getElementById(e.id);
if(e.v<25||e.a==e.an)var da=e.a-e.an;
else var da=Math.round((e.a-e.an)/Math.abs(e.a-e.an)*e.v*e.dt/1000);
e.an+=da;
if((e.an<e.a&&da<0)||(e.an>e.a&&da>0))e.an=e.a;
if(d.style.opacity!=undefined)d.style.opacity=(e.an/100);
else d.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+e.an+")";
if(e.an!=e.a)setTimeout(function(){o_alpha(e)},e.dt);
else{
  e.alpha=0;
  if(e.fn!=0)return e.fn();
  }
}
function opacity(id,a,v,fn){
var u=undefined;
if(navigator.appName=="Microsoft Internet Explorer"&&navigator.appVersion.match(/MSIE ([\d.]+);/)[1]<=8.0)return false;
if(!opacities[id])opacities[id]=new o_object(id);
opacities[id].a=a;
opacities[id].v=v!=u?v:0;
opacities[id].fn=fn!=u?fn:0;
if(opacities[id].alpha==0)o_alpha(opacities[id]);
}