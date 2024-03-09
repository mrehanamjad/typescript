// tupples in tS

type enrollInfo = readonly [string, number, boolean];

const displayInrollInfo=(person:enrollInfo):void => {
    const [language,year,isLearning] = person;
    console.log(`Language: ${language}, Year: ${year} ,isLearning: ${isLearning}`);
}

const Person1: enrollInfo = ["Ts", 2024, true];
const Person2: enrollInfo = ["Java", 2024, false];

displayInrollInfo(Person1);
displayInrollInfo(Person2);


// Question 1:
// You are building a simple e-commerce application and need to store product information.Define a tuple type called Product Info to represent each product, containing the following elements:
// Product name (string)
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.



