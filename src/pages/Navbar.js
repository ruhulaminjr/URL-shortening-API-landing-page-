import { useState } from "react";
import styled from "styled-components";
import logo from '../img/logo.svg'

const Navbar = () => {
  const [toggle,settoggle] = useState(false);
    return (
      <Navbardiv>
        <div className="container">
          <nav>
            <img src={logo} alt="logo" />
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>

            <div className="nav-right">
              <span>Login</span>
              <button>Sign Up</button>
            </div>
            <div className="tooglenav change" onClick={()=>settoggle(!toggle)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </nav>
        </div>
        { toggle &&

      
        <div className="menu">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className="line"></div>
          <div className="login">
            <span>Login</span>
            <button>Sign Up</button>
          </div>
        </div>
}
      </Navbardiv>
    );
}
 
const Navbardiv = styled.div`
  .container {
    nav {
      display: flex;
      padding: 1rem 0;
      align-items: center;
      justify-content: space-around;

      ul {
        display: flex;
        gap: 2rem;
        list-style: none;
        align-items: center;
        li {
          color: hsl(0, 0%, 75%);
          cursor: pointer;
          &:hover {
            color: hsl(260, 8%, 14%);
          }
        }
      }
      .nav-right {
        display: flex;
        align-items: center;
        gap: 2rem;
        button {
          background: transparent;
          border: none;
          padding: 0.3rem 0.8rem;
          color: #fff;
          font-size: 15px;
          background: hsl(180, 66%, 49%);
          border-radius: 0.5rem;
          &:hover {
            opacity: 0.5;
          }
        }
        span {
          color: hsl(0, 0%, 75%);
          &:hover {
            color: hsl(260, 8%, 14%);
          }
        }
      }
    }
  }
  @media (max-width: 1100px) {
    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      background: hsl(257, 27%, 26%);
      padding: 1rem;
      border-radius: 0.5rem;
      gap: 1rem;
      justify-content: center;
      margin: 0 auto;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          color: hsl(0, 0%, 75%);
          font-size: 1.3rem;
        }
      }
      .line {
        width: 100%;
        height: 1px;
        background: hsl(0, 0%, 75%);
      }
      .login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        button {
          background: transparent;
          border: none;
          padding: 0.5rem 3rem;
          color: #fff;
          font-size: 1rem;
          background: hsl(180, 66%, 49%);
          border-radius: 0.5rem;
          &:hover {
            opacity: 0.5;
          }
        }
        span {
          color: hsl(0, 0%, 75%);
          font-size: 1.2rem;
          font-weight: 700;
        }
      }
    }
    .container {
      width: 100%;
      nav {
        img{
          width: 20%;
        }
        ul {
          display: none;
        }
        .nav-right {
          display: none;
        }
        .tooglenav {
          cursor: pointer;
          div {
            width: 30px;
            height: 3px;
            background-color: #333;
            margin: 6px 0;
            transition: 0.4s;
          }
        }
      }
    }
  }
`;
export default Navbar;