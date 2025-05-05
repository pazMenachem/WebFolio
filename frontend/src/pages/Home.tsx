import Slider from "../components/Slider";
import homeData from "../consts/HomeConsts";
import { JSX } from "react";

export default function Home(): JSX.Element {

  return (
    <>
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
          imageSrc={homeData[homeData.length - 1].image}
          altText={homeData[homeData.length - 1].altText}
          flip={homeData.length % 2 === 1}
          description={"This will be contact form"}
          isContact={true}
        />
    </>
  )
}
