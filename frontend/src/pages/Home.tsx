import Slider from "../components/Slider";
import tirza from "../assets/Tirza.jpg";

export default function Home() {

  return (
    <>
      <h1>Home</h1>
      <Slider imageSrc={tirza} altText="Tirza1" flip={true} />
      <Slider imageSrc={tirza} altText="Tirza2" flip={false} />
      <Slider imageSrc={tirza} altText="Tirza3" flip={true} />
      <Slider imageSrc={tirza} altText="Tirza4" flip={false} />
    </>
  )
}
