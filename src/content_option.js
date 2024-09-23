import gtime from "./assets/images/gtimeplanner.e3ee245b2567653384ad.png";
import project2 from "./assets/images/project2.2e277e77e2343425bda7.png";
import fridge from "./assets/images/landing-page.gif";



const logotext = "Drew";
const meta = {
    title: "Drew Jordan",
    description: "I'm Drew Jordan a Full stack devloper, currently studying Cybersecurity and Psychology at Loyola University Chicago.",
};

const introdata = {
    title: "I'm John Doe",
    animated: {
        first: "Part time programmer",
        second: "Full time student",
        third: "Full stack developer",
        fourth: "Python and Tensorflow",
    },
    description: "I'm Drew Jordan a Full stack devloper, currently studying Cybersecurity and Psychology at Loyola University Chicago.",
    your_img_url: "https://drive.google.com/file/d/1AZg0AXkGnIn44fY_Z9O8SbkJ77O64fNa/view?usp=sharing",
};

const dataabout = {
    title: "About me",
    aboutme: "I'm a senior at Loyola University Chicago, majoring in Cybersecurity with a minor in Psychology. My passion lies in building and experimenting with cybersecurity tools, both in my professional work and through extensive home lab projects. During my internship as a SOC Analyst, I developed and tested security alerts, honed my skills in network defense, and gained hands-on experience with industry tools. This hands-on work drives my curiosity to explore vulnerabilities and defenses, allowing me to continuously improve my skills. In addition to cybersecurity, I also have experience in web development, particularly with full-stack applications using Python and JavaScript. My technical background enables me to bridge security with development, ensuring that the applications I build are not only functional and user-friendly, but also secure.",
};
const worktimeline = [
    {
        jobtitle: "SOC Analyst Intern at Discover Financial Services",
        where: "Riverwoods, IL",
        date: "Summer 2024",
    },
    {
        jobtitle: "Northwestern University Full Stack Bootcamp",
        where: "Chicago, IL",
        date: "2023",
    },
    {
        jobtitle: "IT Support Specialist",
        where: "Loyola University Chicago",
        date: "2021-2024",
    },
    // {
    //     jobtitle: "Designer of week",
    //     where: "ALquds",
    //     date: "2019",
    // },
];

const skills = [{
        name: "Front-End and Back-End Development",
        value: 90,
    },
    {
        name: "Incident Response",
        value: 80,
    },
    {
        name: "Intrusion Detection and Security Monitoring",
        value: 80,
    },
    {
        name: "IT Support",
        value: 90,
    },
    {
        name: "Hardware and Networking",
        value: 85,
    },
    {
        name: "Operating Systems",
        value: 95,
    },
    

];

const services = [
    // edit the UI/UX Design to possibly be a different service
    {
        title: "Vulnerability Assessment and Penetration Testing",
        description: "Identifying and addressing security vulnerabilities in web applications and networks. Conducting penetration tests to simulate real-world cyberattacks and ensure that systems are secure.",
    },
    {
        title: "Python Development",
        description: "Building robust and scalable applications using Python. Leveraging the flexibility and power of Python to create both web and desktop applications tailored to meet specific needs.",
    },
    {
        title: "Backend Development",
        description: "Creating secure, efficient, and scalable server-side solutions. Designing APIs, managing databases, and ensuring smooth communication between the frontend and backend systems.",
    },
];


const dataportfolio = [
    {
        img: gtime,
        description: "A web application that allows users to search for NBA games and events and add them to their personal calendar.",
        link: "https://github.com/iKingSpacely/nba-event-planner",
    },
    {
        img: project2,
        description: "A web application that allows users to search for CTA train stations and view the estimated wait time for the next train.",
        link: "https://github.com/drewjordan414/cta-train-tracker",
    },
    {
        img: fridge,
        description: " A Social platform that is centered around small groups, The Fridge is the place to post important updates, notices, and achievements.",
        link: "https://github.com/MattChiaro/the-fridge",
    },
    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },

    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "drewjordan404@gmail.com",
    YOUR_FONE: "(314)-660-1335",
    description: "Please feel free to contact me if you have any questions or would like to work together on a project. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    SERVICE_ID: "service_q80neuc",
    TEMPLATE_ID: "template_7q33hgq",
    USER_ID: "YyQF8LSqgc4Hh8Nf3eQrj",
};

const socialprofils = {
    github: "https://github.com/drewjordan414",
    facebook: "https://www.facebook.com/profile.php?id=100004869136649",
    linkedin: "https://www.linkedin.com/in/drew-jordan-103993221/",
    twitter: "https://twitter.com/drewjordan414",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};