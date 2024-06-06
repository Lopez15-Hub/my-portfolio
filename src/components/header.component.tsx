import Navbar from "./navbar.component";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-700 relative">
      <Navbar />
      <div className="flex flex-col text-center md:text-start md:flex-row justify-start  p-20  ">
        <img
          className="rounded-full p-1 bg-white w-40 h-40 my-auto  mx-10 "
          src="https://media.licdn.com/dms/image/D4D03AQHvX5WOyuvhHA/profile-displayphoto-shrink_800_800/0/1714350190482?e=1723075200&v=beta&t=AyIZqP1iVlYGP3JDmOC0NtDdGkFX8faVN1uR9eoJNMM"
          alt=""
        />
        <div className=" ">
          <h1 className="text-3xl my-4 md:text-6xl font-bold md:my-auto  text-white">
            Ezequiel López
          </h1>
          <h3 className="text-xl md:text-4xl font-light my-auto mt-10 text-white font-mono">
            <code>Desarrollador de software</code>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
