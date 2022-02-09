import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
pokemons:any;
  constructor(private pokeService:PokemonsService) { }

  ngOnInit() {
     this.pokemons = this.pokeService.getPokemons().subscribe((x) => {
       this.pokemons = x.results
     });
  }

}
