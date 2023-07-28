import { Container, Button, LinkHref, Paragraph } from "../../styledCss";
import { useRef } from "react";
import TextInput from "../Helper/InputField";

const Login = () => {
  const passwordInput = useRef("");
  const emailInput = useRef("");

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

  const resetForm = () => {
    passwordInput.current.value = "";
    emailInput.current.value = "";
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!passwordError || !emailError) return;

    resetForm();
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

          <Button>Login</Button>
          <Paragraph style={{ marginTop: "1rem" }}>
            Don't have an account{" "}
            <LinkHref style={{ color: "blue", fontSize: "1.3rem" }}>
              Register here
            </LinkHref>
          </Paragraph>
        </form>
      </Container>
    </div>
  );
};

export default Login;
