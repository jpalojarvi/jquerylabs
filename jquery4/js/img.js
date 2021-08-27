$('button').click(function(){
    $('img').show();
    $('ul').html('');
    $('#advice').text('select your favorite colour among the colours');
    $('#sel').text(' your favourite colours in order');
    $('img').each(function (){
        $(this).attr('src', $(this).data('color') + '.jpg');
    });
});



$('img').click(function(){
    $('ul').append('<li>' + $(this).data('color') + '</li>')
    $(this).hide();
})