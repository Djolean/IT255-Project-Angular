import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { House } from '../models/house';
import houses from 'src/app/houses.json'

@Injectable({
  providedIn: 'root'
})
export class FavService {
  house: House[] = houses;
  constructor() { }

  private favorites: House[] = [];

  addToFavorites(house: House) {
    this.favorites.push(house);
  }

  getFavorites(): Observable<House[]> {
    return of(this.favorites);
  }

  clearFavorites() {
    this.favorites = [];
  }

  removeFromFavorites(house: House) {
    this.favorites = this.favorites.filter((h) => h.id !== house.id);
  }

  isInFavorites(house: House) {
    return this.favorites.some((h) => h.id === house.id);
  }

  getHouse(id: number): House | undefined {
    return this.house.find((house) => house.id === id);
  }
}
