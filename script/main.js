/*fonction pour l'heure*/
function onheure(){
  var entre = document.getElementById("heures");
var datess = new Date();
var heure = datess.getHours();
var minute = datess.getMinutes();
var second = datess.getSeconds();
var pr = 0;
// conditions pour heure
if (heure<10){
 heures =  entre.innerHTML = '0'+heure ;
}
if(heure==10 || heure==11){
  heures = entre.innerHTML =heure +"h";
}
if(heure==12){
  heures = entre.innerHTML = heure +"h";
}
if(heure>12){
  heures = entre.innerHTML = pr + heure - 12+"h";
}
//conditions pour minutes
if(minute<10){
  minutes = entre.innerHTML = "0"+ minute;
}
if(minute>10){
  minutes = entre.innerHTML = minute;
}
//conditions pour les seconds
if(second<10){
  secondes = entre.innerHTML = "0"+second;
}
else{
  secondes =  entre.innerHTML = second;
}
if(heure>=12){
  am = entre.innerHTML ="PM";
}
else{
 am = entre.innerHTML = "AM";
}
entre.innerHTML = heures + ":"+ minutes+ ":" + secondes + " "+ am;
//condition pou pm ou am

}
setInterval(onheure,100);
/*fonction pour visibilité des paragraphes*/
function paravisi() {
  var para1 = document.getElementById('para1');
  var para2 = document.getElementById('para2');
para1.addEventListener('click',function(){
    if(para2.style.display ='none'){
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