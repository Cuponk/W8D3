const readline = require("readline");
const { callbackify } = require("util");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? `, res => {
        if (res === 'yes'){
            callback(true);
        }
        else if (res === 'no'){
            callback(false);
        }
        else {
            console.log("i dont understand, please try again");
            askIfGreaterThan(el1, el2, callback);
        }
    });
  // Prompt user to tell you whether el1 > el2; pass true back to the
  // callback if true; else false.
}
// askIfGreaterThan(1, 2)




// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  if (i == arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps)
  } else {
      askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
        if (isGreaterThan) {
          let temp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = temp;
          madeAnySwaps = true; 
        }
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

}



const callback = function(isGreaterThan){
    if (isGreaterThan) {
        let temp = this[i + 1];
        this[i + 1] = this[i];
        this[i] = temp;
        madeAnySwaps = true;
    }
}


// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    
    if (madeAnySwaps) {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }else {
        sortCompletionCallback(arr);
    }
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }
  innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});