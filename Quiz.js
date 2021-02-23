class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question();
          question.display();
        }
      }

     // allAnswers = [a1, a2, a3, a4];

      play(){
        question.hide();
        background("yellow");
        textSize(25);
        text("RESULTS!", 400, 250);
        
        Contestant.getContestantInfo();
        
        if(allContestants !== undefined){       
          var allAnswers = 230;
  
          for(var plr in allContestants){
            ////add 1 to the index for every loop
           // index = index + 1 ;
    
             var correctAns = "2";
             if (correctAns === allContestants[plr].answer){
               fill("green");
            }  else{
          fill("red");
         }

          allAnswers += 30;

        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 400, allAnswers);
          }
        }
      }
    }