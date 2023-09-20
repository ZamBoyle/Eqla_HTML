
## 6. Les balises de navigation

Nous allons maintenant voir les balises de navigation. Ces balises permettent de structurer le contenu de la page web. Elles permettent aussi de créer des liens d'évitement.

### 6.1 La balise \<nav\>

Nous allons maintenant voir la balise `nav` qui sert à définir une section de navigation. Elle est composée d'un attribut `role` qui contient la valeur `navigation`. Cet attribut permet de spécifier le rôle de la balise. Ici, nous spécifions que la balise `nav` a pour rôle la navigation.

> *<u>Syntaxe :</u>*
> ```html
> <nav role="navigation">
>     <!-- Contenu de la balise nav -->
> </nav>
> ```
> *<u>Exemple :</u>*
> ```html
> <nav role="navigation">
>     <ul>
>         <li><a href="#sommaire">Sommaire</a></li>
>         <li><a href="#partie-1">Partie 1</a></li>
>         <li><a href="#partie-2">Partie 2</a></li>
>         <li><a href="#partie-3">Partie 3</a></li>
>         <li><a href="#partie-4">Partie 4</a></li>
>         <li><a href="#partie-5">Partie 5</a></li>
>         <li><a href="#partie-6">Partie 6</a></li>
>         <li><a href="#partie-7">Partie 7</a></li>
>         <li><a href="#partie-8">Partie 8</a></li>
>         <li><a href="#partie-9">Partie 9</a></li>
> </ul>
> </nav>
> ```
> *<u>Résultat :</u>*
> <nav role="navigation">
>     <ul>
>         <li><a href="#main" class="visually-hidden-focusable">Aller au contenu principal</a></li>
>         <li><a href="#sommaire">Sommaire</a></li>
>         <li><a href="#partie-1">Partie 1</a></li>
>         <li><a href="#partie-2">Partie 2</a></li>
>         <li><a href="#partie-3">Partie 3</a></li>
>         <li><a href="#partie-4">Partie 4</a></li>
>         <li><a href="#partie-5">Partie 5</a></li>
>         <li><a href="#partie-6">Partie 6</a></li>
>         <li><a href="#partie-7">Partie 7</a></li>
>         <li><a href="#partie-8">Partie 8</a></li>
>         <li><a href="#partie-9">Partie 9</a></li>
>     </ul>
> </nav>
