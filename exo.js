let nom = 'John';
    console.log(nom);

nom = 'Jane' ;
    console.log(nom);

    for (let tableau = 1; tableau <=10 ; tableau++) {
        console.log(tableau)
    };

console.log("Bonjour tout le monde!")  
console.log(3+4) 
console.log(nom) 
    
let firstName = 'John'
let lastName = 'Doe'

let complete = `${firstName} ${lastName}`;
    console.log(complete)

let age = '23'  


if (age >= 18) {
    console.log('Vous êtes majeur');
} 

else {
    console.log('Vous êtes mineur'); 
}    

let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];

for(i = 0; i < couleurs.length; i++){
    console.log(couleurs[i])
}

let numbers = [1, 2, 3, 4, 5]
numbers.push(6)
numbers.pop()
console.log(numbers);

function fonction(number) {
    let result;
    if (number % 2 === 0) {
      result = 'true';
    } else {
      result = 'false';
    }
    return result;
}
console.log(fonction(2))

function add(numbers) {
    let result = 0;
    numbers.forEach((number) => {
        result+=number;
});
    return result
}
console.log(add([5,17,35]))


function reverse(string){
    return Array.from(string).reverse().join("");
}
console.log(reverse("bonjour"))






