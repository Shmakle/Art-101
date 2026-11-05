//page colors
//the word "colors" allowes for a varied chice of colorst to add in the function (expects a color)
function paintPage(color){
    $("body").css ("background-color", color);
}

paintPage("tan");

//The clicker
// order of the lines is very important
let counter=0;
let colorscount=0;
let colors =["green","orange","brown","yellow","pink","cornflowerblue","red","purple","cyan","gold","maroon","blue","grey","cornsilk","turquoise","indigo","ivory","aquamarine","violet","tomato"];

let buttonText="";

$("#needy-button").click(function(){

//counter goes up by one ------------------
    counter = counter +1;
    
//counts in the console on the site --------------------------
    console.log(counter);
    console.log(colors[colorscount]);

   if (counter <= 5) buttonText="You actualy clicked?? " + counter + " times! You are now..." + colors[colorscount]

    $("#needy-button").html(buttonText);

//remember this changes background --------------------------
    paintPage(colors[colorscount]);
    //or 
    // $("body").css("background-color",colors[colorscount]);

    
     if(counter < 5) {$("#needy-button").after ("<p> Mood: Chill </p>");}
     else if ((counter >= 5) && (counter < 15)) {$("#needy-button").after ("<p> Mood: Annoyed </p>");}
     else if (counter >= 15) {$("#needy-button").after ("<p> Mood: Angry </p>");}

    colorscount = colorscount +1;  

// for when we run out of colors (we start over)
    if (colorscount >= 20) {colorscount = 0;};


    if (counter >=5) buttonText="HEY!! relax, why did you click me " + counter + " times! Have you even noticed you are " + colors [colorscount] + " now?";
    
    if (counter >=15) buttonText= "STOP!... " + counter + " clicks is enough!! you probably dont even see the " + colors [colorscount] + " background do you"
 

});


$(".color-circle").click( function(){
    console.log("One of the circles was clicked")
    paintPage(this.id);
});



