let num = 48;

// if (num < 49) {
//     console.log("Incorect!");
// } else if (num > 100){
//     console.log("to mutch!");
// } else {
//     console.log("Corect!");
// }

// (num == 50) ? console.log("Corect!") : console.log("Incorect!");

switch (num) {
    case num < 49:
        console.log("Incorect!");
        break;
    case num > 100:
        console.log("to mutch!");
        break;
    case num > 80:
        console.log("is alsow to mutch!");
        break;
    case 50:
        console.log("Corect!");
        break;
    default:
        console.log("Something was wrong!");
        break;
}