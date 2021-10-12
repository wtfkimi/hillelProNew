


class Gamburger {
    static GMA = {
        SMALL: {
            cost: 50,
            calories: 20,
        },
        MEDIUM: {
            cost: 75,
            calories: 30
        },
        BIG: {
            cost: 100,
            calories: 40
        }
    }
    constructor(gamgurger) {
        this.gamgurger = Gamburger.GMA[gamgurger];
        if (this.gamgurger === undefined){
            this.gamgurger = null;
        }else{
            this.gamgurger = Gamburger.GMA[gamgurger];
        }
    }

    static FILLING = {
        cheese: {
            cost: 10,
            calories: 20
        },
        salad: {
            cost: 20,
            calories: 5,
        },
        potatoes: {
            cost: 15,
            calories: 0
        },
        mayo: {
            cost: 15,
            calories: 5
        }
    }
    get getCalories() {
        return this.gamgurger.calories;
    }
    get getPrice() {
        return this.gamgurger.cost;
    }

    set setFilling (filling) {
        if (Gamburger.FILLING[filling]) {
            this.gamgurger.cost += Gamburger.FILLING[filling].cost;
            this.gamgurger.calories += Gamburger.FILLING[filling].calories;
        }else {
            alert("There is no filling, which you provided");
        }
    }


}

const burger = new Gamburger("SMALL");

burger.setFilling = "salad"
burger.getCalories;
burger.getPrice;
