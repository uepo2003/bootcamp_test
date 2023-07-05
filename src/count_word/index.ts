export const countWord = (text: string, targetWord: string): number | Error => {
  if (!text || !targetWord) {
    return new Error("Invalid input");
  }

  const words = text.toLowerCase().split(/\s+/);
  const target = targetWord.toLowerCase();
  let count = 0;

  for (const word of words) {
    if (word === target) {
      count++;
    }
  }

  return count;
};
