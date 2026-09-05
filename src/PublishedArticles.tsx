import { useState, useEffect } from 'react'
import Nav from './Components/Nav.tsx'
import { articles, colors } from './constants'
import Article from './Components/Article.tsx'
import Footer from './Components/Footer'
import './Components/Article.css'

type ArticleData = (typeof articles)[number]
type ArticleMode = 'publication' | 'date' | 'category'

function sortArticles(articles: ArticleData[], sortBy: ArticleMode): ArticleData[] {
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
}

function filterArticles(articles: ArticleData[], filter: ArticleMode): ArticleData[] {
    switch (filter) {
        case 'publication':
            return articles.filter(article => article.publication);
        case 'date':
            return articles.filter(article => article.publicationDate);
        case 'category':
            return articles.filter(article => article.category && article.category.length > 0);
        default:
            return articles;
    }
}

function searchArticles(articles: ArticleData[], query: string): ArticleData[] {
    return articles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.blurb.toLowerCase().includes(query.toLowerCase())
    );
}

function PublishedArticles() {
    const [sortBy, setSortBy] = useState<ArticleMode>('publication')
    const [filterBy, setFilterBy] = useState<ArticleMode>('publication')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [filteredAndSortedArticles, setFilteredAndSortedArticles] = useState<ArticleData[]>(articles);

    useEffect(() => {
        setFilteredAndSortedArticles(sortArticles(filterArticles(searchArticles(articles, searchQuery), filterBy), sortBy));
    }, [searchQuery, filterBy, sortBy]);

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
            <div className="filter-section">
                <p>Filter Articles by:</p>
                <button 
                    onClick={() =>setFilterBy('publication')}
                    style={{ 
                        color: filterBy === 'publication' ? colors.secondaryText : colors.tertiaryAccent,
                        backgroundColor: filterBy === 'publication' ? colors.tertiaryAccent : colors.primaryAccent
                    }}
                >
                    Publication
                </button>
                <button 
                    onClick={() => setFilterBy('date')}
                    style={{ 
                        color: filterBy === 'date' ? colors.secondaryText : colors.tertiaryAccent,
                        backgroundColor: filterBy === 'date' ? colors.tertiaryAccent : colors.primaryAccent 
                    }}
                > 
                    Date
                </button>
                <button 
                    onClick={() => setFilterBy('category')}
                    style={{ 
                        color: filterBy === 'category' ? colors.secondaryText : colors.tertiaryAccent,
                        backgroundColor: filterBy === 'category' ? colors.tertiaryAccent : colors.primaryAccent 
                    }}
                > 
                    Category
                </button>
                <input 
                    type="text" 
                    placeholder="Search articles..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            {
                filteredAndSortedArticles.map((article, index) => (
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
                ))
            };
            <br />
            <Footer />
        </div>
    )   
}

export default PublishedArticles