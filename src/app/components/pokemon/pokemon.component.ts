import { Component, Input, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
@Input() pokemon:any
  constructor(private servicePoke:PokemonsService) { }

  ngOnInit(): void {
    this.servicePoke.getPokemon(this.pokemon['url']).subscribe((pokemon) => {
      this.pokemon = pokemon;
    })
  }

}
