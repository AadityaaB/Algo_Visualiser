export const mergeSort= array => {
    if (array.length <= 1) {
      return array;
    }
  
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    const sortedArray=[];
  
    
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        sortedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        sortedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements
    while (leftIndex < left.length)  sortedArray.push(left[leftIndex++]);
    while (rightIndex < right.length) sortedArray.push(right[rightIndex++]);
    return sortedArray;
  };