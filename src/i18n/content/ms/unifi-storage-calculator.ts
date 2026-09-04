import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-unifi",
  title: "Kalkulator Storan UniFi",
  description:
    "Kalkulator storan UniFi untuk pemasangan Protect dengan kamera G3, G4 dan G5. Menentukan saiz cakera bagi UNVR, UNVR Pro dan Cloud Key Gen2 Plus dengan H.265 secara lalai.",
  tagline:
    "Penentuan saiz storan UniFi Protect bagi sebarang gabungan kamera G3/G4/G5 dan sebarang tempoh simpanan.",
  keywords: [
    "kalkulator storan unifi",
    "kalkulator unifi protect",
    "cara kira hard disk ubiquiti",
    "storan nvr unifi",
  ],

  content: {
    intro:
      "UniFi Protect berjalan pada UNVR, UNVR Pro atau Cloud Key Gen2 Plus daripada Ubiquiti. Kamera G4 dan G5 menggunakan H.265 secara lalai. Tiada tetapan “codec pintar” yang berasingan; perisian tegar Protect menguruskan bitrate secara suai. Kalkulator ini menggunakan tetapan gaya G4 Pro: 4 MP, 30 fps, H.265 dan simpanan 14 hari. Satu perkara penting tentang Protect: apabila cakera penuh, rakaman terlama dipadamkan secara automatik. Jadi angka di sini ialah apa yang patut anda beli jika mahu tempoh simpanan penuh tanpa kehilangan apa-apa.",
    formula:
      "<p><strong>Storan UniFi Protect</strong> = <code>(bitrate × 3600 ÷ 8) × kamera × jam × hari</code></p>" +
      "<p>Kamera UniFi G4 Pro pada 4 MP, 30 fps dan H.265 lazimnya menulis 8 hingga 12 Mbps bagi setiap kamera. Kamera siri G5 sedikit lebih cekap. Siri G3 yang lebih lama terhad kepada 1080p dan mungkin tidak menyokong H.265 pada perisian tegar lama; kamera tersebut mengekod dalam H.264 dengan bitrate lebih tinggi.</p>",
    useCases: [
      "Memilih antara UNVR, UNVR Pro dan Cloud Key Gen2 Plus berdasarkan keperluan storan",
      "Memilih cakera yang sesuai untuk empat petak UNVR",
      "Merancang penambahan kamera dalam had kapasiti UNVR sedia ada",
      "Menimbang sama ada perlu menghidupkan arkib awan UniFi Protect (Ubiquiti Cloud Storage)",
    ],
  },

  faqs: [
    {
      question: "Berapa banyak storan digunakan kamera UniFi G4 Pro?",
      answer:
        "Pada tetapan lalai (4 MP, 30 fps, H.265, rakaman berterusan), G4 Pro menulis kira-kira 80 hingga 100 GB sehari. Dengan rakaman berdasarkan gerakan, iaitu penggunaan lazim rumah dan perniagaan kecil, angka itu turun kepada 30 hingga 40 GB sehari. Pratetap UniFi dalam kalkulator mencerminkan rakaman berterusan; tukar kepada “hanya apabila gerakan dikesan” jika pemasangan anda menggunakan pengesanan pintar.",
    },
    {
      question: "Berapa lama cakera UNVR akan bertahan?",
      answer:
        "Bergantung pada saiz cakera, bilangan kamera dan tetapan simpanan. UniFi Protect memadamkan rakaman terlama secara automatik apabila cakera penuh; tiada kegagalan berlaku, cuma tempoh simpanan sebenar menjadi lebih pendek. Untuk mendapatkan tempoh simpanan yang anda mahu tanpa pemadaman automatik, gunakan kalkulator ini dengan konfigurasi anda dan pilih saiz cakera yang sepadan. UNVR menyokong sehingga 16 TB bagi setiap petak, dengan empat petak kesemuanya.",
    },
    {
      question: "Adakah UniFi Protect menyokong H.265?",
      answer:
        "Ya. G4 Bullet, G4 Pro, G4 Dome, G4 Instant dan semua kamera G5 menyokong H.265 dan menggunakannya secara lalai. Kamera siri G3 mungkin masih menggunakan H.264 bergantung pada perisian tegar (sesetengah model G3 menyokong H.265 dalam versi terkini). Mencampurkan kamera H.264 dan H.265 dalam satu pemasangan UniFi Protect tidak menjadi masalah; andaian H.265 dalam kalkulator adalah berhemat bagi pemasangan bercampur.",
    },
    {
      question: "Cakera keras apakah yang serasi dengan UNVR?",
      answer:
        "Ubiquiti menyokong secara rasmi WD Purple, Seagate SkyHawk dan senarai cakera pengawasan serta NAS dalam UNVR. Kapasiti maksimum bagi setiap petak ialah 16 TB pada UNVR Pro. Elakkan cakera SMR (rakaman magnetik bertindih) kerana ia tidak sesuai dengan penulisan pengawasan yang berterusan. UNVR tidak menjalankan RAID secara lalai, tetapi UNVR Pro menyokong RAID 1, 5 dan 10.",
    },
    {
      question: "Adakah UniFi Protect merakam ke awan?",
      answer:
        "Ya. Ubiquiti Cloud Storage ditawarkan sebagai langganan (kira-kira RM9 hingga RM18 bagi setiap kamera sebulan mengikut pelan) dan menyandarkan rakaman Protect ke awan Ubiquiti. Ia tambahan kepada storan setempat, bukan penggantinya. Gunakan kalkulator ini untuk penentuan saiz setempat; kos awan dikira berasingan.",
    },
    {
      question:
        "Bolehkah saya menambah storan UniFi Protect tanpa kehilangan rakaman?",
      answer:
        "Pada UNVR Pro yang dikonfigurasikan dengan RAID, cakera boleh diganti satu demi satu dan dibina semula. Pada UNVR bercakera tunggal, cakera boleh ditukar tetapi rakaman lama akan hilang; eksport klip penting menggunakan fungsi eksport Protect sebelum menukarnya. UniFi Protect belum menyokong pengagihan data merentas beberapa cakera luaran, jadi menambah kapasiti bermakna menggantikan cakera dengan yang lebih besar.",
    },
  ],
};

export default translation;
