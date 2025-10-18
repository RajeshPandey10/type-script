import { useSelector } from "react-redux";
import Hero from "../components/Hero";
import type { RootState } from "../redux/store";

const Home = () => {
  const {user} = useSelector((state:RootState)=>state.auth)
  return (
    <>
      <Hero
        title={`welcome to the royal store ${user?.name} sir.`}
        subTitle="this is just a Experience unparalleled comfort and
          innovative design with our state-of-the-art, futuristic sports shoes. Built for champions, designed for you."
      />
    </>
  );
};

export default Home;
