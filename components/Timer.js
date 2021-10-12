class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this._start)
  }
  _start(){
    console.log('time to start')
  }


}

export default Timer;
