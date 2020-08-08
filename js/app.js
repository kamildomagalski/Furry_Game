import "../sass/main.scss";
import Game from "./game"

document.querySelector('.btn').addEventListener('click', () => {
  document.getElementById('over').classList.add('hide');
  const game = new Game;
  game.showCoin();
  game.showFurry();
  game.watchDirection();
  game.startGame();
})

const game = new Game;
game.showCoin();
game.showFurry();
game.watchDirection();
game.startGame();
