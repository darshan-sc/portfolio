// src/components/Contact.tsx
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-bg py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl text-text mb-8">
          Contact Me
        </h2>
        <ul className="inline-flex space-x-12">
          <li>
            <a
                href="https://www.linkedin.com/in/darshan-se/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-accent transition"
                aria-label="LinkedIn"
              >
              <AiFillLinkedin className="text-4xl mb-2" />
              <span className="font-body">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:darshanjainc@gmail.com"
              className="flex flex-col items-center text-text hover:text-accent transition"
            >
              <AiOutlineMail className="text-4xl mb-2" />
              <span className="font-body">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
