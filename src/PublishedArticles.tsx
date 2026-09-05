import { useState, useEffect } from 'react'
import Nav from './Components/Nav.tsx'
import { articles, colors } from './constants'
import Article from './Components/Article.tsx'
import Footer from './Components/Footer'
import './Components/Article.css'
import {useSearchParams} from 'react-router'

type ArticleData = (typeof articles)[number]
type ArticleMode = 'publication' | 'date' | 'category'

function sortArticles(articles: ArticleData[], sortMethod: ArticleMode): ArticleData[] {
    switch (sortMethod) {
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
    const normalizedQuery = query.toLowerCase();

    return articles.filter(article =>
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.blurb.toLowerCase().includes(normalizedQuery) ||
        article.publication.name.toLowerCase().includes(normalizedQuery) ||
        article.publicationDate.toISOString().toLowerCase().includes(normalizedQuery)
    );
}

function PublishedArticles() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortMethod, setSortMethod] = useState<ArticleMode>(searchParams.get('sort') ? searchParams.get('sort') as ArticleMode : 'publication');
    const [filterMethod, setFilterMethod] = useState<ArticleMode>(searchParams.get('filter') ? searchParams.get('filter') as ArticleMode : 'publication');
    const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('search') || '');
    const [filteredAndSortedArticles, setFilteredAndSortedArticles] = useState<ArticleData[]>(articles);
    
    useEffect(() => {
        setSortMethod(searchParams.get('sort') ? searchParams.get('sort') as ArticleMode : 'publication');
        setFilterMethod(searchParams.get('filter') ? searchParams.get('filter') as ArticleMode : 'publication');
        setSearchQuery(searchParams.get('search') || '');
    }, [searchParams]);

    useEffect(() => {
        setFilteredAndSortedArticles(sortArticles(filterArticles(searchArticles(articles, searchQuery), filterMethod), sortMethod));
    }, [searchQuery, filterMethod, sortMethod]);

    useEffect(() => {
        if (sortMethod === "publication" && filterMethod === "publication" && searchQuery === "")
            setSearchParams();
        else
            setSearchParams({ sort: sortMethod, filter: filterMethod, search: searchQuery });
    }, [filterMethod, sortMethod, searchQuery]);

    return (
        <div className="page-shell" style={{ backgroundColor: colors.primaryAccent }}>
            <Nav currentPage="published-work" />
            <h1 className="page-title">Published Work</h1>
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
                        onClick={() => setSortMethod('category')}
                        style={{
                            color: sortMethod === 'category' ? colors.secondaryText : colors.tertiaryAccent,
                            backgroundColor: sortMethod === 'category' ? colors.tertiaryAccent : colors.primaryAccent
                        }}
                    >
                        Category
                    </button>
                </div>
            </div>
            <div className="filter-section">
                <p>Filter by:</p>
                <div>
                    <button
                        onClick={() => setFilterMethod('publication')}
                        style={{
                            color: filterMethod === 'publication' ? colors.secondaryText : colors.tertiaryAccent,
                            backgroundColor: filterMethod === 'publication' ? colors.tertiaryAccent : colors.primaryAccent
                        }}
                    >
                        Publication
                    </button>
                    <button
                        onClick={() => setFilterMethod('date')}
                        style={{
                            color: filterMethod === 'date' ? colors.secondaryText : colors.tertiaryAccent,
                            backgroundColor: filterMethod === 'date' ? colors.tertiaryAccent : colors.primaryAccent
                        }}
                    >
                        Date
                    </button>
                    <button
                        onClick={() => setFilterMethod('category')}
                        style={{
                            color: filterMethod === 'category' ? colors.secondaryText : colors.tertiaryAccent,
                            backgroundColor: filterMethod === 'category' ? colors.tertiaryAccent : colors.primaryAccent
                        }}
                    >
                        Category
                    </button>
                </div>
                <input
                    id="article-search"
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={() => { setSearchQuery(''); setSearchParams({ sort: sortMethod, filter: filterMethod, search: '' }); }}>Clear Search Term</button>
            </div>
            {
                filteredAndSortedArticles.length === 0 ? (
                    <div className="no-articles-found">
                        <p>No articles found, try a different search term or filter method...</p>
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
                            categories={article.category}
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