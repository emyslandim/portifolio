import styled from "styled-components";

const Header = styled.header`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: #112240;;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  filter: none !important;
`;

const LinksWrapper = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  gap: 40px;

  ul {
    list-style-type: none;
    display: flex;
    gap: 30px;
    font-size: 13px;
  }

  ul li span {
    color: #64ffda;
  }
`;

export const Ui = { Header, LinksWrapper };
