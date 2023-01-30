const removeLineBreaks = (inputString: string) =>
  inputString.replace(/(\r\n|\n|\r)/gm, "");

export { removeLineBreaks };
