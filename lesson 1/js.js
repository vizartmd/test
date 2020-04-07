let money = +prompt("Your monthly bill?", ""),
     time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = +prompt("Во сколько обойдется?", "");

        if ((typeof(a)) === "" && (typeof(a) != null) && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {

        }
    }

    appData.moneyPerDay = appData.budget / 30;

    alert("Daly budget: " + appData.moneyPerDay);

    if (appData.moneyPerDay < 100){
        console.log("Daly min. enought");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Midle level enought");
    } else if (appData.moneyPerDay < 2000) {
        console.log("High level enought");
    } else {
        console.log("Error");
    }

