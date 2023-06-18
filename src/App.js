import { useState } from "react";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import Feed from "./components/feed/Feed";
import ShareProduct from "./components/cards/ShareProducs";
import Skeleton from "./components/feed/Skeleton";


function App() {
  const [selectedId, setSelectedId] = useState(null)
  const scrollRef = useBottomScrollListener(() => {
    //alert("Hello word")
  }, {offset:0});

  return(
    <div onScroll={scrollRef}>
      <Feed
        element={(e) => {setSelectedId(() => e)}}
      />
      <ShareProduct
        elementId={selectedId}
        onClose={() => {
          setSelectedId(null)
        }}
      />
    </div>
  )
}

export default App;
