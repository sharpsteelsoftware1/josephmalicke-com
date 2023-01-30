import { removeLineBreaks } from "./removeLineBreaks";

const logGroq = (groq: string) => {
  console.log(`Groqqing\n${removeLineBreaks(groq)}`);
};

export { logGroq };
