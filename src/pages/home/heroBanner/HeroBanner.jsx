import React, {useEffect, useState} from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import LazyLoader from "../../../components/lazyLoader/LazyLoader";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";




const HeroBanner = () => {
  const [background,setBackground] = useState("");
  const [query,setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector(state => state.home);
  const {data,loading} = useFetch("/trending/all/day");

  useEffect(()=>{
    const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
  },[data])

  const searchQueryHandler = (event)=>{
    if(event.key == "Enter" && query.length >0){
        navigate(`/search/${query}`);
    }
  }
  
  return (
    
      <div className="heroBanner">
        {!loading && <div className="backdrop-img">
          <LazyLoader src={background} />
        </div>}
        <div className="opacity-layer">
          
        </div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input type="text" placeholder="search for a movie or TV shows..."
              onChange={(event)=>setQuery(event.target.value)}
              onKeyUp={searchQueryHandler}/>
              <button>Search</button>
            </div>
          </div>
          </ContentWrapper>
        </div>
        
  
  );
};

export default HeroBanner;
