import Input from '../views/Input';
import Output from '../views/Output';
import Racing from '../model/Racing';
import Car from '../model/Car';

class GameController {
  constructor() {
    this.input = new Input();
  }

  /**
   * 자동차 이름 배열을 받아서 Car 인스턴스를 인자로 가지는 Racing 인스턴스를 생성한다.
   * @returns {Promise<Racing>} Racing 인스턴스를 반환한다.
   */
  async initializeRacing() {
    try {
      const nameArray = await this.input.readCarNames();      
      const carList = nameArray.map(name => new Car(name));
      return new Racing(carList);
    } catch (error) {
      throw error;
    }    
  }

  /**
   * 게임을 실행한다.
   */
  async runGame() {
    try {
      const racing = await this.initializeRacing();
      const rounds = await this.input.readRounds();      
      for (let i = 0; i <= rounds; i++) {
        racing.race();
        Output.showGame(racing.getPrintInfo());
      }

      Output.showResult(racing.getWinners());

    } catch (error) {
      throw error;
    }    
  }
}

export default GameController;
