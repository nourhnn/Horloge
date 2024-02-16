'use strict'

/* Comprendre querySelector() :
query => requête
Selector => API Selectors => une spécification W3C qui permet d'accéder aux objets du DOM à la même manière que CSS

querySelector() : retourne le premier élément trouvé satisfaisant au sélecteur (type de retour : Element), ou null si aucun objet correspondant n'est trouvé.


The Selectors API specification defines methods for retrieving Element nodes from the DOM by matching against a group of selectors, and for testing if a given element matches a particular selector.

These methods simplify the process of acquiring and testing specific elements, especially compared with the more verbose techniques defined and used in the past.

(W3C)
*/
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

//setInterval() déclenche une opération à intervalles réguliers

//Date() constructor creates Date objects

// getDay(), setHours())
//méthodes permettant d'obtenir ou de définir les différentes composantes d'une date selon le temps local 

//date.getHours,Minutes,Seconds() renvoie le nombre d'heures(360 degrés / 12 heures = 30 degrés par heure), minutes(360 degrés / 60 minutes = 6 degrés par minute), secondes(360 degrés / 60 secondes = 6 degrés par seconde) actuelles.

//fonction rotateZ() définit une transformation qui déplace l'élément autour de l'axe Z, sans déformer cet élément

setInterval(() => {
  let date = new Date();
  let heure = date.getHours() * 30;
  let minute = date.getMinutes() * 6;
  let seconde = date.getSeconds() * 6;
  hr.style.transform = `rotateZ(${heure + minute / 12}deg)`;
  mn.style.transform = `rotateZ(${minute}deg)`;
  sc.style.transform = `rotateZ(${seconde}deg)`;
});
