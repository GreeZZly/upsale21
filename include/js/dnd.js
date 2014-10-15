/*
Скрипт drag & drop (перетаскивание).
Автор проекта: Алексей Конан 2013 г. (www.akonan.ru).
Разрешено свободное использование приложения и его модификаций в некомерческих целях.
*/
function dnd(e,id,fn){
if(e.preventDefault)e.preventDefault();
if(id==undefined)id=e.target?e.target.attributes["id"].value:e.srcElement.attributes["id"].value;
var d=document.getElementById(id);
var p=d.parentElement;
var ml=d.currentStyle?d.currentStyle["marginLeft"]:window.getComputedStyle(d,"").getPropertyValue("margin-left");
var mt=d.currentStyle?d.currentStyle["marginTop"]:window.getComputedStyle(d,"").getPropertyValue("margin-top");
mt=isNaN(parseInt(mt))?0:parseInt(mt);
ml=isNaN(parseInt(ml))?0:parseInt(ml);
var dx=e.clientX-p.getBoundingClientRect().left-ml;
var dy=e.clientY-p.getBoundingClientRect().top-mt;
var b=document.body;
var de=document.documentElement;
var dd=document.createElement("div");
dd.setAttribute("id","dnd_"+id);
b.appendChild(dd);
var dnd=document.getElementById("dnd_"+id);
var s=dnd.style;
s.position="absolute";
s.zIndex=1000;
s.width="100%";
s.height="100%";
s.left=de.scrollLeft>b.scrollLeft?de.scrollLeft+"px":b.scrollLeft+"px";
s.top=de.scrollTop>b.scrollTop?de.scrollTop+"px":b.scrollTop+"px";
s.backgroundColor="#ffffff";
s.opacity=0;
s.filter="alpha(opacity=0)";
if(dnd.addEventListener){
  dnd.addEventListener('mousemove',function(e){d_move(id,e,dx,dy)},true);
  dnd.addEventListener('mouseup',function(e){d_up(id,fn)},true);
  }
else{
  dnd.attachEvent('onmousemove',function(e){d_move(id,e,dx,dy)});
  dnd.attachEvent('onmouseup',function(e){d_up(id,fn)});
  }
}
function d_up(id,fn){
document.body.removeChild(document.getElementById("dnd_"+id));
if(fn!=undefined&&fn!=0)fn();
}
function d_move(id,e,x,y){
var d=document.getElementById(id);
var s=document.getElementById("dnd_"+id).style;
var p=d.parentElement;
var b=document.body;
var de=document.documentElement;
s.left=de.scrollLeft>b.scrollLeft?de.scrollLeft+"px":b.scrollLeft+"px";
s.top=de.scrollTop>b.scrollTop?de.scrollTop+"px":b.scrollTop+"px";
d.style.marginLeft=e.clientX-x-p.getBoundingClientRect().left+"px";
d.style.marginTop=e.clientY-y-p.getBoundingClientRect().top+"px";
}