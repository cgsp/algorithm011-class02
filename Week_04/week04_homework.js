// 柠檬水找零
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  var five = 0, ten = 0, len = bills.length;
  for (let i = 0; i < bills.length; i++) {
      if(bills[i] === 5) {
          five++;
      } else if(bills[i] === 10) {
          if(five === 0) {
              return false;
          };
          five--;
          ten++;
      } else if(bills[i] === 20) {
          if(ten >0 && five > 0) {
              ten--;
              five--;
          } else if(five >= 3) {
              five -= 3;
          } else {
              return false;
          }
      }
  }
  return true;
}

// 单词接龙
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
   return 0
 }
 const wordLength = beginWord.length // 每个单词长度都是相同的
 const comboDict = new Map()
 const visited = new Map()
 wordList.forEach((word) => {
   for (let i = 0; i < wordLength; i++) {
     let genericWord = word.substring(0, i) + '*' + word.substring(i + 1)
     if (!comboDict.get(genericWord)) {
       comboDict.set(genericWord, [])
     }
     comboDict.get(genericWord).push(word)
   }
 })
 const queue = []
 queue.push({ [beginWord]: 1 })
 visited.set(beginWord, true)
 while (queue.length > 0) {
   let node = queue.shift()
   let word = Object.keys(node)[0]
   let level = node[word]
   for (let i = 0; i < wordLength; i++) {
     const generic = word.substring(0, i) + '*' + word.substring(i + 1)
     const list = comboDict.get(generic)
     if (list) {
       for (let j = 0; j < list.length; j++) {
         if (list[j] === endWord) {
           return level + 1
         }
         if (!visited.get(list[j])) {
           visited.set(list[j], true)
           queue.push({ [list[j]]: level + 1 })
         }
       }
     }
   }
 }
 return 0
}