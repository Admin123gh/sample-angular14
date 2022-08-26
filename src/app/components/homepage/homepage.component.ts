import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  cards: any = [];
  smallCards: any = [];

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
      }
    ],
    this.smallCards = [
      {
        img: 'assets/img/h2.png',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h1.png',
        title: 'Headset Perro',
        amount: '$88.00'
      },
      {
        img: 'assets/img/h3.png',
        title: 'Headset Perro',
        amount: '$88.00'
      },
    ]
  }

}
