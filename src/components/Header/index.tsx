import Button from "../Button";
import { Ui } from "./styles";

export default function Header() {
  return (
    <Ui.Header>
      <div>logo</div>
      <Ui.LinksWrapper>
      <ul>
        <li>
          <span>01.</span> About
        </li>
        <li>
          <span>02.</span> Education
        </li>
        <li>
          <span>03.</span> Work
        </li>
        <li>
          <span>04.</span> Contact
        </li>
      </ul>
      <Button text="Resume" />
      </Ui.LinksWrapper>
    </Ui.Header>
  );
}
