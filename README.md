# Test Technique : Token Gating avec React et Alchemy API

## Objectif

Développer une application React qui conditionne l'affichage d'une phrase secrète selon la possession d'un NFT particulier dans le wallet de l'utilisateur.

## Consignes

### Affichage Conditionnel :
- Affichez une phrase secrète si l'utilisateur est identifié comme possesseur du NFT.
- Si la possession du NFT n'est pas confirmée ou en cas d'erreur, affichez un message d'erreur approprié.

### Interactions avec l'API :
- Utilisez la méthode `isHolderOfCollection` de l'API Alchemy pour vérifier si l'adresse du wallet connecté possède le NFT désigné.
- Simulez l'adresse du wallet ou utilisez un outil tel que MetaMask pour obtenir l'adresse du wallet réellement connecté.

### Notes Techniques :
- Introduisez un bouton ou une méthode permettant de déclencher la vérification du NFT.
- Gérez les états de chargement et d'erreur pour offrir une expérience utilisateur optimale.

### Bonus (Optionnel)

Si vous avez du temps supplémentaire, considérez l'ajout de la fonctionnalité suivante :

- **Liste de NFTs** : Affichez tous les NFTs du wallet connecté sous forme de liste. Cela pourrait impliquer l'utilisation d'autres endpoints de l'API Alchemy ou d'une API alternative pour récupérer et afficher les métadonnées de chaque NFT (comme l'image, le nom, etc.).

## Remarques
- La propreté et l'organisation du code sont cruciales.
- La gestion des états et des erreurs doit être minutieusement réalisée.
- L’interface utilisateur doit être intuitive et réactive.

Bonne chance et amusez-vous lors de ce test ! Si vous avez des questions ou si quelque chose n'est pas clair, n'hésitez pas à demander des clarifications.
