import Link from "next/link";
import { Navbar, 
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle,
  Footer, 
  FooterCopyright, 
  FooterLink, 
  FooterLinkGroup } from "flowbite-react";

export default function Home() {
  return (
    <Footer container>
    <FooterCopyright href="#" by="Flowbite™" year={2022} />
    <FooterLinkGroup>
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
      <FooterLink href="#">Licensing</FooterLink>
      <FooterLink href="#">Contact</FooterLink>
    </FooterLinkGroup>
  </Footer>
  );
}
