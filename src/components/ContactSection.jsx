import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex justify-center items-center">
          <div className="space-y-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:sbdawlat@mun.ca"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sbdawlat@mun.ca
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+17096851100"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 709-685-1100
                  </a>
                </div>
              </div>

              {/* Location (spacing reduced more) */}
              <div className="flex items-center space-x-1 justify-center">
                <div className="p-3 rounded-full bg-primary/10 ml-6">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    St. John's, NL, Canada
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/saadbindawlat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/saadbindawlat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
