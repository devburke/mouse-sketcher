function drawGrid(squaresPerSide) {
    //Add rows
    for (var i = 0; i < squaresPerSide; i++) {
        $('#sketchpad').append('<div class="row"></div>');
    }

    //Fill rows
    for (var i = 0; i < squaresPerSide; i++) {
        $('.row').append('<div class="square"></div>');
    }

    //Set square sizes
    var squareDimension = $('#sketchpad').width() / squaresPerSide;
    $('.square').css({
        'height': squareDimension,
        'width': squareDimension
    });
}

$(document).ready(function() {
    //Set it up
    drawGrid(16);

    //Draw!
    $('#sketchpad').on('mouseenter', '.square', function() {
        $(this).addClass('drawn');
    });

    //Reset
    $('#reset').on('click', function() {
        $('#sketchpad').empty();

        //Add something here to verify that input was an integer
        var squaresPerSide = prompt('How many squares per side would you like?',16);
        drawGrid(squaresPerSide);
    });
});
