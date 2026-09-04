import Nav from './Components/Nav.tsx'
import { articles } from './constants'
import Article from './Components/Article.tsx'
import Footer from './Components/Footer'
import './Components/Article.css'
import { useEffect, useState } from 'react'

function PublishedArticles() {
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
      useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, []);
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
            <Footer />
        </div>
    )   
}

export default PublishedArticles