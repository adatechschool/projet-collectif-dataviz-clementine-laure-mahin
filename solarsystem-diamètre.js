let array = []
let newArray = []

//permet de remplir la variable array avec les données des objets planètes
async function callingPlanets(url) {
    showLoader()
    try {
        const response = await fetch(url);
        const planets = await response.json();
        array.push(...planets.results);
        let next = planets.next;
        if (next) {
            console.log("calling api " + next);
            await callingPlanets(next); // Attendez que l'appel récursif soit terminé
        } else {
            hideLoader();
        }
    } catch (error) {
        console.error(error);
        hideLoader(); 
    }
};

//permet d'enlever de Array les objets qui ne nous intéressent pas
function supprDataTab(tab) {
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


   

async function comparePlanetDiameter() {
    try {
        await callingPlanets(`https://swapi.dev/api/planets/`);
        if (canCompare) {
            let tab = supprDataTab(array);
            // ... le reste de votre code pour trier le tableau et afficher les options ...
            canCompare = false;
        }
    } catch (error) {
        console.error('Erreur lors de la récupération et du tri des planètes:', error);
    }
}


canCompare = true;

// permet de trier le tableau d'objets qui nous intéresse en les rangeant en fonction de leur diamètre.
async function comparePlanetDiameter() {
    try {
        await callingPlanets(`https://swapi.dev/api/planets/`);
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
        document.getElementById("lang").innerHTML = "";
        for (i of tab) {
            document.getElementById("lang").innerHTML += "<option value='" + i.name + "'>" + i.name + "</option>"
        }

    } catch (error) {
        console.error('Erreur lors de la récupération et du tri des planètes:', error);
    }
}


comparePlanetDiameter()

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

document.getElementById("lang").addEventListener("change", function (event) {
    event.preventDefault();
    let planeteSelectionnee = document.getElementById("lang").value;
    for(planet of newArray){
        if(planet.name == planeteSelectionnee){
            document.getElementById("planet-diameter").innerHTML = spaceInt(planet.diameter) + " km"
        }
    }
    let selectedPlanet = planetlist.find(planet => planet.nom === planeteSelectionnee);
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
      }
})

