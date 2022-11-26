import React from "react";

const Newsitem =(props)=>{
    let { title, description, imageurl, newsurl, author, date, source } =
      props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end',right:'0'}}>
            <span className="position-absolute badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on {date}
              </small>
            </p>
            <a href={newsurl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;
