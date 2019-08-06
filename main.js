function removeSmallest(numbers) {
    var output = []
    var smallestNumber = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
       smallestNumber = numbers[i];
      }
    }
    for (var n = 0; n < numbers.length; n++) {
      if (n !== numbers.indexOf(smallestNumber)) {
        output.push(numbers[n]);
      } 
    }
    return output;
  }