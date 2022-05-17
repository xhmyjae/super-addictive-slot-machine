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
        this.removeSlots();
        if (this.bet <= this.coins-this.bet) {
            this.coins -= this.bet;
            let index = 0;
            setInterval(() => {
                let randomImage = ['lemon', 'lemon', 'cherry', 'cherry', 'diamond', 'diamond', 'casino'];
                let randomNumber = Math.floor(Math.random() * randomImage.length);
                this.slots[index].classList.add(randomImage[randomNumber]);
                index++;
                if (index === this.slots.length) {
                    this.betResult();
                    clearInterval();
                }
            }, 200);
        } else {
            alert('You don\'t have enough coins');
        }
    }

    removeSlots() {
        this.slots.forEach(slot => {
            slot.classList.remove('lemon', 'cherry', 'diamond', 'casino');
        });
    }

    betDoing() {
        // on click on bet buttons => lance le turnSlot
    }

    betResult() {
        let currentCoins = document.querySelector('.current-coins');
        let updateCoins = document.querySelector('.updates-coins');

        const spin = [new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3")];
        const coin = [new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3")]
        const win = new Audio("res/sounds/win.mp3");
        const lose = new Audio("res/sounds/lose.mp3");

        // si slot 1/2/3 classlist contains diamons, ... this.coins += this.bet * num
        if (this.slots[0].classList.contains('lemon') && this.slots[1].classList.contains('lemon') && this.slots[2].classList.contains('lemon')) {
            this.profit = this.bet * 1.25;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (this.slots[0].classList.contains('cherry') && this.slots[1].classList.contains('cherry') && this.slots[2].classList.contains('cherry')) {
            this.profit = this.bet * 1.5;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (this.slots[0].classList.contains('diamond') || this.slots[1].classList.contains('diamond') || this.slots[2].classList.contains('diamond')) {
            this.profit = this.bet * 0.5;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (this.slots[0].classList.contains('diamond') && slots[1].classList.contains('diamond') || this.slots[0].classList.contains('diamond') && this.slots[2].classList.contains('diamond') || this.slots[1].classList.contains('diamond') && this.slots[2].classList.contains('diamond')) {
            this.profit = this.bet * 1;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (this.slots[0].classList.contains('diamond') && this.slots[1].classList.contains('diamond') && this.slots[2].classList.contains('diamond')) {
            this.profit = this.bet * 2.5;
            this.coins += this.profit;
            win.play();
            updateCoins.innerHTML = "+ " + this.profit + " coins";
        } else if (this.slots[0].classList.contains('casino') && this.slots[1].classList.contains('casino') && this.slots[2].classList.contains('casino')) {
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

betButtons.forEach(betButton => {
    betButton.addEventListener('click', e => {
        console.log("clicked");
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