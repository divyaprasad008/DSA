const set = new Set()
const arr1 = [1,2]
const arr2 = [1,2]

set.add(JSON.stringify(arr1))
set.add(JSON.stringify(arr2))

console.log(set.size)
console.log(set.has('[1,2]'))

// const start = 'a'
const start = 'az'
const newSet = new Set(start)
const newSetV2 = new Set([start])

