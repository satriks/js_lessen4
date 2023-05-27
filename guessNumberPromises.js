const rl = require("readline").createInterface(process.stdin, process.stdout);
let randomNumber = Math.round(Math.random() * 100);

async function getInput() {
    let promise = new Promise(function(resolve, reject) {
        rl.question('Введите число от 0 до 99 ', (input) => {
            let number = input;
            rl.pause();
            return resolve(number); 
            
        });  
    });
    return await promise;
}

async function game() {
    let count = 0;
    console.log('Угадай загаданное число от 0 до 99( выход = "q")');
    while (true) {
        let imp = await getInput()
        let num = +imp

        if (imp === "q") {
            console.log("Игра откончена, спасибо ! ");
            rl.close();
            break;
        }

        if (isNaN(num)) {
                console.log("Это не число ! ");
                continue;
                }

        count++;

        num > randomNumber ? console.log("Загаданное число меньше") : console.log("Загаданное число больше");
        
        if (num === randomNumber) {
            console.log(`Вы угадали число ${randomNumber}!, вы сделали: ${count} попыток`);
            rl.close();
            break;
         }

    }
    rl.close()
}
game()

   
