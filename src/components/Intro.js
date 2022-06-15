import Selfie from "../assets/backgroundPlaceholder.jpg";
import "../styles/Intro.css";

const Intro = () => {
  return (
    <div className="introContainer">
      {/*<div className="introLeft" style={{ backgroundImage: `url(${Selfie})` }}>*/}

      <div className="introLeft">
        <div className="tag">
          <h1>Hi, I'm </h1>
          <h1>Youngwoo</h1>
        </div>

      </div>
    </div>
  );
};

export default Intro;
