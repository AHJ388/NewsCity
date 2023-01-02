import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, settotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    props.setProgress(5);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=3f351874dca84e1bb99376a537d441c4`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(25);
    let parseddata = await data.json();
    props.setProgress(45);
    setArticles(parseddata.articles);
    setLoading(false);
    settotalResults(parseddata.totalResults);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} -NewsCity`;
    updateNews();
  }, []);
  return (
    <div className=" my-3">
      <h1 className="text-center text-4xl my-10 mt-24 ">
        NewsCity -Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}

      <div className="lg:flex flex-wrap ">
        {articles.map((element) => {
          return (
            <div className="flex flex-col ml-10" key={element.url}>
              <Newsitem
                title={element.title}
                description={element.description}
                imageurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          );
        })}
    
      </div>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: "6",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  // pageSize: PropTypes.number,
};

export default News;
