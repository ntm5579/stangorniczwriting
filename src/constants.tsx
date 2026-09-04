class Article {
    image: string;
    title: string;
    blurb: string;
    pdfLink: string | null;
    externalLink: string | null;
    publication: Publication;
    publicationDate: Date;

    constructor(image: string, title: string, blurb: string, pdfLink: string | null, externalLink: string | null, publication: Publication, publicationDate: Date) {
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
        new Date("2021-07-07")),
    new Article(
        "photo.png", 
        "How to be the Go-to House", 
        "As a kid, I craved clamor, but my parents cherished serenity over chaos. When I became a parent I wanted to create a welcoming, noisy home.", 
        "pdfLink.pdf", 
        "https://www.nytimes.com/2018/11/02/well/family/how-to-be-the-go-to-house.html", 
        publications[0], 
        new Date("2018-11-02")),
    new Article(
        "photo.png", 
        "Yankees vs. Red Sox: Learning how to become a two-team family", 
        "During my first visit to the bustling hospital after my son was born, I bounded into the room and proudly planted a tiny Red Sox cap on my newborn's head. When my daughter joined our clan, her first piece of clothing was a sweatshirt emblazoned with the logo of the only team our family had pledged allegiance to for the past two generations.", 
        "pdfLink.pdf", 
        "https://www.washingtonpost.com/news/parenting/wp/2017/04/18/yankees-vs-red-sox-learning-how-to-become-a-two-team-family/?noredirect=on&utm_term=.6ff00fe4fcc7", 
        publications[1], 
        new Date("2017-04-18")),
];

export { Article, Publication, articles, publications };