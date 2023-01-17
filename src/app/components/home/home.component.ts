import { Component, OnInit } from '@angular/core';
import houses from 'src/app/houses.json';
import { House } from 'src/app/models/house';
import { Router } from '@angular/router';
import { FavService } from 'src/app/services/fav.service';
import { LoginComponent } from '../login/login.component';
 


 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

house : House[] = houses;
showingHouse: House[] = houses; 

  constructor( private router: Router, private favService: FavService) { }

  comparePrices(a: any, b: any) {
    const priceA = parseFloat(a.price.replace(/[^\d.-]/g, ''));
    const priceB = parseFloat(b.price.replace(/[^\d.-]/g, ''));
    return priceA - priceB;
  }
  
order: string = 'asc';
  
  ngOnInit() {
    this.house = houses;
    this.house.sort(this.comparePrices);
    this.sortBy();
    this.showingHouse = houses;
  }
  
  search(location:string) { 
    if (location.length > 0)
    this.showingHouse = this.house.filter((house) => house.location.includes(location))
    else {
      this.showingHouse = this.house;
    }
    
  }
  
  sortBy() {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
    if(this.order === 'asc'){
      this.house.sort(this.comparePrices);
    }else {
      this.house.sort(this.comparePrices).reverse();
    }
  }
  
  addToFavorite(id: number): void {
    
      const house = this.favService.getHouse(id);
      if (house) {
        this.favService.addToFavorites(house);
        alert("House successfully added to favorites!")
    
    }
  
  }}
