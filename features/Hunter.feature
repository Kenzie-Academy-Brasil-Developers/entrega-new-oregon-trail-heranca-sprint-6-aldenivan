# language: pt

Funcionalidade: Traveler
    Como um Hunter
    Eu devo caçar e racionar meus mantimentos
    Para que eu possa seguir a viagem saudável e dar comida a quem precise.

    Contexto:
        Dado um Hunter de nome "Pedro"
        E ele sempre começa a viagem com 2 refeições
        E ele começa sempre a viagem saudável

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições devem ser igual a 7


    Cenário: Comeu e seguir saudavél
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições devem ser igual a 5
        E o Hunter ficará saudável    
        

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições devem ser igual a 0
        E o Hunter ficará doente


    Cenário: Saiu para caçar, comer e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições devem ser igual a 8
        E o Hunter ficará saudável


    Cenário: Saiu para caçar, deu comida para outro Traveler
        Quando o Hunter sair para caçar
        E o Hunter der 5 refeições para outro "Traveler"
        Então a quantidade de refeições devem ser igual a 2 

    Cenário: Deu comida para outro Traveler
        Quando o Hunter der 2 refeições para outro "Treveler"
        Então a quantidade de refeições devem ser igual a 0

    Cenário: Não deu comida para outro Traveler
        Quando o Hunter tiver 2 refeições
        E o Hunter querer dar 3 refeições para outro "Treveler"
        Então a quantidade de refeições devem ser igual a 2