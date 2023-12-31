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
  showLoader()
  return fetch(`https://swapi.dev/api/planets/${numero}`)
    .then(response => response.json())
    .then(function (planet) {
      console.log(planet);

      if(planet.climate == "temperate"){
        document.getElementById('planet-climate').textContent = "Tempéré";
      }else if(planet.climate == "hot"){
        document.getElementById('planet-climate').textContent = "Chaud";
      }else if(planet.climate == "arid"){
        document.getElementById('planet-climate').textContent = "Aride";
      }else if(planet.climate == "polluted"){
        document.getElementById('planet-climate').textContent = "Pollué";
      }else if(planet.climate == "frozen"){
        document.getElementById('planet-climate').textContent = "Glacé";
      }else if (planet.climate == "temperate, arid"){
        document.getElementById('planet-climate').textContent = "Tempéré, Aride";
      }else{document.getElementById('planet-climate').textContent = "???"}
      

      if(planet.diameter!="unknown"){
        document.getElementById('planet-diameter').textContent = spaceInt(planet.diameter )+ " km";
      }else{document.getElementById('planet-diameter').textContent = "???";}

      if(planet.population!="unknown"){
        document.getElementById('planet-population').textContent = spaceInt(planet.population);
      }else{document.getElementById('planet-population').textContent = "???";}
      

      let selectedPlanet = planetlist.find(planet => planet.value === numero);
      if (selectedPlanet) {
        document.getElementById('Numero').innerHTML = "N°" + selectedPlanet.numero;
        document.getElementById('planet-name').innerHTML = selectedPlanet.nom;
        document.getElementById('planet-portrait').innerHTML = selectedPlanet.portrait;
        document.getElementById('planet-type').innerHTML = selectedPlanet.type
        document.getElementById('logo-type').innerHTML = selectedPlanet.logotype
        if(selectedPlanet.type2 !== undefined){
          document.getElementById('planet-type2').innerHTML = selectedPlanet.type2
          document.getElementById('logo-type2').innerHTML = selectedPlanet.logotype2
        }else{
          document.getElementById('planet-type2').innerHTML = ""
          document.getElementById('logo-type2').innerHTML = ""
        }
        document.getElementById('planet-context').innerHTML = selectedPlanet.resume;
      }
      hideLoader()
    })
    .catch(function (error) {
      console.error(error);
    });
};

function showLoader(){
  console.log("loaderbb8")
  const loader = document.querySelector('.loaderbb8');
  loader.style.display = 'block';
}

function hideLoader(){
  const loader = document.querySelector('.loaderbb8');
  loader.style.display = 'none';
  console.log("hiddenloaderbb8")
}

document.getElementById("lang").addEventListener("change", function (event) {
  event.preventDefault();

  let planeteSelectionnee = document.getElementById("lang").value;

  fetchPlanetInfo(planeteSelectionnee)

});

function spaceInt(number){
return new Intl.NumberFormat().format(number)
}
