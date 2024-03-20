import Nav from "./Nav";

const Header: React.FC = () => {
  return (
    <header className="min-w-svw min-h-52 bg-emerald-800">
      <div className="p-2 min-w-full flex justify-center">
        <h1 className="text-6xl text-sky-600 font-bold font-  flex flex-col items-center">
          <span className="font-mono text-5xl text-sky-500 font-bold">
            chatGPT
          </span>
          <br />
          Drug Analysis
        </h1>
      </div>

      <nav className="min-w-full flex justify-center mt-6">
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
