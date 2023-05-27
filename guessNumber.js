
const rl = require("readline").createInterface(process.stdin, process.stdout);
let randomNumber = Math.round(Math.random() * 100);
let count = 0;
let fs = require('fs');
fs.writeFile(__dirname + '/debug.log', `\n` , (err) => {
    if(err) throw err;
    })

let logFile = (text) => fs.appendFile(__dirname + '/debug.log', text + '\n', (err) => {
    if(err) throw err;
});

console.log('Угадай загаданное число ( выход = "q")');
logFile('Угадай загаданное число ( выход = "q")');
console.log(randomNumber);

function game() {
    logFile("Введите число от 0 до 99 ",)
    rl.question("Введите число от 0 до 99 ", (imp) => {
        logFile(imp)
        let num = +imp
        if (imp === "q") {
            logFile("Игра откончена, спасибо ! ")
            console.log("Игра откончена, спасибо ! ");
            rl.close();
            return;
        }

        if (isNaN(num)) {
            logFile("Это не число ! ")
            console.log("Это не число ! ");
            game()
         }

         count++;

        if (num === randomNumber) {
            logFile(`Вы угадали !, вы сделали: ${count} попыток`)
            console.log(`Вы угадали !, вы сделали: ${count} попыток`);
            rl.close();
            return;
         } 
         num > randomNumber ? logFile("Загаданное число меньше") : logFile("Загаданное число больше")
        num > randomNumber ? console.log("Загаданное число меньше") : console.log("Загаданное число больше");
         

        rl.pause()
        game()

        })
    }
    

game()


