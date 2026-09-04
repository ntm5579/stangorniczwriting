function Article({ logo, image, title, blurb, pdfLink, externalLink }: { logo: string; image: string; title: string; blurb: string; pdfLink: string; externalLink: string }) {
    return (
        <div>
            <img src={logo} alt={`${title} logo`} />
            <h2>{title}</h2>
            <p>{blurb}</p>
            <img src={image} alt={title} />
            <a href={externalLink}>Read More</a>
            <a href={pdfLink}>View PDF Here</a>
            
        </div>
    )
}

export default Article