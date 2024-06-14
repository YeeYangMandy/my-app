/**
* @author Yang, yi <oprtigk@gmail.com>
*/
import Image from "next/image";

export default function CustomCard({item}){
    return[
        <div class="border">
            <div>{item.ScenicSpotName}</div>
        </div>
    ];
};