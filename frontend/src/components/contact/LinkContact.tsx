import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LinkContact = () => {

    const contact = (href:string, icon:React.JSX.Element) => {
        return (
            <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-[var(--color-accent-light)] dark:hover:text-[var(--color-accent-dark)] transition-colors text-2xl mx-2"
            >
                {icon}
            </a>
        )
    }

  return (
    <div className='flex flex-row gap-2'>
        {contact("https://github.com/MFlorO?tab=repositories", <FaGithub size="2rem" />)}
        {contact("https://www.linkedin.com/in/florencia-oldani/", <FaLinkedin size="2rem"/>)}
        {contact("https://www.linkedin.com/in/florencia-oldani/", <MdEmail size="2rem"/>)}
    </div>
  )
}

export default LinkContact;
