import gtime from "./assets/images/gtimeplanner.e3ee245b2567653384ad.png";
import project2 from "./assets/images/project2.2e277e77e2343425bda7.png";



const logotext = "Drew";
const meta = {
    title: "Drew Jordan",
    description: "I’m Drew Jordan a Full stack devloper, currently studying Cybersecurity and Psychology at Loyola University Chicago.",
};

const introdata = {
    title: "I’m John Doe",
    animated: {
        first: "Part time programmer",
        second: "Full time student",
        third: "Full stack developer",
        fourth: "Python and Tensorflow",
    },
    description: "I’m Drew Jordan a Full stack devloper, currently studying Cybersecurity and Psychology at Loyola University Chicago.",
    your_img_url: "https://drive.google.com/file/d/1AZg0AXkGnIn44fY_Z9O8SbkJ77O64fNa/view?usp=sharing",
};

const dataabout = {
    title: "About me",
    aboutme: "I'm a Junior at Loyola University Chicago, pursuing a double major in Cybersecurity and Psychology. I'm incredibly passionate about exploring the intricate relationshipbetween technology and human behavior. While my academic focus lies in cybersecurity and psychology, my curiosity and eagerness to learn haveled me to delve into the world of web development. As a soon-to-be full-stack web developer, I have honed my skills in Python and gained valuable experience in creating robust and dynamic web applications and other programs. I believe that combining my knowledge of cybersecurity and psychology with my web development expertise allows me to approach projects from a unique perspective, ensuring that user experiences are not only seamless and visually appealing but also secure and tailored to human needs. This portfolio website serves as a testament to my journey so far, showcasing the projects I've worked on and the skills I've acquired.",
};
const worktimeline = [{
        jobtitle: "Northwestern University Full Stack Bootcamp",
        where: "Chicago, IL",
        date: "2023",
    },
    {
        jobtitle: "IT Support Specialist",
        where: "Loyola University Chicago",
        date: "2021-2023",
    },
    // {
    //     jobtitle: "Designer of week",
    //     where: "ALquds",
    //     date: "2019",
    // },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Flask",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Jquery",
        value: 85,
    },
    {
        name: "Linux",
        value: 90,
    },
    

];

const services = [
    {
        title: "UI & UX Design",
        description: "Designing intuitive user interfaces that ensure a seamless user experience. Combining aesthetics with functionality to create user-centric designs that resonate with your target audience.",
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
    // {
    //     img: "https://picsum.photos/400/?grayscale",
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
    TEMPLATE_ID: "template_b7sm3mh",
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