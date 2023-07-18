//!  1- Tekmi Çiftmi?

var sayi=prompt();
sayi=Number(sayi);

if(sayi%2==0)
{
window.alert(sayi+" sayisi çift sayıdır.");
}
else
{ 
window.alert(sayi+" sayisi tek sayıdır.");
}

//!  2- 4,5,6 bölünen sayılar

var sayi1=prompt();
sayi1=Number(sayi1);
if(sayi1%4==0 || sayi1%5==0 || sayi1%6==0){

    window.alert("Sayı Uygun");
}
 else{
    window.alert("Sayı Uygun Değil");
 }

//!  3- 0-100 arası çift sayı

var sayi2=prompt();
sayi2=Number(sayi2);

if(sayi2>=0 && sayi2<=100 && sayi2%2==0){
    window.alert("Sayı Uygun");
}
else{
    window.alert("Sayı Uygun Değil");
}