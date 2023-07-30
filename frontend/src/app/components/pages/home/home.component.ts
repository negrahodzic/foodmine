import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {}

  defaultImageUrl = 'assets/food-default.jpg';

  handleImageError(event: any) {
    // Set the default image URL when the original image fails to load
    event.target.src = this.defaultImageUrl;
  }
}
