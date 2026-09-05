import { useState, useEffect } from 'react'
import Nav from './Components/Nav.tsx'
import { articles, colors } from './constants'
import Article from './Components/Article.tsx'
import Footer from './Components/Footer'
import './Components/Article.css'
import {useSearchParams} from 'react-router'

type ArticleData = (typeof articles)[number]
type ArticleMode = 'publication' | 'date' | 'topic'

function sortArticles(articles: ArticleData[], sortMethod: ArticleMode): ArticleData[] {
    switch (sortMethod) {
        case 'publication':
            return articles;
        case 'date':
            return [...articles].sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());
        case 'topic':
            return [...articles].sort((a, b) => a.topic[0].order - b.topic[0].order);
        default:
            return articles;
    }
}

function searchArticles(articles: ArticleData[], query: string): ArticleData[] {
    const normalizedQuery = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

    return articles.filter(article => {
        const searchableText = [
            article.title,
            article.blurb,
            article.topic.map(t => t.name).join(' '),
            article.publication.name,
            article.publicationDate.toISOString()
        ].join(' ').toLowerCase();

        return normalizedQuery.every(q => searchableText.includes(q));
    });
}

function PublishedArticles() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortMethod, setSortMethod] = useState<ArticleMode>(searchParams.get('sort') ? searchParams.get('sort') as ArticleMode : 'publication');
    const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('search') || '');
    const [filteredAndSortedArticles, setFilteredAndSortedArticles] = useState<ArticleData[]>(articles);
    
    useEffect(() => {
        setSortMethod(searchParams.get('sort') ? searchParams.get('sort') as ArticleMode : 'publication');
        setSearchQuery(searchParams.get('search') || '');
    }, [searchParams]);

    useEffect(() => {
        setFilteredAndSortedArticles(sortArticles(searchArticles(articles, searchQuery), sortMethod));
    }, [searchQuery, sortMethod]);

    useEffect(() => {
        if (sortMethod === "publication" && searchQuery === "")
            setSearchParams();
        else
            setSearchParams({ sort: sortMethod, search: searchQuery });
    }, [sortMethod, searchQuery]);

    return (
        <div className="page-shell" style={{ backgroundColor: colors.primaryAccent }}>
            <Nav currentPage="published-work" />
            <h1 className="page-title">Published Work</h1>
            <div className="controls-container">
                <div className="sort-section">
                    <p>Sort by:</p>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
                        <button
                            onClick={() => setSortMethod('publication')}
                            style={{
                                color: sortMethod === 'publication' ? colors.secondaryText : colors.tertiaryAccent,
                                backgroundColor: sortMethod === 'publication' ? colors.tertiaryAccent : colors.primaryAccent
                            }}
                        >
                            Publication
                        </button>
                        <button
                            onClick={() => setSortMethod('date')}
                            style={{
                                color: sortMethod === 'date' ? colors.secondaryText : colors.tertiaryAccent,
                                backgroundColor: sortMethod === 'date' ? colors.tertiaryAccent : colors.primaryAccent
                            }}
                        >
                            Date
                        </button>
                        <button
                            onClick={() => setSortMethod('topic')}
                            style={{
                                color: sortMethod === 'topic' ? colors.secondaryText : colors.tertiaryAccent,
                                backgroundColor: sortMethod === 'topic' ? colors.tertiaryAccent : colors.primaryAccent
                            }}
                        >
                            Topic
                        </button>
                    </div>
                </div>
                
                <div className="filter-section">
                    <input
                        id="article-search"
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={() => { setSearchQuery(''); setSearchParams({ sort: sortMethod, search: '' }); }}>Clear</button>
                </div>
            </div>
            {
                filteredAndSortedArticles.length === 0 ? (
                    <div className="no-articles-found">
                        <p>No articles found, try a different search term...</p>
                        <p>You can search across multiple categories by separating them with spaces.</p>
                    </div>
                ) : (
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
                            altText={article.altText}
                            topics={article.topic}
                        />
                    ))
                )
            }
            <br />
            <Footer />
        </div>
    )
}

export default PublishedArticles