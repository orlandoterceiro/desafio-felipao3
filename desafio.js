
class hero {
    constructor(name, age, type){
        this.name = name 
        this.age = age
        this.type = type
    }
    inf(){
        console.log(`Este é o ${this.type} ${this.name} da idade de ${this.age} anos`)
    }
    atacar(){
        if(this.type == "Ninja"){console.log(`O herói ${this.name} está atacando com shurikens`)} 
        else if(this.type == "Guerreiro"){console.log(`O herói ${this.name} está atacando com uma espada`)}
        else if(this.type == "Monge"){console.log(`O herói ${this.name} está atacando com golpes marciais`)}
        else if(this.type == "Mago"){console.log(`O herói ${this.name} está atacando com poderes mágicos`)}
        else{console.log("O herói não existe")}
    }

}

let Warrior = new hero ("Joaquim Barbosa", 27, "Guerreiro")

Warrior.inf()
Warrior.atacar()