let pokemonList = [
  { name: "Pickachu", type: ["fairy"], weight: 6 },
  { name: "Jigglypuff", type: ["fairy"], weight: 5.5 },
  { name: "Butterfree", type: ["bug"], weight: 32 }
];
for (let i = 0; i < pokemonList.length; i++) {
 document.write(pokemonList[i].name + " - weight: " + pokemonList[i].weight +"kg");
let weight = '10';
if (pokemonList[i].weight > 10) 
  document.write(" Wow, that is heavy!" + "<br>");
  else document.write("<br>");
  //  block of code to be executed if the condition is true
}
