import styled from "styled-components";

export const MainHeading = styled.h1`
  color: white;
  font-size: 2rem;
`;

export const LinkHref = styled.a`
  color: white;
  cursor: pointer;
  border-bottom: white 1px solid;
  font-size: 1rem;
  align-self: baseline;
`;

export const Container = styled.main`
  position: relative;
  margin: 4rem auto 2rem auto;
  width: 60%;
  background-image: linear-gradient(
      105deg,
      rgba(162, 196, 233, 0.8) 0%,
      rgba(162, 196, 233, 0.8) 50%,
      rgba(18, 81, 145, 0) 50%
    ),
    url("https://hire4event.com/blogs/wp-content/uploads/2019/05/Event-Management-Proposal-Hire4event.jpg");
  padding: 2rem;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: white;
  width: 10rem;
  display: block;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  width: 15rem;
  border: 1px solid #ebe4e4;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  margin-top: 1rem;
  font-size: 1.3rem;
  padding: 1rem;
  background-color: white;
  color: blue;
  border-radius: 2rem;
  border: none;
  width: 12rem;
  cursor: pointer;
  font-weight: 800;
`;

export const Paragraph = styled.p`
  color: rgb(4, 4, 56);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const Select = styled.select`
  margin-bottom: 1rem;
  width: 15rem;
  padding: 0.8rem;
`;
