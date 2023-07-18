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
    return fetch(`https://swapi.dev/api/planets/${numero}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            return data
        });
};

// Cette fonction permet de récupérer les données provenant de l'API 


fetchPlanetInfo(document.getElementById('planetlist').value)
    .then(function(planet) {
        console.log(planet)
        document.getElementById('planet-name').textContent = planet.name;
        document.getElementById('planet-climate').textContent = planet.climate;
        document.getElementById('planet-diameter').textContent = planet.diameter + " km";
        document.getElementById('planet-population').textContent = planet.population;
    })
    .catch(function(error){console.error(error)})

