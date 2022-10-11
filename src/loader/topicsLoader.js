export const topicsLoader = async () => {
  const data = await fetch("https://openapi.programming-hero.com/api/quiz");
  const topics = await data.json();

  return topics;
};
