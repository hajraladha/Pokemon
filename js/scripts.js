  //IIFE wrap
  let pokemonRepository = (function () {
  //Pokemon list
  let pokemonList = [
  { name: "Pickachu", type: ["fairy"], weight: 6 },
  { name: "Jigglypuff", type: ["fairy"], weight: 5.5 },
  { name: "Butterfree", type: ["bug"], weight: 32 }
];
 return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
  })();
  function myPokemonWrite(pokemon) {
  document.write(pokemon.name + ' (weight: ' + pokemon.weight + ')');
  if (pokemon.weight >= 10) {
    document.write(' - Wow! That is heavy!');
}
pokemonRepository.add
console.log(pokemonRepository.getAll());
pokemonRepository.add ({name: 'Sharpedo', type: ['fish'], weight: 88.8 });;
console.log(pokemonRepository.getAll());