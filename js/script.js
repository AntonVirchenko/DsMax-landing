var active = $(".dsmax-active");
var curry = $(".dsmax-price-name-text");
var currentNav = $(".nav-item");
var child = $(".dsmax-price-name").children();
var childHeader = $("#dsmax-navbar").children();
var setka = $("#torgovaya-setka");
var kruchki = $('#kruchki-torgovye');
var korziny = $("#korziny");
var stellagi = $("#stellagi");
var stoyki = $("#stoyki");
var stoykiVertushki = $("#stoyki-vertushki");
var containery = $("#containery");

$(document).ready(function(){
    if($(window).width() < 990) {
        setka.insertAfter($("#11"));
        kruchki.insertAfter($("#22"));
        korziny.insertAfter($("#33"));
        stellagi.insertAfter($("#44"));
        stoyki.insertAfter($("#55"));
        stoykiVertushki.insertAfter($("#66"));
        containery.insertAfter($("#77"));
    }
})

setka.stateChange = function (currentId) {
    if (currentId === '11') {
        setka.removeClass("d-none");
        setka.addClass("d-flex");
    } else {
        setka.removeClass("d-flex");
        setka.addClass("d-none");
    }
}
kruchki.stateChange = function (currentId) {
    if (currentId === '22') {
        kruchki.removeClass("d-none");
        kruchki.addClass("d-flex");
    } else {
        kruchki.removeClass("d-flex");
        kruchki.addClass("d-none");
    }
}
korziny.stateChange = function (currentId) {
    if (currentId === '33') {
        korziny.removeClass("d-none");
        korziny.addClass("d-flex");
    } else {
        korziny.removeClass("d-flex");
        korziny.addClass("d-none");
    }
}
stellagi.stateChange = function (currentId) {
    if (currentId === '44') {
        stellagi.removeClass("d-none");
        stellagi.addClass("d-flex");
    } else {
        stellagi.removeClass("d-flex");
        stellagi.addClass("d-none");
    }
}
stoyki.stateChange = function (currentId) {
    if (currentId === '55') {
        stoyki.removeClass("d-none");
        stoyki.addClass("d-flex");
    } else {
        stoyki.removeClass("d-flex");
        stoyki.addClass("d-none");
    }
}
stoykiVertushki.stateChange = function (currentId) {
    if (currentId === '66') {
        stoykiVertushki.removeClass("d-none");
        stoykiVertushki.addClass("d-flex");
    } else {
        stoykiVertushki.removeClass("d-flex");
        stoykiVertushki.addClass("d-none");
    }
}
containery.stateChange = function (currentId) {
    if (currentId === '77') {
        containery.removeClass("d-none");
        containery.addClass("d-flex");
    } else {
        containery.removeClass("d-flex");
        containery.addClass("d-none");
    }
}

function current(currentId){
    for (var i = 0; i < child.length; i++) {
        if (child.eq(i).attr("id") === currentId) {
            child.eq(i).addClass("dsmax-active");
        } else {
            child.eq(i).removeClass("dsmax-active");
        }
    }
    setka.stateChange(currentId);
    kruchki.stateChange(currentId);
    korziny.stateChange(currentId);
    stellagi.stateChange(currentId);
    stoyki.stateChange(currentId);
    stoykiVertushki.stateChange(currentId);
    containery.stateChange(currentId);
}

function currentHeader(currentIdheader){
    for (var i = 0; i < childHeader.length; i++) {
        if (childHeader.eq(i).attr("id") === currentIdheader) {
            childHeader.eq(i).addClass("dsmax-active-1");
        } else {
            childHeader.eq(i).removeClass("dsmax-active-1");
        }
    }
}

curry.click(function(){
    current($(this).attr('id'));
});

currentNav.click(function(){
    currentHeader($(this).attr('id'));
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 40){
        $(".dsmax-header").addClass("dsmax-header-fixed-top");
        
    }
    else{
        $(".dsmax-header").removeClass("dsmax-header-fixed-top");
    }
})



