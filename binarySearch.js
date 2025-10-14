/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let s = 0;
    let e = nums.length - 1;
    let ans = nums.length;
    while(s<=e) {
       let mid = Math.floor((s+e)/2);
       if(nums[mid] >= target) {
        ans = mid;
        e = mid - 1;
       } else {
        s = mid + 1;
       }
    }
    return ans;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let r = matrix.length;
    let c = matrix[0].length;

    let s = 0;
    let e = (r*c) - 1;

    while(s<=e) {
        let mid = Math.floor((s+e)/2);
        let localRow = Math.floor(mid/c);
        let localCol = mid%c;

        if(matrix[localRow][localCol] == target) return true;
        else if(matrix[localRow][localCol] > target) {
            e = mid - 1;
        }else {
            s = mid + 1;
        }
    }

    return false;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums[0]>nums[1] || nums.length == 1) {
        return 0;
    }
    if(nums[nums.length - 1] > nums[nums.length - 2]) {
        return nums.length - 1
    }

    let l = 1;
    let h = nums.length - 2

    while(l<=h) {
        let mid = Math.floor(l +(h-l)/2)
        if(nums[mid] > nums [mid-1] && nums[mid] > nums [mid+1]) {
            return mid;
        } if(nums[mid] > nums [mid-1]) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix2 = function(matrix, target) {
    let rCount = matrix.length;
    let cCount = matrix[0].length;
    let r = 0;
    let c = cCount - 1;

    while(r <= (rCount-1) && c >= 0) {
        if(matrix[r][c] == target) return true;
        else if(matrix[r][c] > target) {
            c--;
        } else {
            r++;
        }
    }
    return false;
};