alert('Boas-vindas ao jogo do número secreto');
let maxNumber = 5000;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let experiment;
let attempts = 1;

while (experiment != secretNumber) {
    experiment = prompt(`Escolha um número entre 1 e ${maxNumber}`);

    if (experiment == secretNumber) {
        break;
    } else {
        if (experiment > secretNumber) {
            alert(`O número secreto é menor que ${experiment}`);
        } else {
            alert(`O número secreto é maior que ${experiment}`);
        }
        attempts++;
    }
}

let attemptWord = attempts > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você descobriu que o número secreto é ${secretNumber} com ${attempts} ${attemptWord}`);