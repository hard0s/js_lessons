"Use strict";
//Первое задание
console.log('Первое задание')
let startNumber = Math.round(Math.random() * 899) + 100;
let unitsNumber = startNumber % 10;
let x = startNumber % 100;// разряд десятков и единиц
let dozensNumber = (x - unitsNumber) / 10;
let hundredsNumber = (startNumber - x) / 100;
let sum = hundredsNumber + dozensNumber + unitsNumber;
let mult = hundredsNumber * dozensNumber * unitsNumber;
console.log('число:',startNumber);
console.log('сумма:',sum)
console.log('произведение:',mult)

console.log('Второе задание')
const firstNumber = Math.round(Math.random()*100);
const secondNumber = Math.round(Math.random()*100);
let frac = ((firstNumber + secondNumber) / 2) ;
let v = (((firstNumber + secondNumber) / 2) % 1) ;

console.log('Первое число:', firstNumber)
console.log('Второе число:', secondNumber)
console.log('Среднее арифметическое',frac);
console.log('Дробная часть:',v)
