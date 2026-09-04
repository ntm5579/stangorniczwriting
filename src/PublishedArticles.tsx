import Nav from './Components/Nav.tsx'
import { articles } from './constants'
import Article from './Components/Article.tsx'
import Footer from './Components/Footer'
import './Components/Article.css'

function PublishedArticles() {
    return (
        <div className="page-shell" style={{ backgroundColor: '#FFF8F1' }}>
            <Nav currentPage="published-work"/>
            <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '800' }}>Published Work</h1>
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
            <br />
            <Footer />
        </div>
    )   
}

export default PublishedArticles