function drawGrid(squaresPerSide) {
    var squareDimension = $('#sketchpad').width() / squaresPerSide;

    for (var row = 0; row < squaresPerSide; row++) {
        for (var col = 0; col < squaresPerSide; col++) {
            var newSquare = document.createElement('div');
            newSquare.className = 'square';
            $(newSquare).css({
                'height': squareDimension,
                'width': squareDimension
            });
            $('#sketchpad').append(newSquare);
        }
        $('#sketchpad').append('<br/>');
        
    }
}

function clearGrid() {
    $('#sketchpad').empty();
}

$(document).ready(function() {
    //Set it up
    drawGrid(16);
    
    //Draw!
    $('.square').on('mouseenter', function() {
        $(this).addClass('drawn');
    });

    //Reset it
    $('#reset').on('click', function() {
        clearGrid();

        //Add something here to verify that input was an integer
        var squaresPerSide = prompt('How many squares per side would you like?');
        drawGrid(squaresPerSide);
    });
});
