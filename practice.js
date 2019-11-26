//Exercise 1
const calculateAgeInDogYears = (ageOfPerson) => {
  const ageInDogYears = ageOfPerson / 7
  return ageInDogYears
}

const dogAge = calculateAgeInDogYears(23)
console.log(dogAge)

const whatsYourFavoriteDog = (dogBreed) => {
  if (dogBreed === "meow") {
    return "I like cats."
  } else if (dogBreed !== "") {
  return `my favorite dog breed is ${dogBreed}.`
  }
}

const myFavorite = whatsYourFavoriteDog("husky")

console.log("When it comes to pets, " + myFavorite)

//Exercise 2
const add = (num1, num2, num3) => {
  const sum = num1 + num2 + num3
  return sum
}

console.log(add(17, 4, 11))

//Exercise 3
const go = (direction, speed) => {
  if (speed > 75) {
    return "SLOW DOWN!"
  } else {
    return `The car is moving ${direction} at ${speed} mph.`
  }
}

console.log(go("forwards", 73))

//Exercise 4
const evenAndOdd = [2, 49, 100, 53, 47, 34, 66]

const evenOrOdd = (array) => {
  for (const nums of array) {
  if (nums % 2 === 0) {
    console.log("Even")
  } else {
    console.log("Odd")
  }
}
}

evenOrOdd(evenAndOdd)

//Exercise 5
const words = [
  "The", "killing", "complex", "houses",
  "married", "kittens", "and", "single",
  "soldiers", "and", "their", "kleptomaniacal",
  "families"
]

const filterOutK = (arr) => {
  let newArray = []
  for (let index = 0; index < arr.length; index++) {
    const word = arr[index];
    if (!word.startsWith("k")) {
      newArray.push(word)
    }
  }
  return newArray
}

const combineArray = (arr) => {
  const sentence = arr.join(" ") + "."
  return sentence
}

const filteredArray = filterOutK(words)
const finishedSentence = combineArray(filteredArray)

console.log(finishedSentence)

//Exercise 6
const hookedTuna = () => {
  const tunaChance = Math.random() * 3
  if (tunaChance <= 1) {
    return "Sven hooked a tuna! :)"
  } else {
    return "Sven came up empty-handed. :("
  }
}

console.log(hookedTuna())

//Exercise 7
const orderMeal = (sandwhich, side, drink, dessert) => {
  let fastFoodObject = `{
    "sandwhich": "${sandwhich}",
    "side": "${side}",
    "drink": "${drink}",
    "dessert": "${dessert}"
  }`
  return fastFoodObject
}

// const orderMeal = (sandwhich, side, drink, dessert) => {
//   this.sandwhich = sandwhich;
//   this.side = side;
//   this.drink = drink;
//   this.dessert = dessert;
// }

const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")

console.log(takeOutBag)

//Exercise 8
const person = {
  firstName: "Holden",
  lastName: "Parker"
}

const takeOutTrash = (person) => {
  return `${person.firstName} ${person.lastName} took out the trash`
}

const groceryStore = (person) => {
  return `${person.firstName} ${person.lastName} went to the grocery store`
}

const oilChange = (person) => {
  return `${person.firstName} ${person.lastName} got the oil changed`
}

const laundry = (person) => {
  return `${person.firstName} ${person.lastName} did the laundry`
}

const dishes = (person) => {
  return `${person.firstName} ${person.lastName} did the dishes`
}

const carWash = (person) => {
  return `${person.firstName} ${person.lastName} washed the car`
}

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => {
  const personsThreeChores = `${firstChore(person)}, and ${secondChore(person)}, and ${thirdChore(person)}`
  return `On ${day}, ${personsThreeChores}.`
}

console.log(dayPlanner(laundry, carWash, laundry, person, "Saturday"))