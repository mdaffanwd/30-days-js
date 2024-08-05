// task 1w
var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    // console.log(nums[i])
    if (map.hasOwnProperty(comp)) {
      return [map[comp], i];
    }
    map[nums[i]] = i;
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 5, 4, 15], 9));
