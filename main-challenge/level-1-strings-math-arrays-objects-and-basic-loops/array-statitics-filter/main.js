const testScores = [20, 24, 28, 40, 32, 90, 54, 51, 95, 82, 10, 42, 93, 78, 63];

const minMaxAverage = (array) => {
  const minScore = Math.min(...array);
  const maxScore = Math.max(...array);
  const totalScore = array.reduce((sum, score) => {
    return sum + score;
  });

  const averageScore = totalScore / array.length;

  console.log(
    `Minimum Score : ${minScore}\nMaximum Score : ${maxScore}\nAverage Score : ${averageScore}`,
  );
};

minMaxAverage(testScores);
