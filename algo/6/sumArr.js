/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.
Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]
*/

const sumArr = (arrayA, arrayB) => {
  let arr1 = arrayA.map((elem) => parseInt(elem));
  let arr2 = arrayB.map((elem) => parseInt(elem));
  let newArr = [];
  arr1.length > arr2.length
    ? (newArr = arr1.map((elem, index) => elem + (arr2[index] || 0)))
    : (newArr = arr2.map((elem, index) => elem + (arr1[index] || 0)));
  return newArr.map((elem) => elem.toString());
};

module.exports = sumArr;
