/* Notre équipe de football participe à un championnat
dans laquelle elle a joué 10 matchs.
Le résultat d'un match est comme suit : "3-0"
Le premier chiffre correspond au nombre de but que notre équipe a marqué.
Le deuxième correspond au nombre de but que notre adversaire a marqué.
Victoire : +3 points
Match nul : +1 points
Défaite : +0 point
Ci-dessous, tu as un tableau avec tous les résultats de notre équipe,
qui te permet de tester si ta fonction est bonne. Le résultat doit être 13
écris la fonction qui nous permet de récupérer le nombre
de points de notre équipe à la fin du championnat
*/

const scores = [
  "1:0",
  "2:0",
  "3:0",
  "4:4",
  "2:2",
  "3:3",
  "1:4",
  "2:3",
  "2:4",
  "3:3",
];

function getPoints(array) {
  const result = [];

  array.forEach((score) => {
    const splitedScore = score.split(":");

    const ourScore = parseInt(splitedScore[0]);
    const opponentScore = parseInt(splitedScore[1]);

    if (ourScore > opponentScore) {
      return result.push(3);
    }
    if (ourScore === opponentScore) {
      return result.push(1);
    }
    return result.push(0);
  });

  return result.reduce((acc, curr) => acc + curr, 0);
}

module.exports = getPoints;
