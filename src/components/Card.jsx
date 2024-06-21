/**
 * @author Yang Yi <oprtigk@gmail.com>
 */

import { 
    Card,
    Button,
 } from "flowbite-react";
import AutoSizeImage from "../components/AutoSizeImage";

export default function CustomCard({ item }) {
  return (
    <Card className="max-w-sm" 
        renderImage={() => 
            <AutoSizeImage 
                src={item.Picture.PictureUrl1} 
                alt={item.Picture.PictureDescription1} 
                className="w-full h-48 object-cover"
            />
        }
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.ScenicSpotName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {item.DescriptionDetail}
      </p>
      <a href={item.MapUrl} target="_blank">
        <Button>
            Google map
        </Button>
      </a>
    </Card>
  );
}
