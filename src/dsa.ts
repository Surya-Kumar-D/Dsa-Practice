// Two Sum Brute Force Approach
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

//Two Sum Map Approach
// function twoSum(nums: number[], target: number): number[] {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];
// }

// console.log(twoSum([3, 2, 4], 6));

//Stack and Queue

// class Stack<T> {
//   constructor() {
//     this.stack = [];
//   }
//   push(element) {
//     this.stack.push(element);
//   }
//   pop() {
//    return  this.stack.pop();
//   }
// }

// let surya = new Stack();

// surya.push("surya");
// console.log(surya);
// console.log(surya.pop())

//Ispalindrome

// function isPalindrome(str: string): boolean {
//     console.log(str.toLocaleLowerCase().split(''))
//     return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
// }

// console.log(isPalindrome("racecar"))

//FizzBuzz

// function fizzBuzz(n: number): void {
//   for (let i = 0; i <= n; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
//   }
// }

// fizzBuzz(15);

//Find All Duplicates in Array

// function findDuplicates(nums: number[]): number[] {
//   let map = new Map<number, number>();
//   let result: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], (map.get(nums[i]) || 0) + 1);
//   }
//   for (let [num, count] of map) {
//     if (count > 1) result.push(num);
//   }
//   return result;
// }

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

//Group Anagrams

// function groupAnagrams(strs: string[]): string[][] {
//   let sorted = strs.map((str) => str.split("").sort().join(""));
//   let map: { [key: string]: string[] } = {};

//   for (let i = 0; i < sorted.length; i++) {
//     if (!map[sorted[i]]) {
//       map[sorted[i]] = [strs[i]];
//     } else {
//       map[sorted[i]].push(strs[i]);
//     }
//   }
//   return Object.values(map);
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

//Length of Longest Substring

// function lengthOfLongestSubstring(s: string): number {
//   let map = new Map();
//   let max = 0;
//   let left = 0;
//   for (let right = 0; right < s.length; right++) {
//     if (map.has(s[right])) {
//       left = Math.max(left, map.get(s[right]) + 1);
//     }
//     map.set(s[right], right);

//     max = Math.max(max, right - left + 1);
//   }
//   return max;
// }

// function lengthOfLongestSubstring(s: string): number {
//   let map = new Map();
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       map.set(s[i], map.get(s[i]) - 1);
//       console.log(map); // Decrementing count
//       max = Math.max(max, map.size); // Using map size
//     }
//     map.set(s[i], 1); // Setting count as 1
//   }
//   return max;
// }

// console.log(lengthOfLongestSubstring("pwwkew"));

//Merge Sort
// function merge(arr1: number[], arr2: number[]): number[] {
//   let result: number[] = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }
//   return result;
// }
// function mergeSort(arr: number[]): number[] {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// console.log(mergeSort([5, 2, 3, 1]));

//Binary Search

// function binarySearch(arr: number[], number): number {
//   // add whatever parameters you deem necessary - good luck!
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === number) {
//       return mid;
//     } else if (arr[mid] > number) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 2));

//isPalindrome

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function isPalindrome(head: ListNode | null): boolean {
//     if (head === null || head.next === null) return true;

//     // Step 1: Use slow and fast pointers to find the middle of the list
//     let slow = head;
//     let fast = head;

//     while (fast !== null && fast.next !== null) {
//       slow = slow.next;        // Move slow by 1 step
//       fast = fast.next.next;   // Move fast by 2 steps
//     }

//     // Step 2: Reverse the second half of the list (starting from slow)
//     let prev: ListNode | null = null;
//     while (slow !== null) {
//       let nextTemp = slow.next;
//       slow.next = prev;
//       prev = slow;
//       slow = nextTemp;
//     }

//     // Step 3: Compare the first half and the reversed second half
//     let firstHalf = head;
//     let secondHalf = prev;  // prev now points to the head of the reversed second half

//     while (secondHalf !== null) {
//       if (firstHalf.val !== secondHalf.val) {
//         return false;
//       }
//       firstHalf = firstHalf.next;
//       secondHalf = secondHalf.next;
//     }

//     return true;
//   }

//Problem Most Words found

// function mostWordsFound(sentences: string[]): number {
//   return Math.max(
//     ...sentences.map(
//       (sentence) => sentence.split(",").join(" ").split(" ").length
//     )
//   );
// }
// console.log(
//   mostWordsFound([
//     "alice and bob love leetcode",
//     "i think so too",
//     "this is great thanks very much",
//   ])
// );
//IsValid Palindrome

// function isPalindrome(s: string): boolean {
//   const cleaned = s.toLocaleLowerCase().match(/[a-z0-9]/g);

//   if (!cleaned) return true;

//   return cleaned.join("") === cleaned.reverse().join("");
// }

// console.log(isPalindrome("OP"));

//find Common Characters

// function commonChars(words: string[]): string[] {
//   const charCount = words.reduce((acc, word) => {
//     const currentCount = Array(26).fill(0);
//     for (const char of word) {
//       currentCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
//     }
//     return acc.map((count, index) => Math.min(count, currentCount[index]));
//   }, Array(26).fill(Infinity));

//   return charCount.flatMap((count, index) =>
//     Array(count).fill(String.fromCharCode(index + "a".charCodeAt(0)))
//   );
// }

// console.log(commonChars(["bella", "label", "roller"]));

//leetcode 925 Long Pressed Name

// function isLongPressedName(name: string, typed: string): boolean {
//   let i = 0;
//   let j = 0;

//   while (j < typed.length) {
//     if (i < name.length && name[i] === typed[j]) {
//       i++;
//       j++;
//     } else if (j > 0 && typed[j] === typed[j - 1]) {
//       j++;
//     } else {
//       return false;
//     }
//   }
//   return i === name.length;
// }

// console.log(isLongPressedName("saeed", "ssaaedd"));

//1768. Merge Strings Alternately

// function mergeAlternately(word1: string, word2: string): string {
//   let left = 0;
//   let right = 0;
//   let newStr: string = "";
//   while (left < word1.length || right < word2.length) {
//     if (left < word1.length) {
//       newStr += word1[left];
//       left++;
//     }
//     if (right < word2.length) {
//       newStr += word2[right];
//       right++;
//     }
//   }
//   return newStr;
// }

// console.log(mergeAlternately("ab", "pqrs"));

// 1431. Kids With the Greatest Number of Candies

// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//   return candies.map((candy) => {
//     return candy + extraCandies >= Math.max(...candies);
//   });
// }

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

//605. Can Place Flowers
// function canPlaceFlowers(flowerbed: number[], n: number): boolean {
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (
//       flowerbed[i] === 0 &&
//       (i === 0 || flowerbed[i - 1] === 0) &&
//       (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
//     ) {
//       flowerbed[i] = 1;
//       n--;
//       if (n === 0) return true;
//     }
//   }
//   return n <= 0;
// }

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));

//345. Reverse Vowels of a String
// function reverseVowels(s: string): string {
//   const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
//   const chars = s.split("");
//   const stack: string[] = [];
//   for (const char of chars) {
//     if (vowels.has(char)) {
//       stack.push(char);
//     }
//   }
//   for (let i = 0; i < chars.length; i++) {
//     if (vowels.has(chars[i])) {
//       chars[i] = stack.pop()!;
//     }
//   }
//   return chars.join("");
// }

// console.log(reverseVowels("IceCreAm"));

//151 Reverse Words in a String
// function reverseWords(s: string): string {
//   const words = s.split(" ").filter((word) => word.length > 0);
//   return words.reverse().join(" ");
// }

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world  "));

//238. Product of Array Except Self

// function productExceptSelf(nums: number[]): number[] {
//   let res = [1];
//   for (let i = 1; i < nums.length; i++) {
//     res.push(res[i - 1] * nums[i - 1]);
//   }
//   console.log(res);
//   let suffixProduct = 1;
//   for (let i = nums.length - 2; i >= 0; i--) {
//     suffixProduct *= nums[i + 1];
//     res[i] = res[i] * suffixProduct;
//   }
//   return res;
// }

// console.log(productExceptSelf([1, 2, 3, 4]));

//334. Increasing Triplet Subsequence

function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
      console.log(nums[i]);
    } else if (nums[i] <= second) {
      second = nums[i];
      console.log(nums[i]);
    } else {
      console.log(nums[i]);
      return true;
    }
  }
  return false;
}

console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
