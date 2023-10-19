
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
  - [Partie 5 - Type checkbox](#partie-5---type-checkbox)
  - [Partie 6 - Type checkbox avec plusieurs valeurs](#partie-6---type-checkbox-avec-plusieurs-valeurs)
  - [Partie 7 - Type radio](#partie-7---type-radio)
  - [Partie 8 - Type select](#partie-8---type-select)
  - [Partie 9 - Type select avec plusieurs valeurs](#partie-9---type-select-avec-plusieurs-valeurs)
  - [Partie 10 - autofocus](#partie-10---autofocus)
  - [Partie 11 - Type readonly](#partie-11---type-readonly)

<!-- /code_chunk_output -->

## Instructions :

Crée une page web qui répond aux critères suivants :

1. Vous allez utiliser le modèle de page suivant: [Modèle de page web](https://raw.githubusercontent.com/ZamBoyle/Eqla_HTML/master/Exercices/template.html).
2. Supprimez la balise nav et son contenu: le menu de navigation n'est pas nécessaire pour cet exercice.
3. Parfois je vais vous demander de mettre une page showvars.php. Celle-ci permet simplement d'afficher toutes les valeurs de votre formulaire. Ca vous permettra de voir si toutes les données ont été envoyées correctement. Vérifier donc bien si des valeurs ont été envoyées et le nom des variables.

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

### Partie 5 - Type checkbox

1. Créez un fichier nommé Exercice10-5.html
2. Recopiez le contenu de la partie 4.
3. Ajoutez un champ non obligatoire de type `checkbox`.
4. Le champ permettra de cocher si l'utilisateur souhaite recevoir des informations par email. A l'attribut name, donnez la valeur `newsletter`.
5. Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/demos/showvars.php`.
5. Modifiez l'attribut `method` du formulaire et donnez lui la valeur `post`.

### Partie 6 - Type checkbox avec plusieurs valeurs

1. Créez un fichier nommé Exercice10-6.html
2. Recopiez le contenu de la partie 5.
3. Ajoutez plusieurs champs de type `checkbox`.
4. Les champs permettront de cocher les prérequis pour suivre le cours de php: html, css.
5. A l'attribut name, on a vu dans le cours comment gérer plusieurs valeurs: [Plusieurs checkbox](https://github.com/ZamBoyle/Eqla_HTML/blob/master/Cours/README.md#checkboxSeveralValues)
6. Vous devrez donc un nom à l'attribut name mais il aura un format particulier.
7.  Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/demos/showvars.php`.


### Partie 7 - Type radio

1. Créez un fichier nommé Exercice10-7.html
2. Recopiez le contenu de la partie 6.
3. Ajoutez un champ non obligatoire de type `radio` pour le sexe. A l'attribut name, donnez la valeur `sexe`.
4. Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/demos/showvars.php`.
5. Modifiez l'attribut `method` du formulaire et donnez lui la valeur `get`.
6. Observez que dans l'url les variables sont séparées par un `&`.

### Partie 8 - Type select

1. Créez un fichier nommé Exercice10-8.html
2. Recopiez le contenu de la partie 7.
3. Ajoutez un champ de type `select`.
4. Le champ permettra de sélectionner la langue maternelle de l'utilisateur. A l'attribut name, donnez la valeur `langue`.
5. Ajoutez plusieurs options au champ select:
    - Français
    - Anglais
    - Allemand
    - Espagnol
    - Italien
    - Romain
6. Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/demos/showvars.php`.

### Partie 9 - Type select avec plusieurs valeurs

1. Créez un fichier nommé Exercice10-9.html
2. Recopiez le contenu de la partie 8.
3. Ajoutez un champ de type `select` avec l'attribut `multiple`.
4. Le champ permettra de sélectionner les langues parlées par l'utilisateur. A l'attribut name, donnez la valeur `langues`.
5. Ajoutez plusieurs options au champ select:
    - Français
    - Anglais
    - Allemand
    - Espagnol
    - Italien
    - Romain
6. Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/demos/showvars.php`.

### Partie 10 - autofocus

1. Créez un fichier nommé Exercice10-10.html
2. Recopiez le contenu de la partie 9.
3. Ajoutez l'attribut `autofocus` au champ nom.
4. Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/demos/showvars.php`.

### Partie 11 - Type readonly

1. Créez un fichier nommé Exercice10-11.html
2. Recopiez le contenu de la partie 10.
3. Ajoutez au début du formulaire un champ de type `text` avec l'attribut `readonly` pour l'identifiant. A l'attribut name, donnez la valeur `id`.
4. Mettez la valeur de l'attribut `value` à `124` qui correspondra à l'identifiant de l'utilisateur.
5. Modifiez l'attribut `action` du formulaire et donnez lui la valeur `http://zamboyle.synology.me:2727/forms/demos/showvars.php`.
6. Testez la zone de texte readonly. Vous ne pouvez pas la modifier.



<!-- ## Correction
 Comparez le rendu de votre page avec la page web suivante: [Correction Exercie9](http://zamboyle.github.io/htmlpreview/?https://github.com/ZamBoyle/Eqla_HTML/blob/master/Exercices/Corrections/pages/Exercice9.html). -->

[:arrow_left: Revenir au sommaire des exercices.](/Exercices/README.md#exercices)

---
&copy; 2023 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._
