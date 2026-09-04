class Article {
    image: string;
    title: string;
    blurb: string;
    pdfLink: string | null;
    externalLink: string | null;
    publication: Publication;
    publicationDate: Date;
    altText: string | null;

    constructor(image: string, title: string, blurb: string, pdfLink: string | null, externalLink: string | null, publication: Publication, publicationDate: Date, altText: string | null) {
        this.image = image;
        this.title = title;
        this.blurb = blurb;
        this.pdfLink = pdfLink;
        this.externalLink = externalLink;
        this.publication = publication;
        this.publicationDate = publicationDate;
        this.altText = altText;
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
        new Date("2021-07-07"),
        "A father and daughter smiling in front garden and buildings."
    ),
    new Article(
        "src/assets/articleImages/party.jpg", 
        "How to be the Go-to House", 
        "As a kid, I craved clamor, but my parents cherished serenity over chaos. When I became a parent I wanted to create a welcoming, noisy home.", 
        null, 
        "https://www.nytimes.com/2018/11/02/well/family/how-to-be-the-go-to-house.html", 
        publications[0], 
        new Date("2018-11-02"),
        "Ilustrated silhouette of a kids party."
    ),
    new Article(
        "src/assets/articleImages/baseball.jpg", 
        "Yankees vs. Red Sox: Learning how to become a two-team family", 
        "During my first visit to the bustling hospital after my son was born, I bounded into the room and proudly planted a tiny Red Sox cap on my newborn's head. When my daughter joined our clan, her first piece of clothing was a sweatshirt emblazoned with the logo of the only team our family had pledged allegiance to for the past two generations.", 
        null, 
        "https://www.washingtonpost.com/news/parenting/wp/2017/04/18/yankees-vs-red-sox-learning-how-to-become-a-two-team-family/?noredirect=on&utm_term=.6ff00fe4fcc7", 
        publications[1], 
        new Date("2017-04-18"),
        "A boy looking out at a baseball field from the stands."
    ),
    new Article(
        "src/assets/articleImages/aging.jpg", 
        "Ways to Find a Home Remodeler for Aging in Place", 
        "Why working with a Certified Aging-in-Place Specialist may be helpful", 
        "src/assets/articlePdfs/How_to_Find_a_Home_Remodeler_for_Aging_in_Place.pdf", 
        "https://www.forbes.com/sites/nextavenue/2019/01/23/how-to-find-a-home-remodeler-for-aging-in-place/", 
        publications[2], 
        new Date("2019-01-23"),
        "A tradepersons working in a partially finished kitchen."
        ),
    new Article(
        "src/assets/articleImages/Entrepreneur.jpg", 
        "6 Steps To Become A Midlife Entrepreneur", 
        "I was a small business owner building sound systems and providing DJ entertainment. Then, after a decade and a half, I dove into the 9 to 5 corporate world, managing databases, developing websites and creating corporate communications. These days, after a layoff and with my kids almost through college, I've begun my second act as an entrepreneur, using my writing skills to help clients form creative communications strategies.", 
        "src/assets/articlePdfs/The_Steps_to_Become_an_Entrepreneur_in_Your_50s_or_60s.pdf", 
        "https://www.forbes.com/sites/nextavenue/2017/07/06/6-steps-to-become-a-midlife-entrepreneur/#67f531865e03", 
        publications[2], 
        new Date("2017-07-06"),
        "A person sitting with a laptop."
    ),
    new Article(
        "src/assets/articleImages/Fathers.png", 
        "Keeping the Stories of Our Fathers Alive", 
        "One was stationed at Pearl Harbor, one spent time in a German labor camp. When they were ready to tell their stories, we made sure to record them.",  
        "src/assets/articlePdfs/Keeping_the_Stories_of_Our_Fathers_Alive.pdf", 
        null,
        publications[3], 
        new Date("2023-05-29"),
        "A picture of two men smiling in front of a house."
    ),
    new Article(
        "src/assets/articleImages/Gazeebo.png", 
        "15 Steps to Our Backyard Paradise", 
        "When my kids were toddlers, our backyard had a large plastic playhouse, sand box, swing set and Slip 'N Slide. The space burst with vivid colors — bright reds, blues, yellows and greens — like giant flowers in a surreal garden.", 
        "src/assets/articlePdfs/15_Steps_to_Our_Backyard_Paradise.pdf", 
        null, 
        publications[3], 
        new Date("2023-07-04"),
        "A gazebo strewn with lights, with a yard in the background with outdoor furniture."
    ),
    new Article(
        "src/assets/articleImages/Calm.png", 
        "Cooking up Calm in a Time of Crisis", 
        "\"What's for supper tonight?\" my 24-year-old son asked as I stepped out of my car, returning from work. That was when the threat of a virus did not exist, and we were free to move about, meet our friends, shake hands, hug. Back then, sharing the last meal of the day was routine.", 
        "src/assets/articlePdfs/Cooking_Up_Calm_in_a_Time_of_Crisis.pdf", 
        null, 
        publications[3], 
        new Date("2020-12-21"),
        "Two men preparing a meal together in a kitchen."
    ),
    new Article(
        "src/assets/articleImages/Dog.png", 
        "The Gift of a Dog", 
        "Time to open Christmas presents,” I shouted after our family finished our holiday feast. “Penny first.", 
        "src/assets/articlePdfs/The_Gift_of_a_Dog.pdf", 
        null, 
        publications[3], 
        new Date("2019-12-24"),
        "A dog sitting on a blanket in front of a Christmas tree."
    ),
    new Article(
        "src/assets/articleImages/boomer.png", 
        "A Boomer Job Seeker Resolves to Be Social Media Savvy", 
        "Why he's no longer angry at the Millennial work culture", 
        "src/assets/articlePdfs/Boomer_Job_Seeker.pdf", 
        null, 
        publications[3], 
        new Date("2016-08-03"),
        "A person typing on a laptop at a desk."
    ),
    // new Article(
    //     "src/assets/articleImages/discs.png", 
    //     "The Song Remains the Same", 
    //     "????", 
    //     null, 
    //     null, 
    //     publications[4], 
    //     new Date("2018-03-12")),
    //     "A shelf of vinyl records.",
    new Article(
        "src/assets/articleImages/grad.jpeg", 
        "College Graduation: My Daughter Will Do it Her Way", 
        "“Dad, I'm not going to my college graduation this spring,” my daughter announced at supper one night. “It's a waste of time and I'm just not doing it.” I stared at her in shock.", 
        null, 
        "https://grownandflown.com/daughter-her-way-college-graduation/", 
        publications[5], 
        new Date("2018-03-12"),
        "A parent taking a picture of their daughter in graduation attire on the stone steps of a building."
    ),
];

const windowWidthThreshold = 900;

export { Article, Publication, articles, publications, windowWidthThreshold };