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