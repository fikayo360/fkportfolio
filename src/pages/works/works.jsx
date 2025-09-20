import './works.css'


export const Works = () => {
    const projects = [
  {
    id: 1,
    title: "Task Manager Microservices API",
    description: "A microservices-based API for managing tasks, users, and authentication with scalability in mind.",
    image: "./taskmanagerAPi.png",
    github: "https://github.com/fikayo360/taskmanager"
  },
  {
    id: 2,
    title: "Movie Booking System API",
    description: "Backend API for booking movie tickets, managing schedules, and handling user reservations.",
    image: "movieBapi.png",
    github: "https://github.com/fikayo360/movieBooking"
  },
  {
    id: 3,
    title: "Chess Backend API",
    description: "API that powers an online chess platform, handling game logic, moves, and multiplayer sessions.",
    image: "./chessApi.png",
    github: "https://github.com/fikayo360/chessApi"
  },
  {
    id: 4,
    title: "E-commerce Review Sentiment Analysis Bot",
    description: "A bot that scrapes product reviews and performs sentiment analysis to classify customer feedback.",
    image: "./sentimentReview.png",
    github: "https://github.com/fikayo360/web-scrapping-projects/blob/main/trackingCustomerReviews.js"
  },
  {
    id: 5,
    title: "E-commerce Price Monitoring Bot",
    description: "Automated bot that tracks and monitors product prices across multiple e-commerce platforms.",
    image: "./ecomPriMonitor.png",
    github: "https://github.com/fikayo360/web-scrapping-projects/blob/main/priceMonitor.js"
  },
   {
    id: 6,
    title: "Instagram scrapper",
    description: "Automated bot that scrapes user profiles from instagram",
    image: "./instagramScrapper.png",
    github: "https://github.com/fikayo360/web-scrapping-projects/blob/main/instagramProfile.js"
  },
];

    return (
        <div id='works'>
            <div className="portfolio-container">
            {/* Header Section */}
            <header className="header-section">
            <h3 className="recent-projects-title">RECENT PROJECTS</h3>
            <h1 className="selected-portfolio-title">Selected portfolio</h1>
            </header>

           <section className="portfolio-grid">
      {projects.map((project) => (
        <div className="portfolio-card" key={project.id}>
          <div className="portfolio-image">
            <img src={project.image} alt={project.title} />
          </div>
          <h3 className="portfolio-title">{project.title}</h3>
          <p className="portfolio-description">{project.description}</p>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </section>
         </div>
      </div>
    )
}