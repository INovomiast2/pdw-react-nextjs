import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ imgLink, cardTitle, cardDesc, projectId }) => {
  return (
    <div className="shadow-xl card w-96 bg-base-100 image-full">
      <figure>
        <img
          src={imgLink}
          alt="Picture of the author"
            className="w-full rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDesc}</p>
        <div className="justify-end card-actions">
          <Link href={`/projects/${projectId}`}><button className="btn btn-primary">Test Project</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
