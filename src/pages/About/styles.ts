import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0px 24%;
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  color: var(--slate);
  font-size: 16px;

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    margin: 0px 0px 15px;
  }
`;

const Title = styled.h1`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, var(--fz-heading));
  white-space: nowrap;

  span {
    color: var(--green);
  }
`;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  
  li::before {
  content: "> ";
  font-size: 16px;
  color: var(--green);
}
`;

const ProfilePic = styled(Image)`
  border-radius: 4px;
`

const Marked = styled.strong`
  color: var(--green);
`

export const Ui = { Wrapper, Description, Title, SkillList, ProfilePic, Marked };
