import project1 from '../images/project1.webp'
import project2 from '../images/project2.webp'
import project3 from '../images/project3.webp'
import project4 from '../images/project4.webp'
import project5 from '../images/project5.webp'
import project6 from '../images/project6.webp'
import project7 from '../images/project7.webp'

const projects = [
    {
        id: 1,
        title: 'GetHired',
        description: 'A job application portal built using Next.js and Strapi CMS.',
        image: project7,
        projectURL: 'https://gethired-frontend.vercel.app/',
        features: ['Supports both job seeker and job poster roles', 'Authentication based on HTTP only cookies and jwt.', 'PostgreSQL is used as the database and cloudinary is used for storing images and files']
    },
    {
        id: 2,
        title: 'Event management site',
        description: 'A full stack event management site created using Next.js and Strapi CMS.',
        image: project5,
        projectURL: 'https://eventssite.vercel.app',
        features: ['Allows all users to view events and authenticated users to view, upload and edit events.', 'Authentication based on HTTP only cookies and jwt.', 'PostgreSQL is used as the database and cloudinary is used for storing images.', 'Fully styled using Tailwind CSS']
    },
    {
        id: 3,
        title: 'Food delivery app',
        description: 'Food delivery app created using MERN stack technologies.',
        image: project3,
        features: ['Allows the user to place and view orders', 'Added user authentication', 'Integrated third party APIs like mailtrap(for user authentication) and stripe(for payments)'],
        projectURL: 'https://github.com/Ayyangurueswar/food-delivery-app',
        demoLink: 'https://www.youtube.com/watch?v=okGTQ4LMmMM'
    },
    {
        id: 4,
        title: 'Blogspace',
        description: 'A static site which allows users to read blogs',
        image: project6,
        projectURL: 'https://blogspace-liard.vercel.app/',
        features: ['Faster rendering', 'Blogs are categorised into various categories', 'Blogs are writtten using markdown'],
    },
    {
        id: 5,
        title: 'Markdown previewer',
        description: 'Markdown previewer built using React and Marked library',
        image: project4,
        projectURL: 'https://ayyangurueswar.github.io/test-app/',
        features: ['Renders github flavoured markdown as HTML elements']
    },
    {
        id: 6,
        title: 'Tic Tac Toe game',
        description: 'A simple Tic Tac Toe game created using React.js',
        image: project2,
        projectURL: 'https://github.com/Ayyangurueswar/tic-tac-toe-game',
        features: ['Allows the user to track the moves', 'Moves can be sorted in either ascending or descending order'],
    },
    {
        id: 7,
        title: 'Bouncing balls game',
        description: 'Simple bouncing balls game created using HTML, CSS and JavaScript',
        image: project1,
        projectURL: 'https://ayyangurueswar.github.io/bouncing-balls-game/',
        features: ['W - Move up', 'S - Move down', 'A - Move left', 'D - Move right']
    }
]

export default projects