class Clock {
    constructor() {
        const date = new Date();
        this.ss = date.getSeconds();
        this.mm = date.getMinutes();
        this.hh = date.getHours();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log(this.ss, this.mm, this.hh);
    }
  
    _tick() {
        this.ss++;
        if (this.ss === 60){
            this.ss = 0;
            this.mm++;
        }
        if (this.mm === 60){
            this.mm = 0;
            this.hh++;
        }
        this.printTime();
      // 1. Increment the time by one second.
      // 2. Call printTime.
    }
  }


const clock = new Clock();

