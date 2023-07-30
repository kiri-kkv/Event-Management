import "../Header/Header.css";
import { MainHeading, LinkHref } from "../../styledCss";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { loggedInUser } from "../Helper/userSlice";

const Header = () => {
  const user=useSelector((state)=>state.auth.currentUser);
  const dispatch=useDispatch();

  const loggedOutUser=()=>{
    dispatch(loggedInUser(null));
  }

  return (
    <header className="header">
      <MainHeading>EventHub</MainHeading>
      <div className="links">
        { user==null && <Link to="/"><LinkHref>Sign-in</LinkHref></Link> }
        { user!=null && <Link to="/"><LinkHref onClick={loggedOutUser}>Sign-up</LinkHref></Link> }
      </div>
    </header>
  );
};

export default Header;
