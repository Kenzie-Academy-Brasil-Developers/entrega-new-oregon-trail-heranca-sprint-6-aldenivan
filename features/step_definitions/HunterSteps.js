const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { cacador } = require("./../../app");

/** GIVEN */

    Given('um Hunter de nome {string}', function (string) {

        cacador.name = string
    });

    Given('ele sempre começa a viagem com {int} refeições', function (int) {
        
        cacador.food = int;
    });

    Given('ele começa sempre a viagem saudável', function () {
        
        cacador.isHealthy = true;
      });


/** WHEN */    

    When('o Hunter sair para caçar {int} vezes', function (int) {
    
        for(let i = 0; i < int; i++) {
            cacador.hunt();
        }
    });

    When('o Hunter parar para comer {int} vezes', function (int) {
       
        for(let i = 0; i < int; i++) {
            cacador.eat();
        }
    });

    When('o Hunter sair para caçar', function () {
        
        cacador.hunt();
    });

    When('o Hunter der {int} refeições para outro {string}', function (int, string) {
        
        newTraveler = new Traveler("string")

        cacador.giveFood(newTraveler, int);
    });

    When('o Hunter tiver {int} refeições', function (int) {
        
        assert.strictEqual(cacador.food, int);
    });

    When('o Hunter querer dar {int} refeições para outro {string}', function (int, string) {
        
        newTraveler = new Traveler("string")

        cacador.giveFood(newTraveler, int)
    });

/** THEN */

    Then('a quantidade de refeições devem ser igual a {int}', function (int) {
        
        assert.strictEqual(cacador.food, int);
    });

    Then('o Hunter ficará saudável', function () {
        
        assert.strictEqual(cacador.isHealthy, true);
     });

    Then('o Hunter ficará doente', function () {
    
        assert.strictEqual(cacador.isHealthy, false);
    });



