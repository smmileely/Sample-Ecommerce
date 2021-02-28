// import React from "react";
// import { FaBars } from "react-icons/fa";
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLink,
//   NavBtn,
//   NavBtnLink,
// } from "./styles";

// const NavBar = () => {
//   return (
//     <>
//       <Nav>
//         <NavbarContainer>
//           <NavLogo to="/">Hello</NavLogo>
//           <MobileIcon>
//             <FaBars />
//           </MobileIcon>
//           <NavMenu>
//             <NavItem>
//               <NavLink to="about">About</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="discover">Discover</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="services">Services</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink to="signup">Sign Up</NavLink>
//             </NavItem>
//           </NavMenu>
//           <NavBtn>
//             <NavBtnLink to="/signin">Sign In</NavBtnLink>
//           </NavBtn>
//         </NavbarContainer>
//       </Nav>
//     </>
//   );
// };

// export default NavBar;

// import React from "react";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from "./styles/NavBarElements";

// const Navbar = () => {
//   return (
//     <Nav>
//       <NavLink to="/">
//         <h1>Logo</h1>
//       </NavLink>
//       <Bars />
//       <NavMenu>
//         <NavLink to="/about" activeStyle>
//           About
//         </NavLink>
//         <NavLink to="/services" activeStyle>
//           Services
//         </NavLink>
//         <NavLink to="/contact-us" activeStyle>
//           Contact Us
//         </NavLink>
//         <NavLink to="/sign-up" activeStyle>
//           Sign Up
//         </NavLink>
//       </NavMenu>
//       <NavBtn>
//         <NavBtnLink to="/signin">Sign In</NavBtnLink>
//       </NavBtn>
//     </Nav>
//   );
// };

// export default Navbar;

import React from "react";
import {
  Nav,
  NavBrand,
  NavItems,
  NavItem,
  NavItemButton,
} from "./styles/NavBarElements.js";

export default function NavbarStyledComponents() {
  return (
    <Nav>
      <NavBrand to="/">Cool Product</NavBrand>
      <NavItems>
        <NavItem to="/pricing">Pricing</NavItem>
        <NavItem>Docs</NavItem>
        <NavItemButton>Log in</NavItemButton>
        <NavItemButton primary>Get Started For Free</NavItemButton>
      </NavItems>
    </Nav>
  );
}
