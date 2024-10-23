
// Desafio 03 Escrevendo as Classes de Um Jogo //

class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    atacar() {
        let ataque;
        
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const guerreiro = new Heroi("Hulk", 30, "guerreiro");
const mago = new Heroi("Dumbledore", 200, "mago");
const monge = new Heroi("Shaolin", 45, "monge");
const ninja = new Heroi("Naruto", 18, "ninja");

guerreiro.atacar();
mago.atacar();
monge.atacar();
ninja.atacar();


    