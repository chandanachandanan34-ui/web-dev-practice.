var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern= [];
var level=0;
var started = false;
$(document).keydown(function(){
    if(!started){
        nextSequence();
        started=true;
    }

});
$(".btn").on("click", function() {
    var userChosenColour = $(this).attr("id");
     // get the clicked button color
    userClickedPattern.push(userChosenColour);

     playSound(userChosenColour);               // play the sound
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length -1);
});

function nextSequence()
{
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100); 
    playSound(randomChosenColour);

}
function playSound(name) 
    {
      var  audio = new Audio("./sounds/" + name + ".mp3");
      audio.play();
    }


function animatePress(currentColour){
    $('#' + currentColour).addClass("pressed");
    setTimeout(function(){
        $('#'  + currentColour).removeClass("pressed");
    } , 100);

}


function checkAnswer(currentLevel){
   if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
          if(userClickedPattern.length === gamePattern.length){
                setTimeout(function(){
                nextSequence();
                userClickedPattern=[];
        },1000);
         }
         }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game over,Press any key to Restart.");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    userClickedPattern=[];
    started=false;
}