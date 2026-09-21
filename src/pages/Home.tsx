import Slider from "../components/Slider";
import AboutPanel from "../components/AboutPanel";
import ContactRecommend from "../components/ContactRecommend";
import { about, contactMe } from "../consts/HomeConsts";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="home-container">
      <Slider
        imageSrc={about.image}
        altText={about.altText}
        flip={false}
        priority
      >
        <AboutPanel />
      </Slider>

      <Slider
        imageSrc={contactMe.image}
        altText={contactMe.altText}
        flip={true}
      >
        <ContactRecommend />
      </Slider>
    </div>
  )
}
