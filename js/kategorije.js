var monitorNiz = [['monitor1.png','12.900 din.', 'Fusion G13D', 'Monitor najvećeg kvaliteta', 'monitor2.png','34.999 din.', 'Planar 13D', 'Monitor koji ste čekali'],['monitor3.png','38.780 din.', 'Flatter 990', 'Kristlana slika, FULL UHD','monitor4.png','38.500 din.', 'Deprur X', 'Top model !'],['monitor5.png','63.800 din.', 'Boomer 30', 'Slike čiste kao kristal','monitor6.png','65.390 din.', 'Visual Pro', 'Naš VIP model monitora, dobar jednostavno za sve !']];


for(var i=0;i<monitorNiz.length;i++){
    document.querySelector('.blokSablon').innerHTML += `<div class='row redRacunaraBlokovi'><div class='proizvod col-lg-6'>
    <div class='slikaProizvodaSlick'><img src='img/${monitorNiz[i][0]}' class='img-fluid' alt='Slika tehnike'/></div>
    <div class='naruciMe'><h3>${monitorNiz[i][2]}</h3><p>${monitorNiz[i][3]}</p><p class='zut'>${monitorNiz[i][1]}</p><a href='#!'>Poruči</a></div>
    </div>
    <div class='proizvod col-lg-6'>
    <div class='slikaProizvodaSlick'><img src='img/${monitorNiz[i][4]}' class='img-fluid' alt='Slika tehnike'/></div>
    <div class='naruciMe'><h3>${monitorNiz[i][6]}</h3><p>${monitorNiz[i][7]}</p><p class='zut'>${monitorNiz[i][5]}</p><a href='#!'>Poruči</a></div>
    </div></div>`;
}





var aparatiNiz = [['aparat1.png','53.120 din.', 'Nikon DS 9350', 'Aparat za vanvremenske slike !', 'aparat2.png','42.110 din.', 'Alpha 6612', 'Kristalne slike, FULL UHD'],['aparat3.png','58.780 din.', 'Shooter 9X', 'Kristlane slike, FULL UHD','aparat4.png','55.000 din.', 'Kaptur 900', 'Top model !'],['aparat5.png','78.800 din.', 'Extremer D', 'Slike čiste kao kristal','aparat6.png','66.999 din.', 'Bouncer 3131', 'Naš VIP model aparata, dobar jednostavno za sve !']];


for(var i=0;i<aparatiNiz.length;i++){
    document.querySelector('.blokSablon').innerHTML += `<div class='row redRacunaraBlokovi'><div class='proizvod col-lg-6'>
    <div class='slikaProizvodaSlick'><img src='img/${aparatiNiz[i][0]}' class='img-fluid' alt='Slika tehnike'/></div>
    <div class='naruciMe'><h3>${aparatiNiz[i][2]}</h3><p>${aparatiNiz[i][3]}</p><p class='zut'>${aparatiNiz[i][1]}</p><a href='#!'>Poruči</a></div>
    </div>
    <div class='proizvod col-lg-6'>
    <div class='slikaProizvodaSlick'><img src='img/${aparatiNiz[i][4]}' class='img-fluid' alt='Slika tehnike'/></div>
    <div class='naruciMe'><h3>${aparatiNiz[i][6]}</h3><p>${aparatiNiz[i][7]}</p><p class='zut'>${aparatiNiz[i][5]}</p><a href='#!'>Poruči</a></div>
    </div></div>`;
}




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