import { useRef, useState } from "react";
import styled from "styled-components";

const ShortUrl = ({ Link, shortlink }) => {
  const inputel = useRef(null);
  const [clicked, setClicked] = useState(false);
  const copyHandler = () => {
    console.log(inputel.current);
    inputel.current.select();
    inputel.current.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setClicked(true);
  };
  return (
    <UrlDiv>
      <p>{Link}</p>
      {/* <p>{shortlink}</p> */}
      <div className="line"></div>
      <input type="text" ref={inputel} value={shortlink} readOnly />
      {clicked ? (
        <button onClick={copyHandler} className="copied">
          Copied!
        </button>
      ) : (
        <button onClick={copyHandler}>Copy</button>
      )}
    </UrlDiv>
  );
};
const UrlDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  padding: 0 1rem;
  gap: 2rem;
  width: 80%;
  .line {
    display: none;
  }
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
  }
  button {
    padding: 0.5rem;
    width: 50%;
    border: none;
    background: hsl(180, 66%, 49%);
    margin-left: auto;
  }
  .copied {
    color: #fff;
    background: hsl(257, 27%, 26%);
  }

  input {
    color: hsl(180, 66%, 49%);
    border: none;
    padding: 1rem 0;
    font-size: 1rem;
    outline: none;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    p {
      text-align: center;
      font-size: 80%;
    }
    .line {
      display: block;
      width: 100%;
      height: 2px;
      background: red;
    }
    padding: 1rem;
    gap: 0.5rem;
    button {
      width: 100%;
    }
  }
`;
export default ShortUrl;
