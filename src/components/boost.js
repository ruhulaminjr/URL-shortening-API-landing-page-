import styled from "styled-components";
import boostbg from "../img/bg-boost-desktop.svg";
const Boost = () => {
    return (
      <Boostdiv>
        <div className="container boost">
          <h1>Boost your links today</h1>
          <button> Get Started</button>
        </div>
      </Boostdiv>
    );
};
 const Boostdiv = styled.div`
   background: hsl(257, 27%, 26%);
   padding: 0.5rem 0;
   background-image: url(${boostbg});
   .boost {
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     h1 {
       color: #fff;
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
   @media (max-width: 950px){
     .boost{
       h1{
         font-size: 1.2rem;
       }
     }
   }
 `;
export default Boost;