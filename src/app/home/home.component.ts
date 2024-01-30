import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { response } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cats: any;
  constructor(private service: HomeService) { }

  ngOnInit() {
    this.service.getCats()
      .subscribe((response: any) => {
        this.cats = response;
      });
  }

}
