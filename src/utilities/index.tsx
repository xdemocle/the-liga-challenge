export const getTextTranspiled = (
  rawText: string,
  placeholder: string,
  replace: JSX.Element
) => {
  const arrText: JSX.Element[] = [];

  rawText.split(placeholder).forEach((text, ix) => {
    arrText.push(<span key={`${text}-${ix}`}>{text}</span>);
  });

  arrText.push(arrText[1]);
  arrText[1] = <span key={`${arrText[1]}-9999`}>{replace}</span>;

  return arrText;
};
