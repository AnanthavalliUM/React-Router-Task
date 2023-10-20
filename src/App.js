import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from './Components/Courses/courses';
import Fullstack from './Components/Fullstack/fullstack';
import Datascience from './Components/Datascience/datascience';
import Cybersecurity from './Components/Cybersecurity/cybersecurity';
import Careers from './Components/Careers/careers';
import Footer from './Components/Footer/footer';
import Navbar from './Components/Navabar/navbar';

const all = {
  title: "Guvi Geeks",
  description: "Learn to code in your native languages...."
}
const cybersecurity = {
  title: "CYBER SECURITY",
  description: "Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security."
}

const fullstack = {
  title: "FULL STACK DEVELOPMENT",
  description: "Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!"
}

const datascience = {
  title: "DATA SCIENCE",
  description: "One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration."
}

const careers = {
  title: "CAREER",
  description: "We have many opportunities in the organization as you learn you can be placed in one of the big MNC's."
}

const cybersecurityblogs = [
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
    title: "What Is Hacking? Types of Hacking & More",
    text: "Hacking is the practice of gaining unauthorized access to computer systems or networks, typically for the purpose of discovering, exploiting, or manipulating vulnerabilities.",
    postTime: "25 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
    title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    text: "Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.",
    postTime: "27 December 2022"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    text: "Look around today, you will witness that we are more reliant on technology and devices than ever before. Benefits of this trend range from getting rid of Yellowbook.",
    postTime: "20 December 2022"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
    title: "Is coding required for cybersecurity?",
    text: "how crucial is coding for cybersecurity? Think about it this way. Just about all the tools you use in cyber security are written in code, and programming lets you write tools.",
    postTime: "22 June 2022"
  },
  
];

const datascienceblogs = [
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    title: "Top Product-Based Companies for Data Scientists in 2023",
    text: "A huge demand for skilled data scientists who are being offered substantial salaries. The job market for data scientists is thriving, offering a plethora of career opportunities.",
    postTime: "5 October 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp",
    title: "Useful Python Libraries & Tools for Data Science Beginners",
    text: "In a world filled with information, knowing how to understand and use data is super important. Data science, which is all about finding valuable insights from data.",
    postTime: "29 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
    title: "Extraordinary Data Science Projects for Beginners As Well as Veterans",
    text: "Data Scientists continues to soar, it has become crucial for aspiring professionals to stand out from the crowd by showcasing their skills through real-world projects.",
    postTime: "28 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
    title: "Future of Data Science and How You Can Thrive With It",
    text: "Data Science has emerged as a revolutionary field in the technology world, transforming the way computers learn and helping organizations make data-driven decisions.",
    postTime: "28 August 2023"
  },
  
];

const fsdblogs = [
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
    title: "7 Best Full-Stack Development Online Courses [2023]",
    text: "Owing to these dynamics, the demand and scope for full-stack developers are constantly on the rise.",
    postTime: "31 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png",
    title: "The Top 10 Tools Every Full-Stack Developer Should Master in 2023",
    text: " In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.",
    postTime: "5 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png ",
    title: "The Ultimate Guide to Real-World Full-Stack Development Applications",
    text: "Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.",
    postTime: "5 August 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp",
    title: "Best Ways to Learn Full Stack Development in 2023",
    text: "According to Stack Overflow, there are more than 90,000 developers who responded to the tools being used, in a survey. You would be wondering how to get into this high-paying profession.",
    postTime: "4 August 2023"
  },
  
  
];

const careerblogs = [
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
    title: "Top Product-Based Companies for Data Scientists in 2023",
    text: "We all know about the kind of buzz surrounding data science right now, it is The tech career of this decade and that’s saying a lot!",
    postTime: "5 October 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters.webp",
    title: "Everything You Should Know About ChatGPT & Why It Matters?",
    text: "ChatGPT is an advanced language model, developed by OpenAI, represents a leap forward for humankind, in our ability to interact with machines.",
    postTime: "29 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Mechanical-Engineering-Webinars-and-Workshops-That-You-Should-Know.webp",
    title: "6 Mechanical Engineering Webinars and Workshops That You Should Know",
    text: "Mechanical engineering is an exciting field that brings creative ideas to life, be it small like a pen to an idea that is as big as landing a rover on the moon.",
    postTime: "28 September 2023"
  },
  {
    imageUrl: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Fascinating-Career-Opportunities-in-Civil-Engineering.webp",
    title: "Fascinating Career Opportunities in Civil Engineering in 2023",
    text: "civil engineering plays a huge role in constructing those tech buildings but have you ever thought of the career opportunities in civil engineering?",
    postTime: "27 September 2023"
  },
 
];

const courses = fsdblogs.concat(datascienceblogs, cybersecurityblogs, careerblogs);

function App() {
  return (
    <BrowserRouter >
    <div className="App app-container">
      <Navbar />
      <Routes>
      <Route path='/' element= { <Courses  header={all} blogs={courses} /> } />
      <Route path='/fsd' element= { <Fullstack header={fullstack} blogs={fsdblogs} /> } />
      <Route path='/datascience' element= {<Datascience header={datascience }  blogs={datascienceblogs} /> } />
      <Route path='/cybersecurity' element= { <Cybersecurity header={cybersecurity} blogs={cybersecurityblogs} /> } />
      <Route path='/careers' element= { <Careers header={careers} blogs={careerblogs} /> } />
      </Routes>
      <Footer />
     
    </div>
    </BrowserRouter>
  );
}

export default App;
