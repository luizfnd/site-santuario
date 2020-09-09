var showcalendario = document.getElementById("calendario");
var showperegrinacao = document.getElementById("peregrinacao");
var changebox = document.getElementById("changecontent");
var showpedidos = document.getElementById("pedidos");
var shownovena = document.getElementById("novena")
var showmusica = document.getElementById("musicas")
var titlebox = document.getElementById("changecontent2");
var lista = document.getElementById("lista")

    
    $("#calendario").click(function () {
        changebox.style.display = "block";
        titlebox.style.display = "none";
        showcalendario.classList.add('focus');
        $('#peregrinacao, #pedidos, #novena, #musicas').removeClass('focus');
    })

    $("#peregrinacao").click(function () {
        changebox.style.display = "none";
        titlebox.style.display = "block";
        showperegrinacao.classList.add("focus");
        $('#calendario, #pedidos, #novena, #musicas').removeClass('focus');
    })

    $("#pedidos").click(function(){
        showpedidos.classList.add("focus");
        $('#calendario, #peregrinacao, #novena, #musicas').removeClass('focus');
    })

    $("#novena").click(function(){
        shownovena.classList.add("focus");
        $('#calendario, #peregrinacao, #pedidos, #musicas').removeClass('focus');
    })

    $("#musicas").click(function(){
        showmusica.classList.add("focus");
        $('#calendario, #peregrinacao, #pedidos, #novena').removeClass('focus');
    })
