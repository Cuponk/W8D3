Function.prototype.myBind = function(context){

    // console.log(this);  // [Function: turnOn]
    // console.log(context); //Lamp { name: 'a lamp' }
    // console.log(this.apply(context));   // Turning on a lamp

    return () => {this.apply(context)}
}


// TESTING 
class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
};
  
  const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"    