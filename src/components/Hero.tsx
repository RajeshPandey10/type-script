// const Hero = (props:any) => {
//     console.log(props)
//   return (
//     <div>
//    {props.title}
//    <p>{props.subTitle}</p>
//     </div>
//   )
// }

import type { heroType } from "../types/heroType";


// export default Hero

const Hero = ({ title, subTitle }:heroType) => {
  return (
    <section className="text-center">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </section>
  );
};

export default Hero;
