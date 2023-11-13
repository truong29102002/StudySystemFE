import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  //#region selected flash sell
  selectedButton: string = 'SellTop1';

  showContent(button: string): void {
    this.selectedButton = button;
  }
  //#endregion
  itemsProduct: any;
  constructor() {
    this.itemsProduct = DATA_PRODUCT;
  }

}
const DATA_PRODUCT = [
  {
    id: 'SP08',
    name: 'Túi xách Laptop SIMTOP SuperSlim 15.6"',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '',
    idWish: '01',
    isLike: true,
  }, {
    id: 'SP07',
    name: 'OPPO Reno8 T 5G (8GB/128GB) - Chính hãng ',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '02',
    isLike: true,
  },
  {
    id: 'SP06',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    idWish: '',
    isLike: false,
  },
  {
    id: 'SP05',
    name: 'Ốp lưng GEAR4 D3O Crystal Palace Galaxy S22 Plus - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '',
  },
  {
    id: 'SP04',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: 'apple-watch.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '',
  },
  {
    id: 'SP03',
    name: 'Nokia C21 Plus (2GB/64GB) - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '',
  },
  {
    id: 'SP02',
    name: 'Máy tính bảng Huawei Matepad LTE - Chính hãng',
    img: '14-prm-den.jpg',
    price: '4000000',
    priceSell: '29000000',
    isLike: false,
    idWish: '',
  }
];