// 有效的字母异位词
const isAnagram = function (s, t) {
  if (typeof s !== 'string' || typeof t !== 'string') {
    return false
  }
  // 如果s与t完全相等，返回true
  if (s === t) {
    return true
  }

  // 如果s与t的长度，不相等，就返回false
  if (s.length !== t.length) {
    return false
  }

  let obj = {}
  const len = s.length

  for (let i = 0; i < len; i++) {
    obj[s[i]] ? obj[s[i]]++ : (obj[s[i]] = 1)
    obj[t[i]] ? obj[t[i]]-- : (obj[t[i]] = -1)
  }
  // return Object.values(obj).every(item => !item)

  // 注意for of 不能用于obj
  for (const key in obj) {
    if (obj[key] !== 0) {
      return false
    }
  }
  return true
}

// 二数之和
const twoSum = (nums, target) => {
  if (Object.prototype.toString.call(nums) !== '[object Array]') {
    return []
  }
  if (nums.length <= 1) {
    return []
  }

  const len = nums.length
  const res = []
  const hash = {}

  for (let i = 0; i < len; i++) {
    const dis = target - nums[i]
    if (hash[dis]) {
      res.push([nums[i], dis])
    } else {
      hash[nums[i]] = 1
    }
  }

  return res
}

// 字母异位词分组
const groupAnagrams = function (strs) {
  if (Object.prototype.toString.call(strs) !== '[object Array]') {
    return []
  }

  if (strs.length === 0) {
    return []
  }

  if (strs.length === 1) {
    return [strs]
  }

  const len = strs.length
  const res = []
  const hash = {}
  for (let i = 0; i < len; i++) {
    const item = strs[i].split('').sort().join('')
    if (hash[item]) {
      hash[item] = [
        ...hash[item],
        strs[i],
      ]
    } else {
      hash[item] = [strs[i]]
    }
  }

  for (const key in hash) {
    res.push(hash[key])
  }

  return res
}

// 二叉树的前序遍历
const preorderTraversal = function (root) {
  const res = []
  if (!root) {
    return res
  }

  // 当根节点不为空的时候，将根节点入栈
  const stack = [root]
  while (stack.length > 0) {
    const curr = stack.pop()

    // ===========
    // res.push(curr.val) // 这句放在这里，或者放在最下面，结果都OK
    // ===========

    curr.right && stack.push(curr.right)
    curr.left && stack.push(curr.left)
    // ===========
    res.push(curr.val) // 这句放在这里，或者放在最上面，结果都OK
    // ===========
  }
  return res
}

// 二叉树的中序遍历
const inorderTraversal = function (root) {
  let res = [], stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()
    res.push(root.val)

    root = root.right
  }

  return res
}
