import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps ={
    country : 'in',
    pageSize : '6'
  }
  static propTypes ={
    country : PropTypes.string,
    pageSize : PropTypes.number
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async updatenews (){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f351874dca84e1bb99376a537d441c4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
    });
  }
  async componentDidMount() {
    this.updatenews()
  }
  handleprevclick = async () => {
    this.setState({page:this.state.page-1})
    this.updatenews()
  };
  handlenextclick = async () => {
    // if ((!this.state.page + 1 >Math.ceil(this.state.totalResults / this.props.pageSize))) {
    // }
    this.setState({page:this.state.page+1})
    this.updatenews()
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsCity -Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
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
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              onClick={this.handleprevclick}
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            {this.state.loading && <Spinner />}
            <button
              type="button"
              onClick={this.handlenextclick}
              className="btn btn-dark"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
