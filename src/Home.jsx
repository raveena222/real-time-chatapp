import NavDetails from "./NavDetails";
import Sidebar from "./Sidebar";
import ChatSection from "./ChatSection";
import Profile from "./Profile";

function Home({ tog, handleTog }) {
  return (
    <>
      <NavDetails handleTog={handleTog} />
      {tog ? <Profile handleTog={handleTog}/> : <Sidebar handleTog={handleTog} />}
      <ChatSection />
    </>
  );
}

export default Home;
