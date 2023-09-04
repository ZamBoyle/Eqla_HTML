<h1 style="display: flex; align-items: center; justify-content: center;">
    <img src="Images/Eqla.png" style="height:50px">
    &nbsp;Cours d'HTML
</h1>


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. Introduction](#1-introduction)
- [2. Historique](#2-historique)
- [3. Schéma de la communication entre deux personnes](#3-schéma-de-la-communication-entre-deux-personnes)
  - [3.1 Exemple 1: un client et une serveuse](#31-exemple-1-un-client-et-une-serveuse)
  - [3.2 Exemple 2: une serveuse et un cuisinier](#32-exemple-2-une-serveuse-et-un-cuisinier)
  - [3.3 Exemple 3: un client, une serveuse et un cuisinier](#33-exemple-3-un-client-une-serveuse-et-un-cuisinier)
- [4. Schéma de communication entre un navigateur web et un serveur web](#4-schéma-de-communication-entre-un-navigateur-web-et-un-serveur-web)
- [Les versions](#les-versions)
- [Le W3C](#le-w3c)
- [Les navigateurs](#les-navigateurs)
- [Les serveurs webs](#les-serveurs-webs)
- [Les éditeurs de code](#les-éditeurs-de-code)
- [Structure d'une page HTML](#structure-dune-page-html)

<!-- /code_chunk_output -->




## 1. Introduction
Aujourd'hui, **Internet** est devenu une partie intégrante de nos vies. Nos smartphones, nos télévisions, nos montres, nos voitures, nos maisons... tous sont connectés à Internet. Nous utilisons Internet pour communiquer avec nos amis, pour regarder des vidéos, écouter de la musique, jouer à des jeux, effectuer des recherches, et bien plus encore. De nombreuses applications sont désormais basées sur le web, car le web d'antan a évolué pour devenir le web d'aujourd'hui : moderne, rapide et performant.

Les applications web sont des programmes qui s'exécutent dans un navigateur web. Toutefois, il est désormais possible pour certaines applications web d'être installées directement sur un ordinateur ou un smartphone, sans nécessiter un navigateur pour être lancées à chaque utilisation. On parle alors de **PWA** (_Progressive Web App_). L'avantage des PWA est qu'elles peuvent ressembler de très près à des applications natives en termes de performance et de convivialité. Bien que nous n'aborderons pas les PWA en détail dans ce cours, il est intéressant de savoir qu'elles existent et qu'elles représentent une évolution importante du web.

Le **HTML** est un langage de balisage qui permet de structurer le contenu d'une page web. Utilisé en combinaison avec le CSS, qui gère la mise en forme, et le JavaScript, qui ajoute de l'interactivité, le HTML forme la base de la plupart des sites web que nous visitons.

Il est important de clarifier une idée reçue courante : Internet n'est pas simplement Google ou votre navigateur préféré. Quand quelqu'un affirme : "Je suis sur Internet", il est probable qu'il utilise le World Wide Web, un service d'Internet, à travers un navigateur. Mais Internet est bien plus vaste, offrant une multitude de services tels que le courrier électronique, le FTP, le P2P, les jeux en ligne, et bien d'autres.

Internet est souvent décrit comme le réseau des réseaux. C'est un système mondial de réseaux d'ordinateurs interconnectés, utilisant le protocole TCP/IP pour communiquer entre eux. TCP/IP est l'ensemble des règles qui définissent comment les données sont échangées sur Internet. Il ne s'agit pas seulement d'une interaction client-serveur, mais d'un ensemble complexe de protocoles de communication.

Enfin, Internet est structuré en plusieurs couches, allant de la couche physique, qui concerne le matériel et la transmission de données brutes, à la couche applicative, où fonctionnent des protocoles tels que HTTP (pour le web) et SMTP (pour l'email). Le HTML, le CSS et le JavaScript opèrent à ce niveau applicatif, formant les piliers de la création de pages web interactives.

## 2. Historique
Le HTML a été conçu par Tim Berners-Lee dans le cadre de son projet du World Wide Web qu'il a proposé en 1989. Il avait pour objectif de permettre aux scientifiques du CERN de partager leurs recherches. Robert Cailliau, un Belge, a collaboré avec Tim Berners-Lee pour donner vie au Web. Ensemble, ils ont développé le premier navigateur web, le premier serveur web, et ont mis en ligne le premier site web le 6 août 1991. Ce site est toujours accessible et peut être consulté à l'adresse : http://info.cern.ch/hypertext/WWW/TheProject.html.

Le protocole HTTP a été introduit en même temps que le World Wide Web. Il sert de fondement au transfert de données sur le web. Dans sa forme la plus simple, le protocole HTTP est composé d'un client qui envoie une requête à un serveur, qui à son tour renvoie une réponse. HTTP est un protocole sans état, signifiant qu'il ne conserve pas d'informations sur les requêtes précédentes.

Je vous invite à visionner la vidéo [La méconnue naissance du Web](https://auvio.rtbf.be/media/la-meconnue-naissance-du-web?id=2855400) sur Auvio pour en apprendre davantage. (Notez qu'un compte Auvio est nécessaire pour y accéder).



## 3. Schéma de la communication entre deux personnes
### 3.1 Exemple 1: un client et une serveuse
Dans un restaurant, nous avons un client demande à la serveuse: **"Puis-je avoir une pizza 4 fromages svp ?"**.  
La serveuse répond: **"Oui, bien sûr"**.
La serveuse va ensuite transmettre la commande au cuisinier. Le cuisinier va préparer la pizza. La serveuse va ensuite apporter la pizza au client. Le client va manger la pizza.

Représentons le schéma de la communication entre la serveuse et le client:

| Émetteur | Récepteur | Message                        |
|----------|--------------|--------------------------------|
| 1. CLIENT   | SERVEUSE     | _Puis-je avoir une pizza ?_    |
| 2. SERVEUSE | CLIENT       | _Oui, bien sûr !_              |

Version avec un [schéma graphique](Diagrammes/3.1.ClientServeuse.md) (non accessible). 

Dans la communication entre le client et la serveuse, les deux personnes vont devoir utiliser un langage commun: **un protocole de communication**. Le langage commun est le français. Le client et la serveuse vont devoir utiliser la même langage pour pouvoir communiquer. Une fois la même langue utilisée, le client va pouvoir demander à la serveuse une pizza. La serveuse va pouvoir répondre au client qu'elle va lui apporter une pizza. Le client va pouvoir manger la pizza. Grâce à cette langue commune, ils ont pu échanger des messages.

La communication entre le client et la serveuse est **bidirectionnelle**. Cela signifie que le client et la serveuse peuvent envoyer et recevoir des messages.

Un message utilise un canal de communication. Dans notre exemple, le canal de communication est l'air. Le client et la serveuse vont utiliser l'air pour envoyer et recevoir des messages. Le canal de communication peut être un fil, l'air, un câble, etc.

### 3.2 Exemple 2: une serveuse et un cuisinier
La serveuse va ensuite transmettre la commande au cuisinier:**"Une pizza 4 fromages pour la table 4 !"**  
Le cuisinier va préparer la pizza.  
Quand la pizza sera préparée, le cuisiniez fera sonner une cloche et pourrait dire:**"La pizza 4 fromages de la table 4 est prête !"**  
La serveuse va ensuite apporter la pizza au client et lui dire:**"Voici votre pizza, bon appétit !"**  
Le client mange ensuite la pizza.

Représentons le schéma de la communication entre la serveuse et le client:

| Émetteur  | Récepteur | Message                                               |
|-----------|--------------|-------------------------------------------------------|
| 1. SERVEUSE  | CUISINIER    | _Une pizza 4 fromages pour la table 4 !_              |
| 2. CUISINIER | SERVEUSE     | _La pizza 4 fromages de la table 4 est prête !_       |

Version avec un [schéma graphique](Diagrammes/3.2.ServeuseCuisinier.md) (non accessible).

### 3.3 Exemple 3: un client, une serveuse et un cuisinier
Nous allons reprendre les deux exemples précédents et les mettre ensemble.

Le client va demander à la serveuse:**"Puis-je avoir une pizza 4 fromages svp ?"**. La serveuse va répondre:**"Oui, bien sûr"**. La serveuse va ensuite transmettre la commande au cuisinier:**"Une pizza 4 fromages pour la table 4 !"** Le cuisinier va préparer la pizza. Quand la pizza sera préparée, le cuisiniez fera sonner une cloche et pourrais dire:**"La pizza 4 fromages de la table 4 est prête !"** La serveuse va ensuite apporter la pizza au client et lui dire:**"Voici votre pizza, bon appétit !"** Le client mange ensuite la pizza.

Représentons le schéma de la communication entre le client, la serveuse et le cuisinier:

| Émetteur   | Récepteur | Message                                       |
|------------|--------------|-----------------------------------------------|
| 1. CLIENT     | SERVEUR      | _Puis-je avoir une pizza 4 fromages ?_        |
| 2. SERVEUSE   | CLIENT       | _Oui, bien sûr !_                             |
| 3. SERVEUSE   | CUISINIER    | _Une pizza 4 fromages pour la table 4 !_      |
| 4. CUISINIER  | SERVEUSE     | _La pizza 4 fromages de la table 4 est prête !_|
| 5. SERVEUSE   | CLIENT       | _Voici votre pizza, bon appétit !_            |

Version avec un [schéma graphique](Diagrammes/3.3.ClientServeuseCuisinier.md) (non accessible).

## 4. Schéma de communication entre un navigateur web et un serveur web
Nous pourrions comparer la serveuse à un navigateur web, le cuisinier à un serveur web, le client à un utilisateur et la pizza à une page web.

Le navigateur va initier la communication en demandant au serveur web d'envoyer réponse: une page web. Le serveur web va ensuite envoyer la page web au navigateur web. Le navigateur web va ensuite afficher la page web.

Représentons le schéma de la communication entre le navigateur web et le serveur web:

| Émetteur   | Récepteur | Message                                       |
|------------|--------------|-----------------------------------------------|
| 1. NAVIGATEUR | SERVEUR      | _Donne-moi la page web suivante_                |
| 2. SERVEUR    | NAVIGATEUR   | _Voici la page web_            |

Version avec un [schéma graphique](Diagrammes/4.NavigateurServeur.md) (non accessible).

Dans une communication de type client/serveur le canal de communication est l'Internet. Le client et le serveur vont utiliser l'Internet pour envoyer et recevoir des messages. Le canal de communication peut être un fil, l'air, un câble, etc.

## Les versions
Le HTML a connu plusieurs versions. La première version est la version 1.0. La dernière version est la version 5.0.
A titre informatif, voici la liste des versions du HTML:
- HTML 1.0: 1993 (première version) 
- HTML 2.0: 1995 
- HTML 3.2: 1997 
- HTML 4.01: 1999
- XHTML 1.0: 2000
- XHTML 1.1: 2001
- HTML 5.0: 2014 (dernière version)

Le HTML, ou HyperText Markup Language, est le langage standard de description de pages web. Depuis sa création, il a connu de nombreuses évolutions qui ont reflété les besoins croissants et changeants du web. Voici un bref aperçu des versions majeures du HTML et de leurs innovations principales :

- **HTML 1.0** (1991) :
  - <u>Description</u> : Il s'agit de la première version officielle du HTML, conçue principalement pour créer des documents basiques avec des liens et du formatage simple.
  - <u>Innovations</u> : Introduction des éléments fondamentaux comme les liens hypertextes.

- **HTML 2.0** (1995) :
  - <u>Description</u> : Cette version a établi un standard plus formel pour le HTML après que différentes versions du langage ont été utilisées par différents navigateurs.
  - <u>Innovations</u> : Introduction des formulaires pour la collecte de données sur le web.

- **HTML 3.2** (1997) :
  - <u>Description</u> : Il s'agit d'une expansion du HTML pour inclure des fonctionnalités comme les scripts et les applets.
  - <u>Innovations</u> : Support pour les scripts (comme JavaScript) et introduction de tables pour la mise en forme.

- **HTML 4.01** (1999) :
  - <u>Description</u> : Cette version a apporté une séparation plus nette entre le contenu et la présentation, encourageant l'utilisation de CSS pour le design.
  - <u>Innovations</u> : Meilleur support pour les feuilles de style en cascade (CSS), améliorations en matière d'accessibilité et introduction des entités de caractères UTF-8.

- **XHTML 1.0** (2000) :
  - <u>Description</u> : En combinant HTML avec XML, cette version visait à créer un langage plus strict et plus facile à analyser.
  - <u>Innovations</u> : Règles syntaxiques strictes pour une meilleure interopérabilité et compatibilité.

- **HTML5 (2014)** :
  - <u>Description</u> : Probablement la mise à jour la plus importante à ce jour, elle a introduit une multitude de fonctionnalités pour faire du web une plateforme de développement complète.
  - <u>Innovations</u> : Éléments pour la vidéo et l'audio, support pour les applications web hors ligne, meilleures sémantiques avec des éléments comme \<article>,\<section>, \<nav>, et \<header>.

Au fil du temps, le HTML a évolué pour répondre aux besoins d'un web en constante évolution. Des simples documents avec des liens hypertextes à de véritables applications web riches et interactives, la progression du HTML reflète la croissance et la maturation du World Wide Web lui-même.

Toutes ces versions (sauf la 1.0) ont été validées par le W3C.

## Le W3C
Le W3C est un organisme de standardisation à but non lucratif qui a pour mission de développer des standards pour le web.
Le W3C a été fondé par Tim Berners-Lee en 1994. Le W3C est composé de membres qui sont des entreprises, des organisations et des universités. Le W3C est composé de 400 membres. Le W3C est basé à Boston aux Etats-Unis. Le W3C a des bureaux dans 10 pays dont la France. 

## Les navigateurs
Les navigateurs sont des logiciels qui permettent d'afficher des pages web. Les navigateurs les plus connus sont Google Chrome, Mozilla Firefox, Microsoft Edge et Safari.

## Les serveurs webs
Les serveurs webs sont des logiciels qui permettent d'envoyer des pages web aux navigateurs. Les serveurs webs les plus connus sont Apache, Nginx et IIS. Mais il existe aussi des serveurs webs écrits en JavaScript comme Node.js, etc.

## Les éditeurs de code
Les éditeurs de code sont des logiciels qui permettent d'écrire du code. Les éditeurs de texte les plus connus sont:
- [Visual Studio Code](https://code.visualstudio.com/) (VS Code) : Développé par Microsoft, c'est l'un des éditeurs de code les plus populaires du moment. Il offre une vaste collection d'extensions qui le rendent adapté au développement web moderne.

- [Sublime Text](https://www.sublimetext.com/) : Connu pour sa vitesse et son interface, c'est un choix populaire parmi les développeurs web.

- [Notepad++](https://notepad-plus-plus.org/) : Un éditeur de texte avancé basé sur Scintilla, il est léger et puissant.

- [Brackets](https://brackets.io/) : Développé par Adobe, cet éditeur open source est spécialement conçu pour le développement web, avec des fonctionnalités comme l'aperçu en direct.

- [WebStorm](https://www.jetbrains.com/fr-fr/webstorm/) : Développé par JetBrains, c'est un IDE spécifiquement pour le développement web, y compris JavaScript, CSS, et HTML.

- [PHP Storm](https://www.jetbrains.com/fr-fr/phpstorm/) : Développé par JetBrains, c'est un IDE spécifiquement pour le développement PHP.

Pour ce cours, nous allons utiliser PHP Storm car vous l'utiliserez aussi pour le cours de PHP. Autant commencer à l'utiliser dès maintenant.

## Structure d'une page HTML
Une page HTML est composée de balises. Une balise est un élément qui permet de structurer un document. Une balise est composée d'un nom et d'un contenu. Le nom d'une balise est entouré de chevrons. Le contenu d'une balise est placé entre la balise ouvrante et la balise fermante. Une balise peut être vide, c'est-à-dire qu'elle n'a pas de contenu. 


```html
<!DOCTYPE html>
```

Dans ce cours, nous allons apprendre les bases de l'HTML. Nous allons apprendre à créer une page web, à la structurer, à la mettre en forme et à l'animer. Nous allons aussi apprendre à utiliser des outils pour nous aider à coder plus rapidement et plus efficacement. 



