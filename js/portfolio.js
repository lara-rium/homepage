const portfolio = {
  "my work as part of BEST Ankara's VP of PR": [
    {
      path: "assets/portfolio/board-logo.png",
      description: "logo of the BEST Ankara board",
      madeWith: ["ai"],
    },
    {
      path: "assets/portfolio/mail-signature.webp",
      description: "my mail signature design",
      madeWith: ["ai", "ae"],
    },
    {
      path: "assets/portfolio/course-story.png",
      description: "story design for the promotion of BEST courses",
      madeWith: ["ps"],
    },
    {
      path: "assets/portfolio/mascot-cutout.png",
      description: "cutout for BEST Ankara's mascot",
      madeWith: ["ps"],
    },
    {
      path: "assets/portfolio/mg-flyer.png",
      description: "flyer design for Engineering Day competition",
      madeWith: ["id"],
    },
    {
      path: "assets/portfolio/mg-post.png",
      description: "instagram post design for Engineering Day competition",
      madeWith: ["ps"],
    },
    {
      path: "assets/portfolio/mg-poster.png",
      description: "poster design for Engineering Day competition",
      madeWith: ["ps"],
    },
    {
      path: "assets/portfolio/pasta-post.png",
      description: "instagram post design for BEST Ankara sponsors",
      madeWith: ["ai"],
    },
  ],
  "my work as High School BEST Engineering Competition main organizer": [
    {
      path: "assets/portfolio/hbec-gift-card.png",
      description: "gift card design",
      madeWith: ["ps"],
    },
    {
      path: "assets/portfolio/hbec-handbook-cover.png",
      description: "handbook cover design",
      madeWith: ["ps"],
    },
    {
      path: "assets/portfolio/hbec-introduction-post.png",
      description: "introduction post design",
      madeWith: ["ps"],
    },
    {
      path: "assets/portfolio/hbec-nametag.png",
      description: "nametag design",
      madeWith: ["ps"],
    },
    {
      path: "assets/portfolio/hbec-school-poster.png",
      description: "school poster design",
      madeWith: ["ps"],
    },
    {
      path: "assets/portfolio/hbec-schools-old.png",
      description: "old instagram post design",
      madeWith: ["ps"],
    },
  ],
  "designs i helped create for METU ID projects": [
    {
      path: "assets/portfolio/breathe-right-stand-graphic.png",
      description: "cover for Breathe Right stand",
      madeWith: ["ai"],
    },
    {
      path: "assets/portfolio/gingerbread-man.png",
      description: "pattern for christmas postcard",
      madeWith: ["ai"],
    },
  ],
  "designs i made for work (as much as NDA allows me to share)": [
    {
      path: "assets/portfolio/github-profile-picture.png",
      description: "github profile picture",
      madeWith: ["ps"],
    },
  ],
  "the end": [
    {
      path: "assets/end-animation.webp",
      description: 'this "the end" animation',
      madeWith: ["ae"],
    },
  ],
};

export const getPortfolioItems = () =>
  Object.entries(portfolio).flatMap(([k, v]) =>
    v.map((x) => ({ section: k, ...x })),
  );

export const getPortfolioItem = (idx) => getPortfolioItems()[idx];

export const portfolioLength = Object.values(portfolio).flat().length;
