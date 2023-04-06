const startNewGame = document.getElementById('btn-start-game');
const submit = document.getElementById('submit');
const gameStatus = document.getElementById('gameStatus');
const inputBox = document.getElementById('inputBox');
const image = document.getElementsByClassName('image');

const words = [
    "apple",
    "banana",
    "orange",
    "grape",
    "pear",
    "kiwi",
    "pineapple",
    "strawberry",
    "blueberry",
    "raspberry",
    "watermelon",
    "cantaloupe",
    "honeydew",
    "peach",
    "apricot",
    "plum",
    "cherry",
    "lemon",
    "lime",
    "coconut",
    "mango",
    "papaya",
    "guava",
    "passionfruit",
    "dragonfruit",
    "avocado",
    "carrot",
    "broccoli",
    "cauliflower",
    "spinach",
    "kale",
    "lettuce",
    "tomato",
    "potato",
    "onion",
    "garlic",
    "ginger",
    "turmeric",
    "cinnamon",
    "pepper",
    "salt",
    "sugar",
    "flour",
    "butter",
    "milk",
    "cheese",
    "egg",
    "bread",
    "rice"
];

const startGame = () => {
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    // console.log(randomWord);

    let splittedWord = randomWord.split('');
    for (let i = splittedWord.length - 1; i > 0; i--) {
        let randomIndexOne = Math.floor(Math.random() * (i + 1));
        let randomIndexTwo = Math.floor(Math.random() * (i + 1));
        let tempIndex = splittedWord[randomIndexOne];
        splittedWord[randomIndexOne] = splittedWord[randomIndexTwo];
        splittedWord[randomIndexTwo] = tempIndex;
    }
// console.log(splittedWord.join(''))
    gameStatus.innerText = splittedWord.join('');

 return randomWord;
}
console.log(startGame() + 'yes')

const getInput = () =>{
    let userWord = inputBox.value
    console.log(userWord);
}