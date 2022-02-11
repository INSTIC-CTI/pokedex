export class PokemonsApi {
  count!: number;
  next!: String;
  previous!: String;
  results!: [
    {name: String, url: String}
  ]
}
