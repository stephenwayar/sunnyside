import React from "react";
import egg from "../../assests/images/mobile/image-transform.jpg"
import cup from "../../assests/images/mobile/image-stand-out.jpg"
import ServiceCard from "../serviceCard/serviceCard.component";
import { brand } from "../../data/brand";
import { design } from "../../data/design";
import dskEgg from "../../assests/images/desktop/dsk-image-transform.jpg"
import DesignCard from "../designCard/designCard.component";
import classNames from "classnames";

const Body = () => {

  const bgCherry = classNames(
    "bg-cherry",
  )
  const bgOrange = classNames(
    "bg-orange"
  )

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
      <DesignCard 
        bg={bgCherry}
        title={design[0].title}
        content={design[0].content}
      />
      <DesignCard 
        bg={bgOrange}
        title={design[1].title}
        content={design[1].content}        
      />
      <div>
        <h1 className="text-center pt-16 text-lg font-bold font-mono text-gray-500">CLIENTS TESTIMONIALS</h1>
      </div>
    </div>
  )
}
export default Body