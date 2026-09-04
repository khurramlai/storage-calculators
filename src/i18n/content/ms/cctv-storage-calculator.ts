import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-cctv",
  title: "Kalkulator Storan CCTV",
  description:
    "Kalkulator storan CCTV untuk sistem DVR dan NVR. Menyokong kamera analog HD-TVI, HD-CVI dan AHD serta kamera IP pada sebarang resolusi, codec atau tempoh simpanan.",
  tagline:
    "Menentukan saiz storan untuk sistem CCTV analog dan IP: DVR, NVR atau perakam hibrid.",
  keywords: [
    "kalkulator storan cctv",
    "cara kira storan cctv",
    "saiz hard disk cctv",
    "pengiraan storan kamera cctv",
  ],

  content: {
    intro:
      "Istilah CCTV kini merangkumi sistem yang sangat berbeza: sistem analog lama melalui kabel sepaksi (HD-TVI, HD-CVI atau AHD yang disambungkan ke DVR) dan sistem IP moden melalui Ethernet (kamera IP yang disambungkan ke NVR). Kalkulator ini menangani kedua-duanya. Sistem analog HD biasanya terhad kepada 1080p, 15 fps dan H.264, jadi mulakan di situ. Sistem IP pula boleh mencapai 4K dengan codec pintar H.265+. Formulanya tidak membezakan kedua-duanya; yang berubah hanyalah had atas bitrate.",
    formula:
      "<p><strong>Storan CCTV</strong> = <code>(bitrate_bps × 3600 ÷ 8) × kamera × jam × hari</code></p>" +
      "<p>Bagi sistem analog HD-TVI, HD-CVI atau AHD, jangkakan H.264 sahaja kerana DVR tersebut wujud sebelum H.265 digunakan secara meluas. Kamera analog 1080p lazimnya mengekod pada 2 hingga 4 Mbps. Bagi CCTV melalui IP (kamera disambungkan ke NVR), sistem terkini menyokong H.265 dan codec pintar yang mengurangkan storan sebanyak 50 hingga 75%.</p>",
    useCases: [
      "Memilih saiz cakera keras yang betul untuk DVR atau NVR sebelum membeli",
      "Beralih daripada CCTV analog kepada IP dan membandingkan keperluan storan",
      "Menentukan saiz perakam hibrid yang menggabungkan saluran analog dan IP",
      "Menyemak dakwaan pemasaran seperti “30 hari pada 2 TB” berbanding konfigurasi sebenar anda",
    ],
  },

  faqs: [
    {
      question: "Apakah perbezaan antara DVR dan NVR?",
      answer:
        "DVR (perakam video digital) menerima isyarat video analog melalui kabel sepaksi (HD-TVI, HD-CVI, AHD atau CVBS lama) dan menukarkannya kepada digital. NVR (perakam video rangkaian) pula menerima strim yang sudah digital daripada kamera rangkaian melalui Ethernet atau Wi-Fi. NVR menyokong resolusi lebih tinggi dan codec moden; DVR lebih murah dan menggunakan semula pendawaian sepaksi sedia ada. Perakam hibrid menerima kedua-duanya.",
    },
    {
      question: "Bolehkah kamera CCTV analog merakam pada 4K?",
      answer:
        "Kebanyakan piawaian analog HD (HD-TVI, HD-CVI, AHD) kini mencapai 8 MP atau 4K, tetapi pemasangan sebenar biasanya terhad kepada 1080p atau 4 MP. Panjang kabel sepaksi dan kemerosotan isyarat mengehadkan 4K analog kepada jarak pendek. Untuk 4K pada skala besar, kamera IP ialah piawaiannya.",
    },
    {
      question:
        "Mengapa sistem CCTV saya menggunakan lebih banyak storan daripada yang dinyatakan kalkulator?",
      answer:
        "Tiga sebab lazim: (1) kamera anda menggunakan bitrate lebih tinggi daripada helaian spesifikasi, kerana banyak model murah dikunci pada bitrate maksimum tetap tanpa mengira adegan; (2) DVR atau NVR anda merakam dua strim (utama dan sub) tanpa anda sedari; (3) rakaman audio dihidupkan dan menambah kira-kira 10 hingga 20%. Kalkulator memberikan anggaran video sahaja bagi strim utama.",
    },
    {
      question: "Cakera keras apakah yang sesuai untuk DVR CCTV?",
      answer:
        "Gunakan cakera gred pengawasan; Western Digital Purple dan Seagate SkyHawk ialah piawaian industri. Cakera meja (WD Blue, Barracuda) akan berfungsi tetapi tidak bertahan lama di bawah beban penulisan berterusan, dan tuntutan jaminan akan ditolak bagi penggunaan pengawasan. Cakera pengawasan ditala untuk penulisan berjujukan berterusan dan menyokong arahan penstriman ATA yang digunakan DVR.",
    },
    {
      question: "Berapa lama saya boleh merakam pada cakera CCTV 2 TB?",
      answer:
        "Bergantung sepenuhnya pada bilangan kamera, resolusi dan codec. Beberapa contoh rakaman berterusan pada cakera 2 TB: empat kamera 1080p H.264 ≈ 11 hari; empat kamera 1080p H.265 ≈ 22 hari; lapan kamera 4K H.265 ≈ 3 hari; satu kamera 720p H.264 ≈ 90 hari. Gunakan kalkulator dengan konfigurasi sebenar anda, kerana pemasaran pengeluar DVR sering memetik kes terbaik pada kadar bingkai dan bitrate rendah.",
    },
    {
      question: "Adakah kalkulator mengambil kira rakaman audio?",
      answer:
        "Tidak. Audio menambah kira-kira 64 hingga 128 kbps bagi setiap saluran, jumlah yang kecil berbanding 4 Mbps ke atas untuk video pada kamera terkini. Bagi kebanyakan perancangan anda boleh mengabaikannya. Dengan 16 saluran audio ke atas, tambah penimbal kira-kira 5%.",
    },
  ],
};

export default translation;
