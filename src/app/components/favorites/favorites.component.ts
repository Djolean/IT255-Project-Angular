import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { House } from 'src/app/models/house';
import { Router } from '@angular/router'; 
import { FavService } from 'src/app/services/fav.service';
import houses from 'src/app/houses.json';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent implements OnInit {
  house: Observable<House[]>;
 
 constructor(private favService: FavService, private router: Router) {
    this.house = this.favService.getFavorites();
  }
    
  ngOnInit(): void {
  
  }

  house1: House[] = houses;

  favorites: House[] | undefined;
  
  getHouse(id: number) {
    if (this.house1) {
      this.house1 = this.house1.filter((house1) => house1.id === id);
      
    }
  }

  isInFavorites(house1: House) {
    return this.favService.isInFavorites(house1);
  }

  removeFromFavorites(house1: House) {
    this.favService.removeFromFavorites(house1);
    alert("House successfully removed from favorites!");
  }

 
}

