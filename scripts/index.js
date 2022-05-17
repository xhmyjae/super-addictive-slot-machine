class SlotMachine
{

    constructor(slots, bet, coins) {
        this.slots = slots;
        this.bet = bet;
        this.coins = coins;
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