/**
 * Interface representing an article.
 */
interface Article {
  id: number;
  title: string;
  date: string;
  content: string;
}

/**
 * Array containing articles.
 */
const articles: Article[] = [
  {
    id: 1,
    title: "When is :focus-visible visible?",
    date: "21 March 2023 #css",
    content:
      "Focus outlines (and their styling) have frequently been a point of contention between aesthetics and usability. On the one hand, focus outlines are incredibly important for navigation, particularly by...",
  },
  {
    id: 2,
    title: "From Ghost to 11ty",
    date: "22 February 2023 #articles #11ty",
    content:
      "Over 5 years ago, I migrated this blog From Jekyll to Ghost. Back then, my reasons for moving to Ghost were because - I wanted a CMS Managing all the posts’ raw markdown files in one folder was gett...",
  },
  {
    id: 3,
    title: "Web Performance Metrics Cheatsheet",
    date: "25 October 2021 #performance",
    content:
      "I recently gave a talk on “Making Sense of Performance Metrics” at the Web Unleashed Conference, and it was suggested that I turn the breakdown of all the performance metrics into a cheatsheet; so her...",
  },
  {
    id: 4,
    title: "Setting up a Decentralised Website (ENS + IPFS = dWeb)",
    date: "18 June 2021 #web3",
    content:
      "One thing that I’ve been really into lately has been ENS names. As someone who’s already obsessed with buying domain names, ENS names have been an even greater obsession (mostly because of emoji names...",
  },
  {
    id: 5,
    title: "Highlights from Chrome Dev Summit 2020",
    date: " 14 December 2020 #conference ",
    content:
      "CDS in 2020 was a bit different, like everything else. It was online, and the talks were more bite-sized at roughly 10 minutes each. I really enjoyed this new style of the summit and, while I missed t...",
  },
];

export default articles;
