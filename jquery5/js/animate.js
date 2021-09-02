$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        const hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollLeft: $(hash).offset().left
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });


    // $('h1').hover(
    //     function(){
    //         $('nav').show().delay(200).fadeIn(200);
    //     },

    //     function () {
    //         $('nav').hide().delay(200).fadeOut(200);
    //     }
    // )

    $('h1').mouseenter(
        function(){
            $('nav').show().fadeIn(200);
        }
    )

    $('nav').mouseenter(
        function(){
            $('nav').show().fadeIn(200);
        }
    )

    $('h1').mouseleave(
        function(){
            $('nav').hide().fadeOut(200);
        }
    )

    $('nav').mouseleave(
        function(){
            $('nav').hide().fadeOut(200);
        }
    )


  });