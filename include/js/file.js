/*
Скрипт file (открытие и чтение файлов).
Автор проекта: Алексей Конан 2011 г. (www.akonan.ru).
Разрешено свободное использование приложения и его модификаций в некомерческих целях.
*/
function f_open(url,fn,arg){
var id=0;
while(document.getElementById("file_"+id))id++;
id="file_"+id;
var e=document.createElement('iframe');
e.setAttribute('id',id);
e.setAttribute('src',url);
e.style.display="none";
document.body.appendChild(e);
if(e.addEventListener)e.addEventListener('load',function(){fn(f_read(id),arg)},true);
else e.attachEvent('onload',function(){fn(f_read(id),arg)});

}
function f_read(id){
var r=document.frames?document.frames[id]:document.getElementById(id);
r=r.window?r.window:r.contentWindow;
r=r.document.body.innerHTML;
document.body.removeChild(document.getElementById(id));
return r;
}
