import React from "react";
import Chip from "./chip.component";

const Card: React.FC<{
  title: string;
  releaseDate?: string;
  type?: string;
  platform?: "Android" | "iOS" | "Web" | "Desktop";
  photoUrl: string;
}> = ({ platform, releaseDate, type, title, photoUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow">
      <header className="bg-indigo-100 p-4 rounded-t-lg">
        <h2 className="font-bold text-indigo-600 text-center text-2xl">
          {title}
        </h2>
      </header>
      <div className="text-center">
        <img
          src={photoUrl}
          alt="Imagen de la tarjeta"
          className="mx-auto my-auto items-center justify-center flex"
        />
        {(platform || releaseDate || type) && (
          <>
            <hr />
            <div className="ml-4 flex justify-between p-4 ">
              {releaseDate && (
                <section className="mx-auto text-center my-auto w-full flex flex-col justify-between">
                  <p className="font-light  my-4">Fecha de salida</p>
                  <Chip label={releaseDate} />
                </section>
              )}
              {type && (
                <section className="mx-auto text-center my-auto w-full flex flex-col justify-between">
                  <p className="font-light  my-4">Tipo de proyecto </p>
                  <Chip label={type} />
                </section>
              )}

              {platform && (
                <section className="mx-auto text-center my-auto w-full flex flex-col justify-between">
                  <p className="font-light  my-4">Plataforma </p>
                  <Chip label={platform} />
                </section>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
