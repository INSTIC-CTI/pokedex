import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/pokemons.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css'],
})
export class GenerationsComponent implements OnInit {
  generations: any;
  nbreGenerations!: number;

  constructor(private servicePokemons: PokemonsService) {}

  ngOnInit(): void {
    this.servicePokemons.getGenerations().subscribe((res) => {
      this.generations = res.results;
      this.nbreGenerations = res.count;
    });
  }
}
