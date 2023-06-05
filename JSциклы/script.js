//1. все четные числа в промежутке от 0 до 10.

for (let b = 0; b <= 10; b++) {
    if (b % 2=== 0 ) { console.log (b);}
}

//2. Создал бесконечный цикл и прервал его на 5ой итерации.

let a = 0;
while (true) {
    console.log (a);
    if (a===5) { break; }
    a++
}

//3. Подсчёт стоимости приготовления с помощью цикла

let Shashljk = {
    name: `Shashljk`,
    price: 1500,
    ingredients: [`Meat`,`onions`,`salt`,`pepper`,`mayonnaise`] };


let buuzy = {
    name: `buuzy`, 
    price: 500,
    ingredients: [`beef`,`pork`,`onions1`,`salt1`,`pepper1`,`dough`] };




let DishPrice = {
    Meat: 650,
    onions: 120,
    salt: 50,
    pepper: 20,
    mayonnaise: 60,
    beef: 150,
    pork: 100,
    onions1: 50,
    salt1: 20,
    pepper1: 10,
    dough: 25
};

let dish = [ Shashljk,buuzy];


//стоимость шашлыка

let Shworth = 0;
        for (let i = 0; i < Shashljk.ingredients.length; i++) {
         let i2 = Shashljk.ingredients [i];
         Shworth += DishPrice[i2];
        }
    
console.log (Shworth);



//стоимость Бууз

let bworth = 0;
        for (let i = 0; i < buuzy.ingredients.length; i++) {
         let i3 = buuzy.ingredients [i];
          bworth += DishPrice[i3];
        }
    
console.log (bworth);


//доход 

let ShIncome;
for (let i = 0; i <= Shashljk.price; i++) {
ShIncome = Shashljk.price - Shworth;
}
console.log (ShIncome);


let bIncome;
for (let i = 0; i <= buuzy.price; i++) {
bIncome = buuzy.price - bworth;
}
console.log (bIncome);











