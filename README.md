<h1 align="center">EQLA Cours d'HTML</h1>

## Sommaire
- [Introduction](#introduction)


## Introduction
Le HTML est un langage de programmation qui permet de créer des pages web. Il est utilisé conjointement avec le CSS et le JavaScript. Le HTML est un langage de balisage, c'est-à-dire qu'il permet de structurer un document. Il est composé de balises qui permettent de définir la structure d'un document. 

## Historique
Le HTML a été inventé par Tim Berners-Lee en 1991. Il a été inventé pour permettre aux scientifiques de partager leurs recherches. Un belge, Robert Cailliau, a aidé Tim Berners-Lee à créer le HTML. Ensemble, ils ont créé le premier navigateur web, le premier serveur web et le premier site web. Le premier site web a été mis en ligne le 6 août 1991. Le premier site web est toujours en ligne. Il est accessible à l'adresse suivante : http://info.cern.ch/hypertext/WWW/TheProject.html.

Le protocole HTTP a été créé en 1991. Le protocole HTTP permet de transférer des données sur le web. Le protocole HTTP est composé de deux parties : le client et le serveur. Le client envoie une requête au serveur. Le serveur envoie une réponse au client. Le protocole HTTP est un protocole sans état, c'est-à-dire qu'il ne garde pas en mémoire les requêtes précédentes.







## Schéma de la communication entre deux personnes
### Exemple 1: un client et une serveuse
Dans un restaurant, nous avons un client demande à la serveuse:**"Puis-je avoir une pizza 4 fromages svp ?"**. La serveuse répond:**"Oui, bien sûr"**. La serveuse va ensuite transmettre la commande au cuisinier. Le cuisinier va préparer la pizza. La serveuse va ensuite apporter la pizza au client. Le client va manger la pizza.

Représentons le schéma de la communication entre la serveuse et le client:

```mermaid
graph LR
A[Client] -- &nbsp;Puis-je avoir une pizza svp ?&nbsp; --> B((Serveuse))
B -- &nbsp;Oui, bien sur !&nbsp;  --> A
```
CLIENT : Puis-je avoir une pizza ?
SERVEUSE : Oui, bien sûr !

Dans la communication entre le client et la serveuse, les deux personnes vont devoir utiliser un langage commun: **un protocole de communication**. Le langage commun est le français. Le client et la serveuse vont devoir utiliser la même langage pour pouvoir communiquer. Une fois la même langue utilisée, le client va pouvoir demander à la serveuse une pizza. La serveuse va pouvoir répondre au client qu'elle va lui apporter une pizza. Le client va pouvoir manger la pizza. Grâce à cette langue commune, ils ont pu échanger des messages.

### Exemple 2: une serveuse et un cuisinier
La serveuse va ensuite transmettre la commande au cuisinier:**"Une pizza 4 fromage pour la table 4 !"** Le cuisinier va préparer la pizza. Quand la pizza sera préparée, le cuisiniez fera sonner une cloche et pourrais dire:**"La pizza 4 fromage de la table 4 est prête !"** La serveuse va ensuite apporter la pizza au client et lui dire:**"Voici votre pizza, bon appétit !"** Le client mange ensuite la pizza.

Représentons le schéma de la communication entre la serveuse et le client:

```mermaid
graph LR
A[Serveuse] -- &nbsp;Une pizza 4 fromage pour la table 4 !&nbsp; --> B((Cuisinier))
B -- &nbsp;La pizza 4 fromage de la table 4 est prête !&nbsp;  --> A
```
SERVEUSE : Une pizza 4 fromage pour la table 4 !
SERVEUSE : La pizza 4 fromage de la table 4 est prête !

### Exemple 3: un client, une serveuse et un cuisinier
Nous allons reprendre les deux exemples précédents et les mettre ensemble.

Le client va demander à la serveuse:**"Puis-je avoir une pizza 4 fromages svp ?"**. La serveuse va répondre:**"Oui, bien sûr"**. La serveuse va ensuite transmettre la commande au cuisinier:**"Une pizza 4 fromage pour la table 4 !"** Le cuisinier va préparer la pizza. Quand la pizza sera préparée, le cuisiniez fera sonner une cloche et pourrais dire:**"La pizza 4 fromage de la table 4 est prête !"** La serveuse va ensuite apporter la pizza au client et lui dire:**"Voici votre pizza, bon appétit !"** Le client mange ensuite la pizza.

Représentons le schéma de la communication entre le client, la serveuse et le cuisinier:
```mermaid
graph LR
A[Client] -- &nbsp;Puis-je avoir une pizza svp ?&nbsp; --> B((Serveuse))
B -- &nbsp;Oui, bien sûr !&nbsp;  --> A
B -- &nbsp;Une pizza 4 fromage pour la table 4 !&nbsp; --> C((Cuisinier))
C -- &nbsp;La pizza 4 fromage de la table 4 est prête !&nbsp;  --> B
B -- &nbsp;Voici votre pizza, bon appétit !&nbsp; --> A
```
CLIENT : Puis-je avoir une pizza ?
SERVEUSE : Oui, bien sûr !
SERVEUSE : Une pizza 4 fromage pour la table 4 !
CUISINIER : La pizza 4 fromage de la table 4 est prête !
SERVEUSE : Voici votre pizza, bon appétit !






## Schéma de communication pour une page web
Nous pourrions comparer la serveuse à un navigateur web. Nous pourrions comparer le cuisinier à un serveur web. Nous pourrions comparer la pizza à une page web.

Le navigateur va initier la communication en demandant au serveur web d'envoyer réponse: une page web. Le serveur web va ensuite envoyer la page web au navigateur web. Le navigateur web va ensuite afficher la page web.



<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>












  
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


Le schéma de la communication entre deux personnes est le suivant : 

```mermaid
graph LR
A[Personne 1] -- Demande --> B((Personne 2))
B -- Répond --> A
```




## Les versions
Le HTML a connu plusieurs versions. La première version est la version 1.0. La dernière version est la version 5.0. La version 5.0 est la version actuelle.

## Les navigateurs
Les navigateurs sont des logiciels qui permettent d'afficher des pages web. Les navigateurs les plus connus sont Google Chrome, Mozilla Firefox, Microsoft Edge et Safari.

## Les éditeurs de texte
Les éditeurs de texte sont des logiciels qui permettent d'écrire du code. Les éditeurs de texte les plus connus sont Visual Studio Code, Atom, Sublime Text et Notepad++.

## Les outils
Les outils sont des logiciels qui permettent d'aider les développeurs à coder plus rapidement et plus efficacement. Les outils les plus connus sont Emmet, Prettier, Live Server et Live Sass Compiler.



## Structure d'une page HTML
Une page HTML est composée de balises. Une balise est un élément qui permet de structurer un document. Une balise est composée d'un nom et d'un contenu. Le nom d'une balise est entouré de chevrons. Le contenu d'une balise est placé entre la balise ouvrante et la balise fermante. Une balise peut être vide, c'est-à-dire qu'elle n'a pas de contenu. 


```html
<!DOCTYPE html>
```

Dans ce cours, nous allons apprendre les bases de l'HTML. Nous allons apprendre à créer une page web, à la structurer, à la mettre en forme et à l'animer. Nous allons aussi apprendre à utiliser des outils pour nous aider à coder plus rapidement et plus efficacement. 






