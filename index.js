'use strict';

const productName = prompt('Напишите название товара!');
const productCategory = prompt('Напишите категорию товара!');
const productQuantity = +(prompt('Напишите количество товара!'));
const productPrice = +(prompt('Напишите цену товара!'));

if (Number.isNaN(productQuantity) || Number.isNaN(productPrice)) {
  console.log("Вы ввели некоректные данные");
} else {
  console.log(`На складе ${productQuantity} единиц товара ${productName} на сумму ${productQuantity * productPrice} деревянных`);
}










