import { DiDart } from "react-icons/di";
import { FaPython, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiFlutter, SiNestjs } from "react-icons/si";
import Section from "./section.component";
import { IoMdBrowsers } from "react-icons/io";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Section title="Biografía">
        <p>
          Tengo 21 años y llevo casí dos trabajando en el sector de tecnología
          tanto de forma independiente cómo en equipo. Me gusta crear proyectos
          escalables e iterables aplicando Metodologias ágiles y SOLID que
          permitan establecer estándares que a futuro beneficien tanto al
          desarrollo cómo a mi equipo. Me considero entusiasta y autodidacta.
          Aprovecho mis tiempos libres para perfeccionar mis habilidades tanto
          de tecnología, cómo blandas para el trabajo en equipo.
        </p>
        <p className="text-2xl my-10">
          <code>Principales Tecnologías</code>
        </p>
        <div className="flex justify-center text-6xl  bg-gradient-to-r  text-white p-4 rounded-full from-indigo-700 to-purple-700">
          <FaPython className="mx-2 my-auto" />
          <IoLogoJavascript className="mx-2 my-auto" />
          <SiTypescript className="mx-2 my-auto" />
          <SiFlutter className="mx-2 my-auto" />
          <SiNestjs className="mx-2 my-auto" />
          <DiDart className="mx-2 my-auto" />
        </div>
      </Section>
      <Section title="Redes sociales y contacto">
        <h2>Redes sociales</h2>
        <ul className="social-list font-bold">
          <li className="flex my-2">
            <a
              href="https://linkedin.ezequiellopez.ar/"
              target="_blank"
              className="flex"
            >
              <FaLinkedinIn className="text-indigo-300 ml-2 mr-2 my-auto" />{" "}
              <p className="text-gray-600">Linkedin</p>
            </a>
          </li>
          <li className="flex my-2">
            <a
              href="https://ezequiellopez.ar/"
              target="_blank"
              className="flex"
            >
              <IoMdBrowsers className="text-indigo-300 ml-2 mr-2 my-auto" />{" "}
              <p className="text-gray-600">Web Personal</p>
            </a>
          </li>
        </ul>

        <h2>Datos de contacto</h2>
        <ul className="font-bold">
          <li className="flex my-2">
            <a
              href="mailto:contacto@ezequiellopez.ar"
              target="_blank"
              className="flex"
              rel="noopener noreferrer"
            >
              {" "}
              <FaEnvelope className="text-indigo-300 ml-2 mr-2 my-auto" />{" "}
              <p className="text-gray-600">contacto@ezequiellopez.ar</p>
            </a>
          </li>
          <li className="flex my-2">
            <a
              href="tel:+5492996562742"
              target="_blank"
              className="flex"
              rel="noopener noreferrer"
            >
              {" "}
              <FaPhone className="text-indigo-300 ml-2 mr-2 my-auto" />{" "}
              <p className="text-gray-600">+54 9 299 656 2742</p>
            </a>
          </li>
        </ul>

        <h2 className="my-4">Horarios</h2>
        <p className="text-light text-gray-700">
          Lunes a viernes de 09:00 a 18:00hs
        </p>
      </Section>
    </div>
  );
};

export default AboutMe;
