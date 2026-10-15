/**
 * @param {number[]} nums
 * @return {number}
 */

// 사이즈가 n인 nums 배열을 받을 때 nums 배열 안에서 0과 가장 가까운 값을 반환한다. 답이 여러개라면, 큰 값을 반환한다.

var findClosestNumber = function(nums) {
    return Math.min(...nums.map((item, idx) => Math.abs(item)))
};