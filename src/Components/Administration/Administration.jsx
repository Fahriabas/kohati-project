import React from "react";
import "./Administration.css"; // Pastikan untuk menambahkan styling yang diperlukan
import white_arrow from "../../assets/white-arrow.png";

const files = [
  {
    icon: "bi bi-book",
    title: "Produk Hukum",
    url: "https://drive.google.com/drive/folders/1-CJJJ1H9Iiu_XAkAeXwO5iHy1Kj0X7vO",
  },
  {
    icon: "bi bi-bell",
    title: "Lagu Organisasi",
    url: "https://drive.google.com/drive/folders/1-CJJJ1H9Iiu_XAkAeXwO5iHy1Kj0X7vO",
  },
  {
    icon: "bi bi-shield-check",
    title: "Logo Organisasi",
    url: "https://drive.google.com/drive/folders/1-CJJJ1H9Iiu_XAkAeXwO5iHy1Kj0X7vO",
  },
  {
    icon: "bi bi-book",
    title: "Produk Hukum",
    url: "https://drive.google.com/drive/folders/1-CJJJ1H9Iiu_XAkAeXwO5iHy1Kj0X7vO",
  },
  {
    icon: "bi bi-book",
    title: "Produk Hukum",
    url: "https://drive.google.com/drive/folders/1-CJJJ1H9Iiu_XAkAeXwO5iHy1Kj0X7vO",
  },
  {
    icon: "bi bi-book",
    title: "Produk Hukum",
    url: "https://drive.google.com/drive/folders/1-CJJJ1H9Iiu_XAkAeXwO5iHy1Kj0X7vO",
  },
  {
    icon: "bi bi-book",
    title: "Produk Hukum",
    url: "https://drive.google.com/drive/folders/1-CJJJ1H9Iiu_XAkAeXwO5iHy1Kj0X7vO",
  },
  {
    icon: "bi bi-book",
    title: "Produk Hukum",
    url: "https://drive.google.com/drive/folders/1-CJJJ1H9Iiu_XAkAeXwO5iHy1Kj0X7vO",
  },
  {
    icon: "bi bi-book",
    title: "Produk Hukum",
    url: "https://drive.google.com/drive/folders/1-CJJJ1H9Iiu_XAkAeXwO5iHy1Kj0X7vO",
  },
];

const FileList = () => {
  return (
    <>
      <div className="row">
        {files.map((file, index) => (
          <div
            key={index}
            className="col-lg-4 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="info">
              <div className="file-item">
                <i className={file.icon}></i>
                <h4>{file.title}</h4>
                <p>
                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="button-container">
        <button className="btn dark-btn">
          See more here
          <img src={white_arrow} />
        </button>
      </div> */}
    </>
  );
};

export default FileList;
