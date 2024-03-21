import SearchBar from "../../components/searchBar/SearchBar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find real state & get your dream place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            delectus sed quis et corrupti sapiente ea iusto reiciendis possimus
            cum repudiandae at earum quae dolore excepturi nostrum deserunt,
            fugit consequatur asperiores! Sequi tenetur reprehenderit facilis!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>property Ready</h2>
            </div>
            <div className="box">
              <h1>1200</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="img" />
      </div>
    </div>
  );
};

export default Home;
