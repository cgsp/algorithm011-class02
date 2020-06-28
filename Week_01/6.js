// 移动零
var moveZeros = function (nums) {
  let j = 0
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      // nums[j++] = nums[index]
      nums[j] = nums[index]
      j++
    }
  }

  for (let index = j; index < nums.length; index++) {
    nums[index] = 0
  }
}