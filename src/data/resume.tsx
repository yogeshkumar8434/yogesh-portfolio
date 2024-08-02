import { Icons } from "@/components/icons";

export const DATA = {
  name: "Yogesh Kumar",
  initials: "DV",
  url: "https://www.linkedin.com/in/yogeshkumar8434/",
  location: "Bangalore, India",
  locationLink: "https://www.linkedin.com/in/yogeshkumar8434/",
  description:
    "Senior Software Engineer, React and Next.js Expert, specializing in performance optimization and crafting delightful user experiences, micro frontend architecture.",
  summary:
    "As a seasoned Software engineer with 3+ years of experience, I am confident in my ability to effectively communicate my architectural vision. Demonstrated commitment to continuous learning and staying abreast of industry trends to deliver high-quality solutions. Emerging trends and technologies in JavaScript development is important to me, and successfully delivered projects for diverse clients across various domains. I am also eager to provide technical expertise and guidance to interns within the organization as needed.",
  avatarUrl: "/yogesh.jpg",
  skills: [
    "React.js",
    "Next.js",
    "Javascript",
    "Typescript",
    "Redux.js",
    "HTML",
    "CSS",
    "Swagger",
    "SWR",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Git & Github",
    "Design patterns",
    "Problem Solving"
  ],
  contact: {
    email: "yogesh7kumar6865@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        url: "https://github.com/yogeshkumar8434",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/yogeshkumar8434/",
        icon: Icons.linkedin,
      },
    },
  },

  work: [
    {
      company: "Segwitz sdn bhd ",
      href: "https://segwitz.com/",
      badges: [],
      location: "Remote",
      title: "Senior Software Engineer",
      logoUrl: "/segwitz_tech_logo.jpg",
      start: "October 2023",
      end: "Present",
      description:
        "Integrated server-side rendering to render content on the server, resulting in a 40% faster page transition and quicker loading times, ultimately enhancing user experience. Additionally, I optimized and reduced the web app build bundle size by 70-80% through extensive debugging, leading to significantly faster load times. I also developed interactive dashboards, achieving a 60% improvement in data visualization and user engagement. Furthermore, I built a real-time chat app to facilitate smooth communication and enhance team collaboration, and innovated on a dynamic social platform, driving a 50% increase in user interaction and content sharing.",
    },
    {
      company: "Techno Earth IT solution ",
      badges: [],
      href: "https://www.linkedin.com/company/technoearth-it-solutions/",
      location: "Ahmadabad India.",
      title: "Software Engineer",
      logoUrl: "/technoearth.png",
      start: "February 2023",
      end: "October 2023",
      description:
        "I worked on land acquisition processes across diverse units within Adani Group's Land Bank, overseeing efficient tracking and management of land parcels through procurement stages, resulting in a 30% increase in process efficiency. Additionally, I utilized Chart.js for advanced data visualization, enhancing reporting accuracy and stakeholder communication. I also achieved a 30%-40% reduction in data fetching time by implementing throttling, debouncing, and optimizing client-side tasks, further streamlining operations and improving overall performance.",
    },
    {
      company: "Acty System India PVT. LTD ",
      href: "https://www.acty-sys.com/in/en/",
      badges: [],
      location: "Ahmadabad India.",
      title: "SDE Intern",
      logoUrl: "/acty.png",
      start: "August 2022",
      end: "February 2023",
      description:
        "I developed software applications, debugged and tested them, and documented new applications to ensure smooth functionality. Additionally, I optimized APIs to return data around 47% faster by performing intensive operations at the database side, significantly improving performance. I was also involved in researching, investigating, and fixing a wide range of technical issues, leveraging my problem-solving skills to resolve complex problems and enhance overall system efficiency.",
    },
    {
      company: "Techno Earth IT solution ",
      href: "https://www.linkedin.com/company/technoearth-it-solutions/",
      badges: [],
      location: "Ahmadabad India.",
      title: "Full stack developer - Internship",
      logoUrl: "/technoearth.png",
      start: "February 2022",
      end: "July 2022",
      description:
        "I contributed to the development and maintenance of web applications, leveraging a combination of frontend technologies like ReactJS to create dynamic user interfaces and backend technologies like Nest.js for server-side logic. I also collaborated with senior team members to integrate frontend interfaces with backend APIs, ensuring a seamless data flow and intuitive user interaction, and gained valuable experience in building robust and efficient web applications.",
    },
    
  ],
  education: [
    {
      school: "Techno India NJR Institute of Technology",
      href: "https://www.technonjr.org/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/techno.png",
      start: "CGPA",
      end: "9.0",
    },
  ],
  projects: [
    {
      title: "Adani Group - (LAMS) Land Acquirement Management system	",
      href: "https://www.adanienterprises.com/",
      dates: "February 2023 - October 2023",
      active: true,
      description:
        "Worked on the Adani Land Bank System, revolutionizing land acquisition processes across multiple Adani units. During my tenure, I integrated ArcGIS Maps SDK for JavaScript to significantly enhance geospatial data visualization and analysis capabilities, resulting in a 40% improvement in mapping accuracy and efficiency. Additionally, I utilized a tech stack comprising React, Next.js, TypeScript, HTML, CSS, and Material-UI (MUI) to build a robust frontend, achieving a 40% enhancement in user interface responsiveness and data interaction, and delivering a seamless user experience.",
      technologies: [
        "React.js",
        "Next.js",
        "Javascript",
        "Typescript",
        "PostgreSQL",
        "Redux",
        "SWR",
        "SwaggerAPI",
        "Chart.js"
      ],
      links: [
        {
          type: "Deployed on Adani's Intranet",
          href: "https://www.adani.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/adani.png",
      
    },
    {
      title: "Nasty - (ENDS) Electronic Nicotine Scanning Systems ",
      href: "https://vrif.nastyworldwide.com/",
      dates: "November 2023 - June 2023",
      active: true,
      description:
        "Developed an innovative product scanning system for B2B and B2C users, enabling seamless access to details, activation, support, and surveys via scan technology, across 83 countries and 5 continents with high user engagement. I also implemented IP address-based redirection to tailor user experiences by country, managing regional variations in product offerings and membership programs, which enhanced user engagement by 60% and reduced bounce rates by 50%. Additionally, I developed an admin dashboard for real-time analytics and product barcode generation, achieving a 70% increase in operational efficiency, and integrated advanced security protocols, resulting in a 30% reduction in fraudulent activities.",
      technologies: [
        "Next.js",
        "Javascript",
        "Typescript",
        "Redux",
        "Material UI",
        "TailwindCSS",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://vrif.nastyworldwide.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nasty.png",
    },
    {
      title: "Pink it - Multi-vendor eCommerce Website ",
      href: "https://ecom-web.afa-sports.com/home/",
      dates: "April 2023 - Present",
      active: true,
      description:
        "I spearheaded the development of the AFA Community e-commerce platform, Pink it, which operates across multiple vendors and features a robust management dashboard. I also developed real-time chat functionality between vendors and end-users on the platform, enhancing customer support and facilitating immediate communication, resulting in a 40% increase in customer satisfaction and a 30% reduction in response times. Furthermore, I implemented various features to enhance user experience and security, including role-based personas, social logins, authentication, authorization, session management, state management, payment gateway integration, and wallet integration, ensuring a seamless and secure experience for users.",
      technologies: [
        "React.js",
        "Next.js",
        "Typescript",
        "Material UI",
        "Socket.IO",
        "SWR",
        "SSR",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://ecom-web.afa-sports.com/home/",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "/pinkit.png",
    },
    {
      title: "FletchQ",
      href: "https://panel-fletchq.segwitz.dev/home/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an education SaaS platform for students, trainers, and admins, featuring a trainer directory, student profiles, and real-time chat. Role-based access control provides a tailored user experience. The platform accelerates the admission process by 40%, streamlining communication and collaboration. With a user-friendly interface, it transforms the education sector with innovative technology. Students can easily find trainers, enroll in programs, and access study materials. Admins can manage users, track progress, and analyze data. The platform enhances the learning experience, making education more accessible, efficient, and enjoyable for all users.",
      technologies: [
        "React.js",
        "Next.js",
        "Javascript",
        "TailwindCSS",
         "Material UI",
        "Socket.IO",
        "SWR",
        "SSR",
        "Redux",
        "Chart.js"
      ],
      links: [
        {
          type: "Admin Panel",
          href: "https://panel-fletchq.segwitz.dev/home/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://fletchq-user.vercel.app/home/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/f.png",
    },
  ],
 
} as const;
