/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let arr = [];
    while(i<m && j<n) {
        if(nums1[i]<nums2[j]) {
            arr.push(nums1[i]);
            i++;
        } else {
            arr.push(nums2[j]);
            j++;
        }
    }
    for(;i<m;i++) {
        arr.push(nums1[i]);
    }
    for(;j<n;j++) {
        arr.push(nums2[j])
    }

    for(let a = 0; a<m+n;a++) {
        nums1[a] = arr[a];
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let i =0;
    while(i<k) {
        let temp = nums[nums.length - 1]
        for(let j = nums.length -1;j>0;j--) {
            nums[j] = nums[j-1];
        }
        nums[0] = temp;
        i++;
    }
};

// optimized version
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function reverse(s,e,nums) {
    while(s<e) {
        [nums[s], nums[e]] = [nums[e],nums[s]];
        s++;
        e--;
    }
    return nums;
}
var rotate = function(nums, k) {
    let i = 0;
    k = k % nums.length
    let e = nums.length - 1;
    reverse(i,e,nums);
    reverse(i,k-1,nums);
    reverse(k,e,nums);
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for(let price of prices) {
        minPrice = Math.min(price, minPrice);
        let profit = price - minPrice;
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <=2) return;
    let arr = {};
    for(let i = 0; i<nums.length;i++) {
        let num = nums[i]
        if(!arr[num]) {
            arr[num] = 1;
        } else {
            arr[num] ++;
        }
        if(arr[num] > 2) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let pref = 1;
    let suf = 1;
    let result = [];

    for(let i=0;i<nums.length;i++) {
        result[i] = pref;
        pref = pref * nums[i];
    }

    for(let i = nums.length-1; i >=0 ; i--) {
        result[i] = result[i]*suf;
        suf = suf * nums[i];
    }

    return result;
};

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let scArr = [];
    potions.sort((a, b) => a - b);
    for(let i =0;i<spells.length;i++) {
        let l = 0;
        let r = potions.length - 1;
        while(l<=r) {
            let mid = Math.floor(l +(r-l) / 2)
            if(spells[i]*potions[mid] >= success) {
                r = mid -1;
            } else {
                l = mid+1;
            }
        }
        scArr.push(potions.length - l)
    }
    return scArr;
};

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1;
    let h = n;

    while(l<=h) {
        let mid = Math.floor((h + l)/2)
        let res = guess(mid);

        if(res == 0) {
            return mid;
        } else if (res == 1) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    if(nums.length == 1) return true
    for(let i = 0; i < nums.length - 1;i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
        if(max >= nums.length - 1) return true;
    }
    return false;
};

/**
 * @param {number[]} nums
 * @return {number}
 * jump Game 2
 */
var jump = function(nums) {
    let hops = 0;
    let i = nums.length-1;
    while(i > 0) {
        let cb = i;
        for(let j = i-1; j >= 0;j--) {
            if((j+nums[j]) >= i) {
                cb = j;
            }
        }
        hops++;
        i = cb;
    }
    return hops;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s.split('');
    let i = 0;
    let j = arr.length - 1;
    while(i < j) {
        let iVal = arr[i].toLowerCase();
        let jVal = arr[j].toLowerCase();
        if(jVal < 'a' || jVal > 'z') {
            j--;
            continue
        }
        if(iVal < 'a' || iVal > 'z') {
            i++;
            continue
        }
        if(iVal !== jVal) {return false} else 
        {i++;
        j--;};
    }
    return true;
};
