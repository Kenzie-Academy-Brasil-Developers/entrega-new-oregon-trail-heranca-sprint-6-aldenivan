const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

const Traveler = require("./../../models/Traveler")
const { doutor } = require("./../../app");
const { networkInterfaces } = require("os");

/** GIVEN */

    Given('um Doctor de nome {string}', function (string) {
   
        doutor.name = string
    });

    Given('ele começa a viagem smepre com {int} refeição', function (int) {
    
        doutor.food = int;
    });

    Given('ele começa a viagem sempre saudável.', function () {

        doutor.isHealthy = true;
    });

/** WHEN */

    When('o Doctor examinar os {string}', function (string) {
    
        newTraveler = new Traveler(string);

        doutor.heal(newTraveler);
    })

    When('todos os {string} estavam saudaveis', function (string) {
        
        newTraveler = new Traveler(string);

        assert.strictEqual(newTraveler.isHealthy, true);
    });

    When('algum {string} estiver doente', function (string) {
        
        newTraveler = new Traveler(string);

        assert.strictEqual(newTraveler.isHealthy, true);
    });

    When('o Doctor examinar os {String}', function (string) {
        
        newTraveler = new Traveler(string);

        doutor.heal(newTraveler);
    });


    

/** THEN */

    Then('não tinha niguém doente;', function () {
    
        return true;
    });

    Then('o Doutor vai deixa-los saudaveis', function () {
        
        return true;
    });