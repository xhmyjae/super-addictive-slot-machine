class SlotMachine
{

    constructor(slots, bet, coins, profit) {
        this.slots = slots;
        this.bet = bet;
        this.coins = coins;
        this.profit = profit;
    }

    /**
     * The function first checks if the user has enough coins to play. If the user has enough coins, the function subtracts
     * the bet amount from the total coins and updates the current coins. Then, the function generates a random image for
     * each slot and adds the image to the slot. After the last slot has been updated, the function calls the betResult
     * function
     */
    turnSlots() {
        let currentCoins = document.querySelector('.current-coins');
        let updateCoins = document.querySelector('.updates-coins');

        this.removeSlots();
        if (this.coins-this.bet < 0) {
            alert('You don\'t have enough coins to play');
        } else {
            this.coins -= this.bet;
            currentCoins.innerHTML = this.coins;
            updateCoins.innerHTML = "";
            let index = 1;
            setInterval(() => {
                //let randomImage = ['lemon'];
                let randomImage = ['lemon', 'lemon', 'cherry', 'cherry', 'diamond', 'diamond', 'casino'];
                let randomNumber = Math.floor(Math.random() * randomImage.length);
                this.slots[index-1].classList.add(randomImage[randomNumber]);
                index++;
                if (index === this.slots.length+1) {
                    this.betResult();
                    clearInterval();
                }
            }, 300);
        }
    }

    /**
     * It removes the class names from the slots
     */
    removeSlots() {
        this.slots.forEach(slot => {
            slot.classList.remove('lemon', 'cherry', 'diamond', 'casino');
        });
    }

    /* Checking if the user has won or lost. */
    betResult() {
        let currentCoins = document.querySelector('.current-coins');
        let updateCoins = document.querySelector('.updates-coins');

        let slotsArray = Array.from(this.slots);

        const spin = [new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3")];
        const coin = [new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3")]
        const win = new Audio("res/sounds/win.mp3");
        const lose = new Audio("res/sounds/lose.mp3");

        if (slotsArray.filter(x=>x.classList.contains('lemon')).length === 3) {
            this.profit = this.bet * 1.25;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (slotsArray.filter(x=>x.classList.contains('cherry')).length === 3) {
            this.profit = this.bet * 1.5;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (slotsArray.filter(x=>x.classList.contains('diamond')).length === 1) {
            this.profit = this.bet * 0.5;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (slotsArray.filter(x=>x.classList.contains('diamond')).length === 2) {
            this.profit = this.bet * 1;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (slotsArray.filter(x=>x.classList.contains('diamond')).length === 3) {
            this.profit = this.bet * 2.5;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (slotsArray.filter(x=>x.classList.contains('casino')).length === 3) {
            this.profit = this.bet * 10;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else {
            this.profit = this.bet;
            this.coins -= this.profit;
            lose.play();
            updateCoins.innerHTML = "- " + this.profit + " coins";
        }
        currentCoins.innerHTML = this.coins;
    }
}

let slots = document.querySelectorAll('.slot');

let betButtons = document.querySelectorAll('.bet-button');

let machine = new SlotMachine(slots, 0, 500, 0);

/* Adding an event listener to each of the bet buttons. When the user clicks on a bet button, the event listener
will call the turnSlots function. */
betButtons.forEach(betButton => {
    betButton.addEventListener('click', e => {
       let btnEvent = e.target;

       if (betButton.classList.contains('bet-button-1')) {
           machine.bet = 10;
           machine.turnSlots();
       } else if (betButton.classList.contains('bet-button-2')) {
           machine.bet = 50;
           machine.turnSlots();
       } else {
           machine.bet = 200;
           machine.turnSlots();
       }
    });
});