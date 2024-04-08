import Image from "next/image";
import SearchSection from "@/components/home/SearchSection";
import GoogleMapSection from "@/components/home/GoogleMapSection";
import { SourceContext } from "@/context/SourceContext";

export default function Home() {

  const [souce,setSouce] = useState([])
  const [destination,setDestination] = useState([])
  
  return (

    <SourceContext.Provider value={{}}>
      
     <div className="">
      
      <div>
        <SearchSection/>
      </div>

      <div>
        <GoogleMapSection/>
      </div>

    </div>
    </SourceContext.Provider>
    
   
  )
}
