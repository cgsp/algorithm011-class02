// 括号生成
function generateParenthesis(n) {
  if (typeof n !== 'number') {
    return []
  }
  let res = []
  // 添加左括号时，左括号数量必须 小于 n
  // 添加右括号时，右括号数量必须 小于 左括号数量，并且右括号数量 < n
  const help = (str, left, right) => {
    // 递归终止条件，termination
    if (left === n && right === n) {
      // res.push(str)
      // return
      return res.push(str)
    }
    // process + drill down
    if (left < n) {
      help(str + '(', left + 1, right)
    }
    if (right < left) {
      help(str + ')', left, right + 1)
    }
    // reverse status
  }
  help('', 0, 0)
  return res
}
console.log(generateParenthesis(3))

// 翻转二叉树
const invertTree = function (root) {
  if (!root) {
    return null
  }
  let stack = [root]
  while (stack.length > 0) {
    let cur = stack.pop()
    if (!cur) continue
    [cur.left, cur.right] = [cur.right, cur.left]
    stack.push(cur.left)
    stack.push(cur.right)
  }
  return root
}

// 验证二叉搜索树
const helper = (root, lower, upper) => {
  // 如果是空树，返回true
  // ternimation
  if (root === null) return true
  // process
  if (root.val <= lower || root.val >= upper) return false
  // drill down
  // 无reverse status
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
}
const isValidBST = (root) => {
  return helper(root, -Infinity, Infinity)
}
