import Slider from "../components/Slider";
import homeData from "../consts/HomeConsts";
import { JSX } from "react";
import { contactMe } from "../consts/HomeConsts";

export default function Home(): JSX.Element {

  return (
    <div className="home-container">
      {homeData.map((item, index) => (
        <Slider
          key={index}
          imageSrc={item.image}
          altText={item.altText}
          flip={index % 2 === 1}
          description={item.description}
          isContact={false}
        />
      ))}
        <Slider
          key={homeData.length}
          imageSrc={contactMe.image}
          altText={contactMe.altText}
          flip={homeData.length % 2 === 1}
          description={"This will be contact section"}
          isContact={true}
        />
    </div>
  )
}
