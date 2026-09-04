function Article({ image, title, blurb, pdfLink, externalLink, publication, publicationDate }: { image: string; title: string; blurb: string; pdfLink: string | null; externalLink: string | null; publication: { name: string; logo: string }; publicationDate: Date }) {
    return (
        <div className="article">
            <img className="publication-logo" src={publication.logo} alt={`${publication.name} logo`} />
            <div className="col">
                <div className="image-container">
                    <img src={image} alt={"fix alt text"} />
                </div>
                <div className="article-content">
                    <h2>{title}</h2>
                    {/* <p>Publication Date: {publicationDate.toDateString()}</p> */}
                    <p>{blurb}</p>
                    {externalLink && <a className="article-link" target="_blank" href={externalLink}>Read More</a>}
                    {pdfLink && <a className="article-link" target="_blank" href={pdfLink}>View PDF Here</a>}
                </div>
            </div>
        </div>
    )
}

export default Article