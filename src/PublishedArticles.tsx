import { useState } from 'react'
import Nav from './Components/Nav.tsx'
import { articles, colors } from './constants'
import Article from './Components/Article.tsx'
import Footer from './Components/Footer'
import './Components/Article.css'

function PublishedArticles() {
    const [sortBy, setSortBy] = useState('publication')

    return (
        <div className="page-shell" style={{ backgroundColor: colors.primaryAccent }}>
            <Nav currentPage="published-work"/>
            <h1 className="page-title">Published Work</h1>
            <div className="sort-section">
                <p>Sort Articles by:</p>
                <button 
                    onClick={() =>setSortBy('publication')}
                    style={{ 
                        color: sortBy === 'publication' ? colors.secondaryText : colors.tertiaryAccent,
                        backgroundColor: sortBy === 'publication' ? colors.tertiaryAccent : colors.primaryAccent
                    }}
                >
                    Publication
                </button>
                <button 
                    onClick={() => setSortBy('date')}
                    style={{ 
                        color: sortBy === 'date' ? colors.secondaryText : colors.tertiaryAccent,
                        backgroundColor: sortBy === 'date' ? colors.tertiaryAccent : colors.primaryAccent 
                    }}
                > 
                    Date
                </button>
                <button 
                    onClick={() => setSortBy('category')}
                    style={{ 
                        color: sortBy === 'category' ? colors.secondaryText : colors.tertiaryAccent,
                        backgroundColor: sortBy === 'category' ? colors.tertiaryAccent : colors.primaryAccent 
                    }}
                > 
                    Category
                </button>
            </div>
            {(() => {
                switch (sortBy) {
                    case 'publication':
                        return articles;
                    case 'date':
                        return [...articles].sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());
                    case 'category':
                        return [...articles].sort((a, b) => a.category[0].order - b.category[0].order);
                    default:
                        return articles;
                }
            })().map((article, index) => (
                <Article
                    key={index}
                    image={article.image}
                    title={article.title}
                    blurb={article.blurb}
                    pdfLink={article.pdfLink}
                    externalLink={article.externalLink}
                    publication={article.publication}
                    publicationDate={article.publicationDate}
                    sortMode={sortBy}
                    altText={article.altText}
                    categories={article.category}
                />
            ))}
            <br />
            <Footer />
        </div>
    )   
}

export default PublishedArticles