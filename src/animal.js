export class Animal {
    constructor(nome, especie, brinquedos = []) {
        this.nome = nome;
        this.especie = especie;
        this.brinquedos = brinquedos;
    }
}

const animais = [];

    export function cadastrarAnimal (nome, especie, brinquedos) {
        const animal = new Animal(nome, especie, brinquedos)
        animais.push(animal);
        return animal;
    }

    export function listarAnimais() {
        return animais;
    }

   
    cadastrarAnimal("Rex", "cão", ["RATO", "BOLA"]);
    cadastrarAnimal("Mimi", "gato", ["BOLA", "LASER"]);
    cadastrarAnimal("Fofo", "gato", ["BOLA", "RATO", "LASER"]);
    cadastrarAnimal("Zero", "gato", ["RATO", "BOLA"]);
    cadastrarAnimal("Bola", "cão", ["CAIXA", "NOVELO"]);
    cadastrarAnimal("Bebe", "cão", ["LASER", "RATO", "BOLA"]);
    cadastrarAnimal("Loco", "jabuti", ["SKATE", "RATO"]);

   

