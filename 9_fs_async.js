
/// below Asynchronise////
//call back function run when we are done , when complete 
//ex is call back function is run every time of clicking a button

const { readFile, writeFile, read, write} = require('fs');

readFile('./content/first.txt', 'utf8', (err,result) => {
    if(err){
        console.log(err);
        return;
    }
    const first  = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result)
        }
    	)});

    
})