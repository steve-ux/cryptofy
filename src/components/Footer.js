import LogoLinkedIn from "../assets/LinkedIn-red.png";
import LogoInstagram from "../assets/Instagram-red.png";
import LogoGitHub from "../assets/GitHub-red.png";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footerContainer">
        <div className="containerFooter">
            <a href="https://www.linkedin.com/in/estebanok/" target="_blank" rel="noreferrer"><img src={LogoLinkedIn} width="60" alt="Logo LinkedIn"/></a>
            <a href="https://www.instagram.com/esteban_instaok/" target="_blank" rel="noreferrer"><img src={LogoInstagram} width="60" alt="Logo Instagram"/></a>
            <a href="https://github.com/steve-ux" target="_blank" rel="noreferrer"><img src={LogoGitHub} width="60" alt="Logo GitHub"/></a>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;