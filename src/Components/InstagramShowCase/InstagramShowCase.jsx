import React from "react";
import "./InstagramShowCase.css";

const leftImages = Array.from({ length: 6 });
const rightImages = Array.from({ length: 6 });

// import left1 from "../../assets/insta1.png";
// import left2 from "../../assets/insta2.png";
// import right1 from "../../assets/insta3.png";
// import right2 from "../../assets/insta4.png";
// import centerImg from "../../assets/center-img.png";

const InstagramShowCase = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-wrapper">

        {/* LEFT COLUMN */}
        <div className="gallery-column">
          {leftImages.map((_, i) => (
            <div className="gallery-card" key={i}>
              <img src={`https://picsum.photos/500/700?random=${i}`} alt="" />
            </div>
          ))}
        </div>

        {/* CENTER STICKY */}
        <div className="gallery-center">
          <div className="sticky-box">
            <img
              src="https://picsum.photos/420/780?random=99"
              alt="center"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="gallery-column">
          {rightImages.map((_, i) => (
            <div className="gallery-card" key={i}>
              <img src={`https://picsum.photos/500/700?random=${i + 10}`} alt="" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramShowCase;
