# Court descriptif non-exaustif du cours

- Installation de NodeJS =>
- Installation d'un starter kit webdev avec webpack, babel, ESlint, ect..(Made in le prof) Voir package.json
- Petite configuration dans .eslintrc.json et webpack.config.js pour les rendre moins aggressif.
- Installation de Postman, faire une premiere requete GET vers randomuser.me.
- Comprendre la réponse du serveur, afficher la data en JSON en particulier.

## 

- Petit tour dans l'inspecteur du navigateur, voir les requetes et les réponses du site LeMonde.fr. Websocket, Http, https
- Quelles fonctionnalités dans l'onglet Network ? 
- Quels sont les éléments pricipaux d'une requete/réponse dans l'onglet Network ?  TimeLine, Cookies, Headers, Payload, Wasm, Manifest ect..

##

- On passe au code
- Déclaration d'une classe, constructor, methode de classe, utilisation de destructuration d'objet, opérateur this, interpolation de variable
  dans un template HTML type Bootstrap puis injection dans le DOM.
- Requete avec API XMLHttpRequest, req.open(), req.send(), req.onload()
- Polymorphisme, refactorisation du code en code modulaire, creation d'un fichier user.js, users.js, des imports, des exports
- Implémentation d'un bouton déclenchant requete
- Utilisation de Math.random() pour requeter plusieurs utilisateurs à L'API randomuser.me
- Debuggage avec les breakpoints dans le code dans le navigateur car jusqu'ici addEventListener ne marche qu'une seule fois : on détruit 
  l'élément button dans le DOM et donc sa référence dans notre code à chaque appel innerHTML du templating (render()) => adaptation du code

##

- Début de callback hell dans notre code ( juste 1 callback )
- Qu'es qu'un callback hell, qu'es qu'une promesse ?
- On découvre le site web de npm et on installe la librairie axios pour faire des requetes HTTP, Axios doc
- Requete GET avec axios, utilisation methode .then(), .catch()
- Refactorisation async await, try catch.

##
