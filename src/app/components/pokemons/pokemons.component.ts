import { Component, OnInit } from '@angular/core';
import { FormSearchPokemon } from 'src/app/models/form-search-pokemon';
import { PokemonsService } from 'src/app/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons: any;
  formSearchPokemon = new FormSearchPokemon();
  constructor(private pokeService: PokemonsService) {}

  ngOnInit() {
    this.pokemons = this.pokeService.getPokemons().subscribe((x) => {
      this.pokemons = x.results;
    });
  }

  search(namePokemon: string) {
    const reg = new RegExp(namePokemon, 'gi');
    this.pokemons = this.pokeService.getPokemons().subscribe((x) => {
      this.pokemons = x.results.filter((pokemon) => pokemon.name.match(reg));
    });
  }
  annuler() {
    this.pokemons = this.pokeService.getPokemons().subscribe((res) => {
      this.pokemons = res.results;
    });
    this.formSearchPokemon = new FormSearchPokemon();
  }
}
