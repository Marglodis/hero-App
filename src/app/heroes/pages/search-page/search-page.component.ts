import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  standalone: false,
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent  {

  public heroes: Hero[] = [];
  public searchInput = new FormControl('');
  public selectedHero?: Hero;

  constructor(private heroService: HeroesService) { }
  
  searchHero(){
    const value:string = this.searchInput.value || '';

    this.heroService.getSuggestions(value)
    .subscribe(heroes => this.heroes = heroes);
  }
  
  onSelectedOption(event: MatAutocompleteSelectedEvent):void{
    
    if(!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);

    this.selectedHero = hero;
    console.log(event.option.value);

  }
}
