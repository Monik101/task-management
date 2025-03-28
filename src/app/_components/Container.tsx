import Header from "./Header";
import Main from "./Main";

function Container() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[##EFEFEF] to-[#E5EBF1]">
      <Header />
      <Main />
    </div>
  );
}

export default Container;
