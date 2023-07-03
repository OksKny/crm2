'use strict';

const productName = prompt('Напишите название товара!');
const productQuantity = +(prompt('Напишите количество товара!'));
if (isNaN(productQuantity)) {
  console.log('Вы ввели некорректные данные');
  } 
  
const productCategory = prompt('Напишите категорию товара!');
const productPrice = +(prompt('Напишите цену товара!'));
if (isNaN(productPrice)) {
  console.log('Вы ввели некорректные данные');
} 

console.log(productName);
console.log(productQuantity);
console.log(productPrice);
console.log(productQuantity * productPrice);
console.log(`На складе ${productQuantity} единиц товара ${productName} на сумму ${productQuantity * productPrice} деревянных`);








