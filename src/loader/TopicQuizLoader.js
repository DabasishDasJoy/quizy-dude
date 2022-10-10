export const topicQuizLoader = async (topicId) => {
  const data = await fetch(
    `https://openapi.programming-hero.com/api/quiz/${topicId}`
  );
  const quiz = await data.json();

  return quiz;
};
