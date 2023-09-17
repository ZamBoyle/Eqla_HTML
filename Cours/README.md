[:arrow_left: Revenir au sommaire.](/README.md#sommaire)
<h1 id="cours" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Images/Eqla.png" style="height:50px" alt="Logo d'Eqla">
    &nbsp;Cours d'HTML
</h1>

## <div id="sommaire">Sommaire</div>
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Sommaire](#div-idsommairesommairediv)
- [1. Première page web faite à la va-vite](#1-première-page-web-faite-à-la-va-vite)
  - [1.1 Création du projet](#11-création-du-projet)
  - [1.2 Création de la page web](#12-création-de-la-page-web)
  - [1.3 Structuration de la page web](#13-structuration-de-la-page-web)
    - [1.3.1 Balise](#131-balise)
    - [1.3.2 Ajout de la balise \<title\>](#132-ajout-de-la-balise-title)
    - [1.3.3 Ajout de la balise \<h1\>](#133-ajout-de-la-balise-h1)
    - [1.3.4 Ajout de la balise \<p\>](#134-ajout-de-la-balise-p)
    - [1.3.5 Encodage de caractères](#135-encodage-de-caractères)
- [2. Première page web faite proprement](#2-première-page-web-faite-proprement)
  - [2.1 La balise \<html\>](#21-la-balise-html)
  - [2.2 La balise \<!-- -->](#22-la-balise----)
  - [2.3 La balise \<head\>](#23-la-balise-head)
  - [2.4 La balise \<body\>](#24-la-balise-body)
  - [2.5 La balise DOCTYPE](#25-la-balise-doctype)
  - [2.6 La balise \<meta\>](#26-la-balise-meta)
- [3. Le DOM](#3-le-dom)
- [4. On récapitule](#4-on-récapitule)
  - [4.1 Les balises](#41-les-balises)
  - [4.2 Les attributs](#42-les-attributs)
  - [4.3 Notre code commenté](#43-notre-code-commenté)
  - [4.4 Exercices d'entraînement](#44-exercices-dentraînement)
- [5. la page d'accueil](#5-la-page-daccueil)
- [5. La balise \<a\> - Les liens hypertextes](#5-la-balise-a---les-liens-hypertextes)
  - [5.1 Les liens externes](#51-les-liens-externes)
  - [5.2 Les liens internes/ancres](#52-les-liens-internesancres)
  - [5.3 Importance de l'attribut id](#53-importance-de-lattribut-id)
  - [5.4 Les liens vers des fichiers](#54-les-liens-vers-des-fichiers)
  - [5.5 Les liens vers des adresses mail](#55-les-liens-vers-des-adresses-mail)
  - [5.6 Les liens vers des numéros de téléphone](#56-les-liens-vers-des-numéros-de-téléphone)
  - [5.7 Liens relatifs](#57-liens-relatifs)
  - [5.8 Liens absolus](#58-liens-absolus)

<!-- /code_chunk_output -->




## 1. Première page web faite à la va-vite

Nous allons voir ici comment faire une première page web. Nous n'allons respecter aucune règle du HTML. Nous allons juste faire une page web qui fonctionne.  

De plus, nous créerons un projet dans PHPStorm, comment créer une page web et comment l'afficher dans un navigateur.  

Nous modifierons ce code petit à petit en ajoutant des balises et toujours sans respecter les règles de l'art. Nous verrons ainsi comment structurer une page web et comment la mettre en forme.

Cependant, ce n'est pas la méthode classique pour créer une page web. Nous verrons plus tard comment faire une page web proprement. Nous allons simplement et naïvement créer une page web qui fonctionne.

Je vous donnerai plus tard la "recette" pour créer une page web qui respecte les règles du HTML.

### 1.1 Création du projet

Si vous êtes déjà dans un projet PHPStorm, fermez-le :

- Dans le menu `File` cliquez sur `Close Project`.

Sinon, suivez les étapes suivantes :

1. Ouvrez `PHPStorm`.
2. Dans le champ texte `Location` entrez le chemin vers le dossier dans lequel vous voulez créer votre projet.  
Par exemple, si vous voulez créer votre projet dans le dossier `C:\Users\Johnny\Documents\ProjetsHTML`, entrez ce chemin dans le champ texte Location et à la fin du chemin, ajoutez le nom du projet `CoursHTML`. Le chemin complet sera donc dans notre exemple `C:\Users\Johnny\Documents\ProjetsHTML\CoursHTML`.
3. Décochez la case `Add 'composer.json'`.
4. Cliquez sur le bouton `Create`.

### 1.2 Création de la page web

Maintenant, nous allons créer notre première page web.  
On va la faire évoluer petit à petit dans ce chapitre.

Pour cela, suivez les étapes suivantes :

1. Avec les flèches de direction, sélectionnez le dossier `CoursHTML` dans la fenêtre de gauche.
2. Dans le menu `File` cliquez sur `New` (`ALT+INSERT`) puis sur `File`. 
3. Dans le champ texte `Name` entrez le nom de votre fichier `index.html`.
4. Dans **index.html**, vous allez taper/copier le texte suivant en respectant les espaces et les retours à la ligne : 
    ```html
    Bonjour les amis !

    Présentation

    Je m'appelle Johnny, enchanté de faire votre connaissance !
    
    Ceci est ma première page web !
    ```
5. Veuillez adapter le code en remplaçant `Johnny` par votre prénom.
6. Enregistrez le fichier (`CTRL+S`).
7. Exécutez votre page dans un navigateur Internet (`SHIFT+F10`).
8. Vérifiez que votre page s'affiche correctement.

Comme vous pouvez le constater, nous avons une page web qui s'affiche dans notre navigateur. C'est déjà un bon début. Mais nous pouvons faire mieux.

Dans la page web, nous souhaiterions avoir un titre, un sous-titre et deux paragraphes or nous en sommes loin.


**<u>On voit quelques problèmes</u>** :

- Il n'y a pas de titre à notre page: dans l'onglet et dans la barre des titres de la fenêtre, nous avons le nom du fichier.
- Présentation n'est pas un sous-titre, c'est juste un texte. Il est collé au texte de la ligne suivante.
- Il n'y a pas de structure à notre page.
- Il n'y a pas de mise en forme à notre page: les retours à la ligne ne sont pas respectés.
- Et surtout, nous avons un problème d'encodage de caractères. Nous avons nos caractères accentués qui ne s'affichent pas correctement. Et donc, c'est illisible.

Nous allons petit à petit corriger cela.

### 1.3 Structuration de la page web

Nous allons maintenant structurer notre page web. Pour cela, nous allons ajouter des balises HTML.

#### 1.3.1 Balise
Oui, je veux bien, mais qu'est-ce qu'une balise ?
>**<u>Une balise</u>** (**tag** en anglais) est un élément qui permet de structurer un document. Une balise est composée d'un `nom` et d'un `contenu`. Le nom d'une balise est entouré de `chevrons` : chevron ouvrant et chevron fermant. Symbolisés par `<` (chevron ouvrant) et `>` (chevron fermant).
>
> Le contenu d'une balise est placé entre la balise ouvrante et la balise fermante. Une balise peut être vide, c'est-à-dire qu'elle n'a pas de contenu, mais nous verrons cela plus tard.
>
> **Syntaxe :**
> ```html
> <nom>Je suis le contenu</nom>
> ```
> Dans l'exemple ci-dessus, le nom de la balise est `nom` et le contenu de la balise est `Je suis le contenu`.

#### 1.3.2 Ajout de la balise \<title\>

Nous allons ajouter la balise `title` au début de notre page et y mettre le titre de notre page : _Je suis la page d'accueil._

>**La balise `title`**  
> La balise `title` est une balise qui sert à donner un titre à la page. Ce titre est affiché dans l'onglet du navigateur et dans la barre de titre de la fenêtre.
> 
> *<u>Syntaxe :</u>*
> ```html
> <title>Je suis le titre de la page</title>
> ```
> 
> **SPOILER ALERT !**  :smiley:
> Elle fait en fait partie de la balise `head`. Nous verrons plus tard ce qu'est la balise `head`. Mais pour l'instant, retenez juste que la balise `title` fait partie de la balise `head`.  
> 
> Et oui, il y a des balises qui font partie d'autres balises. C'est comme les poupées russes. :smiley:


Donc, nous allons ajouter `<title>` Je suis la page d'accueil `</title>` au début de votre page.  

Le code de votre page ressemblera à ceci :
```html
<title>Je suis la page d'accueil</title>
Bonjour les amis !

Présentation

Je m'appelle Johnny, enchanté de faire votre connaissance !
Ceci est ma première page web !
```

- Enregistrez votre fichier.
- Vérifiez que votre page s'affiche correctement dans votre navigateur. (`SHIFT+F10`) 

On constate que la balise `title` n'est pas affichée dans la page. C'est normal, la balise `title` est une balise qui sert à donner un titre à la page. Ce titre est affiché dans l'onglet du navigateur et dans la barre de titre de la fenêtre. Mais cette balise est importante surtout pour le référencement de votre page web et pour les lecteurs d'écran.

#### 1.3.3 Ajout de la balise \<h1\>
>
>**Les Balises de titre `h1` à `h6`**  
> Dans une page web, il y a des balises de titre avec des niveaux allant de 1 à 6, le niveau 1 est le titre principal, le niveau 2 est le sous-titre du niveau 1, le niveau 3 est le sous-titre du niveau 2, etc.   
>*<u>Syntaxe :</u>*
> ```html
> <h1>Je suis le titre principal</h1>
> ```
> Ou de manière plus générique :
> ```html 
> <hx>Je suis le titre principal</hx>
> ```
> Où `x` est un nombre entre 1 et 6.
>
> **ATTENTION !**   
> Ne confondez pas les balises de titre (de h1 à h6) avec la balise `title`. La balise `title` sert à donner un titre à la page. Les balises de titre servent à structurer le contenu de la page via des titres de différentes importances.

Nous allons maintenant ajouter la balise `h1` au début de votre page et y mettre le titre principal de notre page : _Bonjour les amis !_  

J'avoue il y a mieux comme titre, mais c'est juste pour l'exemple. :smiley:

Ensuite, nous allons ajouter un titre de niveau 2 : _Présentation_
 ```html
 <title>Je suis la page d'accueil</title>
 <h1>Bonjour les amis !</h1>
 <h2>Présentation</h2>

 Je m'appelle Johnny, enchanté de faire votre connaissance !
 
 Ceci est ma première page web !
 ```

- Enregistrez le fichier (`CTRL+S`).
- Vérifiez que votre page s'affiche correctement dans votre navigateur. (`SHIFT+F10`)

Et voilà, vous avez un titre principal qui s'affiche en gros caractères et un sous-titre qui s'affiche en caractères un peu moins gros.

C'est déjà mieux. Continuons à l'améliorer.

#### 1.3.4 Ajout de la balise \<p\>
>
>**La balise `p`**  
> La balise `p` est une balise qui sert à structurer notre texte via un paragraphe.
> Tout comme dans un livre, vous pouvez avoir plusieurs paragraphes.
> 
> *<u>Syntaxe :</u>*
> ```html
> <p>Je suis un paragraphe.</p>
> ```

Nous allons ajouter deux balises `p` à notre page. Une pour chaque paragraphe :
 ```html
 <meta charset="UTF-8">
 <title>Je suis la page d'accueil</title>
 <h1>Bonjour les amis !</h1>
 <h2>Présentation</h2>
 <p>Je m'apppelle Johnny, enchanté de de faire votre connaissance !</p>
 <p>Ceci est ma première page web !</p>
 ```

- Enregistrez le fichier (`CTRL+S`).
- Vérifiez que votre page s'affiche correctement dans votre navigateur. (`SHIFT+F10`)
- Vérifiez que votre page est bien structurée : nous avons un titre principal et deux paragraphes.

Ici, nous avons donc nos deux paragraphes. Nous aurions peut-être pu n'en faire qu'un seul, mais c'est juste pour l'exemple.

Ok ! Notre page commence à ressembler à quelque chose. Mais nous avons toujours nos problèmes d'encodage de caractères.

#### 1.3.5 Encodage de caractères

Depuis que nous avons commencé à faire cette page web, nous avons un problème d'encodage de caractères. Nous avons nos caractères accentués qui ne s'affichent pas correctement. Et donc, c'est illisible.
Pour y remédier, nous allons devoir ajouter une balise `meta` avec un attribut `charset` = `UTF-8` à notre page.

Un Attribut ? Késako ?
>**Attribut d'une balise**  
> L'attribut d'une balise est un élément qui permet de modifier le comportement d'une balise. Un attribut est composé d'un `nom` et d'une `valeur`. La valeur de l'attribut est entouré de `guillemets` : guillemet ouvrant et guillemet fermant. Symbolisés par `"` (guillemet ouvrant) et `"` (guillemet fermant).

Ok, admettons, et elle sert à quoi la balise `<meta>` ?
>**La balise `meta`**  
> La balise `<meta>` est une balise auto-fermante utilisée pour spécifier les métadonnées du document HTML. Ces métadonnées ne sont généralement pas visibles par l'utilisateur, mais sont importantes pour le navigateur, les moteurs de recherche et d'autres services web. Tout comme la balise `<title>`, la balise `<meta>` est toujours placée à l'intérieur de la balise `<head>` d'un document HTML.
> 
>*<u>Exemple pour l'encodage en UTF8 :</u>*
> ```html
> <meta charset="UTF-8">
>  ```
> Ici la balise `<meta>` a un attribut `charset` avec la valeur `UTF-8`. Cet attribut permet de spécifier l'encodage des caractères de la page. Ici, nous spécifions que nous utilisons l'encodage `UTF-8`. Cet encodage permet d'afficher les caractères accentués.
 
Donc, nous allons ajouter `<meta charset="UTF-8">` au début de votre page:
```html
<meta charset="UTF-8">
<title>Je suis la page d'accueil</title>
<h1>Bonjour les amis !</h1>
<h2>Présentation</h2>
<p>Je m'apppelle Johnny, enchanté de de faire votre connaissance !</p>
<p>Ceci est ma première page web !</p>
```

- Enregistrez le fichier (`CTRL+S`).
- Vérifiez que votre page s'affiche correctement dans votre navigateur. (`SHIFT+F10`)
- Vérifiez que votre page est bien structurée : nous avons un titre principal, deux paragraphes et nos caractères accentués s'affichent correctement !
- Félicitations ! Vous avez fait votre première page web ! :tada:

## 2. Première page web faite proprement

Bon, nous sommes heureux de notre première page web. Mais nous avons fait n'importe quoi. Nous avons juste fait une page web qui fonctionne. Nous n'avons pas respecté les règles du HTML. Nous allons maintenant voir comment faire une page web proprement.

Je vais vous afficher le code source du navigateur. Normalement, ce code devrait correspondre au code que vous avez créé. Mais je vous ai dit que les navigateurs d'aujourd'hui sont intelligents. Ils corrigent parfois certaines erreurs que nous faisons. Et donc, le code source affiché par le navigateur n'est pas forcément le code que nous avons créé. Il est possible que le code source affiché par le navigateur soit différent du code que nous avons créé.

Voici le code source que le navigateur a généré pour notre page web :
```html
<html>
    <head>
       <meta charset="UTF-8">
        <title>Je suis la page d'accueil</title>
    </head>
    <body>
       <h1>Bonjour les amis !</h1>
       <p>Je m'apppelle Johnny, enchanté de de faire votre connaissance !</p>
       <p>Ceci est ma première page web !</p>
    </body>
</html>
```

Oula ! Mais il y a plein de balises que nous n'avons pas créées ! Une balise html, head, body.

Effectivement, nous n'avons pas créé ces balises. Mais elles sont obligatoires. Nous allons voir pourquoi.

### 2.1 La balise \<html\>

La balise `html` est une balise qui sert à définir le début et la fin du document HTML. Elle est toujours placée au début et à la fin du document HTML.

Elle est composée de deux balises enfants : la balise `<head>` et la balise `<body>`.
Il est recommandé d'indiquer la langue du document HTML dans l'attribut `lang` de la balise `<html>`. Cela permet aux moteurs de recherche et aux lecteurs d'écran de mieux comprendre le contenu de la page.

>*<u>Syntaxe :</u>*
> ```html
> <html lang="fr">
>
> </html>
> ```
Ell est présentée pour la syntaxe seule sans les balises enfants `<head>` et `<body>`. C'est pour que vous puissiez voir la balise `<html>` toute seule.
> *<u>Syntaxe complète:</u>*
> ```html
> <html lang="fr">
>     <head>
>         <!-- Contenu de la balise head -->
>     </head>
>     <body>
>         <!-- Contenu de la balise body -->
>     </body>
> </html>
> ```
Je n'ai pas développé les balises `head` et `body` exprès. Pour garder le code plus lisible. Nous allons développer ces balises plus tard.

Notre page web devient donc avec l'attribut `lang` :
```html
<html lang="fr">
    <head>
       <meta charset="UTF-8">
        <title>Je suis la page d'accueil</title>
    </head>
    <body>
       <h1>Bonjour les amis !</h1>
       <h2>Présentation</h2>
       <p>Je m'apppelle Johnny, enchanté de de faire votre connaissance !</p>
       <p>Ceci est ma première page web !</p>
    </body>
</html>
```


### 2.2 La balise \<!-- -->

Vous avez découvert une étrange balise : `<!-- -->` lorsque je vous ai présenté la syntaxe de la balise `html`: C'est une balise de commentaire.  

Elle permet de mettre des commentaires dans le code HTML. Ces commentaires ne sont pas affichés dans la page web. Ils sont juste là pour nous aider à comprendre le code.  

Elle n'a aucune influence sur l'affichage, c'est juste pour le webdeveloppeur qu'elle est utile.

>**Syntaxe :**
> ```html
> <!-- Je suis un commentaire -->
> ```
Parfois, on teste du code html et on se rend compte qu'une partie du code ne fonctionne pas. On peut alors mettre cette partie de code en commentaire pour la désactiver. Cela permet de tester le code sans cette partie. Et donc, de voir si le problème vient de cette partie de code ou pas.

### 2.3 La balise \<head\>

La balise `head` est une balise qui sert à définir des informations sur le document HTML. Elle est toujours placée entre les balises `<html>` et `<body>`.
Cette balise est très importante car on y ajoute:

- le titre de notre page via la balise `<title>`,
- les métadonnées de notre page via la balise `<meta>`,
- les ressources externes:
  - les liens vers les fichiers CSS via la balise `<link>`,
  - les liens vers les fichiers JavaScript via la balise `<script>` si on veut les placer dans le `<head>` car on peut aussi les placer juste avant la balise fermante `</body>`.

> *<u>Syntaxe :</u>*
> ```html
> <head>
>     <!-- Contenu de la balise head -->
> </head>
> ```
Pour rappel, la balise `head` fait partie de la balise `html`. Donc, elle est toujours placée entre les balises `<html>` et `<body>`.

 *<u>Exemple</u>* :
```html
<html lang="fr">
    <head>
        <!-- Contenu de la balise head -->
    </head>
    <body>
        <!-- Contenu de la balise body -->
    </body>
</html>
```

### 2.4 La balise \<body\>

La balise `body` est une balise qui sert à définir le contenu du document HTML. Elle est toujours placée entre les balises `<html>` et `</html>`.
Cette balise est très importante car on y ajoute:

- le contenu de notre page,
- les liens vers les fichiers JavaScript via la balise `<script>` si on veut les placer dans le `<body>` car on peut aussi les placer juste avant la balise fermante `</body>`.

Dans la balise `body`, on peut mettre toutes sortes de balises HTML: des balises de titre, des paragraphes, des images, des liens, des tableaux, etc.

> *<u>Syntaxe :</u>*
> ```html
> <body>
>     <!-- Contenu de la balise body -->
> </body>
> ```

### 2.5 La balise DOCTYPE

Alors dans notre approche naïve de faire notre page web, le navigateur n'a pas ajouté la balise `DOCTYPE` au code source qu'il a généré. 

La balise `DOCTYPE` est une balise qui sert à définir le type de document HTML. Elle est toujours placée au début du document HTML. Elle est obligatoire. Elle permet au navigateur de savoir quel type de document HTML il doit afficher.
Elle se met toujours au début du document HTML. Elle n'a pas de balise fermante. Elle est auto-fermante. Elle n'a pas de contenu. Elle est composée d'un nom et d'une valeur. Le nom est `DOCTYPE` et la valeur est `html`.

Elle a eu différentes syntaxes au fil du temps. Mais aujourd'hui, en HTML 5, la syntaxe est la suivante :
```html
<!DOCTYPE html>
```
Elle peut vous sembler compliquée, mais c'est juste une balise auto-fermante avec un nom et une valeur. C'est tout.
Juste pour info, voici les différentes syntaxes qu'elle a eu au fil du temps :
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> <!-- HTML 4.01 Strict -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> <!-- HTML 4.01 Transitional -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"> <!-- HTML 4.01 Frameset -->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> <!-- XHTML 1.0 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <!-- XHTML 1.0 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"> <!-- XHTML 1.0 Frameset -->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"> <!-- XHTML 1.1 -->

<!DOCTYPE html> <!-- HTML5 -->
```
Il ne faut bien entendu par retenir toutes ces syntaxes. Je vous les donne juste pour info.
Donc, comme vous pouvez le constater, la dernière syntaxe est la plus simple. C'est celle que nous utiliserons.
> *<u>Syntaxe pour le HTML 5:</u>*
> ```html
> <!DOCTYPE html>
> ```

Donc en prenant en compte cette balise, notre code ressemblera à ceci :
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
       <meta charset="UTF-8">
        <title>Je suis la page d'accueil</title>
    </head>
    <body>
       <h1>Bonjour les amis !</h1>
       <h2>Présentation</h2>
       <p>Je m'apppelle Johnny, enchanté de de faire votre connaissance !</p>
       <p>Ceci est ma première page web !</p>
    </body>
</html>
```
Et là, nous avons une page web correcte ! :tada: :tada: :tada:

### 2.6 La balise \<meta\>

Nous avons déjà vu cette balise mais je la remets ici pour la forme.

La balise `meta` est une balise auto-fermante utilisée pour spécifier les métadonnées du document HTML. Ces métadonnées ne sont généralement pas visibles par l'utilisateur, mais sont importantes pour le navigateur, les moteurs de recherche et d'autres services web. Tout comme la balise `<title>`, la balise `<meta>` est toujours placée à l'intérieur de la balise `<head>` d'un document HTML.

> *<u>Syntaxe :</u>*
> ```html
> <meta attribut="valeur">
> ```
On voit donc qu'elle a toujours un attribut et une valeur.

A parti d'un exemple, je vais maintenant vous montrer différentes balises meta que l'on rencontre souvent dans les pages web.
> ```html
> <meta charset="UTF-8">
> <meta name="description" content="Ceci est ma première page web !">
> <meta name="viewport" content="width=device-width, initial-scale=1.0">
>  ```

- La première balise `meta` sert à spécifier l'encodage des caractères de la page. Ici, nous spécifions que nous utilisons l'encodage `UTF-8`. Cet encodage permet d'afficher les caractères accentués.
- La deuxième balise `meta` sert à spécifier la description de la page.
    - Cette description est utilisée par les moteurs de recherche pour afficher un résumé de la page dans les résultats de recherche.
    - Lorsqu'une URL est partagée sur des plateformes de médias sociaux comme Facebook ou LinkedIn, ces plateformes peuvent utiliser la méta-description pour fournir un aperçu du contenu de la page.
- La troisième balise `meta` sert à spécifier la largeur de la page. Ici, nous spécifions que la largeur de la page est égale à la largeur de l'écran de l'appareil. Cela permet d'adapter la page à la taille de l'écran de l'appareil. C'est ce qu'on appelle le responsive web design. Mais en gros, copiez-la et collez-la dans vos pages web. Elle est très importante. Nous verrons cela plus tard.

Modifions notre page web pour prendre en compte ces balises `meta` :
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Ceci est ma première page web !">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">       
        <title>Je suis la page d'accueil</title>
    </head>
    <body>
        <h1>Bonjour les amis !</h1>
        <h2>Présentation</h2>
        <p>Je m'apppelle Johnny, enchanté de de faire votre connaissance !</p>
        <p>Ceci est ma première page web !</p>
    </body>
</html>
```
Précédemment notre page web était correcte. Mais là, elle est encore mieux ! En effet, notre page web sera mieux référencée par les moteurs de recherche. Et elle sera mieux affichée sur les appareils mobiles.

## 3. Le DOM

Le `DOM` est l'acronyme de **D**ocument **O**bject **M**odel. C'est un modèle de document qui permet de représenter un document HTML sous forme d'arbre. C'est-à-dire que chaque balise HTML est représentée par un noeud de l'arbre. Et chaque noeud peut avoir des enfants. Et chaque enfant peut avoir des enfants, etc.

Quand on parle du DOM, on parle du DOM HTML.  

Voici une représentation visuelle du DOM HTML (non accessible) :
```text
Document html (par exemple index.html)
|-- DOCTYPE
|-- html
    |-- head
    |   |-- meta (charset="UTF-8")
    |   |-- title
    |       |-- Text ("Titre de la page")
    |-- body
        |-- h1
        |   |-- Text ("Mon titre principal")
        |-- p
            |-- Text ("Ceci est un paragraphe.")
```
En voici une représentation accessible textuelle :
La flèche ==> signifie a pour balise enfant
```text
Document html  ==> DOCTYPE
Document html  ==> html 
html ==> head
head ==> meta (charset="UTF-8")
head ==> title
title ==> Text ("Titre de la page")
html ==> body
body ==> h1
h1 ==> Text ("Mon titre principal")
body ==> p
p ==> Text ("Ceci est un paragraphe.")
```
Il n'y a donc rien de nouveau vraiment, juste savoir que cette représentation existe appelée DOM. Cela nous permet de mieux comprendre la structure d'une page web. Et puis, ça le fait dire que l'on connaît le terme `DOM`. :smiley:

## 4. On récapitule

Nous avons vu beaucoup de choses dans ce chapitre. Je vais donc vous faire un petit récapitulatif de ce que nous avons vu.

### 4.1 Les balises

Nous avons vu les balises suivantes :

- La balise `DOCTYPE` qui sert à définir le type de document HTML. Elle est toujours placée au début du document HTML. Elle est obligatoire. Elle permet au navigateur de savoir quel type de document HTML il doit afficher.
- La balise `html` qui sert à définir le début et la fin du document HTML. Elle est toujours placée au début (après `DOCTYPE`) et à la fin du document HTML. Elle est composée de deux balises enfants : la balise `<head>` et la balise `<body>`.
    - La balise `head` qui sert à définir des informations sur le document HTML. Elle est toujours placée entre les balises `<html>` et `<body>`.
        - La balise `title` qui sert à donner un titre à la page. Ce titre est affiché dans l'onglet du navigateur et dans la barre de titre de la fenêtre.
        - La balise `meta` qui sert à spécifier les métadonnées du document HTML. Ces métadonnées ne sont généralement pas visibles par l'utilisateur, mais sont importantes pour le navigateur, les moteurs de recherche et d'autres services web. Tout comme la balise `<title>`, la balise `<meta>` est toujours placée à l'intérieur de la balise `<head>` d'un document HTML.
    - La balise `body` qui sert à définir le contenu du document HTML. Elle est toujours placée entre les balises `<html>` et `</html>`.
        - Les balises de titre `h1` à `h6` qui servent à structurer le contenu de la page via des titres de différentes importances.
        - La balise `p` qui sert à structurer notre texte via un paragraphe.
- La balise `<!-- -->` qui sert à mettre des commentaires dans le code HTML. Ces commentaires ne sont pas affichés dans la page web. Ils sont juste là pour nous aider à comprendre le code.

### 4.2 Les attributs

Nous avons vu les attributs suivants :

- L'attribut `lang` de la balise `<html>` qui permet d'indiquer la langue du document HTML. Cela permet aux moteurs de recherche et aux lecteurs d'écran de mieux comprendre le contenu de la page.
- L'attribut `charset` de la balise `<meta>` qui permet de spécifier l'encodage des caractères de la page. Ici, nous spécifions que nous utilisons l'encodage `UTF-8`. Cet encodage permet d'afficher les caractères accentués.
- L'attribut `name` de la balise `<meta>`:
    - avec comme valeur `description` permet de spécifier la description de la page dans l'attribut `content`. Cette description est utilisée par les moteurs de recherche pour afficher un résumé de la page dans les résultats de recherche.
    ```html
    `<meta name="description" content="Ceci est ma première page web !">`
    ```
    - avec comme valeur `viewport` permet de spécifier la largeur de la page et le zoom initial. Ici, nous spécifions, dans l'attribut `content`, que la largeur de la page (`width`) est égale à la largeur de l'écran de l'appareil (`device-width`). Cela permet d'adapter la page à la taille de l'écran de l'appareil. Grâce à cela notre page se rapproche de la notion de responsive web design. Enfin, le facteur de zoom est remis à 100% (`initial-scale=1.0`). Notez enfin, que nous pouvons spécifier plusieurs valeurs séparées par une virgule. Ici, nous n'en avons qu'une seule.
    ```html
    `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    ```
- L'attribut `content` de la balise `<meta>` qui dépent de la valeur `name` de la balise `<meta>`. Comme vous avez pu le voir précédemment.

### 4.3 Notre code commenté

Je vais reprendre notre code et le commenter pour que vous puissiez mieux comprendre ce que nous avons fait.
```html
<!-- La déclaration DOCTYPE indique au navigateur que ce document est de type HTML5. -->
<!DOCTYPE html>
<!-- L'élément <html> est la racine du document et contient tout le contenu de la page. L'attribut "lang" spécifie la langue principale du document, ici le français. -->
<html lang="fr">

    <!-- L'élément <head> contient des métadonnées (informations sur le document) qui ne sont pas affichées à l'utilisateur. -->
    <head>
        <!-- L'élément <meta> avec l'attribut "charset" définit l'encodage des caractères du document, ici UTF-8, qui couvre la plupart des langues du monde. -->
        <meta charset="UTF-8">
        <!-- L'élément <meta> avec l'attribut "name" à "description" fournit une courte description du contenu de la page. C'est utile pour le référencement et les résultats de recherche. -->
        <meta name="description" content="Ceci est ma première page web !">
        <!-- L'élément <meta> avec l'attribut "viewport" rend la page web responsive, c'est-à-dire qu'elle s'adapte à la taille de l'écran de l'utilisateur. -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- L'élément <title> définit le titre du document, qui s'affiche dans l'onglet du navigateur ou la barre de titre. -->
        <title>Je suis la page d'accueil</title>
    </head>

    <!-- L'élément <body> contient le contenu visible de la page web. -->
    <body>
        <!-- L'élément <h1> est un titre de niveau 1. Il est généralement utilisé pour le titre principal de la page. -->
        <h1>Bonjour les amis !</h1>
        <!-- L'élément <h2> est un titre de niveau 2. Il est généralement utilisé pour le sous-titre de la page. -->
        <h2>Présentation</h2>
        <!-- L'élément <p> est un paragraphe. Il contient du texte qui est affiché sur la page. -->
        <p>Je m'appelle Johnny, enchanté de faire votre connaissance !</p>
        <!-- Un autre paragraphe. -->
        <p>Ceci est ma première page web !</p>
    </body>
<!-- Fin du document HTML -->
</html>
```
Il faut juste noter que j'ai mis un commentaire juste avant la balise DOCTYPE mais ce n'est pas permis. Je l'ai fait juste pour vous expliquer ce qu'est la balise DOCTYPE. DOCTYPE doit être la première balise du document HTML.

Voyons ensemble le résultat de notre travail : [Notre première  page web](https://zamboyle.github.io/htmlpreview/?https://github.com/ZamBoyle/Eqla_HTML/blob/master/Cours/pagefinale.html).
Et le code source de celle-ci: [Code source](https://raw.githubusercontent.com/ZamBoyle/Eqla_HTML/master/Cours/pagefinale.html).


On est d'accord, c'est beaucoup mieux que notre première page web sans le moindre code HTML car elle respecte les normes du HTML et visuellement elle est plus esthétique. :smiley: Elle n'est pas très jolie, il faut bien l'avouer. Lors du cours de CSS, vous apprendrez à la rendre plus jolie.

### 4.4 Exercices d'entraînement
Maintenant, je vous propose de faire quelques exercices pour vous entraîner.
Faites l'[Exercice 1](/Exercices/Exercice1.md) et l'[Exercice 2](/Exercices/Exercice2.md).


## 5. la page d'accueil 

Lorsque nous allons sur une url, par exemple https://www.google.com, nous arrivons sur la page d'accueil du site web de Google. Cette page d'accueil s'appelle index.html. C'est la page d'accueil par défaut. C'est-à-dire que si on ne précise pas de page, c'est cette page qui sera affichée. Par exemple, si on va sur https://www.google.com/index.html, on arrive sur la même page que https://www.google.com.

Donc, si on veut créer une page d'accueil, il faut l'appeler index.html. C'est une convention. C'est-à-dire que c'est une règle que l'on suit pour que tout le monde s'y retrouve. C'est comme ça et pas autrement. Si on ne respecte pas cette convention, on risque de se retrouver avec des problèmes. Par exemple, si on appelle notre page d'accueil accueil.html, on devra préciser l'url de la page d'accueil. Par exemple, si on va sur https://www.google.com/accueil.html, on n'arrivera pas sur la page d'accueil de Google. On arrivera sur une page d'erreur 404. C'est-à-dire que la page n'existe pas. C'est parce que Google ne connaît pas cette page. Google ne connaît que la page index.html. Donc, si on veut créer une page d'accueil, il faut l'appeler index.html.

## 5. La balise \<a\> - Les liens hypertextes

Nous y voilà !

Nous allons maintenant voir comment créer des liens hypertextes. C'est-à-dire des liens qui permettent de naviguer d'une page web à une autre page web.
### 5.1 Les liens externes
Pour cela, nous allons utiliser la balise `a` qui est une balise qui sert à créer un lien hypertexte. Elle est composée d'un attribut `href` qui contient l'URL de la page web vers laquelle on veut créer un lien. Le contenu de la balise `a` est le texte du lien.

> *<u>Syntaxe :</u>*
> ```html
> <a href="URL">Texte du lien</a>
> ```
> *<u>Exemple :</u>*
> ```html
> <a href="https://www.google.com">Google</a>
> ```
> *<u>Résultat :</u>*
> <a href="https://www.google.com">Google</a>

Dans le code ci-dessus, nous avons créé un lien vers le site web de Google. Le texte du lien est `Google`. Si on clique sur ce lien, on est redirigé vers le site web de Google.

Maintenant, ce n'est pas toujours une URL comme valeur pour l'attribut `href`:
- les liens vers des fichiers
    ```html
    <a href="fichier.pdf">Télécharger le fichier PDF</a>
    ```
    Il faut juste noter que le fichier dans l'exemple doit être dans le même dossier que la page web. Sinon, il faut préciser le chemin vers le fichier.
- les liens vers des adresses mail
    ```html
    <a href="mailto:johnny.piette@eqla.be">Envoyer un mail à Johnny</a>
    ```
- les liens vers des liens internes/ancres (que nous verrons plus tard)
    ```html
    <a href="#sommaire">Revenir au sommaire</a>
    ```
- les liens vers des numéros de téléphone
    ```html
    <a href="tel:+32475252525">Appeler Johnny</a>
    ```

### 5.2 Les liens internes/ancres
Nous allons maintenant voir comment créer des liens internes appelés aussi ancres. C'est-à-dire des liens qui permettent de naviguer d'une partie de la page web en cours à une autre partie de la même page web. C'est très utile pour naviguer dans une page web qui est très longue.

Par exemple, la page du cours contient un sommaire. Ce sommaire contient des liens qui permettent de naviguer vers les différentes parties de la page web. Cliquez sur ce lien pour revenir au sommaire tout en haut de la page: [Sommaire](#sommaire).

Ou bien on peut directement aller sur le lien interne d'une autre page web pour que votre utilisateur puisse directement aller sur la partie de la page web qui l'intéresse.
Par exemple sur wikipedia le lien interne "Avenir du HTML" de la page web [HTML](https://fr.wikipedia.org/wiki/Hypertext_Markup_Language) permet d'aller directement sur la partie de la page web qui parle de l'avenir du HTML via ce lien : [Avenir du HTML](https://fr.wikipedia.org/wiki/Hypertext_Markup_Language#Avenir_du_HTML).

L'intérêt dans l'exemple précédent est que l'utilisateur n'a pas besoin de scroller la page web pour trouver la partie qui l'intéresse. Il peut directement cliquer sur le lien interne pour aller sur la partie qui l'intéresse en l'occurence "Avenir du HTML".

Pour cela, nous allons à nouveau utiliser la balise `a` qui est une balise qui sert à créer un lien hypertexte. Elle est composée d'un attribut `href` qui contient l'URL de la page web vers laquelle on veut créer un lien. Mais cette fois-ci, l'URL sera précédée d'un `#` suivi de l'identifiant de la balise vers laquelle on veut créer un lien. 

Cet identifiant est défini par l'attribut `id` que l'on mettra sur la balise vers laquelle on veut créer un lien.
```html
<h1 id="sommaire">Sommaire</h1>
```

Cet identifiant doit être unique dans la page web. C'est-à-dire qu'il ne doit pas y avoir deux balises avec le même identifiant.

> *<u>Syntaxe :</u>*
> ```html
> <a href="#identifiant">Texte du lien</a>
> ```
> *<u>Exemple :</u>*
> ```html
> <a href="#sommaire">Revenir au sommaire</a>
> ```
> *<u>Résultat :</u>*
> <a href="#sommaire">Revenir au sommaire</a>

Dans le code ci-dessus, nous avons créé un lien vers l'identifiant `sommaire`. Cet identifiant est défini sur la balise `<h1>` qui contient le texte `Sommaire`. Si on clique sur ce lien, on est redirigé vers la balise `<h1>` qui contient le texte `Sommaire`.

### 5.3 Importance de l'attribut id

L'attribut `id` est très importants Il permet de créer des liens vers des ancres. Mais il permet aussi de cibler une balise pour la modifier avec du CSS ou du JavaScript. 

Par exemple, si on veut modifier la couleur du texte de la balise `<h1>` qui contient le texte `Sommaire`, on peut utiliser le code CSS suivant :
```css
#sommaire {
    color: red;
}
```
### 5.4 Les liens vers des fichiers

Nous allons maintenant voir comment créer des liens vers des fichiers. C'est-à-dire des liens qui permettent de naviguer d'une page web à un fichier.

Pour cela, nous allons à nouveau utiliser la balise `a` qui est une balise qui sert à créer un lien hypertexte. Elle est composée d'un attribut `href` qui contient l'URL du fichier vers lequel on veut créer un lien.

> *<u>Syntaxe :</u>*
> ```html
> <a href="URL">Texte du lien</a>
> ```
> *<u>Exemple :</u>*
> ```html
> <a href="fichier.pdf">Télécharger le fichier PDF</a>
> ```
> *<u>Résultat :</u>*
> <a href="fichier.pdf">Télécharger le fichier PDF</a>

### 5.5 Les liens vers des adresses mail

Nous allons maintenant voir comment créer des liens vers des adresses mail. C'est-à-dire des liens qui permettent de naviguer d'une page web à une adresse mail.

Dans l'attribut `href`, on mettra `mailto:` suivi de l'adresse mail vers laquelle on veut créer un lien.

> *<u>Syntaxe :</u>*
> ```html
> <a href="mailto:johnny.piette@gmail.com">Envoyez-moi un mail</a>
> ```
> *<u>Résultat :</u>*
> <a href="mailto:johnny.piette@gmail.com">Envoyez-moi un mail</a>

### 5.6 Les liens vers des numéros de téléphone

Nous allons maintenant voir comment créer des liens vers des numéros de téléphone. C'est-à-dire des liens qui permettent de naviguer d'une page web à un numéro de téléphone.

Dans l'attribut `href`, on mettra `tel:` suivi du numéro de téléphone vers lequel on veut créer un lien.

> *<u>Syntaxe :</u>*
> ```html
> <a href="tel:+33612345678">Appelez-moi</a>
> ```
> *<u>Résultat :</u>*
> <a href="tel:+33612345678">Appelez-moi</a>

### 5.7 Liens relatifs

Nous allons maintenant voir comment créer des liens relatifs. C'est-à-dire des liens qui permettent de naviguer d'une page web à une autre page web qui se trouve dans le même dossier que la page web en cours.

Par exemple, si on a une page web qui s'appelle `index.html` et une autre page web qui s'appelle `page2.html` et que ces deux pages web se trouvent dans le même dossier, on peut créer un lien de la page `index.html` vers la page `page2.html` via un lien relatif.

Exemple de code HTML de la page `index.html` :
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Je suis la page d'accueil</title>
    </head>
    <body>
        <h1>Bonjour les amis !</h1>
        <h2>Présentation</h2>
        <p>Je m'appelle Johnny, enchanté de faire votre connaissance !</p>
        <p>Ceci est ma première page web !</p>
        <a href="page2.html">Aller sur la page 2</a>
    </body>
</html>
```

Dans le code ci-dessus, nous avons créé un lien de la page `index.html` vers la page `page2.html` via un lien relatif. Ce lien relatif est `page2.html`. C'est-à-dire que le fichier `page2.html` se trouve dans le même dossier que le fichier `index.html`. Donc, on peut créer un lien relatif vers ce fichier via `page2.html`.

Exemple de code HTML de la page `page2.html` :
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Je suis la page 2</title>
    </head>
    <body>
        <h1>Je suis la page 2</h1>
        <a href="./index.html">Aller sur la page d'accueil</a>
    </body>
</html>
```

Dans le code ci-dessus, nous avons créé un lien de la page `page2.html` vers la page `index.html` via un lien relatif. Ce lien relatif est `./index.html`. C'est-à-dire que le fichier `index.html` se trouve dans le dossier parent du dossier de la page `page2.html`. Donc, on peut créer un lien relatif vers ce fichier via `./index.html`.

On peut donc appeler la page index via un relatif de deux manières différentes :
- `./index.html`
    ```html
    <a href="./index.html">Aller sur la page d'accueil</a>
    ```
- `index.html`
    ```html
    <a href="index.html">Aller sur la page d'accueil</a>
    ```






### 5.8 Liens absolus

Nous allons maintenant voir comment créer des liens absolus. C'est-à-dire des liens qui permettent de naviguer d'une page web à une autre page web qui se trouve dans un autre dossier que la page web en cours.

Par exemple, si on a une page web qui s'appelle `index.html` et une autre page web qui s'appelle `page2.html` et que ces deux pages web ne se trouvent pas dans le même dossier, on peut créer un lien de la page `index.html` vers la page `page2.html` via un lien absolu.

Exemple de code HTML de la page `index.html` :
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Je suis la page d'accueil</title>
    </head>
    <body>
        <h1>Bonjour les amis !</h1>
        <h2>Présentation</h2>
        <p>Je m'appelle Johnny, enchanté de faire votre connaissance !</p>
        <p>Ceci est ma première page web !</p>
        <a href="https://www.google.com">Aller sur Google</a>
    </body>
</html>
```

Dans le code ci-dessus, nous avons créé un lien de la page `index.html` vers le site web de Google via un lien absolu. Ce lien absolu est `https://www.google.com`. C'est-à-dire que le fichier `index.html` se trouve dans un autre dossier que le site web de Google. Donc, on peut créer un lien absolu vers ce site web via `https://www.google.com`.

Exemple de code HTML de la page `page2.html` :
```html
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Je suis la page 2</title>
    </head>
    <body>
        <h1>Je suis la page 2</h1>
        <a href="https://www.google.com">Aller sur Google</a>
    </body>
</html>
```

Dans le code ci-dessus, nous avons créé un lien de la page `page2.html` vers le site web de Google via un lien absolu. Ce lien absolu est `https://www.google.com`. C'est-à-dire que le fichier `page2.html` se trouve dans un autre dossier que le site web de Google. Donc, on peut créer un lien absolu vers ce site web via `https://www.google.com`.













[:arrow_left: Revenir au sommaire.](/README.md#sommaire)

---
&copy; 2023 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._

