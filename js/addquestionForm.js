 class addquestionForm {

   constructor() {
    this.input = createInput('grade');
    this.input1 = createInput('level');
    this.input2 = createInput('question');
    this.input3 = createInput('answer');
    this.addbutton = createButton('add');
 }

  display(){
    this.addbutton.position(displayWidth/2 + 30, displayHeight/2);
    this.addbutton.position(displayWidth/2 + 30, displayHeight/2);
    this.addbutton.position(displayWidth/2 + 30, displayHeight/2);
    this.addbutton.position(displayWidth/2 + 30, displayHeight/2);

this.addbutton.mousePressed(()=>{
  quesitionanswer.grade = this.input.value();
  quesitionanswer.level = this.input1.value();
  quesitionanswer.question = this.input2.value();
  quesitionanswer.answer = this.input3.value();
  SrNoCount+=1;
  quesitionanswer.SrNo = SrNoCount;
  quesitionanswer.update();
  questionanswer.updateCount(SrNoCount);
  
});


    


    //this.reset.mousePressed(()=> {
      //player.updateCount(0);
     // game.update(0);

    //});
      
  }

}
