
let count = 0

let buttonCreature = {
    name: "James",
    species: "virus",
    favoriteFood: "cursors",
    home: "this device",
    moods: ["elastic", "nervous", "glowing", "static", "hungry", "confused","explosive"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;
    let currentMood = buttonCreature.moods[arrayPosition];
    let message = "Im " + currentMood + " today";
    
     message = message + "<p>Oh hi, im " + buttonCreature.name + ", whats up?.</p>";
   
    message = message + "<p>I am a " + buttonCreature.species + " of sorts.</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

   
});


