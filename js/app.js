import "../sass/main.scss";


class Furry {
  constructor(x = 0, y = 0, direction = 'right') {
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
    this.coin = new Coin()
    this.score = 0
  }
  
  index(x, y) {
    return x + (10 * y);
  }
  
  showFurry() {
    this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry')
  }
  
  showCoin() {
    this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin')
  }
  hideCoin(){
    this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin')
  }
  
  moveFurry() {
    if (this.furry.direction === 'right') {
      this.furry.x = this.furry.x + 1;
    } else if (this.furry.direction === 'left') {
      this.furry.x = this.furry.x - 1;
    } else if (this.furry.direction === 'up') {
      this.furry.y = this.furry.y - 1;
    } else if (this.furry.direction === 'down') {
      this.furry.y = this.furry.y + 1;
    }
    this.hideVisibleFurry()
    this.showFurry();
    this.checkCoinCollision();
  }
  
  startGame() {
    const self = this;
    this.idSetInterval = setInterval(function () {
      self.moveFurry();
    }, 250)
  }
  
  hideVisibleFurry() {
    const furryClass = document.querySelector('.furry');
    furryClass.classList.remove('furry');
  }
  
  turnFurry(turnEvent = 38) {
    switch (turnEvent.which) {
      case 37:
        this.furry.direction = 'left'
        break;
      case 39:
        this.furry.direction = 'right'
        break;
      case 38:
        this.furry.direction = 'up'
        break;
      case 40:
        this.furry.direction = 'down'
        break;
    }
  }
  
  checkCoinCollision(){
    if (this.index(this.furry.x, this.furry.y) === this.index(this.coin.x, this.coin.y)){
      this.hideCoin();
     this.score ++;
      const scoreBoard=document.getElementById('score');
      scoreBoard.innerText= this.score;
      this.coin = new Coin;
      this.showCoin();
    }
  }
}

document.addEventListener('keydown', function (event) {
  game.turnFurry(event);
});
const game = new Game;
game.showCoin();
game.showFurry();
game.startGame();
