import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Sorry,Page cannot found</h3>
      <Link to="/" className="btn">
        Back home
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 6rem;
    margin-bottom: 1.5rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
