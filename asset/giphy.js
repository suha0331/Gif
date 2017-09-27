$(document).ready(function() {

    // Calling Batman Gif
    function batmanGif() {
        var batmanPicture ="https://media2.giphy.com/media/wAjfQ9MLUfFjq/200_s.gif"
        var img = document.getElementById('batman1')
        img.src = batmanPicture;
        img.style.display = "inline-block";

        var batmanPicture ="https://media1.giphy.com/media/14y3bdRzH8aT0k/200_s.gif"
        var img = document.getElementById('batman2')
        img.src = batmanPicture;
        img.style.display = "inline-block";

        var batmanPicture ="https://media2.giphy.com/media/JvlJSmxmKSXyE/200_s.gif"
        var img = document.getElementById('batman3')
        img.src = batmanPicture;
        img.style.display = "inline-block";
   
        var batmanPicture ="https://media3.giphy.com/media/15BuYJbJlNvBC/200_s.gif"
        var img = document.getElementById('batman4')
        img.src = batmanPicture;
        img.style.display = "inline-block";

        var batmanPicture ="https://media3.giphy.com/media/7NMG9vPM5kTpC/200_s.gif"
        var img = document.getElementById('batman5')
        img.src = batmanPicture;
        img.style.display = "inline-block";

        var batmanPicture ="https://media3.giphy.com/media/P2IERnBfObaBW/200_s.gif"
        var img = document.getElementById('batman6')
        img.src = batmanPicture;
        img.style.display = "inline-block";

        var batmanPicture ="https://media1.giphy.com/media/l0NwGpoOVLTAyUJSo/200_s.gif"
        var img = document.getElementById('batman7')
        img.src = batmanPicture;
        img.style.display = "inline-block";

        var batmanPicture ="https://media1.giphy.com/media/a5viI92PAF89q/200_s.gif"
        var img = document.getElementById('batman8')
        img.src = batmanPicture;
        img.style.display = "inline-block";
    };

    // Calling Wonder Woman Gif
    function wonderWomanGif(){
        var wonderWomanPicture ="https://media0.giphy.com/media/3osxYp14leBym7WiVa/200_s.gif"
        var img = document.getElementById('ww1')
        img.src = wonderWomanPicture;
        img.style.display = "inline-block";

        var wonderWomanPicture ="https://media0.giphy.com/media/Zsxw69qiLaMAE/200_s.gif"
        var img = document.getElementById('ww2')
        img.src = wonderWomanPicture;
        img.style.display = "inline-block";

        var wonderWomanPicture ="https://media3.giphy.com/media/YSw6jEFEgmr04/200_s.gif"
        var img = document.getElementById('ww3')
        img.src = wonderWomanPicture;
        img.style.display = "inline-block";
    }

    // Calling Iron Man Gif
    function ironManGif(){
        var ironManPicture ="https://media2.giphy.com/media/Uuo7YI3FwcTAI/200_s.gif"
        var img = document.getElementById('im1')
        img.src = ironManPicture;
        img.style.display = "inline-block";

        var ironManPicture ="https://media3.giphy.com/media/wohOGFXEDzg8U/200_s.gif"
        var img = document.getElementById('im2')
        img.src = ironManPicture;
        img.style.display = "inline-block";

        var ironManPicture ="https://media2.giphy.com/media/eqnT3nCRaXP8s/200_s.gif"
        var img = document.getElementById('im3')
        img.src = ironManPicture;
        img.style.display = "inline-block";

        var ironManPicture ="https://media2.giphy.com/media/rNNYWUpnLDR0k/200_s.gif"
        var img = document.getElementById('im4')
        img.src = ironManPicture;
        img.style.display = "inline-block";

        var ironManPicture ="https://media0.giphy.com/media/3BWLv26GvtamY/200_s.gif"
        var img = document.getElementById('im5')
        img.src = ironManPicture;
        img.style.display = "inline-block";

        var ironManPicture ="https://media1.giphy.com/media/XglCYiJb4duEw/200_s.gif"
        var img = document.getElementById('im6')
        img.src = ironManPicture;
        img.style.display = "inline-block";
    }

    //Button will triger the function to bring gif
    $("#batmanBtn").on("click", function() {
        batmanGif();
    });

    $("#wonderWomanBtn").on("click", function() {
        wonderWomanGif();

    });

    $("#ironManBtn").on("click", function() {
        ironManGif();

    });


    //Setting different states for gif
    $(".gif").on("click", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

});