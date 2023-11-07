const API_LINK = "https://api.adviceslip.com/advice",
  adviceNumber = document.querySelector(".advice-gen__number"),
  adviceQuote = document.querySelector(".advice-gen__quote"),
  adviceOutput = document.querySelector(".advice-gen__output"),
  fetchBtn = document.querySelector(".advice-gen__btn");

  
const fetchNewAdvice = async () => {
  const response = await fetch(API_LINK);
  const data = await response.json();
  return data;
};
const renderAdvice = async (adviceData) => {
  const { id, advice } = adviceData;
  adviceNumber.textContent = `ADVICE #${id}`;
  adviceQuote.textContent = advice;
};
const generateAdvice = async () => {
  const data = await fetchNewAdvice();
  const adviceData = data.slip;
  renderAdvice(adviceData);
};

fetchBtn.addEventListener("click", generateAdvice);

setInterval(generateAdvice, 10000);

window.onload = () => {
  generateAdvice();
  
};
