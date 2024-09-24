import React from "react";
import gallery_1 from "../../assets/KPI_4640.jpg";
import gallery_2 from "../../assets/KPI_4685.jpg";
import gallery_3 from "../../assets/KPI_4718.jpg";
import gallery_4 from "../../assets/KPI_4640.jpg";
import white_arrow from "../../assets/white-arrow.png";
import ModalImage from "react-modal-image"; // Import ModalImage
import "./Campus.css";

export const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <ModalImage
          small={gallery_1}
          large={gallery_1}
          alt="Gallery Image 1"
          className="small-image" // Small image styling
        />
        <ModalImage
          small={gallery_2}
          large={gallery_2}
          alt="Gallery Image 2"
          className="small-image"
        />
        <ModalImage
          small={gallery_3}
          large={gallery_3}
          alt="Gallery Image 3"
          className="small-image"
        />
        <ModalImage
          small={gallery_4}
          large={gallery_4}
          alt="Gallery Image 4"
          className="small-image"
        />
      </div>
      <a
        href="https://cloud.kpi.go.id/index.php/s/nPpBxcQpreHS5M6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="btn dark-btn">
          See more here
          <img src={white_arrow} />
        </button>
      </a>
    </div>
  );
};
