import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-nvr",
  title: "Kalkulator Storan NVR",
  description:
    "Kalkulator storan NVR yang menentukan saiz cakera mengikut bilangan kamera, resolusi, codec dan tempoh simpanan. Memodelkan penjimatan codec pintar H.265+ dan cakera gred pengawasan.",
  tagline:
    "Tentukan saiz cakera NVR anda sebelum membeli: kamera IP, codec moden, pengiraan tepat.",
  keywords: [
    "kalkulator storan nvr",
    "cara kira hard disk nvr",
    "saiz storan nvr",
    "kalkulator perakam video rangkaian",
  ],

  content: {
    intro:
      "NVR menerima strim kamera IP melalui Ethernet dan menulisnya ke cakera keras dalamannya. Had perkakasannya ditentukan oleh bilangan saluran (berapa banyak kamera), bilangan petak (berapa banyak cakera) dan kapasiti terbesar yang diterima perisian tegarnya. Namun jumlah storan yang anda perlukan sebenarnya bergantung pada resolusi, kadar bingkai, codec dan berapa lama rakaman hendak disimpan. Kalkulator ini memberikan jawapannya dalam beberapa saat, berserta cadangan cakera yang sepadan dengan casis NVR biasa: satu, dua, empat atau lapan petak.",
    formula:
      "<p><strong>Storan NVR</strong> = <code>(bitrate_bps × 3600 ÷ 8) × kamera × jam × hari</code></p>" +
      "<p>NVR moden menyokong H.265 secara asli. Model kelas tinggi turut menyokong codec pintar (H.265+, WiseStream II, Zipstream) yang menyesuaikan bitrate dengan kerumitan adegan. Beralih daripada H.264 kepada H.265 lazimnya memisahkan dua storan, dan codec pintar H.265+ memisahkan duanya sekali lagi.</p>" +
      "<p><strong>Cadangan cakera</strong> mengambil kira konfigurasi petak yang lazim. Kalkulator mencadangkan kapasiti cakera tunggal terkecil yang mencukupi, dan beralih kepada berbilang cakera jika keperluan melebihi 20 TB.</p>",
    useCases: [
      "Memilih NVR sebelum membeli dengan memadankan bilangan saluran dan kapasiti cakera dengan keperluan anda",
      "Menggantikan cakera lama dalam NVR sedia ada dengan yang lebih besar",
      "Merancang storan untuk NVR yang dilengkapi RAID (gabungkan dengan kalkulator RAID)",
      "Menentukan saiz storan semasa berpindah daripada video awan kepada NVR setempat",
    ],
  },

  faqs: [
    {
      question: "Saiz cakera keras apakah yang diperlukan NVR saya?",
      answer:
        "Ia bergantung pada tiga perkara: bilangan kamera, jumlah bitrate bagi setiap kamera dan tempoh simpanan. Gunakan kalkulator ini dengan konfigurasi sebenar anda; jawapan umum seperti “8 TB untuk lapan kamera” mengelirukan kerana ia mengandaikan resolusi dan codec tertentu. Bagi kebanyakan pemasangan 1080p atau 4 MP dengan H.265 dan simpanan 30 hari, jangkakan 4 hingga 12 TB bagi setiap NVR.",
    },
    {
      question: "Bolehkah NVR menggunakan sebarang cakera keras?",
      answer:
        "Secara teknikal boleh, tetapi anda patut menggunakan cakera gred pengawasan. Pengeluar NVR (Hikvision, Dahua, UniFi, Synology) menerbitkan senarai keserasian; cakera di luar senarai mungkin berfungsi tetapi tidak disokong. WD Purple, Seagate SkyHawk dan Toshiba S300 ialah pilihan selamat. Sesetengah NVR perusahaan memerlukan cakera yang diperakui untuk operasi berterusan dalam casis NAS.",
    },
    {
      question:
        "Mengapa penggunaan storan NVR lebih tinggi daripada yang dinyatakan kalkulator?",
      answer:
        "Punca lazim: (1) rakaman dua strim (utama dan sub) menggandakan storan jika kedua-duanya disimpan; (2) selang bingkai kunci yang terlalu besar mengurangkan keberkesanan codec pintar; (3) andaian adegan kurang rumit tidak terpakai dalam persekitaran sibuk; (4) NVR turut merakam klip peristiwa selain strim berterusan. Semak tetapan; kebanyakan NVR membenarkan rakaman sub-strim atau arkib peristiwa gerakan dimatikan.",
    },
    {
      question: "Berapa banyak kamera boleh disokong sebuah NVR?",
      answer:
        "Bilangan saluran ditentukan oleh model; saiz lazim ialah 4, 8, 16, 32 dan 64 saluran. Storan meningkat secara linear dengan bilangan saluran, tetapi kapasiti suis PoE terbina, kuasa penyahkodan pemproses (untuk paparan langsung) dan jumlah petak cakera mungkin menjadi halangan sebelum bilangan saluran. Kalkulator ini menangani bahagian storan; rujuk spesifikasi NVR untuk had yang lain.",
    },
    {
      question: "Perlukah menggunakan RAID di dalam NVR?",
      answer:
        "Ya bagi mana-mana pemasangan perniagaan dengan empat cakera ke atas. NVR bercakera tunggal kehilangan semua rakaman apabila cakera gagal. RAID 5 atau RAID 6 membolehkan operasi berterusan walaupun satu atau dua cakera gagal, dengan kehilangan kapasiti yang terhad. Rujuk kalkulator RAID kami untuk merancang lapisan RAID di atas anggaran storan ini.",
    },
    {
      question:
        "Adakah kalkulator mengambil kira overhed perisian tegar NVR?",
      answer:
        "Ia mengandaikan hampir keseluruhan kapasiti cakera tersedia untuk video. Dalam amalan, perisian tegar NVR mengkhaskan kira-kira 1 hingga 2% untuk data sistem, dan overhed sistem fail ext4 atau btrfs menambah 3 hingga 5% lagi. Rancang kira-kira 5% tambahan melebihi angka yang dipaparkan: keperluan 10 TB sebenarnya memerlukan kira-kira 10.5 TB.",
    },
  ],
};

export default translation;
