class Article {
    image: string;
    title: string;
    blurb: string;
    pdfLink: string;
    externalLink: string;
    publication: Publication;
    publicationDate: Date;

    constructor(image: string, title: string, blurb: string, pdfLink: string, externalLink: string, publication: Publication, publicationDate: Date) {
        this.image = image;
        this.title = title;
        this.blurb = blurb;
        this.pdfLink = pdfLink;
        this.externalLink = externalLink;
        this.publication = publication;
        this.publicationDate = publicationDate;
    }
}
class Publication {
    logo: string;
    name: string;
    circulationRank: number;

    constructor(logo: string, name: string, circulationRank: number) {
        this.logo = logo;
        this.name = name;
        this.circulationRank = circulationRank;
    }
}

const publications: Publication[] = [
    new Publication("src/assets/publicationLogos/The New York Times.png", "New York Times", 1),
    new Publication("src/assets/publicationLogos/The Washington Post.png", "Washington Post", 2),
    new Publication("src/assets/publicationLogos/Forbes.png", "Forbes", 3),
    new Publication("src/assets/publicationLogos/Next Avenue.png", "Next Avenue", 4),
    new Publication("src/assets/publicationLogos/Purple Clover.png", "Purple Clover", 5),
    new Publication("src/assets/publicationLogos/Grown and Flown.png", "Grown and Flown", 6),
    new Publication("src/assets/publicationLogos/Market Watch.png", "Market Watch", 7),
];

const articles: Article[] = [
    new Article(
        "photo.png", 
        "Three Musical Notes, 1848 Miles, and a Lifetime of Memories", 
        "Instead of walking down the aisle, the father of the bride escorted his daughter to her new husband in a road trip to Texas, forging a new special bond.", 
        "pdfLink.pdf", 
        "https://www.nytimes.com/2021/07/07/style/three-musical-notes-1848-miles-and-a-lifetime-of-memories.html", 
        publications[0], 
        new Date("2021-07-07"))
];

export { Article, Publication, articles, publications };