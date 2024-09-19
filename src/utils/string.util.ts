export const generateId = () => Math.random().toString(36).substr(2, 9);

export const trimFileName = (word: string) => {
  const extensionSlice = word.length - 5
  if (word.length > 12) {
    return `${word.slice(0, 10)}...${word.slice(extensionSlice)}`
  }

  return word;
}