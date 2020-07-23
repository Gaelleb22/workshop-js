function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }
}

var jules = new Personne('LEMAIRE', 'Jules', 'jules77');
var paul = new Personne('LEMAIRE', 'Paul', 'paul44');

function afficherPersonne(personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.getNomComplet());
}

afficherPersonne(jules);
afficherPersonne(paul);

//modifier
jules.pseudo = 'jules44';
console.log(jules.getNomComplet());

//ajouter propriété
jules.age;
console.log(jules.age);

Personne.prototype.age = 'NON RENSEIGNE';
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

//ajouter une méthode
Personne.prototype.getInitiales = function () {
    return this.nom.charAt(0) + this.prenom.charAt(0);
}
console.log(jules.getInitiales());

//objet sans constructeur
var robert = {
    nom: 'LEPREFET', prenom: 'Robert', pseudo: 'robert77',
    getNomComplet: function () {
        return this.nom + ' ' + this.prenom + ' ' + this.pseudo;
    }
}
afficherPersonne(robert);

//Héritage via fonction constructeur
function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function () {
        return this.numeroClient+' '+this.nom + ' ' + this.prenom ;
    }
}
var steve = new Client('LUCAS', 'Steve', 'steve44', 'A01');
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());