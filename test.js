function concatArray(array1, array2) {
    if((array1 == null || undefined) && (array2 == null||undefined)){
      return undefined
      // console.log(undefined)
  }
  else if ((array1 == null||undefined) && (array2 != null||undefined)){
      // console.log(array2)
      return array2
  }
  else if ((array2 == null||undefined) && (array1 != null||undefined)){
      // console.log(array1)
      return array1
  }
  else{
      
      arr = array1.concat(array2)
      // console.log(arr)
      return arr
  }
    
  }
  console.log(concatArray([5, 10, 15], [2, 4, 6, 7]))
  console.log(concatArray([], ['item1', 'item2', 'item3']))