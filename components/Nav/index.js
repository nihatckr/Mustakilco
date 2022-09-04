import React, { useState } from "react";
import styled from "styled-components";
import LogoMustakil from "../LogoMustakil";

import NextLink from "next/link";

import { menus } from "../data/menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(menus);

  const [show, setShow] = useState("");
  const [hide, setHide] = useState("none");

  const [transform, setTransform] = useState({
    rotateX: "0deg",
    rotateY: "0deg",
    opacity: "1",
  });

  const [sideBar, setSidebar] = useState("0");

  const [menu, setMenu] = useState("-100%");
  const toggleOpen = () => {
    setIsOpen(!isOpen);

    if (isOpen == false) {
      setTransform({
        rotateX: "45deg",
        rotateY: "-45deg",
        opacity: "0",
      });
      setSidebar("0%");
      setMenu("0px");
      setShow("block");
      setHide("block");
    } else {
      setTransform({
        rotateX: "0deg",
        rotateY: "0deg",
        opacity: "1",
      });
      setSidebar("100%");
      setMenu("-100%");
      setShow("none");
      setHide("none");
    }
  };

  return (
    <Header>
      <NextLink href={"/"}>
        <LogoMustakil />
      </NextLink>
      <MobileIcon
        onClick={toggleOpen}
        rotateX={transform.rotateX}
        rotateY={transform.rotateY}
        opacity={transform.opacity}
      >
        <span></span>
        <span></span>
        <span></span>
      </MobileIcon>
      <OverlayRight sideBar={sideBar} width={isOpen ? "120%" : " 0%"}>
        <MobileMenuItems menu={menu} opacity={isOpen ? 1 : 0}>
          <ul>
            {data.map(({ label, color, href, id }) => (
              <li key={id}>
                <StyledNextLink href={href}>{label}</StyledNextLink>
              </li>
            ))}
          </ul>
        </MobileMenuItems>
      </OverlayRight>
    </Header>
  );
};

export default Nav;

const MobileMenuItems = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 9999;

  ul {
    text-transform: uppercase;

    li {
      margin-bottom: 60px;
      transition: all 0.8s ease-in-out;
      transform: translateX(${({ menu }) => menu});
      transition-duration: 1s;
      a {
        color: ${(props) => props.theme.colors.blue};
        font-size: ${(props) => props.theme.fontSize.xll};
        font-weight: ${(props) => props.theme.fontWeight.xl};
        transition: 500ms ease-in-out;

        &:hover {
          color: ${(props) => props.theme.colors.black};
        }
      }
    }
  }
`;

const OverlayRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: -80px;
  bottom: 0;
  width: ${({ width }) => width};
  transition: all 0.8s ease-in-out;
  transform: translateX(${({ sideBar }) => sideBar});
  z-index: 4;
  background-color: ${(props) => props.theme.colors.white};
  @media screen and (min-width: 600px) {
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const MobileIcon = styled.div`
  z-index: 8;
  width: 80px;
  height: 100px;
  cursor: pointer;
  padding-top: 40px;
  background-color: ${(props) => props.theme.colors.white};
  > span {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 34px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.black};
    transition: all 500ms ease-in-out;
    transform-origin: 3px 3px;
    &:not(:last-child) {
      margin-bottom: 6px;
    }
    border-radius: 3px;
    &:nth-child(1) {
      transform: rotate(${({ rotateX }) => rotateX || "0deg"});
    }
    &:nth-child(2) {
      opacity: ${({ opacity }) => opacity || "1"};
    }
    &:nth-child(3) {
      transform: rotate(${({ rotateY }) => rotateY || "0deg"});
    }
  }
`;

const StyledNextLink = styled(NextLink)`
  color: ${(props) => props.theme.colors.blue};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.md};
`;
