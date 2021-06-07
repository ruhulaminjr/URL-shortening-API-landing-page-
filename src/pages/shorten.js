
import styled from "styled-components";
import ShortUrl from "../components/shorturl";
import Statistics from "../components/statistics";
import shortbg from "../img/bg-shorten-desktop.svg";
const Shorten = ({loading,isloading,ispending,errmsg,inputHandler,shorturlHandler,data,longnurl}) => {
 
  return (
    <Shortendiv>
      <div className="container input-section">
        <form onSubmit={shorturlHandler}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={longnurl}
            onChange={inputHandler}
            required
          />
          {!ispending ? (
            <button type="submit">Shorten It!</button>
          ) : (
            <button type="submit" disabled>
              Shortening...
            </button>
          )}
        </form>
        {errmsg && <div className="em">{errmsg}</div>}

        {!loading &&
          data.map((url) => (
            <ShortUrl
              Link={url.result.original_link}
              shortlink={url.result.full_short_link}
              key={url.result.full_short_link}
            />
          ))}
      </div>
      <Statistics />
    </Shortendiv>
  );
};

const Shortendiv = styled.div`
  padding: 2rem 0;
  background: #eaebf0;
  .input-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    }
    form {
      padding: 2rem 1rem;
      position: relative;
      background: hsl(257, 27%, 26%);
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      border-radius: 0.5rem;
      background-image: url(${shortbg});
      }

      input {
        padding: 0.8rem;
        flex-basis: 60%;
        outline: none;
        border: none;
        border-radius: 0.2rem;
      }
      button {
        background: transparent;
        position: relative;
        border: none;
        padding: 0.5rem 1rem;
        color: #fff;
        font-size: 15px;
        background: hsl(180, 66%, 49%);
        border-radius: 0.5rem;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  @media (max-width: 1100px) {
    padding: 1rem;
    .input-section {
      form {
        flex-direction: column;
        gap: 2rem;
        padding: 1.5rem;
        input {
          width: 100%;
        }
        button {
          width: 100%;
        }
      }
    }
  }
`;
export default Shorten;
