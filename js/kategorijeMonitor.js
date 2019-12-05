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