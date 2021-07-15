let soru = prompt("Adınız nedir ?")
let info=document.querySelector("#info")

info.innerHTML=`Merhaba, ${soru}! Hoş geldin!
 `
 window.onload = startTime;
 function startTime()
 {
  let today=new Date();
  let gun=today.getDay()
  let h=today.getHours();
  let m=today.getMinutes();
  let s=today.getSeconds();

 if(gun==1){
    gun="Pazartesi"
}
else if(gun==2){
    gun="Salı"
}
else if(gun==3){
    gun="Çarşamba"
}
else if(gun==4){
    gun="Perşembe"
}
else if(gun==5){
    gun="Cuma"
}
else if(gun==6){
    gun="Cumartesi"
}
else if(gun==7){
    gun="Pazar"
}

  h=checkTime(h);
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('myClock').innerHTML=h+":"+m+":"+s+"  "+ gun;
  t=setTimeout('startTime()',1000);
 }
 
 function checkTime(i)
 {
 if (i<10)
  {
   i="0" + i;
  }
 return i;
 }

 


