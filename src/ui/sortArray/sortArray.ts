export const sortBySimilarity = (arr: string[], target: string) => {
  return arr.sort((a, b) => {
    const similarityA = getSimilarityScore(a, target);
    const similarityB = getSimilarityScore(b, target);

    return similarityB - similarityA; // сортировка по убыванию сходства
  });
};

const getSimilarityScore = (str: string, target: string) => {
  // Подсчет количества общих символов между строкой и целевым значением
  let commonChars = 0;

  for (let i = 0; i < Math.min(str.length, target.length); i++) {
    if (str[i].toLowerCase() === target[i].toLowerCase()) {
      commonChars++;
    }
  }

  return commonChars;
};
