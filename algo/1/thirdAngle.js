/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80
*/

function thirdAngle(a, b) {
  // Your code here !
  return a + b < 180
    ? 180 - a - b
    : `les valeurs de a & b sont trop élevées. veuillez vérifier vos valeurs saisies et recommencer.`;
}
console.log(thirdAngle(20, 180));
module.exports = thirdAngle;
