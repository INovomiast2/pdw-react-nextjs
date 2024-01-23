import React from "react";
import Image from "next/image";
import Link from "next/link";

const C1EX04 = () => {
  return (
    <div className="w-full h-full bg-pink-300 rounded-md">
      <h1 className="flex justify-center pt-5 text-3xl font-bold text-white stroke-2 stroke-black">
        Basico@Piscine_Web
      </h1>
      <div className="flex items-center justify-center">
        <div className="mt-5">
          <Image
            src="https://i.pinimg.com/736x/85/0d/cf/850dcfc4944952cfd8d70cfabd9f3928.jpg"
            width={250}
            height={250}
            alt="shein_logo"
            draggable={false}
          />
          <br />
          <Link
            href={`https://es.shein.com/`}
            className="flex justify-center text-xl text-white text-shadow [text-shadow: 5px 5px 5px rgba(0,0,0,0.54);] font-trebuchet no-underline transition-all delay-75 hover:underline"
          >
            Sitio Web de Shein
          </Link>
        </div>
        <div className="mt-5 ml-5">
          <Image
            src="https://e0.pxfuel.com/wallpapers/916/959/desktop-wallpaper-gucci-logo-gucci-logo-database.jpg"
            width={250}
            height={250}
            alt="shein_logo"
            className="w-full"
            draggable={false}
          />
          <br />
          <Link
            href={`https://www.gucci.com/es/es/`}
            className="flex justify-center text-xl text-white text-shadow [text-shadow: 5px 5px 5px rgba(0,0,0,0.54);] font-trebuchet no-underline transition-all delay-75 hover:underline"
          >
            Sitio Web de Gucci
          </Link>
        </div>
      </div>
      <div className="divider divider-neutral"></div>
      <div className="w-full h-25">
        <i className="flex justify-end mr-3 -mt-5 text-white">&copy; ivnovomi | 2024</i>
      </div>
    </div>
  );
};

export default C1EX04;
