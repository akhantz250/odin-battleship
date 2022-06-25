import { Gameboard } from './gameboard';
import { helper } from './helper';

const Player = function () {
  const gameboard = Gameboard();

  const placeRandom = function () {
    const ships = ['carrier', 'battleship', 'destroyer', 'submarine', 'boat'];
    for (let i = 0; i < ships.length; i++) {
      while (
        !gameboard.placeShip(
          helper.getRandomInt(100),
          helper.getRandomInt(100),
          ships[i],
          helper.randomTrueOrFalse()
        )
      ) {}
    }
  };

  const placeShip = function (x, y, shipname, horizontal) {
    return gameboard.placeShip(x, y, shipname, horizontal);
  };

  const attack = function (x, y) {
    return gameboard.receiveAttack(x, y);
  };

  const randomAttack = function () {
    const moves = getLegiblePlacement();
    const length = moves.length;
    const placement = moves[helper.getRandomInt(length)];
    attack(...placement);
  };

  const checkWin = function () {
    return gameboard.isFleetDestroyed();
  };

  const getBoard = () => gameboard;

  function getLegiblePlacement() {
    const legibleMoves = [];
    const board = gameboard.getGameboard();
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        if (board[x][y] === 'O' || board[x][y] === 'X') {
          legibleMoves.push([x, y]);
        }
      }
    }
    return legibleMoves;
  }

  return {
    getLegiblePlacement,
    getBoard,
    placeShip,
    placeRandom,
    gameboard,
    randomAttack,
    checkWin,
    attack,
  };
};

export { Player };
