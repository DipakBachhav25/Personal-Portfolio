import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/dipakbachhavLogo.png"
import { FaSquareTwitter, FaSquareXTwitter } from "react-icons/fa6"
import { SiCodechef, SiLeetcode } from "react-icons/si"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="space-x-0" width={73} height={70} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/dipak-bachhav-422144253/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin />

            </a>
            <a href="https://github.com/DipakBachhav25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaGithub />

            </a>
            <a href="https://www.codechef.com/users/sesrc_62"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Codechef">
                    <SiCodechef />

            </a>
            <a href="https://leetcode.com/u/dipak_25/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode">
                    <SiLeetcode />

            </a>
        </div>
    </nav>
  )
}

export default Navbar