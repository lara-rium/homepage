const portfolio = {
  "my work as BEST Ankara's VP of PR": [
    {
      description: "logo of the BEST Ankara board",
      madeWith: ["ai"],
      path: "assets/portfolio/board-logo.png",
    },
    {
      description: "my mail signature design",
      madeWith: ["ai", "ae"],
      path: "assets/portfolio/mail-signature.webp",
    },
    {
      description: "story design for the promotion of BEST courses",
      madeWith: ["ps"],
      path: "assets/portfolio/course-story.png",
    },
    {
      description: "cutout for BEST Ankara's mascot",
      madeWith: ["ps"],
      path: "assets/portfolio/mascot-cutout.png",
    },
    {
      description: "flyer design for Engineering Day competition",
      madeWith: ["id"],
      path: "assets/portfolio/mg-flyer.png",
    },
    {
      description: "instagram post design for Engineering Day competition",
      madeWith: ["ps"],
      path: "assets/portfolio/mg-post.png",
    },
    {
      description: "poster design for Engineering Day competition",
      madeWith: ["ps"],
      path: "assets/portfolio/mg-poster.png",
    },
    {
      description: "instagram post design for BEST Ankara sponsors",
      madeWith: ["ai"],
      path: "assets/portfolio/pasta-post.png",
    },
  ],
  "my work as High School BEST Engineering Competition main organizer": [
    {
      description: "gift card design",
      madeWith: ["ps"],
      path: "assets/portfolio/hbec-gift-card.png",
    },
    {
      description: "handbook cover design",
      madeWith: ["ps"],
      path: "assets/portfolio/hbec-handbook-cover.png",
    },
    {
      description: "introduction post design",
      madeWith: ["ps"],
      path: "assets/portfolio/hbec-introduction-post.png",
    },
    {
      description: "nametag design",
      madeWith: ["ps"],
      path: "assets/portfolio/hbec-nametag.png",
    },
    {
      description: "school poster design",
      madeWith: ["ps"],
      path: "assets/portfolio/hbec-school-poster.png",
    },
    {
      description: "old instagram post design",
      madeWith: ["ps"],
      path: "assets/portfolio/hbec-schools-old.png",
    },
  ],
  // eslint-disable-next-line sort-keys
  "designs i helped create for METU ID projects": [
    {
      description: "cover for Breathe Right stand",
      madeWith: ["ai"],
      path: "assets/portfolio/breathe-right-stand-graphic.png",
    },
    {
      description: "pattern for christmas postcard",
      madeWith: ["ai"],
      path: "assets/portfolio/gingerbread-man.png",
    },
  ],
  "my work as METU Lindy Hop society social media responsible": [
    {
      description: "instagram post design",
      madeWith: ["ai"],
      path: "assets/portfolio/lindy-hop-jazz-post.png",
    },
  ],
  "other designs": [
    {
      description: "github profile picture",
      madeWith: ["ps"],
      path: "assets/portfolio/github-profile-picture.png",
    },
  ],
  // eslint-disable-next-line sort-keys
  "ceramic works": [
    {
      description: "ceramic mug for halloween",
      madeWith: [],
      path: "assets/portfolio/ceramic-mug.png",
    },
  ],
  "the end": [
    {
      description: "looking forward to joining you in ID!",
      madeWith: ["ae"],
      path: "assets/end-animation.webp",
    },
  ],
};

export const getPortfolioItems = () =>
  Object.entries(portfolio).flatMap(([key, val]) =>
    val.map((values) => ({ section: key, ...values })),
  );

export const getPortfolioItem = (idx) => getPortfolioItems()[idx];

export const portfolioLength = Object.values(portfolio).flat().length;
