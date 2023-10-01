function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

// 取得 一組不重複的數字
function getRandomIndex(max: number, len: number) {
  const res: number[] = [0]

  while (res.length !== len) {
    const num = getRandomInt(max)
    if (!res.includes(num)) res.push(num)
  }
  return res
}

export { getRandomInt, getRandomIndex }
