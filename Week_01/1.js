// 删除排序数组中的重复项
const removeDuplicates = function (nums) {
    let count = 0;
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[i - count] = nums[i]
        } else {
            count++
        }
    }
    return n - count
}