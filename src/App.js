import Input from './views/Input';

class App {
  constructor() {
    this.input = new Input();
  }

  async play() {
    try {
      const nameArray = await this.input.readCarNames();
      const rounds = await this.input.readRounds();

      // 게임 처리

    } catch (error) {
      throw error;
    }
  }
}

export default App;
