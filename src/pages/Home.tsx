import Slider from "../components/Slider";
import homeData, { contactMe } from "../consts/HomeConsts";
import { JSX } from "react";

export default function Home(): JSX.Element {

  return (
    <div className="home-container">
      {homeData.map((item, index) => (
        <Slider
          key={item.altText}
          imageSrc={item.image}
          altText={item.altText}
          flip={index % 2 === 1}
          description={item.description}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
      <Slider
        imageSrc={contactMe.image}
        altText={contactMe.altText}
        flip={homeData.length % 2 === 1}
        isContact={true}
      />
    </div>
  )
}
