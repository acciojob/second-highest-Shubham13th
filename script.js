function secondHighest(arr){
  if(arr.length === 1 || arr.length === 0){
    return Infinity;
  }

  arr.sort();
  let n = arr.length;
  for(let i=n-1;i>0;i--){
    if(arr[i] > arr[i-1]){
      return arr[i-1];
    }
  }
  return Infinity;
}

console.log(secondHighest(arr));