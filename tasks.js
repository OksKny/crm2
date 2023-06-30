'use strict';


const mat = Number(prompt('Введите кол-во баллов по математике:'));
if (isNaN(mat)) {
    alert('Вы ввели некорректные данные');
}
const russ = Number(prompt('Введите кол-во баллов по русскому языку:'));
if (isNaN(russ)) {
    alert('Вы ввели некорректные данные');
}
const info = Number(prompt('Введите кол-во баллов по информатике:'));
if (isNaN(info)) {
    alert('Вы ввели некорректные данные');
}

if (mat + russ + info >= 265) {
    alert('Поздравляю, вы поступили на бюджет!');
} else {
    alert('Вы не поступили не бюджет!');
}

const bank = Number(prompt('Введите сумму, которую хотите снять'));
if (isNaN(bank)) {
    alert('Пожалуйста, напишите сумму цифрами');
}

if (bank >= 100) {
    alert('Заберите деньги')
} else {
    alert('К сожалению, не сможем выдать запрашиваемую сумму. Минимальная купюра, которую можем выдать 100 рублей.')
}

const rain = Math.random();

console.log('Math.round(): ', Math.round(rain));
if (Math.round(rain) < 1) {
    alert('Дождя нет!');
} else if (Math.round(rain) === 1){
    alert('Пошёл дождь. Возьмите зонт!');
}






