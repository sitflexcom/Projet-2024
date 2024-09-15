/*fonction pour l'heure*/
function onheure(){
  var entre = document.getElementById("heures");
var datess = new Date();
var heure = datess.getHours();
var minute = datess.getMinutes();
var second = datess.getSeconds();
var pr = 0;
// conditions pour heure
if (heure>=12) {
  entre.innerHTML = heure+'h'+':'+minute+':'+second + " PM";
}
if (heure>12) {
entre.innerHTML = heure-12 +'h'+':'+minute+':'+second +' PM';
}
if(heure<10){
  entre.innerHTML = '0'+heure+'h'+':'+'0'+minute+':'+second + " AM";
}
//conditions pour minutes
if (minute<10 && heure>=12) {
  entre.innerHTML = heure+'h'+':'+'0'+minute+':'+second + " PM";
}
if(minute<10 && heure==10){
  entre.innerHTML = '0'+heure+'h'+':'+'0'+minute+':'+second + " PM";
}
if(minute<10 && heure<10){
  entre.innerHTML = heure+'h'+':'+'0'+minute+':'+second + " PM";
}
//conditions pour les seconds
if (second<10 && heure<10) {
entre.innerHTML = '0'+heure+ 'h' +':' +minute+':'+'0'+second +' PM';
}
if (second<10 && heure==10) {
entre.innerHTML = heure+ 'h' +':' +minute+':'+'0'+second +' PM';
}
if (second<10 && heure>=12){
entre.innerHTML = heure+'h'+':'+minute+':'+'0'+second+ ' PM';
}
if(heure=11 && minute<10){
  entre.innerHTML = heure+'h'+':'+'0'+minute+':'+second +' AM';
  }
}
setInterval(onheure,100);
/*fonction pour visibilité des paragraphes*/
function paravisi() {
  var para1 = document.getElementById('para1');
  var para2 = document.getElementById('para2');
para1.addEventListener('click',function(){
    if(para2.style.display ='none') {
      para2.style.display = 'block';
      para1.style.color = 'black';
    }
}
);
  para2.addEventListener('click',function(){
    if(para2.style.display ='block') {
      para2.style.display = 'none';
      para1.style.color = 'blue';
    }
}
);}
paravisi();
