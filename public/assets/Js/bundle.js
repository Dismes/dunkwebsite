(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){

var roll = function(howMany, maxAmount){
    var value = 0;

    for (i=0; i<howMany; i++){
        value = value + Math.floor(Math.random() * Math.floor(maxAmount)) + 1
        console.log(value);
    };
        return Promise.resolve(value);
    
}


module.exports = {roll};

},{}],2:[function(require,module,exports){
var roll = require('./d20roller');


$('#buttonD2').click(function () {
    roll.roll($('#d2').val(), 2).then(function (res, err) {
        $('#comment').val(res);
    });

});
$('#buttonD3').click(function () {
    roll.roll($('#d3').val(), 3).then(function (res, err) {
        $('#comment').val(res);
    });

});

$('#buttonD4').click(function () {
    roll.roll($('#d4').val(), 4).then(function (res, err) {
        $('#comment').val(res);
    });

});
$('#buttonD6').click(function () {
    roll.roll($('#d6').val(), 6).then(function (res, err) {
        $('#comment').val(res);
    });

});
$('#buttonD8').click(function () {
    roll.roll($('#d8').val(), 8).then(function (res, err) {
        $('#comment').val(res);
    });

});
$('#buttonD10').click(function () {
    roll.roll($('#d10').val(), 10).then(function (res, err) {
        $('#comment').val(res);
    });

});
$('#buttonD12').click(function () {
    roll.roll($('#d12').val(), 12).then(function (res, err) {
        $('#comment').val(res);
    });

});
$('#buttonD20').click(function () {
    roll.roll($('#d20').val(), 20).then(function (res, err) {
        $('#comment').val(res);
    });

});
$('#buttonD100').click(function () {
    roll.roll($('#d100').val(), 100).then(function (res, err) {
        $('#comment').val(res);
    });

});
$('#buttonD1000').click(function(){
    roll.roll($('#d1000').val(), 1000).then(function(res, err){
        $('#comment').val(res);
    });

});
},{"./d20roller":1}]},{},[2]);