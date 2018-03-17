var roll = function (howMany, maxAmount) {
    var total = 0;
    var whatToSay = howMany + 'd' + maxAmount + '\n';

    for (i = 0; i < howMany; i++) {
        var value = Math.floor(Math.random() * Math.floor(maxAmount)) + 1;

        whatToSay += value + ', ';

        total = value + total;

    };
    whatToSay += '\n' + 'for a total of : ' + total + '\n';
    return Promise.resolve(whatToSay);

}

console.log('wo33o');

$('#buttonD2').click(function () {
    roll($('#d2').val(), 2).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
        console.log('helloasdf')
    });

});
$('#buttonD3').click(function () {
    roll($('#d3').val(), 3).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    });

});

$('#buttonD4').click(function () {
    roll($('#d4').val(), 4).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    });
});
$('#buttonD6').click(function () {
    roll($('#d6').val(), 6).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    });

});
$('#buttonD8').click(function () {
    roll($('#d8').val(), 8).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    });

});
$('#buttonD10').click(function () {
    roll($('#d10').val(), 10).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    });
});
$('#buttonD12').click(function () {
    roll($('#d12').val(), 12).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    });

});
$('#buttonD20').click(function () {
    roll($('#d20').val(), 20).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    });

});
$('#buttonD100').click(function () {
    roll($('#d100').val(), 100).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    });

});
$('#buttonD1000').click(function () {
    roll($('#d1000').val(), 1000).then(function (res, err) {
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    });

});

$('#buttonD').click(function(){
    roll($('#xd').val(), $('#dx').val()).then(function(res,err){
        var whattowrite = res + '\n' + $('#comment').val();
        $('#comment').val(whattowrite + '\n');
        $('#results').html(res);
    })
})


function myFunction(x) {
    if (x.matches) { // If media query matches

        $( "#MobileResults" ).attr('id','notAva');
    } else {

        $( "#notAva" ).attr('id','MobileResults');
    }
}

console.log('asdffdsa');
var x = window.matchMedia("(min-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes