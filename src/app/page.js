/**
 * @author Yang Yi <oprtigk@gmail.com>
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "../components/Card";
import AutoSizeImage from "../components/AutoSizeImage";
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
  DarkThemeToggle,
} from "flowbite-react";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/items");
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[#9EC084]">
        <div className="container mx-auto">
          <Navbar fluid className="bg-[#9EC084]">
            <NavbarBrand as={Link} href="/">
              <AutoSizeImage
                src="https://www.yuntech.edu.tw/images/website_png/Group_640.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                YunTech Travale
              </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="https://tour.yunlin.gov.tw/wt-front/Attraction/HotSpots" target="_blank" className="text-white">
                <span className="px-4 py-2 hover:text-[#F7E3DA] hover:border-[#F7E3DA] hover:border-b-2">
                  景點
                </span>
              </NavbarLink>
              <NavbarLink as={Link} href="https://tour.yunlin.gov.tw/wt-front/TourService/TrafficInfo" target="_blank" className="text-white">
                <span className="px-4 py-2 hover:text-[#F7E3DA] hover:border-[#F7E3DA] hover:border-b-2">
                  交通
                </span>
              </NavbarLink>
              <NavbarLink href="https://www.yuntech.edu.tw/" target="_blank" className="text-white">
                <span className="px-4 py-2 hover:text-[#F7E3DA] hover:border-[#F7E3DA] hover:border-b-2">
                  關於我們
                </span>
              </NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
          </Navbar>
        </div>
      </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <AutoSizeImage
            src="/banner/Fall.jpg"
            alt="https://tour.yunlin.gov.tw/wt-front/Home/Index"
          />
          <AutoSizeImage
            src="/banner/garden.jpg"
            alt="https://tour.yunlin.gov.tw/wt-front/Home/Index"
          />
          <AutoSizeImage
            src="/banner/Military Village.jpg"
            alt="https://tour.yunlin.gov.tw/wt-front/Home/Index"
          />
          <AutoSizeImage
            src="/banner/Shibi.jpg"
            alt="https://tour.yunlin.gov.tw/wt-front/Home/Index"
          />
          <AutoSizeImage
            src="/banner/temple.jpg"
            alt="https://tour.yunlin.gov.tw/wt-front/Home/Index"
          />
        </Carousel>
      </div>
    
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map((item, index) => ( 
            <Card item={item} key={index}/>
          ))}
        </div>
      </div>

      <Footer className="bg-[#9EC084] " container>
        <FooterCopyright className="text-white" href="#" by="Yang Yi" year={2024} />
        <FooterLinkGroup className="text-white">
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </>
  );
}
