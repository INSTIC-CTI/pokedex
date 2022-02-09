import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonApi } from './models/pokemon-api';
import { PokemonsApi } from './models/pokemons-api';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
// pokemons = [
//   {
//     "id": 1,
//     "nom": 'Bulbizarre',
//     'img':"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     "categorie": 'graine',
//     "type": ['plante', 'poison'],
//     "taille": 0.7,
//     "poids": 6.9,
//   },
//   {
//     "id": 2,
//     "nom": 'Herbizarre',
//     "img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     "categorie": 'graine',
//     "type": ['plante', 'poison'],
//     "taille": 1,
//     "poids": 13,
//   },
//   {
//     "id": 3,
//     "nom": 'Florizarre',
//     "img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
//     "categorie": 'graine',
//     "type": ['plante', 'poison'],
//     "taille": 2,
//     "poids": 100,
//   },
//   {
//     "id": 4,
//     "nom": 'Salamèche',
//     "img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
//     "categorie": 'lezard',
//     "type": ['feu'],
//     "taille": 0.6,
//     "poids": 0.5,
//   },
//   {
//     "id": 5,
//     "nom": 'Reptincel',
//     "img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
//     "categorie": 'flamme',
//     "type": ['feu'],
//     "taille": 1.1,
//     "poids": 19,
//   },
//   {
//     "id": 6,
//     "nom": 'DracauFeu',
//     "img":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
//     "categorie": 'flamme',
//     "type": ['feu', 'vol'],
//     "taille": 1.7,
//     "poids": 90.5,
//   },
// ];
  constructor(private http: HttpClient) { }
  getPokemons() {
    let url = `https://pokeapi.co/api/v2/pokemon?`
    return this.http.get<PokemonsApi>(url)
  }
  getPokemon(url:any) {
    return this.http.get<PokemonApi>(url)
  }

}
