import React, { Component } from 'react'
import NewsItem from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {

  static defaultProps={
   
    country:"in",
    pageSize:3,
    category:"general"
  }

  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
    
  }

  constructor(props) {
    super(props);
   let articles;
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
 document.title=`${this.props.category}-News monkey`;
  }
  async componentDidMount() {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71943476f0fb4bc7bfa68af5cf4c09a2&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    })


  }
  handleNextClick = async () => {

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71943476f0fb4bc7bfa68af5cf4c09a2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading:false


      })
    }


  }
  handlePreviousClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71943476f0fb4bc7bfa68af5cf4c09a2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading:false
    })



  }



  render() {



    return (
      <div>

        <h3 className='text-center my-2'> Top Headlines on {this.props.category}</h3>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
          {!this.state.loading&&this.state.articles.map((element) => {

            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""} newsUrl={element.url} imageUrl={element.urlToImage}  author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>


          })}
          <div className='container d-flex justify-content-evenly'>
            <button type="button"  disabled={this.state.page <= 1} class="btn btn-primary"  onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button type="button"  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} class="btn btn-primary" onClick={this.handleNextClick}>To Next&rarr;</button>
          </div>

         






        </div>

      </div>
    )
  }
}
