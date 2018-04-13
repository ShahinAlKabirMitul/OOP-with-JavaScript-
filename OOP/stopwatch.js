function StopWatch() {
  let startime,
    endtime,
    running,
    duration = 0;
  this.start = function() {
    if (running) {
      throw new Error('StopWatch all ready start');
    }
    running = true;
    startime = new Date();
    console.log('start time', startime);
  };
  this.stop = function() {
    if (!running) {
      throw new Error('StopWatch not stat yet , please start first');
    }
    running = false;
    endtime = new Date();
    const seconds = (endtime.getTime() - startime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function() {
    startime = null;
    endtime = null;
    duration = 0;
    running = false;
  };

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    },
  });
}
const sw = new StopWatch();
