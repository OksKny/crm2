'use strict';
const rain = Math.random();
const mat = +(prompt('Введите кол-во баллов по математике:'));
const russ = +(prompt('Введите кол-во баллов по русскому языку:'));
const info = +(prompt('Введите кол-во баллов по информатике:'));
const bank = +(prompt('Введите сумму, которую хотите снять'));

console.log('Math.round(): ', Math.round(rain));
if (Math.round(rain) === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else {
    console.log('Дождя нет!');
}

if (mat + russ + info >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
} else {
    console.log('Вы не поступили не бюджет!');
}

if (bank % 100 == 0) {
    console.log('Заберите деньги');
} else {
    console.log('К сожалению, не сможем выдать запрашиваемую сумму. Минимальная купюра, которую можем выдать 100 рублей.');
}









