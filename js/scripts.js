  //IIFE wrap
  let pokemonRepository = (function () {
  //Pokemon list
  let pokemonList = [
  { name: "Pickachu", type: ["fairy"], weight: 6 },
  { name: "Jigglypuff", type: ["fairy"], weight: 5.5 },
  { name: "Butterfree", type: ["bug"], weight: 32 }
];
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
    function getAll() {
    return pokemonList;
  }
  return {
    add: add,
    getAll: getAll
  };
  })();
  pokemonRepository.add ({name: "Sharpedo", type: ["fish"], weight: 88.8 });

  function myPokemonWrite(pokemon) {
  document.write(pokemon.name + "(weight: " + pokemon.weight + ")");

  if (pokemon.weight >= 10) {
    document.write(" - Wow! That is heavy!");
}
document.write("<br/>");
}

pokemonRepository.getAll().forEach(function (pokemon) {
  myPokemonWrite(pokemon);
});





  