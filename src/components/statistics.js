import styled from "styled-components";
import brand from "../img/icon-brand-recognition.svg";
import details from "../img/icon-detailed-records.svg";
import custom from "../img/icon-fully-customizable.svg";

const Statistics = () => {
    return (
      <Statisticdiv>
        <div className="container">
          <div className="title">
            <h1>Advanced Statistics</h1>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="card-section">
            <div className="card">
              <div className="logo">
                <img src={brand} alt="brand logo" />
              </div>
              <h1>Brand Recognition</h1>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className="card card2">
              <div className="logo">
                <img src={details} alt="details icon" />
              </div>
              <h1> Detailed Records</h1>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className="card card3">
              <div className="logo">
                <img src={custom} alt="customize" />
              </div>
              <h1>Fully Customizable</h1>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </Statisticdiv>
    );
}

const Statisticdiv = styled.div`
  margin-top: 2rem;
  .title {
    width: 62%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      color: hsl(255, 11%, 22%);
      font-weight: 700;
      font-size: 2.5;
      margin: 0rem;
      text-align: center;
    }
    p {
      margin: 0;
      text-align: center;
      color: hsl(257, 27%, 26%);
      opacity: 0.8;
    }
  }
  .card-section {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 1.5rem;
    z-index: 5;
    &::after {
      content: "";
      position: absolute;
      width: 50%;
      height: 0.5rem;
      background: hsl(180, 66%, 49%);
      z-index: -1;
    }
    .card2 {
      margin-top: 10%;
    }
    .card3 {
      margin-top: 20%;
    }
    .card {
      background: #fff;
      padding: 5rem 3rem 3rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      position: relative;
      border-radius: 0.5rem;
      .logo {
        background: hsl(260, 8%, 14%);
        padding: 1.5rem;
        border: 1px solid transparent;
        border-radius: 50%;
        position: absolute;
        top: -10%;
        left: 5%;
        display: inline-block;
      }
      h1 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 1100px) {
    .title {
      width: 100%;
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 80%;
      }
    }
  }
  @media (max-width: 1630px) {
    .card-section {
      gap: 1rem;
      .card {
        padding: 5rem 1rem 1rem 1rem;
        .logo{
          padding: 1rem;
        }
        h1{
          font-size: 1rem;
        }
        p{
          font-size: 90%;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .card-section {
      margin-top: 5rem;
      flex-direction: column;
      .card {
        .logo {
          left: 50%;
          transform: translate(-50%, -10%);
        }
      }
      &::after {
        content: "";
        position: absolute;
        width: 0.5rem;
        height: 50%;
        background: hsl(180, 66%, 49%);
        z-index: -1;
      }
    }
  }
  @media (max-width: 450px) {
    .card-section {
      .card {
        padding: 5rem 1rem 1rem 1rem;
        text-align: center;
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 80%;
        }
      }
    }
  }
`;
export default Statistics;