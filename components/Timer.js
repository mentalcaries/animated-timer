class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this._start);
    this.pauseButton.addEventListener('click', this._pause)
  }
  _start = () => {
    this._tick;
    this.interval = setInterval(this._tick, 1000);
  };
  _tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value)
  };

  _pause = () => {
    clearInterval(this.interval);
  };
}

export default Timer;
