/**
* @author Yang, yi <oprtigk@gmail.com>
*/
'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
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
  const tokenURL = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
  const apiURL = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty'
  useEffect(() => {
  const getToken = async() => {
    const clientid = process.env.TDX_CLIENT_ID;
    const clientsecret = process.env.TDX_CLIENT_SECRET;

    const tokenParam = new URLSearchParams()
    tokenParam.append('grant_type', 'client_credentials')
    tokenParam.append('client_id', clientid)
    tokenParam.append('client_secret', clientsecret)

    const tokenResponse = await fetch(tokenURL, {
      method : 'POST',
      headers : {
        'content-type' : 'application/x-www-form-urlencoded'
      },
      body : tokenParam.toString()
  });
};
  }, []);

  return (
    <>
    <div className="bg-rose-100">
      <div className="container mx-auto"> 
        <Navbar fluid className="bg-rose-100">
          <NavbarBrand as={Link} href="https://flowbite-react.com">
            <img src="https://www.yuntech.edu.tw/images/website_png/Group_638.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
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
        <img src="\banner\temple.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
        <img src="\banner\garden.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
        <img src="\banner\Military Village.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
        <img src="\banner\Shibi.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
        <img src="\banner\Fall.jpg" alt="https://tour.yunlin.gov.tw/wt-front/Home/Index" />
      </Carousel>
    </div>


    <div className="bg-white  py-16">
      <div className="container mx-auto grid grid-cols-4 gqp-4">
        { items.map( item => 
          <Card
              className="max-w-sm"
              imgAlt={item.Picture.PictureDescription1}
              imgSrc={item.Picture.PictureUrl1}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.ScenicSpotName}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.DescriptionDetail}
              </p>
              <Button>
                Read more
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
          </Card>
        )}
      </div>
    </div>

    <div class = "container mx-auto">
    <div class = "grid grid-cols-1 md:grid-cols-4 gap-4">{
      items.map(item => 
      <CustomCard item={item}/>
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
