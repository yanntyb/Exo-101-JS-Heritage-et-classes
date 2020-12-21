class Vehicule {
    constructor(couleur,roues,marque){
        this.couleur = couleur;
        this.roues = roues;
        this.marque = marque;
    }
    demarer(){
        console.log("voiture démarée");
    }
    arreter(){
        console.log("voiture arreté");
    }
}

class Velo extends Vehicule {
    constructor(couleur, roues, marque, rayonRoues, typePeinture) {
        super(couleur,roues,marque);
        this.rayon = rayonRoues;
        this.peinture = typePeinture;
    }
    monter(){
        console.log("je monte sur mon velo");
    }
}

class Voiture extends Vehicule {
    constructor(couleur,roues,marque,assurance,proprietaire){
        super(couleur,roues,marque)
        this.assurance = assurance;
        this.proprietaire = proprietaire;
    }
    passerCarWash(){
        console.log("care Wash");
    }
}


let maVoiture = new Voiture("rouge",4,"Citroen","oui","yann");
maVoiture.demarer()

let monVelo = new Velo("rouge",2,"Scott",32,"acrylique");
console.log("mon velo a " + monVelo.roues + " roues")