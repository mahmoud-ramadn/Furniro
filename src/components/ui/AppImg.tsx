
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

interface TAppImg{
    src:string;
    alt:string;
    width?:string;
    className:string;
}

function AppImg({...rest }:TAppImg) {
  return (<LazyLoadImage {...rest}
    width={rest?.width}
   effect="blur"
  />
    )
}

export default AppImg