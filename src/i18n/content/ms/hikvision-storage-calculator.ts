import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-hikvision",
  title: "Kalkulator Storan Hikvision",
  description:
    "Kalkulator storan Hikvision yang ditala pada codec pintar H.265+ dan tetapan lalai kamera DS-2CD. Tentukan saiz cakera NVR DS-76xx, DS-77xx atau DS-96xx dalam beberapa saat.",
  tagline:
    "Penentuan saiz yang ditala pada codec pintar H.265+ Hikvision dan tetapan lalai kamera DS-2CD.",
  keywords: [
    "kalkulator storan hikvision",
    "cara kira hard disk hikvision",
    "kalkulator nvr hikvision",
    "storan hikvision h265+",
  ],

  content: {
    intro:
      "Codec pintar H.265+ Hikvision antara yang paling cekap dalam pasaran pengawasan, mengurangkan saiz fail kira-kira 75% berbanding H.264 pada adegan yang sama. Kalkulator ini menggunakan tetapan lazim kamera Hikvision DS-2CD: 1080p, 25 fps, H.265+ dan rakaman berterusan sepanjang masa. Pengiraannya mengikut spesifikasi perancangan yang diterbitkan Hikvision. Jika anda menentukan saiz cakera bagi NVR DS-76xx, DS-77xx atau DS-96xx, kapasiti yang disyorkan sepadan dengan konfigurasi petak lazim casis tersebut.",
    formula:
      "<p><strong>Storan Hikvision</strong> = <code>(bitrate × 3600 ÷ 8) × kamera × jam × hari</code></p>" +
      "<p>Pengekod H.265+ Hikvision menganalisis setiap bingkai dan mengurangkan bitrate pada kawasan statik seperti latar belakang, langit dan dinding, sambil mengekalkan kualiti pada apa jua yang bergerak. Hasilnya kira-kira 75% pengurangan bitrate berbanding H.264 dan 50% berbanding H.265 biasa pada adegan lazim. Itulah yang dimodelkan oleh pilihan H.265+ dalam kalkulator.</p>",
    useCases: [
      "Menentukan saiz cakera bagi NVR Hikvision siri DS-76xx, DS-77xx dan DS-96xx",
      "Merancang pemasangan sepenuhnya Hikvision dengan pelbagai model kamera DS-2CD",
      "Membandingkan penjimatan H.265+ untuk mewajarkan penggantian kamera H.264 lama",
      "Menyemak anggaran storan daripada pemasang Hikvision berbanding pengiraan sebenar",
    ],
  },

  faqs: [
    {
      question:
        "Apakah perbezaan antara H.265 dan H.265+ pada kamera Hikvision?",
      answer:
        "H.265 (HEVC) ialah codec video antarabangsa, kira-kira 50% lebih cekap daripada H.264. H.265+ pula ialah lanjutan milik Hikvision yang menambah kawalan bitrate pintar: pengekod mengurangkan bitrate pada kawasan adegan yang tidak bergerak, mencapai kira-kira 50% pengurangan tambahan berbanding H.265 biasa. Penjimatan bersih berbanding H.264 ialah kira-kira 75%. Kualiti objek bergerak kekal terpelihara; hanya latar belakang statik dimampatkan dengan lebih agresif.",
    },
    {
      question: "Adakah H.265+ berfungsi dengan semua NVR?",
      answer:
        "H.265+ memerlukan sokongan daripada kamera dan NVR. Semua NVR Hikvision terkini (siri DS-76xx/77xx/96xx kelas I dan K) menyahkod H.265+ untuk paparan langsung dan rakaman. NVR dan VMS pihak ketiga mungkin menerima strim itu sebagai H.265 biasa, iaitu lebih kecil daripada H.264 tetapi tidak sekecil yang mampu dihasilkan kamera. Padankan kamera Hikvision dengan NVR Hikvision atau OEM Hikvision untuk sokongan H.265+ sepenuhnya.",
    },
    {
      question: "Cakera apakah yang disyorkan Hikvision untuk NVR?",
      answer:
        "Senarai keserasian Hikvision mengutamakan cakera gred pengawasan, terutamanya WD Purple, Seagate SkyHawk dan Toshiba S300. Kapasiti maksimum yang disokong berbeza mengikut model; model terkini (2022 ke atas) menyokong sehingga 20 TB bagi setiap petak. Perisian tegar NVR Hikvision ditala untuk penulisan berjujukan cakera tersebut, dan penggunaan cakera pengguna biasa menghasilkan prestasi lebih rendah serta kegagalan lebih awal.",
    },
    {
      question:
        "Mengapa NVR Hikvision saya menggunakan lebih banyak storan daripada yang dinyatakan kalkulator?",
      answer:
        "Punca khusus pemasangan Hikvision: (1) kamera merakam strim utama dan sub-strim serentak, menggandakan storan jika rakaman sub-strim dihidupkan dalam konfigurasi NVR; (2) rakaman peristiwa pintar mencipta arkib berasingan selain rakaman berterusan; (3) kamera menggunakan bitrate tetap (CBR) dan bukan VBR. Semak tetapan pengekod kamera dan jadual rakaman NVR.",
    },
    {
      question: "Bagaimana menghidupkan H.265+ pada kamera Hikvision?",
      answer:
        "Melalui antara muka web kamera (atau menerusi iVMS-4200 / Hik-Connect): Konfigurasi → Video/Audio → Video → Pengekodan Video → pilih “H.265+”. Tetapan ini juga ada pada peringkat NVR di bawah konfigurasi saluran kamera. Jika H.265+ dikelabukan, perisian tegar mungkin perlu dikemas kini atau model tersebut tidak menyokongnya (sesetengah kamera DS-2CD2xxx-W dan -G lama terhad kepada H.264 sahaja).",
    },
    {
      question: "Adakah angka bitrate ini spesifikasi rasmi Hikvision?",
      answer:
        "Anggaran bitrate ini menghampiri saranan perancangan storan yang diterbitkan Hikvision (tersedia dalam kalkulator storan iVMS rasmi dan manual produk mereka). Bitrate sebenar berbeza ±20% mengikut kerumitan adegan. Kalkulator memberikan anggaran pada tahap perancangan; bagi projek berbelanjawan ketat, tambah margin keselamatan 10 hingga 20%.",
    },
  ],
};

export default translation;
