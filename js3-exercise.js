// Exercise #1

const transationFee = cost => cost + (cost * 0.01) + 3;


console.log(transationFee(200)); // 205
console.log(transationFee(455)); // 462.55
console.log(transationFee(500)); // 508
console.log(transationFee(629)); // 638.29

// Exercise #2

// 2.1
const greetingFriends = (name1, name2, name3) => `Welcome ${name1}, ${name2} and ${name3}.`;

console.log(greetingFriends('kim','title','praew'));

// 2.2
const ageCal = birthYear => {
    const year = new Date().getFullYear();;

    let age = year - birthYear;
    return age
}
ageCal(2000) // 23

// 2.3

const greeting = (name,birthYear) => {
    const age = ageCal(birthYear);
    console.log(`Welcome ${name}, you are ${age}.`)
}

greeting('kim',2000); // Welcome kim, you are 23.
greeting('title',1995); // Welcome title, you are 28.
greeting('praew',1996); // Welcome praew, you are 27.

// Exercise #3

// 3.1
const greaterThan = score => score >= 5 ? true : false;

console.log(greaterThan(6)); // true
console.log(greaterThan(3)); // false

// 3.2

const excellent = score => score > 8 ? console.log('Excellent!') : console.log('Try harder next time!');

excellent(9); // 'Excellent!'
excellent(5); // 'Try harder next time!

// 3.3

const perfect = score => score === 11 ? console.log('Perfect!') : score > 11 ? console.log('Your score higher than maximum score!') : console.log('Nice one already!');

perfect(5); // "Nice one already!"
perfect(11); // "Perfect!"
perfect(15); // "Your score higher than maximum score!"