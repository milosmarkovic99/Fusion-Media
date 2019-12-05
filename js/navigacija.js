$(document).ready(function(){

    $('.mojMeniSide ul li ul').hide();

    $('#sideLink1').click(function(){
        $('.mojMeniSide ul li ul').slideToggle();
    });

    $('.burger').click(function(){
        $('.burgerMeni').toggleClass('levoDesno');
    });

    $('.burgerMeni a').click(function(){
        if($(this).html() == 'Kontakt'){
            $('.burgerMeni').removeClass('levoDesno');
        }
    })

    $(window).scroll(function(){

        var motaj = $(this).scrollTop();

        if(motaj > 80) {

        $('.fusionNavigacija').addClass('bojaNavigacije');

        } else {
            
        $('.fusionNavigacija').removeClass('bojaNavigacije');

        }

    })

    $('.idiGore').click(function(){
        $('html').animate({scrollTop: 0}, 250);
    })

});


var divListe = document.querySelector('.mojMeni');

var logo = document.querySelector('.logo');

logo.innerHTML += `<a href='index.html' class='backToIndex'><img src='img/logo.png' class='logoSajta img-fluid'/></a>`

var nizLinkova = [['Početna', 'index.html'],['Kategorije','#!'], ['O nama', 'about.html'], ['Kontakt', '#kontaktirajteNas'], ['Dokumentacija', 'dokumentacija.pdf']];

var podMeniLinkovi = [['Računari', 'racunari.html'],['Fotoaparati', 'fotoaparati.html'],['Monitori', 'monitori.html']];


var lista = document.createElement('ul');

for(var i=0;i<nizLinkova.length;i++){
    var elementListe = document.createElement('li');
    var link = document.createElement('a');
    var linkSadrzaj = document.createTextNode(nizLinkova[i][0]);
    link.setAttribute('href', `${nizLinkova[i][1]}`);
    link.setAttribute('id', `link${i}`);
    link.appendChild(linkSadrzaj);
    elementListe.appendChild(link);
    lista.appendChild(elementListe)

    if(nizLinkova[i][0] == 'Dokumentacija'){
        link.setAttribute('download', `${nizLinkova[i][1]}`);
    }

    if(nizLinkova[i][0] == 'Kategorije'){

        var podMeni = document.createElement('ul');

        for(var j=0; j<podMeniLinkovi.length; j++){

        var podMeniEl = document.createElement('li');
        var linkPodMenija = document.createElement('a');
        var linkPodMenijaSadrzaj = document.createTextNode(podMeniLinkovi[j][0]);
        linkPodMenija.setAttribute('href', podMeniLinkovi[j][1]);
        linkPodMenija.appendChild(linkPodMenijaSadrzaj);
        podMeniEl.appendChild(linkPodMenija);
        podMeni.appendChild(podMeniEl);

        }

        elementListe.appendChild(podMeni);

    }
}


var sideNav = document.createElement('ul');

for(var i=0;i<nizLinkova.length;i++){
    var elementListeSide = document.createElement('li');
    var linkSide = document.createElement('a');
    var linkSadrzajSide = document.createTextNode(nizLinkova[i][0]);
    linkSide.setAttribute('href', `${nizLinkova[i][1]}`);
    linkSide.setAttribute('id', `sideLink${i}`);
    linkSide.appendChild(linkSadrzajSide);
    elementListeSide.appendChild(linkSide);
    sideNav.appendChild(elementListeSide)

    if(nizLinkova[i][0] == 'Kategorije'){

        var podMeniSide = document.createElement('ul');

        for(var j=0; j<podMeniLinkovi.length; j++){

        var podMeniElSide = document.createElement('li');
        var linkPodMenijaSide = document.createElement('a');
        var linkPodMenijaSadrzajSide = document.createTextNode(podMeniLinkovi[j][0]);
        linkPodMenijaSide.setAttribute('href', podMeniLinkovi[j][1]);
        linkPodMenijaSide.appendChild(linkPodMenijaSadrzajSide);
        podMeniElSide.appendChild(linkPodMenijaSide);
        podMeniSide.appendChild(podMeniElSide);

        }

        elementListeSide.appendChild(podMeniSide);


    }
}


divListe.appendChild(lista);

var sideNavigation = document.querySelector('.mojMeniSide');

sideNavigation.appendChild(sideNav);



//Footer

var nizDrugihLinkova = [['Sitemap','sitemap.xml'],['indexStrana.js','js/indexStrana.js'],['Navigacija.js','js/navigacija.js'],['Kontakt.js','js/kontakt.js'],['Kategorije.js','js/kategorije.js']];

for(var i=0;i<nizDrugihLinkova.length;i++){
    document.querySelector('.zutiLinkovi').innerHTML += `<a href='${nizDrugihLinkova[i][1]}' target='_blank' class='sporedni'>${nizDrugihLinkova[i][0]}</a>`;
}