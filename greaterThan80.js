let nums = [43, 65, 76, 87, 89, 45, 23, 94, 65];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 80) {
    console.log(nums[i]);
    continue;
  }
}
