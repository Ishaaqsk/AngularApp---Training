import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
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


}


