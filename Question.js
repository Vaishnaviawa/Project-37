class Question {
    constructor() {
      this.input1 = createInput("Your name here");
      this.input2 = createInput("Correct option number")
      this.button = createButton('Submit');
      this.title = createElement('h2');
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
    }
    hide(){
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("My Quiz game");
      this.title.position(350, 0);

      this.question.html("Question- If you don't keep me, I'll break. What am I?");
      this.question.position(150, 80);

      this.option1.html("1: An egg");
      this.option1.position(150, 150);
      
      this.option2.html("2: A promise");
      this.option2.position(150, 180);
  
      this.input1.position(150, 230);
      this.input2.position(150, 270);
      this.button.position(330, 230);
  2
    this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.answer = this.input2.value();
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
    });
  
    }
  }
  