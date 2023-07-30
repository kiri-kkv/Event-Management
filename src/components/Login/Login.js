import { Container, Button, LinkHref, Paragraph } from "../../styledCss";
import { useRef,useState } from "react";
import TextInput from "../Helper/InputField";
import {useSelector} from "react-redux";
import {useHistory,Link} from "react-router-dom";
import { loggedInUser } from "../Helper/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const passwordInput = useRef("");
  const emailInput = useRef("");

  const [isValid,setIsValid]=useState(false);

  const users=useSelector((state)=>state.auth.users);

  const history=useHistory();
  const dispatch=useDispatch();

  let emailError = false,
    passwordError = false;

  const passwordHandler = (value) => {
    passwordError = value !== "" && value.length > 5;
    return passwordError ? "" : "Enter proper name";
  };

  const emailHandler = (value) => {
    emailError = value !== "" && value.includes("@gmail.com");
    return emailError ? "" : "Enter proper name";
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!passwordError || !emailError) return;

    let email=emailInput.current.value,password=passwordInput.current.value;
    if(email==="admin989@gmail.com" && password==="admin@123"){
      dispatch(loggedInUser("admin"));
      setIsValid(false);
      history.push("/Events");
    }
    else if(!users.hasOwnProperty(email) || users[email].password!==password){
       setIsValid(true);
    }
    else{ 
      setIsValid(false); 
      dispatch(loggedInUser(users[email].name));
      history.push("/Events"); 
    }
  };

  return (
    <div>
      <Container>
        <form onSubmit={formSubmitHandler}>
          <TextInput
            type="email"
            label="Email "
            ref={emailInput}
            validation={emailHandler}
            id="email"
            htmlFor="email"
          ></TextInput>

          <TextInput
            type="password"
            label="Password"
            id="password"
            htmlFor="password"
            ref={passwordInput}
            validation={passwordHandler}
          ></TextInput>

          {isValid && <Paragraph style={{ marginTop: "1rem" }}>Email or password is incorrect</Paragraph>}

          <Button>Login</Button>
          <Paragraph style={{ marginTop: "1rem" }}>
            Don't have an account{" "}
            <Link to="/Register"><LinkHref style={{ color: "blue", fontSize: "1.3rem" }}>
              Register here
            </LinkHref></Link>
          </Paragraph>
        </form>
      </Container>
    </div>
  );
};

export default Login;
