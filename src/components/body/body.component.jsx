import React from "react";
import egg from "../../assests/images/mobile/image-transform.jpg"
import cup from "../../assests/images/mobile/image-stand-out.jpg"
import ServiceCard from "../serviceCard/serviceCard.component";
import { brand } from "../../data/brand";
import { design } from "../../data/design";
import { clients } from "../../data/clients";
import dskEgg from "../../assests/images/desktop/dsk-image-transform.jpg"
import DesignCard from "../designCard/designCard.component";
import classNames from "classnames";
import ClientsReport from "../clientsReport/clientsReport.component";
import emily from "../../assests/images/image-emily.jpg"
import thomas from "../../assests/images/image-thomas.jpg"
import jennie from "../../assests/images/image-jennie.jpg"
import milk from "../../assests/images/mobile/image-gallery-milkbottles.jpg"
import orangeGallery from "../../assests/images/mobile/image-gallery-orange.jpg"
import cone from "../../assests/images/mobile/image-gallery-cone.jpg"
import sugar from "../../assests/images/mobile/image-gallery-sugar-cubes.jpg"
import Footer from "../footer/footer.component";

const Body = () => {

  const bgCherry = classNames(
    "bg-cherry lg:bg-dsk-cherry text-green-900",
  )
  const bgOrange = classNames(
    "bg-orange lg:bg-dsk-orange text-blue-900"
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

      <div className="lg:grid lg:grid-cols-2">
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
      </div>

      <div>
        <h1 className="text-center py-12 lg:py-20 text-lg font-bold font-sans text-gray-500 md:text-2xl">CLIENTS TESTIMONIALS</h1>
      </div>

      <div className="lg:grid lg:grid-cols-3">
        <ClientsReport 
          imgURL={emily}
          feedback={clients[0].feedback}
          name={clients[0].name}
          position={clients[0].position}
        />
        <ClientsReport 
          imgURL={thomas}
          feedback={clients[1].feedback}
          name={clients[1].name}
          position={clients[1].position}
        />        
        <ClientsReport 
        imgURL={jennie}
        feedback={clients[2].feedback}
        name={clients[2].name}
        position={clients[2].position}
      />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4">
        <img className="w-full" src={milk} alt="milk bottles"/>
        <img className="w-full" src={orangeGallery} alt="orange gallery"/>
        <img className="w-full" src={cone} alt="icecream cone"/>
        <img className="w-full" src={sugar} alt="sugar cubes"/>
      </div>

      <Footer />
    </div>
  )
}
export default Body