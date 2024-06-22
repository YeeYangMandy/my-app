/**
 * @author Yang Yi <oprtigk@gmail.com>
 */

import { 
    Card,
} from "flowbite-react";
import { StyledButton } from "./Styled";

export default function CustomCard({ item }) {
  return (
    <Card  
        renderImage={() => 
            <img 
                src={item.Picture.PictureUrl1} 
                alt={item.Picture.PictureDescription1} 
                
            />
        }
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.ScenicSpotName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-[#F7E3DA] text-justify">
        {item.Description}
      </p>
      <StyledButton href={item.MapUrl} target="_blank">
        <div>
          <span>Google map</span>
          <span>Google map</span>
        </div>
      </StyledButton>
    </Card >
  );
}
