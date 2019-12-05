var racunarskiNiz = [['kuciste1.png','32.320 din.', 'Forest Elemental', 'Jedno od najboljih kućišta u ponudi', 'kuciste3.png','27.000 din.', 'Titan X13', 'Preporučujemo za igrice !'],['kuciste2.png','40.000 din.', 'Blue Lagoon D', 'Preporučljiv za editovanje slika i videa','kuciste4.png','40.000 din.', 'Smoker PX300', 'Top model !'],['kuciste5.png','28.800 din.', 'Black Widow Redex', 'Dobar za animacije, lak za nošenje','kuciste6.png','89.999 din.', 'Chronos 331D', 'Naš VIP model računara, dobar jednostavno za sve !']];


for(var i=0;i<racunarskiNiz.length;i++){
    document.querySelector('.blokSablon').innerHTML += `<div class='row redRacunaraBlokovi'><div class='proizvod col-lg-6'>
    <div class='slikaProizvodaSlick'><img src='img/${racunarskiNiz[i][0]}' class='img-fluid' alt='Slika tehnike'/></div>
    <div class='naruciMe'><h3>${racunarskiNiz[i][2]}</h3><p>${racunarskiNiz[i][3]}</p><p class='zut'>${racunarskiNiz[i][1]}</p><a href='#!'>Poruči</a></div>
    </div>
    <div class='proizvod col-lg-6'>
    <div class='slikaProizvodaSlick'><img src='img/${racunarskiNiz[i][4]}' class='img-fluid' alt='Slika tehnike'/></div>
    <div class='naruciMe'><h3>${racunarskiNiz[i][6]}</h3><p>${racunarskiNiz[i][7]}</p><p class='zut'>${racunarskiNiz[i][5]}</p><a href='#!'>Poruči</a></div>
    </div></div>`;
}