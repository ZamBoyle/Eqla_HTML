[:arrow_left: Revenir au sommaire des exercices.](/Exercices/README.md#exercices)
<h1 id="exercice3" style="display: flex; align-items: center; justify-content: center;">
    <img src="/Images/Eqla.png" style="height:50px" alt="Logo d'Eqla">
    &nbsp;Exercice n°3 - Les liens hypertextes
</h1>


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Partie 1 - Introduction](#partie-1---introduction)
- [Partie 2 - Les liens externes](#partie-2---les-liens-externes)
- [Partie 3 - L'attribut `target`](#partie-3---lattribut-target)
- [Partie 4 - Les attributs `target` et `rel`](#partie-4---les-attributs-target-et-rel)
- [Partie 5 - L'attribut `title`](#partie-5---lattribut-title)
- [Partie 6 - Les liens internes / Les ancres](#partie-6---les-liens-internes--les-ancres)

<!-- /code_chunk_output -->



## Partie 1 - Introduction
C'est très simple, vous allez faire une page HTML comme vu au cours et dans l'exercice 1.

Vous la faite dans un nouveau fichier `Exercice3.html`.

Ajoutez un titre à votre page (avec la balise `title`): `Les liens hypertextes`.

Ajoutez un titre `h1` avec le texte: `Les liens hypertextes`.

Ajoutez un paragraphe `p` avec le texte: `Les liens hypertextes permettent de lier une page à une autre page. Cela permet de naviguer entre les pages d'un site web ou de composer un mail, un numéro de téléphone, un SMS, etc.`


## Partie 2 - Les liens externes
Ajoutez un titre `h2` avec le texte: `Les liens externes`.

Ajoutez les liens suivants:
- `www.w3schools.com` avec le texte: `W3Schools`.

- `https://www.youtube.com/watch?v=dQw4w9WgXcQ` avec le texte: `Regarder une vidéo de Rick Astley`.
- `https://github.com/ZamBoyle/Eqla_HTML/blob/master/Cours/README.md#5-la-balise-a---les-liens-hypertextes` avec le texte: `Revenir au cours sur les liens hypertextes`.
- `marty.mcfly@backtothefuture.com` avec le texte: Envoyer un mail à `Marty McFly`.
- `sms:555-1234` avec le texte: `Envoyer un SMS à Doc Brown`.

## Partie 3 - L'attribut `target`
Ajoutez un titre `h2` avec le texte: `L'attribut target`.

Les liens suivants doivent s'ouvrir dans un nouvel onglet:
- `https://www.youtube.com/watch?v=dQw4w9WgXcQ` avec le texte: `Regarder une vidéo de Rick Astley`. 
- `https://developer.mozilla.org/fr/docs/Web/HTML` avec le texte: `Voir la documentation sur le HTML`.
- `https://caniuse.com/?search=_blank` avec le texte: `Voir la compatibilité de l'attribut target="_blank"`.

## Partie 4 - Les attributs `target` et `rel`
Ajoutez un titre `h2` avec le texte: `L'attribut rel="noopener"`.

Reprenons les liens de la partie 3 et modifiez-les pour protéger votre page de l'attaque de type `tabnabbing`:
- `https://www.youtube.com/watch?v=dQw4w9WgXcQ` avec le texte: `Regarder une vidéo de Rick Astley`. 
- `https://developer.mozilla.org/fr/docs/Web/HTML` avec le texte: `Voir la documentation sur le HTML`.
- `https://caniuse.com/?search=_blank` avec le texte: `Voir la compatibilité de l'attribut target="_blank"`.

## Partie 5 - L'attribut `title`

Ajoutez un titre `h2` avec le texte: `L'attribut title`.

Ajoutez les liens suivants:
- `https://www.youtube.com/watch?v=dQw4w9WgXcQ` avec le texte: `Regarder une vidéo de Rick Astley` et le titre: `Rick Astley - Never Gonna Give You Up (Video)`.
- `https://developer.mozilla.org/fr/docs/Web/HTML` avec le texte: `Voir la documentation sur le HTML` et le titre: `Documentation sur le HTML`.
- `https://caniuse.com/?search=_blank` avec le texte: `Voir la compatibilité de l'attribut target="_blank"` et le titre: `Compatibilité de l'attribut target`.

## Partie 6 - Les liens internes / Les ancres

Ajoutez un titre `h2` avec le texte: `Les liens internes / Les ancres`.

Au début de votre page, ajoutez un titre `h2` avec le texte: `Sommaire`.

Ajoutez les liens suivants:
- Partie 1 - Introduction
- Partie 2 - Les liens externes
- Partie 3 - L'attribut `target`
- Partie 4 - Les attributs `target` et `rel`
- Partie 5 - L'attribut `title`
- Partie 6 - Les liens internes / Les ancres

Ces liens doivent vous amener à la partie correspondante de votre page. Il faudra donc ajouter des ancres à votre page.

Vous devrez ajouter un id à chaque titre h2 pour les parties de l'exercice 3.

Par exemple, pour la partie 1, vous devrez ajouter un id à votre titre `h2` comme ceci: `<h2 id="partie1">Partie 1 - Introduction</h2>`.

Vous pourrez ensuite créer un lien vers cette partie avec le code suivant: `<a href="#partie1">Partie 1 - Introduction</a>`.






[:arrow_left: Revenir au sommaire des exercices.](/Exercices/README.md#exercices)

---
&copy; 2023 [Johnny Piette](https://github.com/ZamBoyle).  
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)  
Ce travail est licencié sous [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).   
_Vous pouvez copier, modifier, distribuer et représenter ce travail, même à des fins commerciales, à condition de donner le crédit approprié, fournir un lien vers la licence, et indiquer si des modifications ont été effectuées._