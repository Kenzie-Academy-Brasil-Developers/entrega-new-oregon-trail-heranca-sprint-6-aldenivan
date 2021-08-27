# language: pt

Funcionalidade: Doctor
    Como um Doutor
    Eu devo curar os viajantes doentes
    Para que possamos seguir a viagem saudável.

    Contexto:
        Dado um Doctor de nome "Fábio"
        E ele começa a viagem smepre com 1 refeição
        E ele começa a viagem sempre saudável.

    
    Cenário: Examinou os Treveler e todos estavam saudavel
        Quando o Doctor examinar os "Traveler"
        E todos os "Treveler" estavam saudaveis
        Então não tinha niguém doente;

    Cenário: Examinou os Traveler e nem todos estavam saudaveis
        Quando algum "Traveler" estiver doente
        E o Doctor examinar os "Traveler"
        Então o Doutor vai deixa-los saudaveis    