<h1 style="display: flex; align-items: center; justify-content: center;">
    <img src="Images/Eqla.png" style="height:50px">
    &nbsp;Cours d'HTML
</h1>


## 1. Première page web faite à la va-vite
Nous allons voir ici comment faire une première page web. Nous n'allons respecter aucune règle du HTML. Nous allons juste faire une page web qui fonctionne.  

Nous allons voir comment créer un projet dans PHPStorm, comment créer une page web et comment l'afficher dans un navigateur.  

Nous modifierons ce code petit à petit en ajoutant des balises et toujours sans respecter les règles de l'art. Nous verrons ainsi comment structurer une page web et comment la mettre en forme.

### 1.1 Création du projet
Si vous êtes déjà dans un projet PHPStorm, fermez-le:
- Dans le menu `File` cliquez sur `Close Project`.

Sinon suivez les étapes suivantes: 
1. Ouvrez `PHPStorm`.
2. Dans champ texte `Location` entrez le chemin vers le dossier dans lequel vous voulez créer votre projet.  
Par exemple, si vous voulez créer votre projet dans le dossier `C:\Users\Johnny\Documents\ProjetsHTML`, entrez ce chemin dans le champ texte Location et à la fin du chemin ajoutez le nom du projet `ThéorieHTML`. Le chemin complet sera donc dans notre exemple `C:\Users\Johnny\Documents\ProjetsHTML\ThéorieHTML`.
3. Décochez la case `Add 'composer.json'`.
4. Cliquez sur le bouton `Create`.

### 1.2 Création de la page web
Maintenant, nous allons créer notre première page web.  
On va la faire évoluer petit à petit dans ce chapitre. 

Pour cela, suivez les étapes suivantes :
1. Avec les flèches de direction, sélectionnez le dossier `ThéorieHTML` dans la fenêtre de gauche.
2. Dans le menu `File` cliquez sur `New` (`ALT+INSERT`) puis sur `File`. 
3. Dans le champ texte `Name` entrez le nom de votre fichier `index.html`.
4. Dans index.html vous allez taper le texte suivant:
    ```html
    Bonjour les amis !
    Je m'appelle Johnny, enchanté de faire votre connaissance !
    Ceci est ma première page web !
    ```
5. Veuillez adapter le code en remplaçant `Johnny` par votre prénom.
6. Enregistrez le fichier (CTRL+S).
7. Exécutez votre page dans un navigateur Internet.
8. Vérifiez que votre page s'affiche correctement.

Comme vous pouvez le constater, nous avons une page web qui s'affiche dans notre navigateur. C'est déjà un bon début. Mais nous pouvons faire mieux. Nous allons maintenant structurer notre page web.

### 1.3 Structuration de la page web
Nous allons maintenant structurer notre page web. Pour cela, nous allons ajouter des balises HTML.
#### 1.3.1 Ajout de la balise \<title\>
Ajoutez la balise `title` au début de votre page.  
**Oui, je veux bien, mais qu'est-ce qu'une balise ?**  
_Une balise est un élément qui permet de structurer un document. Une balise est composée d'un `nom` et d'un `contenu`. Le nom d'une balise est entouré de `chevrons` : chevron ouvrant et chevron fermant. Symbolisés par `<` (chevron ouvrant) et `>` (chevron fermant). Le contenu d'une balise est placé entre la balise ouvrante et la balise fermante. Une balise peut être vide, c'est-à-dire qu'elle n'a pas de contenu, mais nous verrons cela plus tard._

    ```html
    <title>Je suis la page d'accueil</title>
    Bonjour les amis !
    Je m'appelle Johnny, enchanté de faire votre connaissance !
    Ceci est ma première page web !
    ```
Le contenu d'une balise est placé entre la balise ouvrante et la balise fermante. Une balise peut être vide, c'est-à-dire qu'elle n'a pas de contenu.

    ```html
    <title>Je suis la page d'accueil</title>
    Bonjour les amis !
    Je m'appelle Johnny, enchanté de faire votre connaissance !
    Ceci est ma première page web !
    ```
Enregistrez votre fichier et vérifiez que votre page s'affiche correctement dans votre navigateur.
On constate que la balise `title` n'est pas affichée dans la page. C'est normal, la balise `title` est une balise qui sert à donner un titre à la page. Ce titre est affiché dans l'onglet du navigateur. Mais cette balise est importante surtout pour le référencement de votre page web ou pour les lecteurs d'écran.


    ```html
    <title>Je suis la page d'accueil</title>
    <h1>Bonjour les amis !</h1>
    Je m'appelle Johnny, enchanté de faire votre connaissance !
    Ceci est ma première page web !
    ```

    ```html
    <meta charset="UTF-8">
    <title>Je suis la page d'accueil</title>
    <h1>Bonjour les amis !</h1>
    <p>Je m'apppelle Johnny, enchanté de de faire votre connaissance !</p>
    <p>Ceci est ma première page web !</p>
    ```
```text
Document html
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


## Structure d'une page HTML
Une page HTML est composée de balises. Une balise est un élément qui permet de structurer un document. Une balise est composée d'un nom et d'un contenu. Le nom d'une balise est entouré de chevrons. Le contenu d'une balise est placé entre la balise ouvrante et la balise fermante. Une balise peut être vide, c'est-à-dire qu'elle n'a pas de contenu. 


```html
<!DOCTYPE html>
```

Dans ce cours, nous allons apprendre les bases de l'HTML. Nous allons apprendre à créer une page web, à la structurer, à la mettre en forme et à l'animer. Nous allons aussi apprendre à utiliser des outils pour nous aider à coder plus rapidement et plus efficacement. 