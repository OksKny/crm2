'use strict';


const income = prompt('Напишите сумму вашего дохода.');
if (income <= 15000) {
    console.log((income / 100) * 13);
} else if (income >= 50000) {
    console.log((income / 100) * 30);
} else if (income >= 15000 <= 50000) {
    console.log((income / 100) * 20);
} 