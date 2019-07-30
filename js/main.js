class ProductList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.sumPrice = 0;
    this._fetchProducts();
    this.render();
    this.calcSumPrice();
    this.renderSumPrice();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 1000},
      {id: 2, title: 'Mouse', price: 100},
      {id: 3, title: 'Keyboard', price: 250},
      {id: 4, title: 'Gamepad', price: 150},
    ];
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

  calcSumPrice() {
    let sum = 0;
    for (let product of this.allProducts) {
      console.log(product);
      sum += product.price;
    }
    return this.sumPrice = sum;
  }

  renderSumPrice() {
    let blockSumPrice = `<div><h3>Суммарная стоимость всех товаров ${this.sumPrice} \u20bd</h3></div>`;
    const block = document.querySelector(this.container);
    block.insertAdjacentHTML('afterend', blockSumPrice);
  }
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

const list = new ProductList();

/*
class Cart {
  constructor(container = '.btn-cart') {
    this.container = container; // место на странице куда добавим корзину
    this.goodsInCart = []; //товары для корзины которые получаем с сервера
    this.allCart = []; // товары корзины которые будем отображать, по сути копия с  goodsInCart
    this.sumPriceCart = 0; // суммарная стоимость товаров в корзине

    this.addToCart(); //при нажатии на купить добавляет товар в массив goodsInCart, каждое повторное нажатие
    // увеличивает количество товаров
    this.delProduct(); // при нажатии на удалить удаляет товар изи массива goodsInCart
    this.getAllCart(); // получаем массив для отображения товаров в корзине
    this.render(); // оторажаем товары в корзине
    this.calcSumPrice(); // считаем стоимость всех товаров
    this.renderSumPrice(); //отображаем стоимость всех товаров
  }
}
*/
