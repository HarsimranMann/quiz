class Quiz {
  constructor(){}

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
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    //write code to change the background color here
    background("Yellow")  
    //write code to show a heading for showing the result of Quiz
    textSize(30)
    text("result of the quiz",340,50)
    text("--------------------------",320,65)
    //call getContestantInfo( ) here
   Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(AllContestants !== undefined){
    textSize(20)
    fill("black")
    

    
    //write code to add a note here
    text("*Note: Contestants who answered correctly are highlighted in green color!",130,230)
    //write code to highlight contest who answered correctly
    for(Plr in AllContestants){
    var correctAns ="2";
    if(correctAns === AllContestants[Plr].answer)
    fill("green");
    else
    fill("red");
    }
    }
  }

}
