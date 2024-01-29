import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cats = [
    {
      "name": "Joe",
      "image": "./assets/cat.jpg",
      "age": "5 months",
      "color": "White",
    },
    {
      "name": "leo",
      "image": "./assets/cat1.jpg",
      "age": "2 months",
      "color": "biscute",
    },
    {
      "name": "sony",
      "image": "./assets/cat2.jpg",
      "age": "5 months",
      "color": "White",
    },
    {
      "name": "sony",
      "image": "./assets/cat2.jpg",
      "age": "5 months",
      "color": "White",
    },
    {
      "name": "Joe",
      "image": "./assets/cat.jpg",
      "age": "5 months",
      "color": "White",
    }

  ]

}
