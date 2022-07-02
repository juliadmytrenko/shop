export const truncateText = (text, maxCharacters = 80) => {
  return text
    .split("", maxCharacters)
    .reduce(
      (o, c) => (o.length === maxCharacters - 1 ? `${o}${c}...` : `${o}${c}`),
      ""
    );
};
