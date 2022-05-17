class SlotMachine
{

    constructor(slots, bet, coins, profit) {
        this.slots = slots;
        this.bet = bet;
        this.coins = coins;
        this.profit = profit;
    }

    getCoins() {

    }

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

    removeSlots() {
        this.slots.forEach(slot => {
            slot.classList.remove('lemon', 'cherry', 'diamond', 'casino');
        });
    }

    betResult() {
        let currentCoins = document.querySelector('.current-coins');
        let updateCoins = document.querySelector('.updates-coins');

        let slotsArray = Array.from(this.slots);

        const spin = [new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3")];
        const coin = [new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3")]
        const win = new Audio("res/sounds/win.mp3");
        const lose = new Audio("res/sounds/lose.mp3");

        // si slot 1/2/3 classlist contains diamons, ... this.coins += this.bet * num
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
        console.log(this.profit);
        console.log(this.bet);
        console.log(this.coins);
        currentCoins.innerHTML = this.coins;
    }

}

let slots = document.querySelectorAll('.slot');

let betButtons = document.querySelectorAll('.bet-button');

let machine = new SlotMachine(slots, 0, 500, 0);

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