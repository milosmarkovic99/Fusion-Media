$(document).ready(function(){
    $('.slickDiv').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      prikazivanje();

      $('.otkrijPopust').click(function(){
        $(this).addClass('odnesiPopust')
      });
})

var bgSlikeNiz = ['bgSlika1.jpg', 'bgSlika2.jpg', 'bgSlika3.jpg'];

var nekaSlika = Math.floor(Math.random()*bgSlikeNiz.length);

document.querySelector('.stoVH').style.backgroundImage = `url('img/${bgSlikeNiz[nekaSlika]}')`;



var nizProizvoda = [['monitor1.png','12.900 din.', 'Fusion G13D', 'Monitor najvećeg kvaliteta'],['kuciste1.png','32.320 din.', 'Forest Elemental', 'Jedno od najboljih kućišta u ponudi'],['kuciste3.png','27.000 din.', 'Titan X13', 'Preporučujemo za igrice !'],['aparat1.png','53.120 din.', 'Nikon DS 9350', 'Aparat za vanvremenske slike !'],['aparat2.png','42.110 din.', 'Alpha 6612', 'Kristalne slike, FULL UHD'],['monitor2.png','34.999 din.', 'Planar 13D', 'Monitor koji ste čekali'],['aparat3.png','58.780 din.', 'Shooter 9X', 'Kristlane slike, FULL UHD'],['kuciste2.png','40.000 din.', 'Blue Lagoon D', 'Preporučljiv za editovanje slika i videa']];

console.log(nizProizvoda)

var divSlick = document.querySelector('.slickDiv');

for(var i=0;i<nizProizvoda.length;i++){
    divSlick.innerHTML += `<div class='proizvod'>
    <div class='slikaProizvodaSlick'><img src='img/${nizProizvoda[i][0]}' class='img-fluid' alt='Slika tehnike'/></div>
    <div class='naruciMe'><h3>${nizProizvoda[i][2]}</h3><p>${nizProizvoda[i][3]}</p><p class='zut'>${nizProizvoda[i][1]}</p><a href='#!'>Poruči</a></div>
    </div>`;
}

var racunarskiNiz = ['Računari','Naši računari su sve što ste to sada tražili kod računara, pogodni za igre za vaše najmlađe, za vaš posao, animacije i sve ostalo što Vam je potrebno ! Po povoljnim cenama i posebnim popustima ovaj mesec. Ukoliko iskoristite kod DECEMBER2019 na kraju kupovine ostvarićete popust od 15% !','racunari.html'];

var fotoaparatiNiz = ['Fotoaparati','Naši fotoaparati su sve što ste to sada tražili kod fotoaparata, pogodni za slike koje ste uvek želeli i sve ostalo što Vam je potrebno ! Po povoljnim cenama i posebnim popustima ovaj mesec. Ukoliko iskoristite kod DECEMBER2019 na kraju kupovine ostvarićete popust od 15% !','fotoaparati.html'];

var monitoriNiz = ['Monitori','Naši monitori su sve što ste to sada tražili kod monitora, sa staklom koje štiti vaše oči, pogodan za multitasking i sve ostalo što Vam je potrebno ! Po povoljnim cenama i posebnim popustima ovaj mesec. Ukoliko iskoristite kod DECEMBER2019 na kraju kupovine ostvarićete popust od 15% !','monitori.html'];

function ispisRacunara(){

    var pun = document.querySelector('.tehnika3');

    pun.innerHTML = `<h3>${niz[0]}</h3><p>${niz[1]}</p><a href='${niz[2]}'>Vidite više</a>`;

    console.log(pun)

    alert('radi')


}

function ispis1(niz){

    var pun = document.querySelector('.tehnika3');

    pun.innerHTML = `<h3>${niz[0]}</h3><p>${niz[1]}</p><a href='${niz[2]}'>Vidite više</a>`;


}

function ispis2(niz){

    var pun = document.querySelector('.tehnika3');

    pun.innerHTML = `<h3>${niz[0]}</h3><p>${niz[1]}</p><a href='${niz[2]}'>Vidite više</a>`;


}

function prikazivanje(){
    
    function pisanje(element, niz){

        element.addEventListener('click',function(){

            var pun = document.querySelector('.tehnika3');

            pun.innerHTML = `<h3>${niz[0]}</h3><p>${niz[1]}</p><a href='${niz[2]}'>Vidite više</a>`;

        })

    }

    pisanje(document.querySelector('.prikaz1'),racunarskiNiz);
    pisanje(document.querySelector('.prikaz2'),fotoaparatiNiz);
    pisanje(document.querySelector('.prikaz3'),monitoriNiz);

}

var popustKodNiz = ['DB191', 'ABCD1','112CE','FF00FF'];

var randNizPopust = Math.floor(Math.random()*popustKodNiz.length);

var popust = document.querySelector('#popust');

var kodPopusta = document.querySelector('#kodPopusta');

var popustRand = Math.floor(Math.random()*60) + 10;

popust.innerHTML += popustRand + '%';

kodPopusta.innerHTML += 'Kod: ' + popustKodNiz[randNizPopust];



