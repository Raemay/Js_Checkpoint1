/*
Un employé de théatre souhaiterait obtenir la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice 
où chaque sous-tableau liste les positions des sieges d'une rangée.

exemple :

[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

function theaterSieges() {
  //Your code here!

  const siegesTot = [];
  for (let i = 1; i <= 26; i++) {
    const siegesCol = [];

    for (let j = 1; j <= 100; j++) {
      let value = `${i}-${j}`
      siegesCol.push(value);
    }

    siegesTot[i - 1] = siegesCol;
    siegesTot.push(siegesTot[i - 1]);
  }
  siegesTot.pop();
  return siegesTot;

}



console.log(theaterSieges());

module.exports = theaterSieges;
