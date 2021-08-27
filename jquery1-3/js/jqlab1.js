$('p:eq(1)').attr('id', 'identification');
$('#fp').remove();
$('#fdiv').css(
    {
    backgroundColor: 'grey',
    color: 'white'
        }
    );

    function sayHello() {
        $('div:first').append('<p>Hello user</p>');
    }

    $('button').click(sayHello);

    $('#4p').hide();

    $('#sdiv').hover(
        function(){
            $('#4p').text('About to select a link ...').show();
        },
        function () {
            $('#4p').hide();
        }
    )