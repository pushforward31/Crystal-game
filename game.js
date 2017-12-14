//Initiate game
    $(document).ready(function() {
        

    //create random number to be targeted
var target = Math.floor((Math.random() * 50) +60);
    console.log(""+ target);
    document.getElementById("ranNumber").innerHTML = target;
    
    //$("<span></span").text(""+target);


       /*$("#ranNumber").click(function(){*/
     
        //create random number for each crystal
    //var number = Math.floor((Math.random() * 20) + 1)
var counter = 0;
var choiceArray = [3, 5, 10, 11];

// a crystal per number and for value of crystal
for(var i = 0; i < choiceArray.length; i++){

var crystal = $("<img>")
//var choices = choiceArray[Math.round((Math.random()))];

//add class
crystal.addClass("crystal");

//add attributes for picture and data value
crystal.attr("src", "https://www.bestcrystals.com/Content/Images/uploaded/NewFolder2/KyaniteImage.jpg");

crystal.attr("data-crystalvalue", choiceArray[i]);

//add this class and attributes to div

$("#crystal").append(crystal);
};

//click choices for each crystal


 $(".crystal").on("click", function(){

var crystalChoices = ($(this).attr("data-crystalvalue"));
    crystalChoices = parseInt(crystalChoices);
// Each time the user clicks the crystal the counter goes up by 1.
    counter += crystalChoices;

//document.getElementById("sumtotal").innerHTML
    console.log("New score" + "" + counter);
    


 //Wins and losses

if (counter === target){
    alert("You win")
}
    else if (counter>= target){
        alert ("you lose")
    };
    
});


 
 