import AboutCard from "../../../components/Card";

import indoorPlant from "../../../../public/Indoor_Plant.svg";
import outdoorPlant from "../../../../public/Outdoor_Plant.svg";
import bambooPlant from "../../../../public/Bamboo_Plant.svg";

export default function About() {
  return (
    <section className="container p-8 mx-auto lg:px-12 lg:py-24">
      <div className="flex flex-col mb-8 lg:gap-20 lg:mb-8 lg:flex-row">
        <h2 className="mb-4 text-2xl text-green-900 capitalize md:text-4xl lg:text-4xl font-latoRegular">
          We Help choose the most <br /> suitable plants for you
        </h2>
        <p className="flex-1 mb-10 font-ralewayMedium lg:text-lg">
          Our selection includes a wide variety of flowers, from classic roses
          to exotic orchids, as well as a variety of lush indoor and outdoor
          plants and also offer unique floral arrangements that are perfect for
          any occasion, whether you're looking to brighten up your home or send
          a thoughtful gift.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4 lg:gap-x-16">
        <AboutCard
          image={indoorPlant}
          title="Indoor Plants"
          description="Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"
        />
        <AboutCard
          colored="bg-[#285A43]"
          image={outdoorPlant}
          title="Indoor Plants"
          description="Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"
        />
        <AboutCard
          image={bambooPlant}
          title="Plants Pots"
          description="Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor"
        />
      </div>
    </section>
  );
}
