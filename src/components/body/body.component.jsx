import React from "react";
import egg from "../../assests/images/mobile/image-transform.jpg"
import cup from "../../assests/images/mobile/image-stand-out.jpg"
import ServiceCard from "../serviceCard/serviceCard.component";
import { brand } from "../../data/brand";
import dskEgg from "../../assests/images/desktop/dsk-image-transform.jpg"

const Body = () => {
  return(
    <div>

      {/* Display for smaller screens */}

      <div className="lg:hidden">
        <div className="egg-img">
          <img className="w-full" src={egg} alt="egg on yellow background"/>
        </div>
        <ServiceCard 
          headline={brand[0].headline}
          content={brand[0].content}
          extend={brand[0].extend}
        />
        <div className="egg-img lg:hidden">
          <img className="w-full" src={cup} alt="pink cup"/>
        </div>
        <ServiceCard 
          headline={brand[1].headline}
          content={brand[1].content}
          extend={brand[1].extend}
        />
      </div>

      {/* Display for larger screen */}

      <div className="hidden lg:block">
        <div className="grid grid-cols-2">
          <ServiceCard 
            headline={brand[0].headline}
            content={brand[0].content}
            extend={brand[0].extend}
          />
          <div className="egg-img">
            <img className="w-full" src={dskEgg} alt="egg on yellow background"/>
          </div>

          <div className="egg-img">
            <img className="w-full" src={cup} alt="pink cup"/>
          </div>
          <ServiceCard 
            headline={brand[1].headline}
            content={brand[1].content}
            extend={brand[1].extend}
          />
        </div>
      </div>
    </div>
  )
}
export default Body