import { IoLogoJavascript } from "react-icons/io5";
import Card from "./presentation/components/card.component";
import Section from "./presentation/components/section.component";
import { FaLinkedinIn, FaEnvelope, FaPhone, FaPython } from "react-icons/fa";
import { SiFlutter, SiNestjs, SiTypescript } from "react-icons/si";
import { DiDart } from "react-icons/di";

const App = () => {
  return (
    <div className="container mx-auto shadow-xl">
      <div className="flex flex-col text-center md:text-start md:flex-row justify-start bg-gradient-to-r from-indigo-700 to-purple-700 p-20 relative ">
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
      <section>
        <div className="flex flex-col md:flex-row">
          <Section title="Biografía">
            <p>
              Tengo 21 años y llevo casí dos trabajando en el sector de
              tecnología tanto de forma independiente cómo en equipo. Me gusta
              crear proyectos escalables e iterables aplicando Metodologias
              ágiles y SOLID que permitan establecer estándares que a futuro
              beneficien tanto al desarrollo cómo a mi equipo. Me considero
              entusiasta y autodidacta. Aprovecho mis tiempos libres para
              perfeccionar mis habilidades tanto de tecnología, cómo blandas
              para el trabajo en equipo.
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
                  href="https://www.linkedin.com/in/ezequiellopez/"
                  target="_blank"
                  className="flex"
                >
                  <FaLinkedinIn className="text-indigo-300 ml-2 mr-2 my-auto" />{" "}
                  <p className="text-gray-600">Linkedin</p>
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
        <Section title="Certificaciones">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
              photoUrl="https://udemy-certificate.s3.amazonaws.com/image/UC-5c25713a-4e75-420d-9551-c56ae6b41918.jpg?v=1715889327000"
              title="Flutter Tu guía completa para IOS y Android"
            />
            <Card
              photoUrl="https://udemy-certificate.s3.amazonaws.com/image/UC-cac1be95-812f-4d42-9d6f-979bb29e9cfc.jpg?v=1669042384000"
              title="Principios SOLID  y Clean Code"
            />
            <Card
              photoUrl="https://cdn.filestackcontent.com/IsOq2MUSWyTHQNO4VGUg?policy=eyJjYWxsIjpbInBpY2siLCJzdG9yZSIsInJlYWQiLCJjb252ZXJ0Iiwid3JpdGUiLCJzdGF0IiwicmVtb3ZlIl0sImV4cGlyeSI6MTcxNzY1NDUyMSwicGF0aCI6Il42NDM1NjMvKGNvbW11bml0aWVzfGNvdXJzZXMpLyhbMC05XSspL3VzZXJzLzE1NjYyNTYxOC8ifQ%3D%3D&signature=053b22d71e4a85f8c8c0159b38baf9382d3088157bcc8e7ddb3504b84f22ae9a"
              title="Visual Studio Code: Mejora tu velocidad para codificar"
            />
            <Card
              photoUrl="https://cdn.filestackcontent.com/JLnV11oKQM2txqQwh1DE?policy=eyJjYWxsIjpbInBpY2siLCJzdG9yZSIsInJlYWQiLCJjb252ZXJ0Iiwid3JpdGUiLCJzdGF0IiwicmVtb3ZlIl0sImV4cGlyeSI6MTcxNzY1NDU4NSwicGF0aCI6Il42NDM1NjMvKGNvbW11bml0aWVzfGNvdXJzZXMpLyhbMC05XSspL3VzZXJzLzE1NjYyNTYxOC8ifQ%3D%3D&signature=fffc6b9273d4340b8566a2e47fd610bd0219cba89360465a376d83304ed6e26e"
              title="Riverpod: Provider con anotaciones"
            />
          </div>
        </Section>
        <Section title="Proyectos publicados">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
              photoUrl="https://play-lh.googleusercontent.com/aBzK6a61JWn3DaBN48ci14zAAdXKFET0ZoYkhzz9kL29EPumkBaiQA9P1ICt6p_QpPM=w416-h235-rw"
              platform="Android"
              releaseDate="Abril 2024"
              title="WeClub"
              type="Aplicación"
            />
            <Card
              photoUrl="https://play-lh.googleusercontent.com/F5grTxX14QHbFeb3U-i-ajP9idHz1EssGB_si9NK5BvdrQzInUlEhVCvNJrGV2ca=w416-h235-rw"
              platform="Android"
              releaseDate="Abril 2024"
              title="WeClub"
              type="Aplicación"
            />
            <Card
              photoUrl="https://play-lh.googleusercontent.com/5sb6eBzBJdLF0fLiVIPv7T7X7xcr4rkDcjYm07xTRDHnYInLw3GmJp1YSAxQOjmqbNU=w416-h235-rw"
              platform="Android"
              releaseDate="24-08-24"
              title="Flow"
              type="Aplicación"
            />
            <Card
              photoUrl="https://play-lh.googleusercontent.com/xaNG2Yn2_dmeZ0tKsS_mPUCls8CNzR9h_jK-87OTiBL9mVq95_AVhFXMEVOWgoHhcIo=w416-h235-rw"
              platform="Android"
              releaseDate="24-08-24"
              title="Mi Balance"
              type="Aplicación"
            />
          </div>
        </Section>
      </section>
      <footer className="flex justify-center container  my-auto p-10 border-t">
        <p className="items-center text-center   mx-auto font-light text-gray-800">
          2024 Ezequiel López® 's Portfolio | Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default App;
