#Road Map 


##1 -- reflexion sur les tâches et fonctionnalités, clées du projet.
##2 -- En déduire les étapes techniques à suivres.
##3 -- Si celles ci paraissent trop difficiles, faire de plus petites fonctionnalités
##4 -- Recherche des outils dont nous avons besoin.
##5 -- Mettre en place, ordonner le projet.

###Conseilles :
Faire des Commits réguliers,
penser à laisser le minimums de responsabilité à une méthode
Si une méthode ou le code se répète vérifier si on ne peut pas factoriser


 ## *** 1 ***
  - faire une grille
  - faire retourner les cartes
  - repérer les paires identiques :
        - stocker le premier click d'une carte et le 2e click de la 2nd carte
        - trouver un moyen de faire matcher les paires
        - maintenir les images trouvées
  - Positionner les cartes de manière aléatoire
  - Mettre en place un timer
  - arrêter le jeu à la fin du temps
  - perdu, proposer de rejouer
  - arrêter le temps si le jeu a été découvert avant la fin du timer
  - Gagné afficher le temps dans une fenêtre ou autre sur la page.
  - Proposer d'enregistrer le temps avec un nom  ou pseudo
  - Enregistrer le score afficher les scores en début de partie


 ## *** 2 , 3 , 4 ***
- Mettre en place de la structure et organisation du projet:
  - Dossier d'images
  - le squellette HTML basique de la grille :titre, grille, récupération des images
  - Comme il y a de la persistences de données, j'ai directement générer un projet NodeJs
    afin de profiter des fonctionnalitées de mise en place avec le package.json
  - Le serveur Node
  - Pas de framework front, comme il n'y a pas de gros formulaire ou beaucoup de cas à gèrer sur du Vanilla JS
- Appliquer un style CSS.
- Faire une methode à partir d'un évènement click pour faire retourner les cartes
- faire une méthode pour repèrer les paires identiques, synder cette même méthode pour avoir une resposabilité par méthode (voir au moment du refacto)
- trouver une méthode pour un positionement aléatoire des cartes
- mettre en place un timer avec un barre de défilement
- méthode pour arrêter le jeu à la fin du timer
- méthode pour rejouer : afficher perdu !! + bouton de remise en jeu
- méthode qui détecte si toutes les cartes sont découvertes et arrête le timer
- méthode qui affiche "gagné !"
- faire un mini formulaire dans cette modale dans le but d'enregistrer le nom et le temps
- mettre en place une mini base de donnée :
    Mon choix se portera sur Sqlite car c'est une base de données embarqué au projet pas très lourde et adapté à si peu de données
- Enregistrer le nom et le temps du jouer en base de donnée
- afficher les scores sur la page du meilleur au moins bon au dessus de la grille
- Cacher la grille le temps de l'affichage des scores





