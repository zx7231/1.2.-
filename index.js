let name = 'Alex';
let balance = 100;

if (name == 'admin' ) {
  console.log('Администратор');
} else if (name == '') {
  console.log('Гость');
}  else if (balance >= 5000) {
  console.log ('ВИП-клиент');
 } else if  (balance >= 1000 ) {
  console.log ('Постоянный покупатель');
} 
console.log ();

let user;
let orderOwner;
user = 'netologist';
orderOwner = 'leo_tolstoy';

if ( orderOwner == user || user == 'admin') {
  console.log('Редактирование разрешено');
} else {
  console.log ('Заказ нельзя редактировать');
}
console.log ();

let bonusBalance = 500; // бонусный баланс;
let amountOrder = 3000; // суммы заказа;
let quantityBuy = 2; // количества покупок в этом месяце;
let standardAccrual = 10; //стандартный размер начисления в процентах;
let increasedAccrual = 20; // повышенного размера начисления в процентах;
let addition = 5; // добавки за частые покупки в процентах;
let result = 0; //итоговый процент;
let username = 'Процент от покупки:';

if (bonusBalance >= 5000 && quantityBuy >= 2) {
    result = increasedAccrual + addition;
  } else if (bonusBalance < 5000 && quantityBuy <2) {
     result = standardAccrual;
} else if (bonusBalance < 5000 && quantityBuy >= 2) {
    result = standardAccrual + addition;
} else if (quantityBuy = 1 || bonusBalance >= 5000 ) {
     result = increasedAccrual;
}
 console.log (username + result + '%');