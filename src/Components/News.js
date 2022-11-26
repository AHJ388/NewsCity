import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [page, setPage] = useState([1]);
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
 
  // const fetchMoreData = async () => {
  //   this.setState({ page: page + 1 });
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f351874dca84e1bb99376a537d441c4&page=${page+1}&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setArticles(articles.concat(parsedData.articles));
  //   settotalResults(parsedData.totalResults);
  // };
  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        NewsCity -Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      {/* <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        // loader={<Spinner />}
      ></InfiniteScroll> */}

      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
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
