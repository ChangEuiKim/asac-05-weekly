import RacingCarInputView from './view/RacingCarInputView.js';

class App {
  constructor() {
    this.inputView = new RacingCarInputView();
  }

  async play() {
    // // pseudo code
    // // 1 입력
    const car_array = this.inputView.getRacingCarInput();
    const round_number = this.inputView.getRoundInput();
    // // 2 경기
    // const racing = new Racing(car_array, round_number);
    // const winner = racing.race();
    // const output = new Output();
    // // 3 출력
    // output.winner(winner);
  }
}

export default App;
