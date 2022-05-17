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
        this.slots.forEach(slot => {
            if (this.bet <= this.coins) {
                slot.spin();
                this.coins -= this.bet;
            }
            // faire alterner les images
            // intervale de 50 entre les 3 slots
            // check oif y'a assez de coins else break?
        });
    }

    betDoing() {
        // on click on bet buttons => lance le turnSlot
    }

    betResult() {
        // si slot 1/2/3 classlist contains diamons, ... this.coins += this.bet * num
        if (this.slots[0].classList.contains('lemon') && this.slots[1].classList.contains('lemon') && this.slots[2].classList.contains('lemon')) {
            this.profit = this.bet + this.bet * 1.25;
            this.coins += this.profit;
        } else if (this.slots[0].classList.contains('cherry') && this.slots[1].classList.contains('cherry') && this.slots[2].classList.contains('cherry')) {
            this.profit = this.bet + this.bet * 1.5;
            this.coins += this.profit;
        } else if (this.slots[0].classList.contains('diamonds') || this.slots[1].classList.contains('diamonds') || this.slots[2].classList.contains('diamonds')) {
            this.profit = this.bet + this.bet * 0.5;
            this.coins += this.profit;
        } else if (this.slots[0].classList.contains('diamonds') && slots[1].classList.contains('diamonds') || this.slots[0].classList.contains('diamonds') && this.slots[2].classList.contains('diamonds') || this.slots[1].classList.contains('diamonds') && this.slots[2].classList.contains('diamonds')) {
            this.profit = this.bet + this.bet * 1;
            this.coins += this.profit;
        } else if (this.slots[0].classList.contains('diamonds') && this.slots[1].classList.contains('diamonds') && this.slots[2].classList.contains('diamonds')) {
            this.profit = this.bet + this.bet * 2.5;
            this.coins += this.profit;
        } else if (this.slots[0].classList.contains('casino') && this.slots[1].classList.contains('casino') && this.slots[2].classList.contains('casino')) {
            this.profit = this.bet + this.bet * 10;
            this.coins += this.profit;
        } else {
            this.coins -= this.bet;
        }
    }

}

let slots = document.querySelectorAll('slot');


let betButtons = document.querySelectorAll('bet-button');

betButtons.forEach(betButton => {
    betButton.addEventListener('click', e => {
       let btnEvent = e.target;

       if (betButton.classList.contains('bet-button-1')) {

       } else if (betButton.classList.contains('bet-button-2')) {

       } else {

       }
    });
});