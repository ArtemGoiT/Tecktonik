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
// Ви створили клас Employee, який представляє робітника в компанії. 
// Однак ви помітили, що в деяких методах відсутні вказівники this.
// Твоя задача - вставити відсутні this у потрібні місця.


class Employee{
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.isWorking = false;
    }
    startWork(){
            this.isWorking = true;
            console.log(`${this.name} has started working as a ${this.position}`);
        }
   
    stopWork() {
        this.isWorking = false; 
        console.log(`${this.name}, has stopped this.isWorking.`);
    }
    displayInfo() {
    console.log(`Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`);
}
}
    // Виклики методів
const employee1 = new Employee('John Doe', 'Software Developer', 70000);
employee1.startWork();
employee1.displayInfo();
employee1.stopWork();

const employee2 = new Employee('Jane Smith', 'Graphic Designer', 60000);
employee2.startWork();
employee2.displayInfo();
employee2.stopWork();





//TODO: № 1 ==============================================
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
// const btn = document.querySelector("#alertButton");
// btn.addEventListener("click", () => {
//   const input = document.querySelector("#alertInput");
//   console.log(input.value);
// });

//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// const btn = document.querySelector("#swapButton");
// const inputLeft = document.querySelector("#leftSwapInput");
// const inputRight = document.querySelector("#rightSwapInput");
// btn.addEventListener("click", ()=> {
//  const subresult = inputLeft.value;
//  console.log(subresult);
//  inputLeft.value = inputRight.value;
//  inputRight.value = subresult;

// })
//TODO: № 3 ==============================================
// При кліку на кнопку текст параграфів змінюється на їх порядковий номер
// const btn = document.querySelector("button");
// const items = document.querySelectorAll("p"); // Зробили псевдо-масив
// btn.addEventListener("click", onChange);
// function onChange() {
//   items.forEach((p, index) => {
//     p.textContent = index + 1;
//   });
// }
// console.log(items);

//TODO: № 4 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const btn = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");
// btn.addEventListener("click", onHidePassword);
// function onHidePassword() {
//   const typeInput = input.getAttribute("type");
//   const toggleTypeInput = typeInput === "password" ? "text" : "password";
//   input.setAttribute("type", toggleTypeInput);
//   const textBtn = btn.textContent;
//   const toggleTextBtn = textBtn === "Приховати" ? "Розкрити" : "Приховати";
//   btn.textContent = toggleTextBtn;
//   console.log(toggleTextBtn);
// }
//TODO: № 5 ==============================================

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
const btnDecrease = document.querySelector("#decrease");
const btnIncrease = document.querySelector("#increase");
const box = document.querySelector("#box");
console.dir(box);
// btnDecrease.addEventListener('click', () => {
//     const width = box.offsetWidth;
//     const height = box.offsetHeight;
//     box.style.width = `${width - 10}px`;
//     box.style.height = `${height - 10}px`;
// })
// btnIncrease.addEventListener('click', () => {
//     const width = box.offsetWidth;
//     const height = box.offsetHeight;
//     box.style.width = `${width + 10}px`;
//     box.style.height = `${height + 10}px`;
// })

btnDecrease.addEventListener('click', onChange);
btnIncrease.addEventListener('click', onChange);

function onChange(e) {
    const width = box.offsetWidth;
    const height = box.offsetHeight;
    const currentBtn = e.target.getAttribute('id');
    console.log(currentBtn);
    switch (currentBtn) {
        case "increase":
             box.style.width = `${width + 10}px`;
     box.style.height = `${height + 10}px`;
            break;
       case "decrease":
             box.style.width = `${width - 10}px`;
     box.style.height = `${height - 10}px`;
            break;  
    
    }
}
    