function smallestMissingPositiveInteger(nums) {


    // Implement the function smallest_missing_positive_integer
    const numSet =new Set(nums)
    let smallestMissing = 1;
    while(numSet.has(smallestMissing)){
      smallestMissing++;
    }
    return smallestMissing;
  
  }
  
  module.exports = smallestMissingPositiveInteger;

