function Article({ image, title, blurb, pdfLink, externalLink, publication, publicationDate, altText, topics }: { image: string; title: string; blurb: string; pdfLink: string | null; externalLink: string | null; publication: { name: string; logo: string }; publicationDate: Date; altText: string | null, topics: { name: string; order: number }[] } ) {
    return (
        <div className="article">
            <img className="publication-logo" src={publication.logo} alt={`${publication.name} logo`} />
            <div className="col">
                <div className="image-container">
                    <img className="article-image" src={image} alt={altText || "Article image for " + title} />
                </div>
                <div className="article-content">
                    <h2>{title}</h2>
                    <h4>{publicationDate.toDateString().split(' ').slice(1).join(' ')} &nbsp;|&nbsp; Topics: {topics.map(topic => topic.name).join(', ')}</h4>
                    <p>{blurb}</p>
                    {externalLink && <a className="article-link" target="_blank" href={externalLink}><button>Read on {publication.name}</button></a>}
                    {pdfLink && <a className="article-link" target="_blank" href={pdfLink}><button>View PDF Here</button></a>}
                </div>
            </div>
        </div>
    )
}

export default Article