class Questionsanswer {
    constructor(){
      this.SrNoCount = 0;
      this.grade = 2;
      this.level= "Easy";
      this.question="";
      this.answer="";
    }
  
    getSrNoCount(){
    var SrNoCountRef = database.ref('SrNo');
    SrNoCountRef.on("value",(data)=>{
     SrNoCount = data.val();
      })
    }
  
  
    //getCarsAtEnd(){
    //database.ref('carsAtEnd').on("value",(data)=>{
      //this.rank=data.val();
   // })
    //}
  

  
    update(){
      var questionsIndex = "questions/SrNo" + this.index;
      database.ref(questionsIndex).set({
        grade:this.grade,
        level:this.level,
        question:this.question,
        answer:this.answer,
        
      });
    }
  

  }
  