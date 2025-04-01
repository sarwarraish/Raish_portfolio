
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 md:px-12 bg-navy text-white border-t border-lightNavy">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate text-sm mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Md Sarwar Raish. All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/sarwarraish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/sarwarraish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="mailto:sarwarraish98@gmail.com"
              className="text-slate hover:text-teal transition-colors"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-4 text-xs text-slate/60 text-center">
          <p>
            Designed & Built with ❤️ by Md Sarwar Raish
          </p>
          <div className="mt-1">
            <span className="text-white/0 select-none">
              Entry-level React developer portfolio, Full-stack internship candidate, JavaScript developer seeking opportunities, 
              Hybrid/remote software engineering roles, Recent graduate with MERN stack skills, Freelance React developer available,
              Open to worldwide software opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
