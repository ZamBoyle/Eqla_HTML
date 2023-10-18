
[:arrow_left: Revenir au sommaire des exercices.](/Exercices/README.md#exercices)
<h1 id="exercice10" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Images/Eqla.png" style="height:50px" alt="Logo d'Eqla">
    &nbsp;Exercice n°10 - Les formulaires
</h1>


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Instructions :](#instructions-)
  - [Partie 1 - Simple formulaire](#partie-1---simple-formulaire)
  - [Partie 2 - Type email](#partie-2---type-email)
  - [Partie 3 - Type number](#partie-3---type-number)
  - [Partie 4 - Textearea](#partie-4---textearea)

<!-- /code_chunk_output -->

## Instructions :

Crée une page web qui répond aux critères suivants :

1. Vous allez utiliser le modèle de page suivant: [Modèle de page web](https://raw.githubusercontent.com/ZamBoyle/Eqla_HTML/master/Exercices/template.html).
2. Supprimez la balise nav et son contenu: le menu de navigation n'est pas nécessaire pour cet exercice.

### Partie 1 - Simple formulaire

Dans cette partie, nous allons pour l'email le type `text` et non `email`. Cela permettra de voir la différence entre les deux types plus tard.

1. Créez un fichier nommé Exercice10-1.html
2. Remplacez le titre de niveau 1 par "Partie 1 - Simple formulaire".
3. Ajoutez un formulaire contenant les champs suivants:
    - Un champ obligatoire de `type texte` pour le nom. A l'attribut name, donnez la valeur `nom`.
    - Un champ obligatoire de `type texte` pour le prénom. A l'attribut name, donnez la valeur `prenom`.
    - Un champ obligatoire de `type texte` pour l'adresse email. A l'attribut name, donnez la valeur `email`.
    - Un champ obligatoire de type submit pour l'envoi du formulaire. A l'attribut value, donnez la valeur `Envoyer`.
4. Ajoutez un attribut `action` au formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/exercices/exercice10-1.php`.
5. Ajoutez un attribut `method` au formulaire et donnez lui la valeur `post`.
6. Observez l'URL de la page web lorsque vous cliquez sur le bouton `Envoyer`.

### Partie 2 - Type email

1. Créez un fichier nommé Exercice10-2.html
2. Recopiez le contenu de la partie 1.
3. Modifiez le champ email pour qu'il soit de type `email`.
4. Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/exercices/exercice10-1.php`.
5. Modifiez l'attribut `method` du formulaire et donnez lui la valeur `get`.
6. Observez l'URL de la page web lorsque vous cliquez sur le bouton `Envoyer`.

### Partie 3 - Type number

1. Créez un fichier nommé Exercice10-3.html
2. Recopiez le contenu de la partie 2.
3. Ajoutez un champ non obligatoire de type `number` pour l'âge. A l'attribut name, donnez la valeur `age`.
4. Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/exercices/exercice10-3.php`.
5. Modifiez l'attribut `method` du formulaire et donnez lui la valeur `post`.

### Partie 4 - Textearea

1. Créez un fichier nommé Exercice10-4.html
2. Recopiez le contenu de la partie 3.
3. Ajoutez un champ non obligatoire de type `textarea` pour les commentaires. A l'attribut name, donnez la valeur `commentaires`.
4. Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/demos/showvars.php`.
5. Modifiez l'attribut `method` du formulaire et donnez lui la valeur `post`.


<!-- ## Correction
 Comparez le rendu de votre page avec la page web suivante: [Correction Exercie9](http://zamboyle.github.io/htmlpreview/?https://github.com/ZamBoyle/Eqla_HTML/blob/master/Exercices/Corrections/pages/Exercice9.html). -->

[:arrow_left: Revenir au sommaire des exercices.](/Exercices/README.md#exercices)

---
&copy; 2023 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
