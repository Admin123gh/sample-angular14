import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  cards: any = [];

  constructor() { }

  ngOnInit(): void {
    this.cards = [
      {
        img: 'assets/img/h1.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h2.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h3.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h2.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h1.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h2.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h3.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h2.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h2.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h3.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h2.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h1.png',
        category: 'Headphones',
        title: 'Headset Perro',
        amount: '$88.00'
      }
    ]
  }

}
