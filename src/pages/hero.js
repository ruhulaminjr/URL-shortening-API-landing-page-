import styled from "styled-components";
import working from "../img/illustration-working.svg";
const Hero = () => {
  return (
    <Herodiv>
      <div className="container intro">
        <div className="left">
          <div className="content">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="right">
          <img src={working} alt="working" />
        </div>
      </div>
    </Herodiv>
  );
};

const Herodiv = styled.div`
  padding: 2rem 0;
  padding-bottom: 7rem;

  .intro {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    .left {
      width: 45%;
      .content {
        h1 {
          line-height: 1.2;
          color: hsl(255, 11%, 22%);
          letter-spacing: 1px;
          font-weight: bold;
          font-size: 3rem;
        }
      }
      p {
        color: hsl(257, 7%, 63%);
      }
      button {
        background: transparent;
        border: none;
        padding: 0.5rem 1rem;
        color: #fff;
        font-size: 15px;
        background: hsl(180, 66%, 49%);
        border-radius: 1rem;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    .right {
      width: 45%;
    }
  }
  @media (max-width: 1400px) {
    .intro {
      .left {
        width: 100%;
        .content {
          h1 {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
  @media (max-width: 1100px) {
    .intro {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      .left {
        order: 2;
        .content {
          text-align: center;
        button{
          padding: .8rem 2rem;
          font-size: 80%;
          border-radius: 1rem;
        }
      }
    }
          .right{
        order: 1;
        width: 100%;
        img{
          max-width: 100%;
        }
      }
  }
`;

export default Hero;
