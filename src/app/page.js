/**
* @author Yang, yi <oprtigk@gmail.com>
*/

import Link from "next/link";
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

  const items = [
    {
      cover : "https://tour.yunlin.gov.tw/public/upload/StoreCover/220805022228478123UPVFR.jpg",
      name : "五元兩角",
      description : "五元兩角位於海拔1600公尺處，須經過山路蜿蜒方可抵達。原修葺作為避雨之用的八座竹涼亭，總計共有52個亭角，故有此稱。在民宿附近的竹林漫步，不僅予人遠離塵囂之恬靜，亦偶有藍腹鷴穿梭其中，恍若仙境。",
    },
    {
      cover : "https://tour.yunlin.gov.tw/public/upload/StoreCover/220720104739190842VCNFV.jpg",
      name : "斗六雲中街生活聚落",
      description : "日治宿舍，今日文青聚落 原為日治時代警察與警眷宿舍，經重新翻修後陸續進駐咖啡廳、甜點店、獨立書房、駐村藝術家等，並重新整理周圍草皮、老榕樹等，讓木造建築群成為今日的文青熱點。",
    },
    {
      cover : "https://tour.yunlin.gov.tw/public/upload/StoreCover/220811031547641407AS8WY.jpg",
      name : "黑森林自行車道",
      description : "原為農用牛車道，於2012年開闢為自行車道，兩旁遍植防風植物木麻黃，可以在陰涼樹蔭下舒服的騎乘自行車。",
    },
  ];

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
              imgAlt={item.name}
              imgSrc={item.cover}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.description}
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
