import { Briefcase, Code, User, BrainCircuit } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I'm a Computer Science student at Memorial University of Newfoundland and Labrador, specializing in building responsive, accessible, and high-performing web applications using modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive software and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building intelligent systems using machine learning algorithms, neural networks, and real-world data to solve complex problems.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-muted-foreground max-w-3xl mx-auto space-y-4">
            <li>
              <a
                href="https://www.credly.com/badges/070e35d3-02e3-4d08-a86f-87305f6231bb/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                AWS Cloud Practitioner
              </a>
              <p>
                Demonstrated foundational knowledge of AWS services, architecture,
                security, and cloud computing concepts.
              </p>
            </li>
            <li>
              <a
                href="https://www.credly.com/badges/21e57f1b-a3aa-4763-a022-bd609261d0e8/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                AWS AI Practitioner
              </a>
              <p>
                Gained practical understanding of artificial intelligence,
                including machine learning, neural networks, and responsible AI principles.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
