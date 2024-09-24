import React from "react";
import "./About.css";
import about_img from "../../assets/kohati-about.jpg";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="Tentang Kohati" className="about-img" />
        {/* <img src={play_icon} alt="Icon Play" className="play-icon" /> */}
      </div>
      <div className="about-right">
        <h3>Sejarah Terbentuknya Kohati</h3>
        <p>
          Himpunan Mahasiswa Islam adalah organisasi mahasiswa tertua di Negara
          Indonesia. Didirikan pada tanggal 5 Februari 1947 bertepatan pada hari
          Rabu Pon 1878 tahun Jawa, serta 14 Rabiul Awal 1366 H di Yogyakarta.
          Himpunan ini diprakarsai oleh Lafran Pane, yang menuntut ilmu di
          Yogyakarta bersama rekan-rekannya seperti Karto Zarkasyi, Dahlan
          Husein, Suwali, dan lain-lain.
        </p>
        <p>
          Kongres ke VIII Himpunan Mahasiswa Islam di Solo melahirkan berbagai
          lembaga, salah satunya adalah Kohati. Kohati dibentuk sebagai badan
          khusus di tubuh HMI, berfungsi membantu mewujudkan tujuan organisasi
          dan menjadi representasi dalam isu-isu keperempuanan.
        </p>

        <h4>Kohati dalam Kongres HMI ke VIII</h4>
        <p>
          Pada Kongres ke VIII HMI yang berlangsung pada tahun 1963 di Jakarta,
          beberapa HMI-Wati seperti Eka Masni Djama’an dan Aniswati Rochlan
          aktif berperan dalam organisasi. Mereka juga menggagas beberapa
          kegiatan penting, termasuk Training Nasional Keputrian yang
          dilaksanakan di Kaliurang.
        </p>

        <h4>Musyawarah Nasional dan Pembentukan Kohati</h4>
        <p>
          Berdasarkan hasil Musyawarah Nasional, Kohati baru disahkan secara
          nasional pada Kongres di Solo pada 17 September 1966. Mukaddimah
          Kohati menyatakan bahwa "Wanita adalah tiang negara. Jika baik
          wanitanya, maka baiklah negara." Tujuan dari Kohati adalah
          meningkatkan kualitas dan peranan HMI-Wati, baik dalam perjuangan HMI
          secara umum maupun dalam isu kewanitaan secara khusus.
        </p>

        <h4>Hasil Sidang Komisi Keputrian</h4>
        <p>
          Keputusan Sidang Komisi Keputrian Kongres ke VIII HMI menetapkan
          beberapa poin penting, antara lain:
        </p>
        <ul>
          <li>
            Kohati sebagai wadah HMI-Wati dengan status lembaga semi otonom di
            HMI.
          </li>
          <li>Pedoman dasar dan rumah tangga Kohati.</li>
          <li>Program kerja Kohati.</li>
          <li>Rekomendasi Kohati.</li>
          <li>
            Penetapan Aniswati Rochlan sebagai Ketua Umum Kohati PB HMI untuk
            periode 1966-1968.
          </li>
        </ul>
        <p>
          Lalu kelima putusan tersebut diatas diampaikan langsung dan di bacakan
          oleh Andi Datja Patopoi pada sidang Kongres ke VIII di Solo kemudian
          megesahkan keseluruhan keputusan sidang komisi keputrian. Sejak saat
          itu Kohati resmi secara organisatoris menjadi lembaga semi otonom
          dalam semua jajaran Himpunan Mahasiswa Islam dan pendiri Kohati adalah
          mereka peserta Sidang Komisi keputrian pada Kongres ke VIII Himpunan
          Mahasiswa Islam di Solo. Dalam sidang komisi keputrian belum ada
          menetapkan tentang atribut Kohati. Terkait dengan logo dan lain nya
          dibahas kemudian saat Pleno Kohati PBHMI lalu disahkan kemudian saat
          kongres ke IX dan Munas ke-I Kohati di Malang. Diawal pendirian
          Kohati, tujuan Kohati yang tercantum didalam pedoman dasar Kohati
          adalah meningkatkan kualitas dan peranan HMI-Wati dalam perjuangan
          untuk mencapai tujuan HMI pada umumnya dan kewanitaan khususnya. Pada
          suatu pertemuan para peserta sidang pleno keputrian di Yayasan Permata
          Sari bersama beberapa orang fungsionaris Kohati PB HMI 2018-2020, Etty
          Syuhada pernah menjelaskan alasan dari kalimat tujuan Kohati yang
          dicantumkan dalam pedoman dasar Kohati pada awal dibentuknya Kohati
          adalah yang pertama, anggota Kohati adalah mahasiswi. Kohati harus
          meningkatkan kualitas nya terlebih dahulu, baik kualitas ke Islaman,
          Ke Intelektualan dan Keperempuanan sampai mampu dan layak dalam
          menjalankan perannya. Namun kemudian setelah melewati beberapa
          generasi tujuan Kohati didalam pedoman dasar Kohati mengalami
          perubahan redaksi yakni terbinanya muslimah berkualitas insan cita. Di
          dalam tujuannya Kohati tetap mengedepankan kualitas untuk menjalankan
          perannya
        </p>
      </div>
    </div>
  );
};

export default About;
