let array = []

function callingPlanets(url) {
    showLoader()
    return fetch(url)
        .then(response => response.json())
        .then(function (planets) {
            array.push(...planets.results);
            let next = planets.next;
            if (next) {
                console.log("calling api " + next)
                callingPlanets(next);
            }
            else{
                hideLoader()
            }
        })
        .catch(function (error) {
            console.error(error);
        });
};

function supprDataTab(tab) {
    let newArray = []
    for (i = 0; i < tab.length; i++) {
        let valueCompared = tab[i]
        if (tab[i].name == "Tatooine" ||
            tab[i].name == "Alderaan" ||
            tab[i].name == "Hoth" ||
            tab[i].name == "Bespin" ||
            tab[i].name == "Naboo" ||
            tab[i].name == "Coruscant" ||
            tab[i].name == "Kamino" ||
            tab[i].name == "Geonosis" ||
            tab[i].name == "Mustafar" ||
            tab[i].name == "Eriadu") {
            newArray.push(valueCompared)
        }
    }
    return newArray
}

callingPlanets(`https://swapi.dev/api/planets/`)
   


// je veux créer une fonction qui appelle supprDataTab(array) et qui sera lancé dans un bouton. La fonction devra récupéré le tableau à la sortie de supprDataTab
//et retourner un tableau ordonné des diameter

canCompare = true;

function comparePlanetDiameter() {
    if (canCompare) {
        let tab = supprDataTab(array);
        for (let i = 0; i < tab.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < tab.length; j++) {
                if (parseInt(tab[j].diameter) < parseInt(tab[minIndex].diameter)) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                let temp = tab[i];
                tab[i] = tab[minIndex];
                tab[minIndex] = temp;
            }
        }
        console.log(tab)
        for (i of tab) {
            document.getElementById("lang").innerHTML += "<option value='" + i.name + "'>" + i.name + "</option>"
        }
        canCompare = false;
    }
}

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
  
  function spaceInt(number){
  return new Intl.NumberFormat().format(number)
  }


//   function fetchPlanetInfo(name) {
//     console.log(name)
//     showLoader()
//     return fetch(`https://swapi.dev/api/planets/${numero}`)
//       .then(response => response.json())
//       .then(function (planet) {
//         console.log(planet);
  
//         if(planet.diameter!="unknown"){
//           document.getElementById('planet-diameter').textContent = spaceInt(planet.diameter )+ " km";
//         }else{document.getElementById('planet-diameter').textContent = "???";}
 
//         let selectedPlanet = planetlist.find(planet => planet.nom === name);
//         if (selectedPlanet) {
//           document.getElementById('Numero').innerHTML = "N°" + selectedPlanet.numero;
//           document.getElementById('planet-name').innerHTML = selectedPlanet.nom;
//           document.getElementById('planet-portrait').innerHTML = selectedPlanet.portrait;
//           document.getElementById('planet-type').innerHTML = selectedPlanet.type
//           document.getElementById('logo-type').innerHTML = selectedPlanet.logotype
//           if(selectedPlanet.type2 !== undefined){
//             document.getElementById('planet-type2').innerHTML = selectedPlanet.type2
//             document.getElementById('logo-type2').innerHTML = selectedPlanet.logotype2
//           }else{
//             document.getElementById('planet-type2').innerHTML = ""
//             document.getElementById('logo-type2').innerHTML = ""
//           }
//         }
//         hideLoader()
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//   };

//   document.getElementById("lang").addEventListener("change", function (event) {
//     event.preventDefault();
  
//     let planeteSelectionnee = document.getElementById("lang").value;
  
//     fetchPlanetInfo(planeteSelectionnee)
  
//   });

// PARTIE A CORRIGER : le pb de la liste générée par la première fonction c'est qu'elle donne en valeur de nom et non des numéros comme attendu par fetchPlanetInfo
