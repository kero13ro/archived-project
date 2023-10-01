const parseEnv = (str: string) => {
  const res = str.replace(/'/g, '"')
  return JSON.parse(res)
}

export { parseEnv }
