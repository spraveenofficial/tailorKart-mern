import Carousel from "../../Components/Carousel";
import { useCorousel } from "../../Hooks/carousel";
import GetStarted from "../../Components/GetStarted";
export default function Home() {
  const { items } = useCorousel();
  return (
    <>
      <Carousel name={items} />
      <GetStarted />
    </>
  );
}
