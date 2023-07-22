// const fetchPokemonInfo = (PokemonName) => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
//     .then (response => response.json())
//     .then (data => {
//         console.log(data)
//         return data
//     });
// };


// fetchPokemonInfo('snorlax')
// .then(   pokemon => { 
//     document.getElementById('pokemon-name').textContent = pokemon.name;
//     document.getElementById('pokemon-type').textContent = pokemon.types[0].type.name;
//     const abilities = pokemon.abilities.map(ability => ability.ability.name);
//     document.getElementById('pokemon-abilities').textContent = abilities.join(', ');
// })
// .catch(error => console.error(error))

// Cette fonction permet de récupérer un objet grace à l'API

function fetchPlanetInfo(numero) {
  console.log(numero)
  return fetch(`https://swapi.dev/api/planets/${numero}`)
    .then(response => response.json())
    .then(function (planet) {
      console.log(planet);
      document.getElementById('planet-name').textContent = planet.name;
      document.getElementById('planet-climate').textContent = planet.climate ;
      document.getElementById('planet-diameter').textContent = spaceInt(planet.diameter )+ " km";
      document.getElementById('planet-population').textContent = spaceInt(planet.population);

      let selectedPlanet = planetlist.find(planet => planet.value === numero);
      if (selectedPlanet) {
        document.getElementById('Numero').innerHTML = "N°" + selectedPlanet.numero;
        document.getElementById('planet-portrait').innerHTML = selectedPlanet.portrait;
        document.getElementById('planet-type').innerHTML = selectedPlanet.type
        if(selectedPlanet.type2 !== undefined){
          document.getElementById('planet-type2').innerHTML = selectedPlanet.type2
        }else{
          document.getElementById('planet-type2').innerHTML = ""
        }
        document.getElementById('planet-context').innerHTML = selectedPlanet.resume;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};



document.getElementById("lang").addEventListener("change", function (event) {
  event.preventDefault();

  let planeteSelectionnee = document.getElementById("lang").value;

  fetchPlanetInfo(planeteSelectionnee)

});

function spaceInt(number){
return new Intl.NumberFormat().format(number)
}
