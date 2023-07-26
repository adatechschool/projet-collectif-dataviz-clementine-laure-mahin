let array = []

function fetchPlanetInfo(url) {
    return fetch(url)
        .then(response => response.json())
        .then(function (planets) {
            array.push(...planets.results);
            let next = planets.next;
            if (next) {
                console.log("calling api " + next)
                fetchPlanetInfo(next);
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

fetchPlanetInfo(`https://swapi.dev/api/planets/`)


// je veux créer une fonction qui appelle supprDataTab(array) et qui sera lancé dans un bouton. La fonction devra récupéré le tableau à la sortie de supprDataTab
//et retourner un tableau ordonné des diameter



function comparePlanetDiameter() {
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
    return tab;
}






