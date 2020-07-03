// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

//Kata 0
let userGreenEyes = users
    .filter(user => user.eyeColor === 'green')
    .map(user => user.name);
printKata(0,userGreenEyes);

//Kata 1
let userIsActive = users
    .filter(user => user.isActive === true)
    .map(user => user.name);
printKata(1, userIsActive);

//Kata 2
let usersEmail = users.map(user => user.email);
printKata(2, usersEmail);

//Kata 3
let userOvationCheck = users.some(user => user.company === 'OVATION');
printKata(3, userOvationCheck);

//Kata 4
let userBoomerCheck = users.find(user => Number(user.age) > 38);
printKata(4, userBoomerCheck)

//Kata 5
let userIsActiveAndBoomer = users
    .filter(user => user.isActive === true)
    .find(user => Number(user.age) > 38)
    || "There's no one over the age of 38 and active. There IS a guy who's 38 and active though";
printKata(5, userIsActiveAndBoomer)

//Kata 6
let userZencoBalance = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance);
printKata(6, userZencoBalance);

//Kata 7
let userFugiatAge = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => [user.name, user.age]);
printKata(7, userFugiatAge)
