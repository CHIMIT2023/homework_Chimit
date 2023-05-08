

let user={
name:"Shashljk",
ingredients:"Meat,onions,salt,pepper,mayonnaise",
price:1500
}
let user2={
name:"buuzy",
ingredients:"beef,pork,onions,salt,pepper,dough",
price:500
};


console.log(user);
console.log(user2);
// массивы//
let users = ['Shashljk', 'buuzy'];
alert(users[0]); // 'Shashljk'
alert(users[1]); // 'buuzy'
console.log(users)
//удаление одного блюда//
users.shift();
alert (users[0]);
console.log(alert)
// добавление этого блюда обратно на первое место//
let user3 = ['buuzy'];
alert(user3[0]); 
user3.unshift({
name:"Shashljk",
ingredients:"Meat,salt,pepper,mayonnaise",
price:1500}
);
alert(user3[0]); 
console.log(user3)
//приготовление блюдо по времени//
let user4 = {
menu:[
    {name:"Shashljk",
    time:"60 min",
    price:1500},
    {name:"buuzy",
    time:"30 min",    
    price:500},
]
}
console.log(user4)
//выручка//
let user5 = {
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
console.log(user5)
//удаление всех элементов кроме одного//
let user6 = ['Shashljk', 'buuzy'];

user6.pop();

alert(users[1]) 
console.log(user6)
//конец//

