import { Footer, Navbar } from "@/components/UI";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="mt-12 text-xl font-bold divider">Shell Cells</div>
        <br />
        <div className="grid justify-center w-full h-full grid-flow-col col-span-3 gap-96">
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Shell 1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <Link href={`/prj1`}>
                  <button className="btn btn-primary">Test Project</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Shell 2</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <Link href={`/prj1`}>
                  <button className="btn btn-primary">Test Project</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Shell 3</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <Link href={`/prj1`}>
                  <button className="btn btn-primary">Test Project</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="grid justify-center w-full h-full grid-flow-col col-span-3 gap-96">
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Shell 4</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
              <Link href={`/prj1`}>
                  <button className="btn btn-primary">Test Project</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Shell 5</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
              <Link href={`/prj1`}>
                  <button className="btn btn-primary">Test Project</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Shell 6</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
              <Link href={`/prj1`}>
                  <button className="btn btn-primary">Test Project</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="text-xl font-bold divider">Web Cells</div>
        <br />
        <div className="grid justify-center w-full h-full grid-flow-col col-span-3 gap-96">
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a7f671b-9c0a-4520-9157-6f9da91f4ba5/d382muo-b08969b6-c011-4c29-88c1-7dd634321ee1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhN2Y2NzFiLTljMGEtNDUyMC05MTU3LTZmOWRhOTFmNGJhNVwvZDM4Mm11by1iMDg5NjliNi1jMDExLTRjMjktODhjMS03ZGQ2MzQzMjFlZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LEZ91PoyMKfomt0ESbL9y3kuBDFgiiJe9SwAmuK9ku0`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 1 - HTML</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a7f671b-9c0a-4520-9157-6f9da91f4ba5/d382muo-b08969b6-c011-4c29-88c1-7dd634321ee1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhN2Y2NzFiLTljMGEtNDUyMC05MTU3LTZmOWRhOTFmNGJhNVwvZDM4Mm11by1iMDg5NjliNi1jMDExLTRjMjktODhjMS03ZGQ2MzQzMjFlZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LEZ91PoyMKfomt0ESbL9y3kuBDFgiiJe9SwAmuK9ku0`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 2 - HTML</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a7f671b-9c0a-4520-9157-6f9da91f4ba5/d382muo-b08969b6-c011-4c29-88c1-7dd634321ee1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhN2Y2NzFiLTljMGEtNDUyMC05MTU3LTZmOWRhOTFmNGJhNVwvZDM4Mm11by1iMDg5NjliNi1jMDExLTRjMjktODhjMS03ZGQ2MzQzMjFlZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LEZ91PoyMKfomt0ESbL9y3kuBDFgiiJe9SwAmuK9ku0`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 3 - HTML</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="grid justify-center w-full h-full grid-flow-col col-span-3 gap-96">
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a7f671b-9c0a-4520-9157-6f9da91f4ba5/d382muo-b08969b6-c011-4c29-88c1-7dd634321ee1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhN2Y2NzFiLTljMGEtNDUyMC05MTU3LTZmOWRhOTFmNGJhNVwvZDM4Mm11by1iMDg5NjliNi1jMDExLTRjMjktODhjMS03ZGQ2MzQzMjFlZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LEZ91PoyMKfomt0ESbL9y3kuBDFgiiJe9SwAmuK9ku0`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 4 - HTML</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a7f671b-9c0a-4520-9157-6f9da91f4ba5/d382muo-b08969b6-c011-4c29-88c1-7dd634321ee1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhN2Y2NzFiLTljMGEtNDUyMC05MTU3LTZmOWRhOTFmNGJhNVwvZDM4Mm11by1iMDg5NjliNi1jMDExLTRjMjktODhjMS03ZGQ2MzQzMjFlZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LEZ91PoyMKfomt0ESbL9y3kuBDFgiiJe9SwAmuK9ku0`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 5 - HTML</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a7f671b-9c0a-4520-9157-6f9da91f4ba5/d382muo-b08969b6-c011-4c29-88c1-7dd634321ee1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhN2Y2NzFiLTljMGEtNDUyMC05MTU3LTZmOWRhOTFmNGJhNVwvZDM4Mm11by1iMDg5NjliNi1jMDExLTRjMjktODhjMS03ZGQ2MzQzMjFlZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LEZ91PoyMKfomt0ESbL9y3kuBDFgiiJe9SwAmuK9ku0`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 6 - HTML</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="grid justify-center w-full h-full grid-flow-col col-span-3 gap-96">
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a7f671b-9c0a-4520-9157-6f9da91f4ba5/d382muo-b08969b6-c011-4c29-88c1-7dd634321ee1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBhN2Y2NzFiLTljMGEtNDUyMC05MTU3LTZmOWRhOTFmNGJhNVwvZDM4Mm11by1iMDg5NjliNi1jMDExLTRjMjktODhjMS03ZGQ2MzQzMjFlZTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LEZ91PoyMKfomt0ESbL9y3kuBDFgiiJe9SwAmuK9ku0`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 7 - HTML</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://wallpapercave.com/wp/wp2742433.jpg`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 1 - CSS</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://wallpapercave.com/wp/wp2742433.jpg`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 2 - CSS</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="grid justify-center w-full h-full grid-flow-col col-span-3 gap-96">
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://wallpapercave.com/wp/wp2742433.jpg`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 3 - CSS</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={`https://wallpapercave.com/wp/wp2742433.jpg`}
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 4 - CSS</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={
                  "https://midu.dev/images/wallpapers/javascript-small-horizontal-4k.png"
                }
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 1 - JS</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="grid justify-center w-full h-full grid-flow-col col-span-3 gap-96">
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={
                  "https://midu.dev/images/wallpapers/javascript-small-horizontal-4k.png"
                }
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 2 - JS</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={
                  "https://midu.dev/images/wallpapers/javascript-small-horizontal-4k.png"
                }
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 3 - JS</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
          <div className="grid shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={
                  "https://midu.dev/images/wallpapers/javascript-small-horizontal-4k.png"
                }
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">Web 4 - JS (JQuery)</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="text-xl font-bold divider">Rush</div>
        <br />
        <div className="flex justify-center">
          <div className="shadow-xl card w-96 bg-base-100 image-full">
            <figure>
              <Image
                src={
                  "https://midu.dev/images/wallpapers/javascript-small-horizontal-4k.png"
                }
                alt="terminal_image"
                width={1000}
                height={1000}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-white card-title">RUSH</h2>
              <p>Piscine Discovery Web last project!</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Test Project</button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ProjectsPage;
