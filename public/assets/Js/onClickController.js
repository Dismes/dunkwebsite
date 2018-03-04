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