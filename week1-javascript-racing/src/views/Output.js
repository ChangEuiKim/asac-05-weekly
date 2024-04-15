import { Console } from "@woowacourse/mission-utils";

class Output {
  static showGame(printInfo) {
    printInfo.forEach(car => {
      Console.print(`${car.name} : ${'-'.repeat(car.count)}`);
    });
  }
  
  static showResult(getWinners) {
    Console.print(`최종 우승자 : ${getWinners.join(', ')}`);
  }
}

export default Output;
