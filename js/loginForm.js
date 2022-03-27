class loginForm {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    
    this.input = createInput('username');
    this.input1 = createInput('Password');
    this.input2 = createInput('standard');
    this.button = createButton('Play');
  }
  hide(){
    this.button.hide();
    this.input.hide();
    this.input1.hide();
  }
  
  
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
