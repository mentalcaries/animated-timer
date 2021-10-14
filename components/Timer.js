class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    this.startButton.addEventListener('click', this._start);
    this.pauseButton.addEventListener('click', this._pause)
  }
  _start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this._tick;
    this.interval = setInterval(this._tick, 50);
  };
  _tick = () => {
    if (this.timeRemaining <= 0) {

      this._pause();
      if (this.onComplete) {
        this.onComplete();
      }
    }
    else {
      this.timeRemaining -= .05
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  _pause = () => {
    clearInterval(this.interval);
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value)
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2)
  }
}

export default Timer;
