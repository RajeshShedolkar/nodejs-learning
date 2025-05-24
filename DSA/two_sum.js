function twoSum(nums, target) {
    const map = new Map(); // To store the index of each number

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if complement exists in the map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Store the current number and its index in the map
        map.set(nums[i], i);
    }

    throw new Error("No two sum solution found");
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // Output: [0, 1]
