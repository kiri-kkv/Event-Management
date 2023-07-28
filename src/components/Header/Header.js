import "../Header/Header.css";
import { MainHeading, LinkHref } from "../../styledCss";

const Header = () => {
  return (
    <header className="header">
      <MainHeading>EventHub</MainHeading>
      <div className="links">
        <LinkHref>Sign-in</LinkHref>
        <LinkHref>Sign-up</LinkHref>
      </div>
    </header>
  );
};

export default Header;
