
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sumResult = [];

  if(matrix === undefined){
    return sumResult;
  }else{
    matrix.forEach((array, index) => {
      if(index % 2 !== 0){
        matrix[index].sort(function(a,b) {return b - a})
      }
  
      matrix[index].forEach(arr2 => {
        sumResult.push(arr2)
      })
    })
    
    return sumResult;
  }
}
