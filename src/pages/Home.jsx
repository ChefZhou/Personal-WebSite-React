import Footer from "../ui/Footer";

import Header from "../ui/Header";

import SideBar from "../ui/SideBar";

function Home() {
  return (
    <>
      <div>
        <Header>Denny Zhou的個人網站</Header>
      </div>
      <div>
        <SideBar />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
