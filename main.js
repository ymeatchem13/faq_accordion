var displayAnswerOne = false;
var displayAnswerTwo = false;
var displayAnswerThree = false;
var displayAnswerFour = false;

(function(window, document, undefined) {

    window.onload = init;

    function init() {
        document.getElementById("minus1").style.display = 'none';
        document.getElementById("minus2").style.display = 'none';
        document.getElementById("minus3").style.display = 'none';
        document.getElementById("minus4").style.display = 'none';
        document.getElementById("p1").style.display = 'none';
        document.getElementById("p2").style.display = 'none';
        document.getElementById("p3").style.display = 'none';
        document.getElementById("p4").style.display = 'none';
    };
})(window, document, undefined);

function onQuestion1Clicked() {
    if (!displayAnswerOne) {
        document.getElementById("minus1").style.display = 'block';
        document.getElementById("plus1").style.display = 'none';
        document.getElementById("p1").style.display = 'block';
    }
    else {
        document.getElementById("minus1").style.display = 'none';
        document.getElementById("plus1").style.display = 'block';
        document.getElementById("p1").style.display = 'none';
    }
    displayAnswerOne = !displayAnswerOne;
}

function onQuestion2Clicked() {
    if (!displayAnswerTwo) {
        document.getElementById("minus2").style.display = 'block';
        document.getElementById("plus2").style.display = 'none';
        document.getElementById("p2").style.display = 'block';
    }
    else {
        document.getElementById("minus2").style.display = 'none';
        document.getElementById("plus2").style.display = 'block';
        document.getElementById("p2").style.display = 'none';
    }
    displayAnswerTwo = !displayAnswerTwo;
}

function onQuestion3Clicked() {
    if (!displayAnswerThree) {
        document.getElementById("minus3").style.display = 'block';
        document.getElementById("plus3").style.display = 'none';
        document.getElementById("p3").style.display = 'block';
    }
    else {
        document.getElementById("minus3").style.display = 'none';
        document.getElementById("plus3").style.display = 'block';
        document.getElementById("p3").style.display = 'none';
    }
    displayAnswerThree = !displayAnswerThree;
}

function onQuestion4Clicked() {
    if (!displayAnswerFour) {
        document.getElementById("minus4").style.display = 'block';
        document.getElementById("plus4").style.display = 'none';
        document.getElementById("p4").style.display = 'block';
    }
    else {
        document.getElementById("minus4").style.display = 'none';
        document.getElementById("plus4").style.display = 'block';
        document.getElementById("p4").style.display = 'none';
    }
    displayAnswerFour = !displayAnswerFour;
}