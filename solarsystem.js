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
      document.getElementById('planet-climate').textContent = planet.climate ;
      document.getElementById('planet-diameter').textContent = spaceInt(planet.diameter )+ " km";
      document.getElementById('planet-population').textContent = spaceInt(planet.population);

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
}
function hideLoader(){
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

// jQuery(window).load(function(){ jQuery(".loader").fadeOut("200"); });

// window.addEventListener("load", function() {
//   // Sélectionnez l'élément avec la classe "fade-out"
//   const fadeOutElement = document.querySelector(".fade-out");
  
//   // Ajoutez la classe "fade-out-active" pour déclencher l'effet de fondu une fois que le contenu est chargé
//   fadeOutElement.classList.add("fade-out-active");
// });