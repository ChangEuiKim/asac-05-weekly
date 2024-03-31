import gameController from './controller/GameController';

class App {
  constructor() {
    this.gameController = new gameController();
  }

  async play() {
    try {
      await this.gameController.runGame();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
