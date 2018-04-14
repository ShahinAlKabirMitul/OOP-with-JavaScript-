function StopWatch() {
  let startime,
    endtime,
    running,
    duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    },
    set: function(value) {
      duration = value;
    },
  });
  Object.defineProperty(this, 'startime', {
    get: function() {
      return startime;
    },
  });
  Object.defineProperty(this, 'endtime', {
    get: function() {
      return endtime;
    },
  });
  Object.defineProperty(this, 'running', {
    get: function() {
      return running;
    },
  });
}
StopWatch.prototype.start = function() {
  if (running) {
    throw new Error('StopWatch all ready start');
  }
  this.running = true;
  this.startime = new Date();
  console.log('start time', startime);
};
StopWatch.prototype.stop = function() {
  if (!running) {
    throw new Error('StopWatch not stat yet , please start first');
  }
  this.running = false;
  this.endtime = new Date();
  const seconds = (endtime.getTime() - startime.getTime()) / 1000;
  this.duration += seconds;
};
StopWatch.prototype.reset = function() {
  this.startime = null;
  this.endtime = null;
  this.duration = 0;
  this.running = false;
};

const sw = new StopWatch();
