

function Card(props) {
    return (
        <div className="news-card">
            <img src={props.article.image} alt="" />
            <div className="news-content">
                <h3 className="heading">
                   {props.article.title}
                </h3>
                <small className="credit"> <span className='strong'>short</span> by {props.article.auhtor} / {new Date(props.article.timeStamp).toDateString()} </small>
                <p className="short-news-content">
                   {props.article.description}
                </p>
                <a href={props.article.readMore} className='link-to-source'>Read more at (click here)</a>
            </div>
        </div>
    )
}

export default Card