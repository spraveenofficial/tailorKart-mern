import Carousel from "../../Components/Carousel";
import { useCorousel } from "../../Hooks/carousel";

export default function Home() {
  const { items } = useCorousel();
  return <Carousel name={items} />;
}
