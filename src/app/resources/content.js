import { Logo } from "@/once-ui/components";

const firstName = "Phan Đỉnh";
const lastName = "Thanh Hoàn";

const person = {
  firstName: "Phan Đỉnh",
  lastName: "Thanh Hoàn",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "thanhhoanphandinh@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  timezone: "Asia/Ho_Chi_Minh",
  languages: ["English", "Vietnamese"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software engineering, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/thanhhoan-v2",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/phan-dinh-thanh-hoan/",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${lastName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Phan Đỉnh Thanh Hoàn</>,
  featured: {
    display: true,
    title: (
      <>
        I'm <strong className="ml-4">available</strong>&nbsp;for full-time works & internships.
      </>
    ),
    href: "https://piz-one.vercel.app/",
  },
  subline: (
    <>
      I'm Hoàn, a Computer Science graduate who thrives in fast-paced, collaborative environments
      and is passionate about learning new technologies while building scalable web applications.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About ${lastName.split(" ").pop()}`,
  description: `Meet ${firstName} ${lastName}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hoàn is a software engineer with a passion for transforming complex technical challenges
        into scalable, user-focused web solutions. His work spans full-stack development,
        interactive user interfaces, and the convergence of modern web technologies and performance
        optimization.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ILA Viet Nam",
        timeframe: "Febuary 2022 - April 2025",
        role: "Software Developer Intern",
        achievements: [
          "Analyzed user stories and engineered UI components to address tight deadlines, delivering on-time within 12 weeks.",
          "Developed components using React.js, HTML/CSS and TypeScript, matches 98% of Figma designs.",
          "Implemented Code Splitting & Lazy Loading to tackle web application issues, delivering 30% faster load times.",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Teaching Assistant",
        timeframe: "October 2023 - January 2024",
        role: "Object-oriented Programming Course at International University - VNU HCMC",
        achievements: [
          "Conducted weekly lab sessions for 40+ students, providing guidance on OOP concepts, including inheritance, polymorphism and design patterns while debugging code assignments.",
          "Graded programming assignments and quizzes focused on OOP principles, with detailed feedback on code structure, documentation.",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of the West of England, Bristol, UK",
        description: <>Bachelor of Computer Science & Engineering</>,
      },
      {
        name: "Udemy: React - The Complete Guide 2025 (incl. Next.js, Redux)",
        description: (
          <>
            <a
              href="https://www.udemy.com/certificate/UC-4ca987c1-183e-43f2-91d2-a4c6cdaa6e75/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credential URL
            </a>
          </>
        ),
      },
      {
        name: "LinkedIn: Problem-Solving Techniques",
        description: (
          <>
            <a
              href="https://www.linkedin.com/in/phan-dinh-thanh-hoan/details/certifications/1740751226077/single-media-viewer?type=DOCUMENT&profileId=ACoAADSn0FEBLTGFHIOrSg4nhcZ1UMapAhklBH0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BBY2%2FeLdmRbq2KRd9%2FbbboA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credential URL
            </a>
          </>
        ),
      },
      {
        name: "Coursera: AWS S3 Basics",
        description: (
          <>
            <a
              href="https://www.coursera.org/account/accomplishments/records/69L5NEDQCYXN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Credential URL
            </a>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "",
        description: <></>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/reactjs.png",
            alt: "Technical skill: React.js",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/nextjs.png",
            alt: "Technical skill: Next.js",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/tailwindcss.png",
            alt: "Technical skill: Tailwind CSS",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/typescript.png",
            alt: "Technical skill: TypeScript",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/supabase.png",
            alt: "Technical skill: Supabase",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/redux.png",
            alt: "Technical skill: Redux",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/postgresql.png",
            alt: "Technical skill: PostgreSQL",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/mongodb.png",
            alt: "Technical skill: MongoDB",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/nodejs.png",
            alt: "Technical skill: Node.js",
            width: 5,
            height: 5,
          },
          {
            src: "/images/skills/expressjs.png",
            alt: "Technical skill: Express.js",
            width: 5,
            height: 5,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `${lastName}'s Blog`,
  description: `Read what ${firstName} ${lastName} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `${lastName}'s Projects`,
  description: `Design and dev projects by ${firstName} ${lastName}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
