import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MyBank – Financial SaaS Platform",
    description:
      "A full-featured banking platform with Plaid & Dwolla integration for real-time transactions and analytics.",
    image: "/projects/prjoect1.png",
    tags: ["Next.js", "TypeScript", "Chart.js", "ShadCN", "Appwrite"],
    githubUrl: "https://github.com/saadbindawlat/MyBank",
  },
  {
    id: 2,
    title: "EventSphere – Event Management App",
    description:
      "A scalable platform to host, browse, and register for events with secure authentication and SSR features.",
    image: "/projects/project2.png",
    tags: ["Next.js", "TailwindCSS", "Clerk", "MongoDB", "ShadCN"],
    githubUrl: "https://github.com/saadbindawlat/EventSphere",
  },
  {
    id: 3,
    title: "FaceDetection – Mask Detection with CNN",
    description:
      "A deep learning model using CNNs to classify images for mask detection with real-time OpenCV inference.",
    image: "/projects/project3.jpg",
    tags: ["Python", "TensorFlow", "OpenCV", "Kaggle API"],
    githubUrl: "https://github.com/saadbindawlat/FaceDetection",
  },
  {
    id: 4,
    title: "Credit Card Fraud Detection – ML Model",
    description:
      "A machine learning model using Logistic Regression, Random Forest, and Decision Trees to detect fraudulent credit card transactions from imbalanced datasets.",
    image: "/projects/project4.png",
    tags: ["Python", "Pandas", "Scikit-learn", "imbalanced-learn (SMOTE)"],
    githubUrl: "https://github.com/saadbindawlat/Credit-Card-Fraud-Detection",
  },
  {
    id: 5,
    title: "Kivi Game – Java Swing Board Game",
    description:
      "A 2D turn-based board game with AI vs Human gameplay, color-blind support, and Java Swing-based interactive UI. Developed as a team project for COMP 2005.",
    image: "/projects/kivigame.png",
    tags: ["Java", "Swing", "OOP", "AI", "Team Project"],
    githubUrl: "https://github.com/saadbindawlat/Kivi-Game",
  },
  {
    id: 6,
    title: "Flappy Bird – Java Arcade Game",
    description:
      "A desktop arcade game built in Java where the player guides a bird through moving pipes using keyboard controls.",
    image: "/projects/flappybird.jpg",
    tags: ["Java", "Swing", "Pixel Art", "Game Development"],
    githubUrl: "https://github.com/saadbindawlat/Flappy-Bird",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built with a focus
          on functionality, clarity, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-start">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/saadbindawlat"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
