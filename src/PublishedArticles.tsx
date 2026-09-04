import { useState } from 'react'
import Nav from './Components/Nav.tsx'
import { articles } from './constants'
import Article from './Components/Article.tsx'
import Footer from './Components/Footer'
import './Components/Article.css'

function PublishedArticles() {
    const [sortBy, setSortBy] = useState('publication')
    const sortedByDate= [...articles].sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())

    return (
        <div className="page-shell" style={{ backgroundColor: '#FFF8F1' }}>
            <Nav currentPage="published-work"/>
            <h1 className="page-title">Published Work</h1>
            <div className="sort-section">
                <p>Sort Articles:</p>
                <button onClick={() => setSortBy('publication')}>
                    by Publication
                </button>
                <button onClick={() => setSortBy('date')}>
                    by Date
                </button>
            </div>
            {(sortBy === 'publication' ? articles : sortedByDate).map((article, index) => (
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