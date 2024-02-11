// Assignment 1
fruits=[]

fruits.push("apple","banana","orange")

fruits.splice(0,1)

fruits.push("grape")

fruits.splice(1,0,"pear")

console.log(fruits)


// Assignment 2
const person = {}

person.name="John"
person.age = 30
person.city = "New York"

delete person.age

person["job"] = "Engineer"

person["city"] = "San Fransico"

console.log(person)


// Assignment 3
let cars = []

const car1 = {
    make : 'Toyota',
    model : 'Camry',
    year : '2018'
}

const car2 = {
    make : 'Mahindra',
    model : "Scorpio",
    year : 2022
}

const car3 = {
    make : 'Toyota',
    model : "Innova Crysta",
    model : 2021
}

cars.push(car1,car2,car3)

cars.splice(0,1)

const car4 = {
    make : "Honda",
    model : "Civic",
    year : 2020 
}

cars.push(car4)

cars[2]["model"] =  "Accord"

console.log(cars)