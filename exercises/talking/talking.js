//what potato is saying
let messageA=["How ya doin pan-pan","Ya dont sound too fine my fluffy friend", "whats that sposed to mean Pan-Pan??","But it seems clean enough to me","would changeing the way this place looked make ya feel better?","well i got some options, chose one of these",];
let counterA=0
//what pancake sais
let messageB=["ugh, fiine... what about you?","Whatever brotato, its just this place dosnt feel right.","Ughh, I dunno dude, this place makes me feel like i need a syrup bath.", "yer from the dirt Brotato, YOU where alredy dirty before now.","... yeah.. but i think its just the background color",];
let counterB=0

// when A is clicked
// A speaks when counterA = counterB
$("#character-a").click(function () {

    if (counterA == 5) {
        $("#answers").css("display", "flex");
        $("#chat").append("<p>Brotato: " + messageA[counterA] + "</p>");
        counterA = counterA + 1;
        counterB=1000;
    }
    else if ( counterA == counterB ) {
        $("#chat").append("<p>Brotato: " + messageA[counterA] + "</p>");
        counterA = counterA + 1;
    }

});

// when B is clicked
// B speaks when counterB < counterA
$("#character-b").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>Pan-pan: " + messageB[counterB] + "</p>");
        counterB = counterB + 1;

    }

});


// make the color buttons work

$("#answer-green").click(function () {

    $("body").css( "background-color", "green" );
    $("#chat").append("<p> Brotato: how did u do that</p>");
    $("#answers").css("display", "none");

});

$("#answer-pink").click(function () {

    $("body").css( "background-color", "pink" );
    $("#chat").append("<p>Pan-pan: still do not like it</p>");
    $("#answers").css("display", "none");
    


});






