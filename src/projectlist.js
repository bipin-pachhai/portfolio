//project media import
import chitchat from "./projectmedia/chitchat.gif";
import contactapp1 from "./projectmedia/contactapp1.gif";
import contactapp2 from "./projectmedia/contactapp1.gif";
import developerhub1 from "./projectmedia/developer-hub.gif";
import flashapp from "./projectmedia/flashapp.gif";
import game from "./projectmedia/game.gif";
import memorygame from "./projectmedia/memorygame.gif";
import quiz from "./projectmedia/quiz.gif";
import todo from "./projectmedia/todo.gif";

export const projectlist = {
  items: [
   
    {
      id: 0,
      title: "Contact Book",
      description: [
        "Developed a fullstack web app using React and Firebase to add and keep track of authenticated users contact lists using Google authentication.",
        "Allows users to view, add, update, upload pictures, and delete the contacts of their contact list.",
        "Stores users’ contact details and images inside firebase real time database and storage bucket and secures them providing access only to the authenticated users.",
      ],

      technology: ["CSS", "BOOTSTRAP", "REACT", "FIREBASE"],
      githubUrl: "https://github.com/bipin-pachhai/contact-app",
      imageUrl: [contactapp1, contactapp2],
    },
    {
      id: 1,
      title: "CHITCHAT",
      description: [
        "This is simple website built on Node.js, Express and MongoDB. It mostly serves as a sample site to learn how Express framework works on backend.",
        "A full stack web app that allows user to login to their account securely using passportJS. .",
        "The backend handeled by Express and Node.js. Use of EJS as frontend template ",
        "It provides authenticated users with access to a chat room designed using Socket.IO where they can chat in real time with their chat history available through MongoDB Atlas cluster.",
      ],
      technology: ["EJS", "EXPRESS", "MONGODB", "DOCKER"],
      githubUrl: "https://github.com/bipin-pachhai/Chitchat",
      imageUrl: [chitchat],
    },
    {
      id: 2,
      title: "Developer-Hub",
      description: [
        "A MERN stack web application started as a part of class project to bring the like-minded CS students together so that they can collaborate on their projects and help each other.",
        "Provides option to create account and log in as a user using JSON web token authentication.",
        "Added GitHub API for listing popular repositories of all users to improve collaboration by better assisting a user to find projects of his/her interests.",
      ],
      technology: [
        "CSS",
        "BOOTSTRAP",
        "REACT",
        "NODE.JS",
        "EXPRESS.JS",
        "MONGODB",
      ],
      githubUrl: "https://github.com/bipin-pachhai/developer-hub",
      imageUrl: [developerhub1],
    },
    
    {
      id: 3,
      title: "Platform Game",
      description: [
        "A platform game completed as a lab project in Developing Advanced Web Applications class offered by University of New Orleans.",
        "Developed using the concept of Object-Oriented Programming in JavaScript.",
        "Use of Canvas API.",
      ],
      technology: ["HTML, VanillaJS"],
      githubUrl: "",
      imageUrl: [game],
    },
    {
      id: 4,
      title: "Trivia Quiz App",
      description: [
        "A web app designed using Model-View_Controller (MVC) design pattern as a lab project.",
        "Uses OpenTrivia API to generate questions' details for the quiz.",
        "Uses JSONBin as a Rest API to store the records of top scorers."
      ],
      technology: ["HTML","CSS" , "VanillaJS"],
      githubUrl: "",
      imageUrl: [quiz],
    },

    {
      id: 5,
      title: "Memory Game",
      description: [
        "Memory Game is a Light & Sound Memory game developed as a prework to apply for the CodePath's SITE Program 2021.",
        "Features and Functionalities of the game are all mentioned on the README.md file of the github repository.",
        "Please visit the github link for more details."
      ],
      technology: ["HTML","CSS", "JavaScript"],
      githubUrl: "https://github.com/bipin-pachhai/memory-game",
      imageUrl: [memorygame],
    },
    {
      id: 6,
      title: "Todo App",
      description: [
        "A React App that uses the concepts of useReducer() hook and Dispatch method to update the central state of to-do lists.",
        "Gives the user options to add and remove the to-do event from the to-do list.",
      ],
      technology: ["BOOTSTRAP", "REACT"],
      githubUrl: "",
      imageUrl: [todo],
    },
    {
      id: 7,
      title: "Flashapp",
      description: [
        "An Android Mobile App developed as a project for Intro to Mobile Product Development Workshop Series offered by Codepath.org",
        "Allows to toggle between question and answer flash cards.",
        "Allows to create new questions/answers and save them into local SQlite database.",
      ],
      technology: ["JAVA", "ANDROID STUDIO"],
      githubUrl: "https://github.com/bipin-pachhai/flashapp",
      imageUrl: [flashapp],
    },
  ],
};
