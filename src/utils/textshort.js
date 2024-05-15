export const textShort = (text, n) => {
  if (text.length > n) {
    const textShoretened = text.substring(0, n).concat("...");
    return textShoretened;
  }

  return text;
};
