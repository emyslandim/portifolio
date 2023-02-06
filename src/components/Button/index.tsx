import { Ui } from "./styles";

export default function Button({ text }: ButtonProps) {
  return <Ui.Button>{text}</Ui.Button>;
}

type ButtonProps = {
  text: string;
};
