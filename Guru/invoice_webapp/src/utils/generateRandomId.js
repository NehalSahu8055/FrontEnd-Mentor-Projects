export default function generateRandomId(length = 4) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  // Add a random letter
  result += characters.charAt(Math.floor(Math.random() * characters.length));

  // Add random numbers
  for (let i = 0; i < length - 1; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return result;
}
