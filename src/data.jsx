// import home from "./assets/images/emr_logo.png"
// import testBG from "./assets/images/giphy.gif"
// import Home1 from "./pages/Home"
// import Blog from "./components/BlogCard/BlogPage"

//------- background of tab links ------
import Tech_fest from "./assets/images/Tech_fest.png";
import gallery from "./assets/images/gallery.png";
import projects from "./assets/images/projects.png";
import workshop from "./assets/images/workshop.png";
import blog from "./assets/images/blog.png";
import team from "./assets/images/team.png";

export const tabData = [
  {
    label: "TECH FEST",
    path: "/",
    backgroundImage: Tech_fest,
  },
  {
    label: "Workshops",
    path: "/workshops",
    backgroundImage: workshop,
  },
  {
    label: "SPONSER",
    path: "/sponser",
    backgroundImage: projects,
  },
  {
    label: "Blog",
    path: "/blog",
    backgroundImage: blog,
  },

  {
    label: "GALLERY",
    path: "/gallery",
    backgroundImage: gallery,
  },
  {
    label: "TEAM",
    path: "/TeamPage",
    backgroundImage: team,
  },
  {
    label: "EVENT",
    path: "/event",
    backgroundImage: team,
  },
  {
    label: "SOON..",
    path: "/",
    backgroundImage: blog,
  },
];
