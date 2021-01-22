import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  text-align: center;
  ul {
    display: flex;
    justify-content: space-around;
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #067df7;
    text-decoration: none;
    font-size: var(--s1);
  }
`;

const links = [{ href: "/about", label: "About" }].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </StyledNav>
);

export default Nav;
