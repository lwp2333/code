/**
 * 判断字符串是否为 有效括号
 *
 */

const fn = str => {
  const stack = []
  const mapper = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  for (const i in str) {
    const cur = str[i]
    if (['{', '[', '('].includes(cur)) {
      stack.push(cur)
    } else {
      const pre = stack.pop()
      if (cur !== mapper[pre]) {
        return false
      }
    }
  }
  if (stack.length > 0) return false
  return true
}
console.log(fn('([{}])'))
