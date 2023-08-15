Insight - Supportive learning environment platform 



Insight is a user-friendly online platform designed to facilitate knowledge sharing, collaboration, and problem-solving among college students. With a focus on education and learning, this website allows registered users to create, search, and engage in discussions related to specific college majors and topics. Whether you're seeking assistance with a challenging subject or have insights to share, Insight provides a space for meaningful interactions.



Features
User Authentication: Secure user registration and login system ensures that only registered users can access the platform's features.

Search Functionality: Users can search for their college and major to discover relevant posts and discussions.

Post Creation: Registered users can create new posts related to their college major, asking for help or sharing insights on specific topics.

Comment System: Users can leave comments on posts to provide helpful responses and engage in discussions.

Editing and Deletion: Each user has the ability to edit or delete their own posts and comments for better control over content.



Technologies Used

React: A JavaScript library for building user interfaces, providing a dynamic and interactive experience.

PERN Stack (PostgreSQL, Express.js, React, Node.js): A powerful combination of technologies for creating robust and efficient web applications.

Tailwind CSS: A utility-first CSS framework that streamlines styling and ensures consistent design across the website.

PostgreSQL: A powerful open-source relational database system for data storage and retrieval.

JavaScript: The primary programming language used for implementing dynamic features and interactions.

React Router: A popular routing library for React applications that enables navigation and multiple views.

Chakra UI: A modern, accessible design system for building user interfaces with ease.



Getting Started

To run Insight on your local machine, follow these steps:

Clone the repository: git clone https://github.com/your-username/insight-website.git

Navigate to the project directory: cd insight-website

Install dependencies:
npm install
npm install pg

Set up the PostgreSQL database:
Create a new PostgreSQL database and update the database configuration in the .env file.

Run the migrations and seeders:
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

Start the server:
npm run server

Start the client:
Open the link provided: http://localhost:5713



Usage

Registration and Login: Users need to create an account or log in to access the website's main features. If not logged in, options to create, edit, or delete posts and comments will not be available.

Creating Posts: Logged-in users can create new posts related to their college major, seeking help or sharing insights.

Engaging in Discussions: Leave comments on posts to contribute to discussions and provide assistance.

Editing and Deleting Content: Each user has the ability to edit or delete their own posts and comments.
