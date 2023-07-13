const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback){
    
    if (numsLeft > 0) {
        rl.question('Enter a number: ', res => {
            sum = sum + parseInt(res);
            console.log(`Current Sum: ${sum}`);
            numsLeft--;
            addNumbers(sum, numsLeft, completionCallback);
        });
    } 
    else {
        console.log('DONE');
        console.log(completionCallback(sum));
        rl.close();
    } 
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


