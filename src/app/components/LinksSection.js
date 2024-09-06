import React from "react";

function LinksSection() {
  return (
    <main className="linkssection flex p-8 ">
      <div className="slideshow w-1/2">
        <div className="title">Gallery</div>
        <img
          className="my-3"
          src="https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_1280.jpg"
          alt=""
        />
      </div>
      <div className="links w-1/2">
        <div className="title">Get In Touch</div>
        <div className="flex my-3">
          <div>
            <img src="github.svg" alt="" />
            <div>Github</div>
          </div>
          <div>
            <img src="linkedin.svg" alt="" />
            <div>LinkedIn</div>
          </div>
          <div>
            <img src="mail.svg" alt="" />
            <div>LinkedIn</div>
          </div>
          <div>
            <img src="download.svg" alt="" />
            <div>LinkedIn</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LinksSection;
