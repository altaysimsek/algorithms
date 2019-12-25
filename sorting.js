const insertionSort = function(deste){
  let i,j,key;
  
  for(i=0;i<=deste.length;i++){
    key = deste[i]
    j=i-1;
    
    while(j>=0 && key<deste[j]){
      deste[j+1] = deste[j]
      deste[j] = key
      j--
    }
  }
  console.log("Insertion Sorting -> "+deste);
}

const bubbleSort = function(deste){
  let i,j,temp;
  for(i=0;i<deste.length-1;i++){
    
    for(j=0;j<deste.length-i-1;j++){
      
      temp = deste[j]
      if(temp > deste[j+1]){
        deste[j] = deste[j+1]
        deste[j+1] = temp
      }
    }
  }
  console.log("Bubble Sorting -> "+deste)
}

module.exports = {insertionSort,bubbleSort}