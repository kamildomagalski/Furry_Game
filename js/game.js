import Furry from "./furry";
import Coin from "./coin";

class Game {
  constructor() {
    this.board = document.querySelectorAll('section#board div')
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
  
  hideCoin() {
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
    this.gameOver();
    this.hideVisibleFurry()
    this.showFurry();
    this.checkCoinCollision();
  }
  
  startGame() {
    this.idSetInterval = setInterval(() => this.moveFurry(), 250);
  }
  
  hideVisibleFurry() {
    const furryClass = document.querySelector('.furry');
    furryClass.classList.remove('furry');
  }
  
  turnFurry(turnEvent) {
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
  
  checkCoinCollision() {
    if (this.index(this.furry.x, this.furry.y) === this.index(this.coin.x, this.coin.y)) {
      this.hideCoin();
      this.score++;
      const scoreBoard = document.getElementById('score');
      scoreBoard.innerText = this.score;
      this.coin = new Coin;
      this.showCoin();
    }
  }
  
  gameOver() {
    if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
      clearInterval(this.idSetInterval);
      this.hideVisibleFurry();
      this.furry = new Furry;
      document.querySelector('.coin').classList.remove('coin');
      this.coin = new Coin;
      document.getElementById('over').classList.remove('hide');
      document.getElementById('final-score').innerText = this.score;
      
    }
  }
  
  watchDirection() {
    document.addEventListener('keydown', event => this.turnFurry(event));
  }
}

export default Game