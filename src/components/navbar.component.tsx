const Navbar = () => {
  return (
    <div className="flex justify-end list-none p-10">
      <li className="p-2 hover:underline hover:white font-bold text-white hover:text-purple-600">
        <a href="/">Inicio</a>
      </li>
      <li className="p-2 hover:underline hover:white font-bold text-white hover:text-purple-600">
        <a href="#aboutMe">Acerca de mi</a>
      </li>
      <li className="p-2 hover:underline hover:white font-bold text-white hover:text-purple-600">
        <a href="#courses">Certificaciones</a>
      </li>
      <li className="p-2 hover:underline hover:white font-bold text-white hover:text-purple-600">
        <a href="#projects">Proyectos Publicados</a>
      </li>
    </div>
  );
};

export default Navbar;
