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