import Nav from './Components/nav'
import { articles, publications } from './constants'
import Article from './Components/Article.tsx'

function PublishedArticles() {
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

            <Nav currentPage="published-work" />
            <h1 style={{ textAlign: 'center' }}>Published Articles</h1>
            {articles.map((article, index) => (
                <Article
                    key={index}
                    image={article.image}
                    title={article.title}
                    blurb={article.blurb}
                    pdfLink={article.pdfLink}
                    externalLink={article.externalLink}
                    publication={article.publication}
                    publicationDate={article.publicationDate}
                />
            ))}
        </>
    )
}

export default PublishedArticles