// lista cognomi
var surnames = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"]

// Chiedere all’utente il cognome
var userSurname = prompt("Enter your surname");

// inserirlo in un array con altri cognomi:
surnames.push(userSurname);

// stampa la lista ordinata alfabeticamente
console.log(surnames.sort())

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
var position = surnames.indexOf(userSurname) + 1;
console.log("The user name is in " + position + "st position" )
