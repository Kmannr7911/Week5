// OOP

//shapes
    //square
    //triangle
    //circle
    //rhombus
    
//animal
    //dogs
    //cats

//class Animals {
//     habitat
//     shelter
//     limbs
//     food
//     breath
// }

// class Dog extends Animals {

// }

// let myDog = new Dog ();
// debugger
// console.log()

// class Teacher extends  Person {
// }

// class Student extends Person {
// }

// let mitchell = new Teacher();
// console.log()


class Person {
    legs = 2
    name
    age

    constructor(name,age){
        this.name = age;
        this.age = age;

        this.getAgeAneName = () => {
            return 'I am ${this.name} and I am ${this.age} years old.'
        }
    }


}


class Student extends Person {

}