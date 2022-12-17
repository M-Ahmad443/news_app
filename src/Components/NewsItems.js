import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

        return (
            <>
                <div className="card my-3" style={{ width: "18rem" }} >
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zindex: "1" }}>
                        {source}

                    </span>
                    <img src={imageUrl ? imageUrl : "https://img.gazeta.ru/files3/9/14458009/upload-image9090-pic4_zoom-1500x1500-59213.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" >

                            {title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">by<h6>{!author ? "" : author}</h6> on<h6>{new Date(date).toGMTString()}</h6></small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }


}



