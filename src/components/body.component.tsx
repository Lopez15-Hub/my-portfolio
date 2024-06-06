import AboutMe from "./about-me.component";
import Card from "./card.component";
import Section from "./section.component";

const Body = () => {
  return (
    <main>
      <AboutMe />
      <Section sectionId="courses" title="Certificaciones">
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
      <Section sectionId="projects" title="Proyectos publicados">
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
    </main>
  );
};

export default Body;
