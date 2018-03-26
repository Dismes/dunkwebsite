$('#createOptionsButton').click(function () {

    var value = parseInt($('#pollExtender').attr('value')) + 1;
    var poll = '<div class="form-group"><label for="Options">Add Options:</label><input id="option' + value + '" value="1" class="form-control" id="dx"></div>';
    console.log("Poll should be running")
    $('#pollExtender').attr('value', value);
    $('#pollExtender').html($('#pollExtender').html() + poll);
})

$()