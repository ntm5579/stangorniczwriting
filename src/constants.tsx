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
        "src/assets/articleImages/nashville.webp", 
        "Three Musical Notes, 1848 Miles, and a Lifetime of Memories", 
        "Instead of walking down the aisle, the father of the bride escorted his daughter to her new husband in a road trip to Texas, forging a new special bond.", 
        null, 
        "https://www.nytimes.com/2021/07/07/style/three-musical-notes-1848-miles-and-a-lifetime-of-memories.html", 
        publications[0], 
        new Date("2021-07-07")),
    new Article(
        "src/assets/articleImages/party.jpg", 
        "How to be the Go-to House", 
        "As a kid, I craved clamor, but my parents cherished serenity over chaos. When I became a parent I wanted to create a welcoming, noisy home.", 
        null, 
        "https://www.nytimes.com/2018/11/02/well/family/how-to-be-the-go-to-house.html", 
        publications[0], 
        new Date("2018-11-02")),
    new Article(
        "src/assets/articleImages/baseball.jpg", 
        "Yankees vs. Red Sox: Learning how to become a two-team family", 
        "During my first visit to the bustling hospital after my son was born, I bounded into the room and proudly planted a tiny Red Sox cap on my newborn's head. When my daughter joined our clan, her first piece of clothing was a sweatshirt emblazoned with the logo of the only team our family had pledged allegiance to for the past two generations.", 
        null, 
        "https://www.washingtonpost.com/news/parenting/wp/2017/04/18/yankees-vs-red-sox-learning-how-to-become-a-two-team-family/?noredirect=on&utm_term=.6ff00fe4fcc7", 
        publications[1], 
        new Date("2017-04-18")),
    new Article(
        "src/assets/articleImages/Entrepreneur.jpg", 
        "6 Steps To Become A Midlife Entrepreneur", 
        "I was a small business owner building sound systems and providing DJ entertainment. Then, after a decade and a half, I dove into the 9 to 5 corporate world, managing databases, developing websites and creating corporate communications. These days, after a layoff and with my kids almost through college, I've begun my second act as an entrepreneur, using my writing skills to help clients form creative communications strategies.", 
        null, 
        "https://www.forbes.com/sites/nextavenue/2017/07/06/6-steps-to-become-a-midlife-entrepreneur/#67f531865e03", 
        publications[2], 
        new Date("2017-07-06")),
    new Article(
        "src/assets/articleImages/Gazeebo.png", 
        "15 Steps to Our Backyard Paradise", 
        "When my kids were toddlers, our backyard had a large plastic playhouse, sand box, swing set and Slip 'N Slide. The space burst with vivid colors — bright reds, blues, yellows and greens — like giant flowers in a surreal garden.", 
        "src/assets/articlePdfs/15_Steps_to_Our_Backyard_Paradise.pdf", 
        null, 
        publications[3], 
        new Date("2023-07-04")),
    new Article(
        "src/assets/articleImages/Fathers.png", 
        "Keeping the Stories of Our Fathers Alive", 
        "One was stationed at Pearl Harbor, one spent time in a German labor camp. When they were ready to tell their stories, we made sure to record them.",  
        "src/assets/articlePdfs/Keeping_the_Stories_of_Our_Fathers_Alive.pdf", 
        null,
        publications[3], 
        new Date("2023-05-29")),
    new Article(
        "src/assets/articleImages/Dog.png", 
        "The Gift of a Dog", 
        "Time to open Christmas presents,” I shouted after our family finished our holiday feast. “Penny first.", 
        "src/assets/articlePdfs/The_Gift_of_a_Dog.pdf", 
        null, 
        publications[3], 
        new Date("2023-05-29")),
    new Article(
        "src/assets/articleImages/remodel.png", 
        "Ways to Find a Home Remodeler for Aging in Place", 
        "Why working with a Certified Aging-in-Place Specialist may be helpful", 
        "src/assets/articlePdfs/How_to_Find_a_Home_Remodeler_for_Aging_in_Place.pdf", 
        null, 
        publications[3], 
        new Date("2023-05-29")),
];

const windowWidthThreshold = 900;

export { Article, Publication, articles, publications, windowWidthThreshold };