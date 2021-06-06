import { useEffect, useState } from "react";
import Boost from "../components/boost";
import Footer from "../components/footer";
import Hero from "./hero";
import Navbar from "./Navbar";
import Shorten from "./shorten";

const Home = () => {
  const [longnurl, setLongurl] = useState("");
  const [data, setData] = useState([]);
  const [loading, isloading] = useState(true);
  const [ispending, setispending] = useState(false);
  const [errmsg, seterrmsg] = useState(null);
  const inputHandler = (e) => {
    setLongurl(e.target.value);
  };
  const shorturlHandler = (e) => {
    e.preventDefault();
    setispending(true);
    const fetchurl = `https://api.shrtco.de/v2/shorten?url=${longnurl}`;
    fetch(fetchurl)
      .then((res) => {
        if (!res.ok) {
          throw Error("Something Went Wrong");
        }
        return res.json();
      })
      .then((apidata) => {
        setData([...data, apidata]);
        // console.log(data.result);
        isloading(false);
        setispending(false);
      })
      .catch((error) => {
        seterrmsg(error.message);
      });
    setLongurl("");
  };
  useEffect(() => {
    const localdata = localStorage.getItem("short-Link-List");
    if (localdata) {
      setData(JSON.parse(localdata));
      isloading(false)
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("short-Link-List", JSON.stringify(data));
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <Shorten loading={loading} isloading={isloading} ispending={ispending} errmsg={errmsg} inputHandler={inputHandler} shorturlHandler={shorturlHandler} data={data} longnurl={longnurl}/>
      <Boost />
      <Footer />
    </div>
  );
};

export default Home;
