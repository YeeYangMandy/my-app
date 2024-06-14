/**
* @author Yang, yi <oprtigk@gmail.com>
*/
'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomCard from "./components/Card"; // "@/app/components/Card" (絕對路徑) "./components/Card"(相對路徑)
import { 
  Navbar, 
  NavbarBrand, 
  NavbarCollapse, 
  NavbarLink, 
  NavbarToggle,
  Footer,
  FooterCopyright, 
  FooterLink, 
  FooterLinkGroup,
  Carousel,
  Card,
  Button,
  DarkThemeToggle
} from "flowbite-react";

export default function Home() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch('api/items');
      const data = await response.json();
      setItems(data.apiData);
    }
    fetchData();
  }, []);

  return (
    <>
    <div className="bg-rose-100">
      <div className="container mx-auto"> 
        <Navbar fluid className="bg-rose-100">
          <NavbarBrand as={Link} href="https://flowbite-react.com">
            <Image src="https://www.yuntech.edu.tw/images/website_png/Group_638.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-light text-white">Yuntech web</span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="#" className="text-white">
              <span className="px-2 py-2 hover:text-lime-900 hover:border-lime-900 hover:border-b">景點</span>
            </NavbarLink>
            <NavbarLink as={Link} href="#" className="text-white">
            <span className="px-2 py-2 hover:text-lime-900 hover:border-lime-900 hover:border-b">交通</span>
            </NavbarLink>
            <NavbarLink href="#" className="text-white">
            <span className="px-2 py-2 hover:text-lime-900 hover:border-lime-900 hover:border-b">關於我們</span>
            </NavbarLink>
          </NavbarCollapse>
          <DarkThemeToggle />
        </Navbar>
      </div>
    </div>

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <Image src="\banner\temple.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
        <Image src="\banner\garden.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
        <Image src="\banner\Military Village.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
        <Image src="\banner\Shibi.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
        <Image src="\banner\Fall.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
      </Carousel>
    </div>


    <div className="bg-white  py-16">

    </div>

    <div className = "container mx-auto">
      <div className = "grid grid-cols-1 md:grid-cols-4 gap-4">{
        items.map((item, index) => 
        <CustomCard item={item} key={index}/>
      )}
      </div>
    </div>

      <Footer container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
      </Footer>
    </>
  );
}
