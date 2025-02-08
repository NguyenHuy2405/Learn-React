import videoHomepgae from "../../assets/video-homepage.mp4";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepgae} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-one">There's a better way to ask</div>
        <div className="title-two">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead-and make everyone happy.
        </div>
        <button className="title-three">Get's started. It's free </button>
      </div>
    </div>
  );
};
export default HomePage;
