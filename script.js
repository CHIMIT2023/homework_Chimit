

let Shashljk={
name:"Shashljk",
ingredients:"Meat,onions,salt,pepper,mayonnaise",
price:1500
}
let buuzy={
name:"buuzy",
ingredients:"beef,pork,onions,salt,pepper,dough",
price:500
};

let dish = [Shashljk,buuzy];
alert(dish.length);
console.log(dish);

//удаление одного блюда//
dish.shift();
alert (dish[0]);
console.log(alert);
// добавление этого блюда обратно на первое место//
let dish1 = ['buuzy'];
alert(dish1[0]); 
dish1.unshift({
name:"Shashljk",
ingredients:"Meat,salt,pepper,mayonnaise",
price:1500}
);
alert(dish1[0]); 
console.log(dish1);
//приготовление блюдо по времени//
let dish2 = {
menu:[
    {name:"Shashljk",
    time:"60 min",
    price:1500},
    {name:"buuzy",
    time:"30 min",    
    price:500},
]
}
console.log(dish2);
//выручка//
let dish4 = {
 many:[
     {name:"Shashljk",
     revenue:"1500",
     currency:"RUB",
    },
     {name:"buuzy",
     revenue:"500",
     currency:"RUB",
    },
]
}
console.log(dish4);
console.log(1500+500);
//удаление всех элементов кроме одного//
let dish5 = ['Shashljk', 'buuzy'];

dish5.pop();

alert(dish5[1]) 
console.log(dish5);
//конец//

