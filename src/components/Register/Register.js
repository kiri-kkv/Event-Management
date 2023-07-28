import { Container, Button, Paragraph, LinkHref } from "../../styledCss";
import { useRef } from "react";
import TextInput from "../Helper/InputField";

const Register = () => {
  const nameInput = useRef("");
  const passwordInput = useRef("");
  const emailInput = useRef("");
  const confirmPasswordInput = useRef("");

  let nameError = false,
    emailError = false,
    passwordError = false,
    confirmPasswordError = false;

  let password = "";

  const nameHandler = (value) => {
    nameError = value !== "" && value.length > 5;
    return nameError ? "" : "Enter proper name";
  };

  const passwordHandler = (value) => {
    password = value;
    passwordError = value !== "" && value.length > 5;
    return passwordError ? "" : "Enter proper name";
  };

  const emailHandler = (value) => {
    emailError = value !== "" && value.includes("@gmail.com");
    return emailError ? "" : "Enter proper name";
  };

  const confirmPasswordHandler = (value) => {
    confirmPasswordError = value === password;
    return confirmPasswordError ? "" : "Password should be same";
  };

  const resetForm = () => {
    nameInput.current.value = "";
    passwordInput.current.value = "";
    emailInput.current.value = "";
    console.log(passwordInput);
    console.log(confirmPasswordInput);
    confirmPasswordInput.current.value = "";
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(nameError, passwordError, emailError, confirmPasswordError);
    if (!nameError || !passwordError || !emailError || !confirmPasswordError)
      return;

    resetForm();
  };

  return (
    <Container>
      <form onSubmit={formSubmitHandler}>
        <TextInput
          type="text"
          label="Name "
          ref={nameInput}
          validation={nameHandler}
          id="name"
          htmlFor="name"
        ></TextInput>

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

        <TextInput
          type="password"
          label="Confirm password"
          id="confirm_password"
          htmlFor="confirm_password"
          rel={confirmPasswordInput}
          validation={confirmPasswordHandler}
        ></TextInput>

        <Button>Register</Button>
        <Paragraph style={{ marginTop: "1rem" }}>
          Already have an account{" "}
          <LinkHref style={{ color: "blue", fontSize: "1.5rem" }}>
            Login
          </LinkHref>
        </Paragraph>
      </form>
    </Container>
  );
};

export default Register;
