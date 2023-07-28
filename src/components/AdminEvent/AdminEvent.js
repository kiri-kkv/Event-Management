import { Container, Button, Select, Label } from "../../styledCss";
import { useRef } from "react";
import TextInput from "../Helper/InputField";

const AddminMovieForm = () => {
  const imageInput = useRef("");
  const eventNameInput = useRef("");
  const eventTypeInput = useRef("");
  const ticketPriceInput = useRef("");
  const venueInput = useRef("");
  const dateInput = useRef("");
  const timeInput = useRef("");

  // const resetForm = () => {
  //   nameInput.current.value = "";
  //   passwordInput.current.value = "";
  //   emailInput.current.value = "";
  //   console.log(passwordInput);
  //   console.log(confirmPasswordInput);
  //   confirmPasswordInput.current.value = "";
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Container style={{ marginBottom: "2rem" }}>
      <form onSubmit={formSubmitHandler}>
        <TextInput
          type="file"
          label="Image "
          ref={imageInput}
          id="image"
          htmlFor="image"
          required
        ></TextInput>

        <TextInput
          type="text"
          label="Event name "
          ref={eventNameInput}
          id="eventname"
          htmlFor="eventname"
          required
        ></TextInput>

        <div>
          <Label htmlFor="eventtype">Event type</Label>
          <Select ref={eventTypeInput} style={{ marginBottom: "1rem" }}>
            <option value="movie">Movie</option>
            <option value="concetr">Concert</option>
            <option value="sport">Sport</option>
            <option value="marrige">Marrige</option>
          </Select>
        </div>

        <TextInput
          type="number"
          label="Ticket price "
          id="price"
          htmlFor="price"
          ref={ticketPriceInput}
          required
        ></TextInput>

        <TextInput
          type="textbox"
          label="Venue "
          id="venue"
          htmlFor="venue"
          rel={venueInput}
          required
        ></TextInput>

        <TextInput
          type="date"
          label="Date "
          id="date"
          htmlFor="date"
          rel={dateInput}
          required
        ></TextInput>

        <TextInput
          type="time"
          label="Time "
          id="time"
          htmlFor="time"
          rel={timeInput}
          required
        ></TextInput>

        <Button>Add Event</Button>
      </form>
    </Container>
  );
};

export default AddminMovieForm;
