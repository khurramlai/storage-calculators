import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-kamera-keselamatan",
  title: "Kalkulator Storan Kamera Keselamatan",
  description:
    "Kalkulator storan kamera keselamatan untuk rumah dan perniagaan kecil. Menentukan saiz cakera bagi Ring, Reolink, Wyze, Nest dan pemasangan NVR berbilang kamera dalam beberapa saat.",
  tagline:
    "Berapa hari rakaman yang sebenarnya muat pada cakera itu dengan kamera keselamatan anda?",
  keywords: [
    "kalkulator storan kamera keselamatan",
    "cara kira storan kamera cctv rumah",
    "saiz hard disk kamera keselamatan",
    "storan kamera pengawasan rumah",
  ],

  content: {
    intro:
      "Kebanyakan kamera keselamatan rumah dan perniagaan kecil hanya merakam apabila ada pergerakan, jadi storan yang diperlukan hanyalah sebahagian kecil daripada rakaman berterusan. Walaupun begitu, saiz cakera perlu ditentukan dengan betul, kerana cakera yang terlalu kecil akan menimpa rakaman lama tepat pada waktu anda perlu menyemaknya. Kalkulator ini bermula dengan nilai lazim pemasangan rumah: empat kamera 1080p, rakaman berdasarkan gerakan dan simpanan 14 hari. Laraskan mengikut keperluan anda selepas itu.",
    formula:
      "<p>Dengan kamera yang dicetuskan gerakan, <strong>masa rakaman berkesan</strong> ialah kira-kira 40% daripada tempoh aktif, kerana kebanyakan adegan mempunyai aktiviti kurang daripada separuh masa. Kalkulator menggunakan kitaran tugas 40% apabila anda memilih “Hanya apabila gerakan dikesan”.</p>" +
      "<p><strong>Storan</strong> = <code>(bitrate × 3600 ÷ 8) × kamera × jam_berkesan × hari</code></p>",
    useCases: [
      "Memilih antara cakera 1 TB dan 4 TB untuk NVR atau NAS rumah",
      "Menentukan sama ada storan awan atau setempat lebih murah bagi tempoh simpanan anda",
      "Menganggarkan saiz kad SD bagi kamera dengan storan terbina (Reolink, Wyze, Eufy)",
      "Merancang storan pemasangan berbilang kamera sebelum membeli perakam",
    ],
  },

  faqs: [
    {
      question:
        "Berapa lama cakera 1 TB bertahan untuk kamera keselamatan rumah?",
      answer:
        "Bagi pemasangan lazim empat kamera 1080p H.265 dengan rakaman berdasarkan gerakan (kira-kira 40% masa aktif): kira-kira 60 hingga 90 hari. Dengan rakaman berterusan, cakera yang sama bertahan kira-kira 25 hari. Kalkulator memberikan jawapan tepat bagi konfigurasi anda; dakwaan pemasaran seperti “60 hari pada 1 TB” mengandaikan tetapan tertentu yang selalunya optimistik.",
    },
    {
      question: "Perlukah saya perakam, atau memadai dengan kad SD?",
      answer:
        "Kamera dengan slot kad SD (Reolink, Wyze, Eufy, Amcrest) boleh merakam secara setempat tanpa NVR berasingan. Kad SD terhad kepada 256 hingga 512 GB pada kebanyakan model, memberikan kira-kira 7 hingga 30 hari rakaman 1080p berdasarkan gerakan bagi setiap kamera. Gunakan kalkulator ini dengan satu kamera dan tempoh simpanan anda untuk melihat sama ada kad SD memadai atau anda memerlukan perakam berpusat.",
    },
    {
      question: "Patutkah saya guna storan awan berbanding cakera setempat?",
      answer:
        "Awan memang mudah (tiada perkakasan, ada salinan di luar premis) tetapi mahal dalam jangka panjang. Ring Protect Plus berharga kira-kira RM180 hingga RM450 setahun bagi setiap lokasi, dan Nest Aware setanding dengannya. Cakera 4 TB untuk NVR setempat pula berharga kira-kira RM350 sekali sahaja dan bertahan tiga hingga lima tahun. Bagi empat kamera ke atas dengan simpanan lebih lama, storan setempat jauh lebih murah. Pertukarannya: awan lebih sukar dilumpuhkan pencuri, kerana mereka perlu memutuskan sambungan internet anda tepat pada masanya.",
    },
    {
      question: "Codec apakah yang digunakan kamera keselamatan rumah?",
      answer:
        "Kamera terkini (2022 ke atas) menyokong H.265 / HEVC secara lalai. Model lama atau bajet mungkin terhad kepada H.264. Sesetengah kamera Wi-Fi masih kekal pada H.264 secara lalai walaupun menyokong H.265, kerana penyahkodan dalam aplikasi mudah alih lebih serasi. Semak tetapan dan hidupkan H.265 jika tersedia, kerana ia memisahkan dua storan tanpa kehilangan kualiti.",
    },
    {
      question: "Berapa banyak storan diperlukan kamera keselamatan 4K?",
      answer:
        "Kira-kira dua hingga tiga kali ganda storan 1080p bagi tempoh simpanan yang sama. Dengan rakaman berdasarkan gerakan dan codec H.265, kamera 4K menggunakan purata 5 hingga 15 GB sehari dalam penggunaan rumah biasa. Kalkulator memberikan angka tepat mengikut aktiviti adegan dan tempoh simpanan pilihan anda.",
    },
    {
      question: "Mengapa Ring atau Nest saya hanya menyimpan 60 hari?",
      answer:
        "Kamera keselamatan berasaskan awan (Ring, Nest, Arlo, Blink) lazimnya mengehadkan simpanan kepada 30 atau 60 hari mengikut langganan. Yang mengehadkan bukan ruang storan, tetapi syarat langganan. Jika anda perlukan tempoh lebih panjang, NVR atau NAS setempat ialah jawapannya, dan kalkulator ini membantu anda menentukan saiz cakera.",
    },
  ],
};

export default translation;
