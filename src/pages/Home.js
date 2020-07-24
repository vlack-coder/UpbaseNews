import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Home = (props) => {
  const [data, setData] = useState([]);

  const authContext = useContext(AuthContext);
  const { isAuthenticated} = authContext;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push('/Login')
    }
    // eslint-disable-next-line
  }, [ isAuthenticated, props.history]);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=ng&apiKey=643ffe5a67f6465db7bacf8f430e6baa"
      );
      const dat = await response.json();
      console.log(dat);

      setData(dat.articles);
    };
    getNews();
  }, []);

  return (
    <div className="container">
      <div className="content">
        {data.map((item) => (
          <div key={item.title} className="newsItem">
            <div className='coco'>
              <div className="atit">
                <p>{item.title} </p>
              </div>
              <img className="img" src={item.urlToImage} />
              <div className="afoot">
                <p>{item.description} </p>
              </div>
            </div>
            <div class="details">
              <a href={item.url}>Read more here...</a>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
