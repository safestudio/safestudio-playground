const baseStep = (char) => {
  const code = char.charCodeAt();
  if ((code >= 65) && (code <= 90)) {
    return 65;
  }
  if ((code >= 97) && (code <= 122)) {
    return 97;
  }
}

export const caesar = (text, shift) => {
  return String.fromCharCode(
    ...text.split('').map(char => {
      const step = baseStep(char);
      return ((char.charCodeAt() - step + shift) % 26) + step;
    }),
  );
};

export const caesar2 = (text, shift) => {
  return String.fromCharCode(
    ...text.split('').map(char => {
      const step = baseStep(char);
      const result = ((char.charCodeAt() - step + shift) % 26) + step;
      shift++;
      return result;
    }),
  );
};
