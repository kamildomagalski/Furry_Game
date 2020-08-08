import "../sass/main.scss";


class Furry {
  constructor(x=0, y=0, direction='right') {
    this.x = x
    this.y = y
    this.direction = direction
  }
}

class Coin {
  constructor() {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
  }
}

class Game {
  constructor() {
    this.board = document.querySelectorAll('#board div')
    this.furry = new Furry()
    this.coin= new Coin()
    this.score= 0
  }
  index(x,y) {
    return x + (y*10);
  }
  showFurry(){
    this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry')
  }
  showCoin(){
    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin')
  }
  startGame(){
    this.idSetInterval= setInterval(function (){
      console.log('text z intreval');
    }, 250)
  }
}
const game= new Game;
game.showCoin();
game.showFurry();
game.startGame();
