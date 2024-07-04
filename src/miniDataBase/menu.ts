import { categoryType } from "../Types/interface";

import sucoLaranjaPhoto from "../assets/laranja.jpg"
import sucoLaranjaBeterrabaPhoto from "../assets/Laranja_beterraba.jpg"
import sucoLaranjaMamaoPhoto from "../assets/Laranja_Mamao.jpg"
import sucoLaranjaLeitePhoto from "../assets/Laranja_Leite.jpg"
import sucoAcaiLaranjaPhoto from "../assets/Açaí_laranja.jpg"

import acaiPhoto from "../assets/Acai.jpg"

import hamburguerGeral from "../assets/HambuguerGeral2.jpg"
import sanduicheSemHamburguer from "../assets/sanduicheSemHamburguer.jpg"
import sanduicheFrango from "../assets/sanduicheFrango.jpg"
import sanduicheCalabresa from "../assets/sanduicheCalabresa.jpg"
import sanduiche from "../assets/Sanduiche.jpg"
import ovoSemCarne from "../assets/ovoSemCarne.jpg"
import indisponivel from "../assets/Indisponivel.jpg"

export const menuData: categoryType[] = [{
    id: 1,
    name: "HAMBURGERS",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: hamburguerGeral,
        name: "Zé Colmeia",
        price: "R$ 6,50",
        discription: "Pão, Hamburguer, Tomate e Alface"
    }, {
        id: 2,
        image: hamburguerGeral,
        name: "Pepe Legal",
        price: "R$ 7,00",
        discription: "Pão, Hamburguer, Queijo, Tomate e Alface"
    }, {
        id: 3,
        image: hamburguerGeral,
        name: "Papa Léguas",
        price: "R$ 7,50",
        discription: "Pão, Hamburguer, Ovo, Tomate e Alface"
    }, {
        id: 4,
        image: hamburguerGeral,
        name: "Lobão",
        price: "R$ 8,50",
        discription: "Pão, Hamburguer, Presunto, Queijo, Tomate e Alface"
    }, {
        id: 5,
        image: hamburguerGeral,
        name: "Scooby Doo",
        price: "R$ 9,00",
        discription: "Pão, Hamburguer, Queijo, Ovo, Tomate e Alface"
    }, {
        id: 6,
        image: hamburguerGeral,
        name: "Frajola",
        price: "R$ 10,00",
        discription: "Pão, Hamburguer, Queijo, Ovo, Tomate e Alface"
    }, {
        id: 7,
        image: hamburguerGeral,
        name: "Perna Longa",
        price: "R$ 12,00",
        discription: "Pão, Hamburguer, Salsicha, Queijo, Ovo, Ervilha, Queijo Ralado"
    }, {
        id: 8,
        image: hamburguerGeral,
        name: "João Grandão",
        price: "R$ 11,00",
        discription: "Pão, Hamburguer, Presunto, Queijo, Ovo, Ervilha, Queijo Ralado"
    }, {
        id: 9,
        image: hamburguerGeral,
        name: "Tutubarão",
        price: "R$ 13,00",
        discription: "Pão, Hamburguer,Presunto, Queijo, Ovo, Ervilha, Queijo Ralado, Tomate, Alface"
    }, {
        id: 10,
        image: hamburguerGeral,
        name: "Minhocão",
        price: "R$ 14,00",
        discription: "Pão, 2 Hamburguer, Presunto, Queijo, Ovo, Ervilha, Milho, Tomate e Alface"
    }, ]
}, {
    id: 2,
    name: "HAMBURGERS COM BACON",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: hamburguerGeral,
        name: "Samurai",
        price: "R$ 10,00",
        discription: "Pão, Bacon, Hamburgue, Tomate e alface"
    }, {
        id: 2,
        image: hamburguerGeral,
        name: "Gringo",
        price: "R$ 11,00",
        discription: "Pão, Presunto, Bacon, Queijo, Tomate e Alface"
    }, {
        id: 3,
        image: hamburguerGeral,
        name: "Manda Chuva",
        price: "R$ 12,00",
        discription: "Pão, Bacon, Hamburguer, Queijo, Tomate e Alface"
    }, {
        id: 4,
        image: hamburguerGeral,
        name: "Touchê",
        price: "R$ 13,00",
        discription: "Pão, Bacon, Hamburguer, Queijo, Ovo, Tomate e Alface"
    }, {
        id: 5,
        image: hamburguerGeral,
        name: "Pica Pau",
        price: "R$ 14,00",
        discription: "Pão, Bacon, Hamburguer, Presunto, Queijo, Ovo, Ervilha, Milho, Queijo Ralado, Tomate e Alface"
    }]
}, {
    id: 3,
    name: "HAMBURGERS ESPECIAIS",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: hamburguerGeral,
        name: "Urso Mal",
        price: "R$ 29,00",
        discription: "Pão, Hamburguer, Presunto, Queijo, Ovo, Salsicha, Bacon, Calabresa, File Mignon, Cheddar, Batata Palha, Queijo Ralado, Frango, Tomate, Alface, Cebola, Ervilha E Milho"
    }, {
        id: 2,
        image: hamburguerGeral,
        name: "Thunder Cats",
        price: "R$ 16,00",
        discription: "Pão, Filé, Queijo, Presunto, Molho Acebolado, Bacon, Ovo, Milho, Tomate, Alface E Batata Palha"
    }, {
        id: 3,
        image: hamburguerGeral,
        name: "Monster Hight",
        price: "R$ 18,00",
        discription: "Pão, Filé, Queijo, Salsicha, Presunto, Molho Acebolado, Bacon, Cheddar, Ovo, Milho, Queijo Ralado, Tomate, Alface e Batata Palha"
    }, {
        id: 4,
        image: hamburguerGeral,
        name: "Justin Bieber",
        price: "R$ 15,00",
        discription: "Pão, Hamburguer, Calabresa, Cheddar, Batata Palha, Presunto, Queijo, Ovo, Tomate e Alface"
    }, ]
}, {
    id: 4,
    name: "HAMBURGERS COM FILÉ",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: hamburguerGeral,
        name: "Lula Lelé",
        price: "R$ 11,00",
        discription: "Pão, Filé, Queijo, Tomate e Alface"
    }, {
        id: 2,
        image: hamburguerGeral,
        name: "Dragon",
        price: "R$ 13,00",
        discription: "Pão, Filé, Queijo, Ovo, Tomate E Alface"
    }, {
        id: 3,
        image: hamburguerGeral,
        name: "Smurfs",
        price: "R$ 12,00",
        discription: "Pão, Filé, Queijo, Presunto, Tomate E Alface"
    }, {
        id: 4,
        image: hamburguerGeral,
        name: "Homem Aranha",
        price: "R$ 10,50",
        discription: "Pão, Filé, Queijo, Molho Acebolado, Tomate E Alface"
    }, {
        id: 5,
        image: hamburguerGeral,
        name: "Minie",
        price: "R$ 10,00",
        discription: "Pão, Filé, Queijo Cheddar, Tomate E Alface"
    }, {
        id: 6,
        image: hamburguerGeral,
        name: "Mickey Mouse",
        price: "R$ 14,00",
        discription: "Pão, Filé, Queijo Cheddar, Presunto, Ovo, Ervilha, Milho, Batata Palha, Tomate E Alface"
    }, {
        id: 7,
        image: hamburguerGeral,
        name: "Plutus",
        price: "R$ 11,50",
        discription: "Pão, Filé, Queijo Cheddar, Presunto, Tomate E Alface"
    }, ]
}, {
    id: 5,
    name: "HAMBURGERS COM FRANGO",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: sanduicheFrango,
        name: "Taz",
        price: "R$ 7,00",
        discription: "Pão, Frango, Tomate e Alface"
    }, {
        id: 2,
        image: sanduicheFrango,
        name: "Fantasminha",
        price: "R$ 10,00",
        discription: "Pão, Frango, Queijo, Tomate e Alface"
    }, {
        id: 3,
        image: sanduicheFrango,
        name: "Frango Sabor",
        price: "R$ 12,00",
        discription: "Pão, Frango, Queijo, Ovo, Milho, Ervilha, Tomate e Alface"
    }, {
        id: 4,
        image: sanduicheFrango,
        name: "Piriguete",
        price: "R$ 14,00",
        discription: "Pão, Frango, Queijo, Presunto, Bacon, Tomate e Alface"
    }, {
        id: 5,
        image: sanduicheFrango,
        name: "Bob Esponja",
        price: "R$ 13,00",
        discription: "Pão, Frango, Queijo, Presunto, Ovo, Cheddar, Ervilha, Queijo Ralado, Tomate e Alface"
    }, ]
}, {
    id: 6,
    name: "HAMBURGERS LEVES",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: indisponivel,
        name: "Hot Dog 1",
        price: "XXXX",
        discription: "Pão De Hot Dog, Salsicha Molho e Queijo Ralado"
    }, {
        id: 2,
        image: indisponivel,
        name: "Hot Dog 2",
        price: "XXXX",
        discription: "Pão De Hot Dog, 2 Salsichas, Batata Palha, Molho e Queijo Ralado"
    }, {
        id: 3,
        image: sanduiche,
        name: "Sanduiche de Queijo 1",
        price: "XXXX",
        discription: "Pão De Forma, 2 Fatias De Queijo"
    }, {
        id: 4,
        image: sanduicheSemHamburguer,
        name: "Sanduiche de Queijo 2",
        price: "XXXX",
        discription: "Pão De Hamburguer, 2 Fatias De Queijo"
    }, {
        id: 5,
        image: sanduiche,
        name: "Sanduiche de Queijo 3",
        price: "XXXX",
        discription: "Pão Integral, 2 Fatias De Queijo"
    }, {
        id: 6,
        image: sanduiche,
        name: "Misto 1",
        price: "R$ 6,00",
        discription: "Pão De Forma, Queijo e Presunto"
    }, {
        id: 7,
        image: sanduicheSemHamburguer,
        name: "Misto 2",
        price: "R$ 6,00",
        discription: "Pão De Hamburguer, Queijo e Presunto"
    }, {
        id: 8,
        image: sanduiche,
        name: "Misto 3",
        price: "R$ 7,00",
        discription: "Pão Integral, Queijo e Presunto"
    }, {
        id: 9,
        image: ovoSemCarne,
        name: "Americano",
        price: "R$ 8,00",
        discription: "Pão, Queijo, Presunto, Ovo, Tomate e Alface"
    }, {
        id: 10,
        image: indisponivel,
        name: "Turbinado",
        price: "R$ 12,00",
        discription: "Pão, 2 Salsichas, Presunto, Queijo, Milho, Tomate, Alface e Batata Palha"
    }, {
        id: 11,
        image: sanduicheSemHamburguer,
        name: "Peppa",
        price: "XXXX",
        discription: "Pão, Ovo e 3 Queijos"
    }, ]
}, {
    id: 7,
    name: "SANDUICHES NATURAIS",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: indisponivel,
        name: "Frango",
        price: "R$ 12,00",
        discription: "Pão Integral, Maionese Light, Cenoura, Milho, Frango e Passas"
    }, {
        id: 2,
        image: indisponivel,
        name: "Atum",
        price: "R$ 12,00",
        discription: "Pão Integral, Maionese Light, Cenoura, Milho, Atum e Passas"
    }]
}, {
    id: 8,
    name: "SANDUICHES COM CALABRESA",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: sanduicheCalabresa,
        name: "Sereia Azul",
        price: "R$ 7,00",
        discription: "Pão, Calabresa, Molho Acebolado, Tomate e Alface"
    }, {
        id: 2,
        image: sanduicheCalabresa,
        name: "Ligeirinho",
        price: "R$ 9,00",
        discription: "Pão, Calabresa, Queijo, Tomate e Alface"
    }, {
        id: 3,
        image: ovoSemCarne,
        name: "Olho Vivo",
        price: "R$ 12,00",
        discription: "Pão, Calabresa, Queijo, Presunto, Ovo, Batata Palha, Tomate e Alface"
    }, {
        id: 4,
        image: ovoSemCarne,
        name: "Dom Quixote",
        price: "R$ 13,00",
        discription: "Pão, Calabresa, Queijo, Presunto, Ovo, Batata Palha, Molho Acebolado, Tomate e Alface"
    }, ]
}, {
    id: 9,
    name: "SUCOS",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: sucoLaranjaPhoto,
        name: "Suco",
        price: "R$ 4,00",
        discription: "Laranja - 300ml"
    }, {
        id: 2,
        image: sucoLaranjaPhoto,
        name: "Suco",
        price: "R$ 6,00",
        discription: "Laranja - 500ml"
    }, {
        id: 3,
        image: sucoLaranjaPhoto,
        name: "Suco",
        price: "R$ 7,00",
        discription: "Laranja Integral 300ml"
    }, {
        id: 4,
        image: sucoLaranjaBeterrabaPhoto,
        name: "Suco",
        price: "R$ 7,00",
        discription: "Laranja Com Beterraba - 500ml"
    }, {
        id: 5,
        image: sucoLaranjaMamaoPhoto,
        name: "Suco",
        price: "R$ 7,00",
        discription: "Laranja Com Mamão - 500ml"
    }, {
        id: 6,
        image: sucoLaranjaLeitePhoto,
        name: "Suco",
        price: "R$ 7,00",
        discription: "Laranja Com Leite - 500ml"
    }, {
        id: 7,
        image: sucoAcaiLaranjaPhoto,
        name: "Suco",
        price: "R$ 7,00",
        discription: "Açaí Com Laranja - 500ml"
    }, {
        id: 8,
        image: indisponivel,
        name: "Suco",
        price: "R$ 12,00",
        discription: "Turbinado - 500ml"
    }]
}, {
    id: 10,
    name: "AÇAÍ",
    discription: "Conheça as Opções",
    options: [{
        id: 1,
        image: acaiPhoto,
        name: "Açaí",
        price: "R$ 15,00",
        discription: "500ml"
    }]
}]