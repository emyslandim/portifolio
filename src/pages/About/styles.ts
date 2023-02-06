import styled from "styled-components";

const Button = styled.a`
  background-color: transparent;
  border: 1px solid var(--green);
  color: var(--green);
  background-color: transparent;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-size: 13px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
`;

export const Ui = { Button };
