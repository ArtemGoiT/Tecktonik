// У вас є клас Product, який представляє товар в інтернет-магазині. 
// Однак при його використанні ви помітили, що в багатьох методах відсутні вказівники this.
// Твоя задача - вставити відсутні this в потрібні місця.
class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    displayInfo() {
        console.log(`Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }

    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
        console.log(`Quantity updated for ${this.name} to ${this.quantity}`);
    }
}
// методы выклыку
const laptop = new Product('Laptop', 1200, 3);
const phone = new Product('Phone', 800, 2);

console.log("Total Price for Laptop: $${laptop.getTotalPrice()}");
laptop.displayInfo();
laptop.updateQuantity(5);

console.log("Total Price for Phone: $${phone.getTotalPrice()}");
phone.displayInfo();
phone.updateQuantity(4);

// ??????????????????ЗАДАЧА2??????????????????????????

// який представляє товар в інтернет-магазині. Однак при його використанні ви помітили, що в багатьох методах відсутні вказівники this.
// Твоя задача - вставити відсутні this в потрібні місця.

class User{
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    displayProfile() {
        console.log(`Name: ${this.name}, Age ${this.age}, Email: ${this.email} `);
    }
    updateEmail(newEmail) {
        this.email = this.newEmail;
        console.log(`Email update for ${this.name} to ${this.email}`);
    }
    birthdayGreeting() {
        console.log(`Happy this.birthdayGreeting, ${this.name}!`);
    }
}
// Виклики методів
const user1 = new User('Alice', 25, 'alice@example.com');
const user2 = new User('Bob', 30, 'bob@example.com');

user1.displayProfile();
user1.updateEmail('alice.new@example.com');
user1.birthdayGreeting();

user2.displayProfile();
user2.updateEmail('bob.new@example.com');
user2.birthdayGreeting();


// ??????????????????????ЗАДАЧА3?????????????????????????
// У вас є клас Car, який моделює автомобіль.
// Однак ви помітили, що в деяких методах відсутні вказівники this.
// Ваша задача - вставити відсутні this у потрібні місця.
// 
class Book {
    constructor(title, author, genre, pageCount) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.pageCount = pageCount;
        this.isRead = false;
    }
    readBook() {
        this.isRead = true;
        console.log(`You have finished reading ${this.title} by ${this.author}.`);
}
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Page Count: ${this.pageCount}`);
    }
    markAsUnread() {
        this.isRead = false;
        console.log(`${this.title} by ${this.author} marked as unread.`);
}
}
// Виклики методів
const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 180);
myBook.displayInfo();
myBook.readBook();
myBook.markAsUnread();
// ???????????????????????Задача4??????????????????????????
class Employee{
    constructor(name, position, salary) {
        name = name;
        position = position;
        salary = salary;
        this.isWorking = false;
    }
    startWork(){
            isWorking = true;
            console.log(`${name} has started working as a ${position}`);
        }
   
    stopWork() {
        isWorking = false; 
        console.log('Name: ${name});
    }
    }
    

