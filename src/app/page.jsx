import Image from "next/image";
import { Footer, Navbar } from "@/components/UI";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex items-center justify-center h-96 mt-52">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold">Piscine Discovery Web</h1>
            <h2 className="mb-4 text-2xl font-semibold">42 Málaga</h2>
            <Image
              src={`/static/images/42_logo_white.png`}
              width={400}
              height={50}
              alt="fortytwoo_logo_white_transparent"
              draggable={false}
            />
            <h3 className="mt-5 mb-5 text-xl font-medium">By: INovomiast2</h3>
            <Link href={`/projects`}>
              <button className="z-50 mt-10 btn btn-primary">
                Ver Proyectos
              </button>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <div className="divider">
          <div className="text-2xl font-bold divider-text">Holy Graph</div>
        </div>
        <br />
        <br />
        <div className="flex justify-center -z-50">
          <Image
            src={`/static/images/holy_graph.svg`}
            width={1000}
            height={300}
            alt=""
            className="object-contain overflow-hidden rounded-lg"
            draggable={false}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="shadow stats stats-vertical lg:stats-horizontal">
            <div className="stat">
              <div className="stat-title">Progreso:</div>
              <div className="text-green-600 stat-value">95%</div>
              <div className="stat-desc">Aprox.</div>
            </div>
            <div className="stat">
              <div className="stat-title">Nivel</div>
              <div className="text-blue-500 stat-value">12</div>
              <div className="stat-desc">&gt;66%</div>
            </div>
            <div className="stat">
              <div className="stat-title">Rush</div>
              <div className="text-red-800 stat-value">0%</div>
              <div className="stat-desc">No Completado</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="divider">
          <div className="text-2xl font-bold divider-text">Habilidades Adquiridas</div>
        </div>
        <br />
        <br />
        <div className="flex items-center justify-center whitespace-pre-line skillSet">
          <Image src={`/static/images/skills.webp`} width={500} height={300} alt="" draggable={false} />
        </div>
        <br />
        <br />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
