var roll = function (howMany, maxAmount) {
    var total = 0;
    var whatToSay = [];
    whatToSay[0] = howMany + 'd' + maxAmount + '\n';

    for (i = 0; i < howMany; i++) {
        var value = Math.floor(Math.random() * Math.floor(maxAmount)) + 1;
        whatToSay[i + 1] = value;

        whatToSay[0] += value + ', ';

        total = value + total;

    };
    whatToSay[0] += '\n' + 'for a total of : ' + total + '\n';
    //console.log(whatToSay[0]);
    return Promise.resolve(whatToSay);

}


console.log('wo33o');

var whatToWrite = function (value) {
    console.log("hello")
    var whattowrite = value[0];
    var newArray;
    var amountAbove2 = 0;
    var amountAbove3 = 0;
    var amountAbove4 = 0;
    var amountAbove5 = 0;
    var amountAbove6 = 0;
    var amontdone = 0;
    for (i = 1; i < value.length + 1; i++) {
        amontdone++;
        
        if (value[i] >= 2){
            amountAbove2++
        }
        
        if (value[i] >= 3){
            amountAbove3++
        }
        
        if (value[i] >= 4){
            amountAbove4++
        }
        
        if (value[i] >= 5){
            amountAbove5++
        }
        
        if (value[i] >= 6){
            amountAbove6++
        }

    }
    whattowrite = whattowrite + "\n2 and up: " + amountAbove2;
    whattowrite = whattowrite + "\n3 and up: " + amountAbove3;
    whattowrite = whattowrite + "\n4 and up: " + amountAbove4;
    whattowrite = whattowrite + "\n5 and up: " + amountAbove5;
    whattowrite = whattowrite + "\n6 and up: " + amountAbove6;
    $('#comment').val(whattowrite);
    var newWhattoWrite = whattowrite.split("\n");
    var resultWhattowrite = "";
    for (i=0; i < newWhattoWrite.length; i++){
        resultWhattowrite += "<p>" + newWhattoWrite[i] + "</p>";  
    }
    $('#results').html(resultWhattowrite);
}

$('#buttonD2').click(function () {
    roll($('#d2').val(), 2).then(function (res, err) {
        console.log("the res is :\n" + res)
        whatToWrite(res);
    });

});

$('#buttonD3').click(function () {
    roll($('#d3').val(), 3).then(function (res, err) {
        console.log("the res is :\n" + res)
        whatToWrite(res);
    });

});

$('#buttonD4').click(function () {
    roll($('#d4').val(), 4).then(function (res, err) {
        whatToWrite(res);
    });
});
$('#buttonD6').click(function () {
    roll($('#d6').val(), 6).then(function (res, err) {
        whatToWrite(res);
    });

});
$('#buttonD8').click(function () {
    roll($('#d8').val(), 8).then(function (res, err) {
        whatToWrite(res);
    });

});
$('#buttonD10').click(function () {
    roll($('#d10').val(), 10).then(function (res, err) {
        whatToWrite(res);
    });
});
$('#buttonD12').click(function () {
    roll($('#d12').val(), 12).then(function (res, err) {
        whatToWrite(res);
    });

});
$('#buttonD20').click(function () {
    roll($('#d20').val(), 20).then(function (res, err) {
        whatToWrite(res);
    });

});
$('#buttonD100').click(function () {
    roll($('#d100').val(), 100).then(function (res, err) {
        whatToWrite(res);
    });

});
$('#buttonD1000').click(function () {
    roll($('#d1000').val(), 1000).then(function (res, err) {
        whatToWrite(res);
    });

});

$('#buttonD').click(function () {
    roll($('#xd').val(), $('#dx').val()).then(function (res, err) {
        whatToWrite(res);
    })
})


function myFunction(x) {
    if (x.matches) { // If media query matches

        $("#MobileResults").attr('id', 'notAva');
    } else {

        $("#notAva").attr('id', 'MobileResults');
    }
}

console.log('asdffdsa');
var x = window.matchMedia("(min-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes