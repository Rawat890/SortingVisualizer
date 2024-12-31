export const MergeSort = array => {
    if (array.length === 1) {
      return array;
    }
  
    const Middle = Math.floor(array.length / 2);
    const FirstHalf = MergeSort(array.slice(0, Middle));
    const SecondHalf = MergeSort(array.slice(Middle));
  
    const sortedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < FirstHalf.length && j < SecondHalf.length) {
      if (FirstHalf[i] < SecondHalf[j]) {
        sortedArray.push(FirstHalf[i]);
        i++;
      } else {
        sortedArray.push(SecondHalf[j]);
        j++;
      }
    }
  
    while (i < FirstHalf.length) {
      sortedArray.push(FirstHalf[i]);
      i++;
    }
    while (j < SecondHalf.length) {
      sortedArray.push(SecondHalf[j]);
      j++;
    }
  
    return sortedArray;
  };
  

  export const BubbleSort = array => {
    const animations = [];
    const arr = array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap and record the animation
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          animations.push([j, j + 1]);
        }
      }
    }
    return { sortedArray: arr, animations };
  };
  
  export const QuickSort = (array, start = 0, end = array.length - 1, animations = []) => {
    if (start < end) {
      const pivotIndex = partition(array, start, end, animations);
      QuickSort(array, start, pivotIndex - 1, animations);
      QuickSort(array, pivotIndex + 1, end, animations);
    }
    return { sortedArray: array, animations };
  };
  
  const partition = (array, start, end, animations) => {
    const pivot = array[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      if (array[i] < pivot) {
        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        animations.push([i, pivotIndex]);
        pivotIndex++;
      }
    }
    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    animations.push([pivotIndex, end]);
    return pivotIndex;
  };
  
  export const HeapSort = array => {
    const animations = [];
    const arr = array.slice();
  
    const heapify = (arr, n, i) => {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && arr[left] > arr[largest]) largest = left;
      if (right < n && arr[right] > arr[largest]) largest = right;
  
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        animations.push([i, largest]);
        heapify(arr, n, largest);
      }
    };
  
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      animations.push([0, i]);
      heapify(arr, i, 0);
    }
    return { sortedArray: arr, animations };
  };
  