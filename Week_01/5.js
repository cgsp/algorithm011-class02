// 两数之和
var twoSum = function (nums, target) {
    let map = {};
    let loop = 0;
    let dis;
    while (loop < nums.length) {
        dis = target - nums[loop];
        if (map[dis] != undefined) {
            return [map[dis], loop];
        }
        map[nums[loop]] = loop;
        loop++;
    }
    return;
}