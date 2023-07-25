const planetlist =
    [
        {
            numero: "001",
            value: "1",
            nom: "Tatooine",
            logotype: '<img id="type" src="Banque images/Logo éléments/Sable.png"/>',
            type: 'SABLE',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Tatooine.png"/>',
            resume: "Planète-désert située dans la Bordure extérieure. Elle gravite autour de ses 2 soleils Tatoo I et Tatoo II. Monde originaire d’Anakin et Luke Skywalker."
        },

        {
            numero: "002",
            value: "2",
            nom: "Alderaan",
            logotype: '<img id="type" src="Banque images/Logo éléments/Plante.png"/>',
            type: 'PLANTE',
            logotype2:'<img id="type2" src="Banque images/Logo éléments/Terre.png"/>',
            type2: 'TERRE',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Alderaan.png" class="fluffy"/>',
            resume: " Archive : Planète tellurique située dans les mondes du Noyau, elle orbite autour d’une étoile homonyme. Détruite par l’Etoile Noire en l’an 0."
        },

        {
            numero: "004",
            value: "4",
            nom: "Hoth",
            logotype: '<img id="type" src="Banque images/Logo éléments/Glace.png"/>',
            type: 'GLACE',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Hoth.png"/>',
            resume: "Planète glacée inhabitée et hostile située dans la Bordure extérieure. Quelques animaux la peuplent mais de manière vraiment anecdotique."
        },

        {
            numero: "006",
            value: "6",
            nom: "Bespin",
            logotype: '<img id="type" src="Banque images/Logo éléments/Air.png"/>',
            type: 'AIR',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Bespin.png"/>',
            resume: "Géante gazeuse située dans la Bordure extérieure. Les habitants (humains et ugnaughts) exploitent le Tibanna, un gaz présent son atmosphère, et vivent dans une ville flottante : la Cité des Nuages."
        },

        {
            numero: "008",
            value: "8",
            nom: "Naboo",
            logotype: '<img id="type" src="Banque images/Logo éléments/Plante.png"/>',
            type: 'PLANTE',
            logotype2: '<img id="type2" src="Banque images/Logo éléments/Métal.png"/>',
            type2: 'VILLE',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Naboo.png"/>',
            resume: "Planète tellurique située dans la Bordure médiane qui orbite autour de l’étoile Chommel. Elle est le monde d’origine des Gungans (être amphibies vivant dans les marais et les océans). La cohabitation avec les humains est plus ou moins pacifique."
        },

        {
            numero: "009",
            value: "9",
            nom: "Coruscant",
            logotype: '<img id="type" src="Banque images/Logo éléments/Métal.png"/> ',
            type: 'ACIER',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Coruscant.png"/>',
            resume: "Planète-ville située dans les mondes du Noyau, elle orbite autour de Coruscant Prime. Capitale de la République Galactique, puis de l’Empire Galactique, puis de la Nouvelle République Galactique… Centre politique de la Galaxie."
        },

        {
            numero: "010",
            value: "10",
            nom: "Kamino",
            logotype: '<img id="type" src="Banque images/Logo éléments/Eau.png"/>',
            type: 'EAU',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Kamino.png"/>',
            resume: "Planète-océan située en dehors de la Galaxie. Peuplée par les kaminoens, êtres qui pratiquent sur eux même (et sur les autres) le clonage. Ce sont eux qui ont fabriqué les Clones."
        },

        {
            numero: "011",
            value: "11",
            nom: "Geonosis",
            logotype: '<img id="type" src="Banque images/Logo éléments/Terre.png"/>',
            type: 'ROCHE',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Geonosis.png"/>',
            resume: "Planète-désert rocheux située dans la Bordure extérieure, qui orbite autour de l’étoile Ea. Elle est peuplée par les géonosiens, des êtres pensants organisés en ruches."
        },

        {
            numero: "021",
            value: "21",
            nom: "Eriadu",
            logotype: '<img id="type" src="Banque images/Logo éléments/Métal.png"/>',
            type: 'ACIER',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Eriadu.png"/>',
            resume: "Planète possédant de nombreux gisements de Lommite, mais dont l’exploitation détruisit et pollua irrémédiablement l’environnement."
        },

        {
            numero: "013",
            value: "13",
            nom: "Mustafar",
            logotype: '<img id="type" src="Banque images/Logo éléments/Ténèbre.png">',
            type: 'TENEBRE',
            logotype2: '<img id="type" src="Banque images/Logo éléments/Feu.png">',
            type2: 'FEU',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/Mustafar.png"/>',
            resume: "Jeune planète, avec une importante activité volcanique située dans la Bordure extérieure, qui orbite autour de Priate. Résidence principale du seigneur Sith Darth Vader. Planète avec une forte présence du côté Obscur."
        },

        {
            numero: "???",
            value: "60",
            nom: "???",
            logotype: '<img id="type" src="Banque images/Logo éléments/Inconnu.png">',
            type: '???',
            icone: "en attente",
            portrait: '<img alt="Visuel de la planète" title="Visuel de la planète" src="Banque images/Portraits planètes/unknown.png"/>',
            resume: "Ce travail de fourmi prend du temps. Nous n’avons pas encore visité et répertorié cette planète."
        }

    ]

