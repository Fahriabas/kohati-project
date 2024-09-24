import React from "react";
import "./Contact.css";

import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Saran dan masukan sangat penting bagi kami untuk terus meningkatkan
          kualitas layanan dan pengalaman pengguna. Kami menghargai setiap
          tanggapan yang Anda berikan, baik itu mengenai aspek teknis, desain,
          maupun fitur yang dirasakan masih kurang atau memerlukan perbaikan.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            kohatipbhmi.tikom24@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +62 857-1501-0669
          </li>
          <li>
            <img src={location_icon} alt="" />
            Jl. Sultan Agung No.25 A 1, RT.1/RW.1, Guntur, Kecamatan Setiabudi
            <br /> Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12980
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
          <label htmlFor="">Nama</label>
          <input type="text" name="name" placeholder="masukan nama" required />
          <label htmlFor="">Nomor Telepon</label>
          <input type="tel" name="phone" placeholder="masukan nomor telepon" />
          <label htmlFor="">Tulis Pesan Anda Disini</label>
          <textarea
            name="message"
            rows="6"
            placeholder="masukan pesan anda"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Kirim
            <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>Sending</span>
      </div>
    </div>
  );
};

export default Contact;
