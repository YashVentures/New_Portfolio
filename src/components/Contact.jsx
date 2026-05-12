import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaTelegram } from 'react-icons/fa'
import site from '../data/site.json'
import './Contact.css'

const Contact = () => {
  const { contact, person } = site
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">
          &copy; {year} {person.copyrightName}. All rights reserved.
        </p>
        <div className="footer-social">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a href={`mailto:${contact.email}`} className="footer-social-icon" aria-label="Email">
            <FaEnvelope />
          </a>
          {contact.phone ? (
            <a href={`tel:${contact.phone}`} className="footer-phone-link" aria-label="Phone">
              <FaPhoneAlt />
              <span>{contact.phone}</span>
            </a>
          ) : null}
          {contact.telegram ? (
            <a
              href={contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  )
}

export default Contact
