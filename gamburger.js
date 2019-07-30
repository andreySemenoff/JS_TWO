document.getElementById('button').addEventListener("click", () => {
    event.preventDefault();
    const list = new Gamburger();
});

class Gamburger {
    constructor (container = 'order'){
        this.container = container;
        this.data = [];
        this.allPrice = 0;
        this.allCalories = 0;
        this.getData();
        this.getPrice();
        this.getCalories();
        this.getBlockHTML;
        this.clearBlockHTML();
        this.render();
    }

    getData() {
        let allInput = document.querySelectorAll('input');
        for (let i = 0; i < allInput.length; i++){
            if (allInput[i].checked === true){
                this.data.push(allInput[i]);
            }
        }
    }

    getPrice() {
        for (let value of this.data)
            this.allPrice += +value.dataset.price;
    }

    getCalories() {
        for (let value of this.data)
            this.allCalories += +value.dataset.calories;
    }

    getBlockHTML() {
        return `<h2 id="orderYourGamburger">Стоимость выбранного гамбургера = ${this.allPrice} рублей, количество калорий = ${this.allCalories}</h2>`
    }

    clearBlockHTML() {
        const blockOrder = document.getElementById('orderYourGamburger');
        if (blockOrder === null) {
           console.log(blockOrder);
        } else {
            blockOrder.innerHTML = '';
        }
    }

    render() {
        const block = document.getElementById(this.container);
        block.insertAdjacentHTML('afterend', this.getBlockHTML());
    }
}








