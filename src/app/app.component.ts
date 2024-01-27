import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = "Register Form";
  // firstName = "";
  // lastName = "";

  // handleSubmit() {
  //   alert(`Registered Successfully ${this.firstName} ${this.lastName}`);
  // }
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
    }
  ]



}


