'use strict';

const product = 'jeans';
const quantity = '50';
const category = 'trousers';
const price = '2000';

const productName = prompt('Напишите название товара!');
const productQuantity = typeof + (prompt('Напишите количество товара!'));
if (isNaN(productQuantity)) {
    alert('Вы ввели некорректные данные');
  } 
const productCategory = prompt('Напишите категорию товара!');
const productPrice = typeof + (prompt('Напишите цену товара!'));
if (isNaN(productPrice)) {
  alert('Вы ввели некорректные данные');
} 

console.log(product);
console.log(quantity * price);
console.log(`На складе ${quantity} единиц товара ${product} на сумму ${quantity * price} деревянных`);
console.log(productQuantity);
console.log(productPrice);




