import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaDiscord, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/VexScythe' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <FaDiscord />, path: '' },
  { icon: <FaInstagram />, path: '' },
];

interface SocialsProp {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProp) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, i) => {
        return (
          <Link key={i} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
