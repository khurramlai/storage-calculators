import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-hanwha",
  title: "Kalkulator Storan Hanwha",
  description:
    "Kalkulator storan Hanwha untuk kamera Wisenet dengan penjimatan codec WiseStream II dimodelkan. Nilai lalai sepadan dengan siri P dan Q yang disambungkan ke NVR XRN, SRN atau WRN.",
  tagline:
    "Perancangan storan kamera Hanwha Wisenet dengan pemampatan WiseStream II dimodelkan.",
  keywords: [
    "kalkulator storan hanwha",
    "kalkulator storan wisenet",
    "cara kira hard disk hanwha wisenet",
    "storan samsung wisenet",
  ],

  content: {
    intro:
      "Kamera IP Hanwha Wisenet (dahulunya Samsung Techwin) menggunakan WiseStream II, codec pintar peka adegan yang dibina atas H.265 dan menjimatkan kira-kira 75% berbanding H.264 pada adegan pengawasan lazim. Kalkulator ini menggunakan tetapan biasa siri Wisenet P dan Q: 1080p, 30 fps, dengan codec pintar dihidupkan. Ia turut menangani pemasangan berbilang kamera yang disambungkan ke NVR XRN, SRN atau WRN, dan cadangan cakera sepadan dengan konfigurasi petak casis tersebut.",
    formula:
      "<p><strong>Storan Hanwha</strong> = <code>(bitrate × 3600 ÷ 8) × kamera × jam × hari</code></p>" +
      "<p>WiseStream II ialah lanjutan codec pintar Hanwha bagi H.265. Pada adegan dengan pergerakan yang boleh dijangka (tempat letak kereta, fasad bangunan), ia boleh mengatasi H.265+ Hikvision. Pada adegan yang sangat dinamik (ruang niaga, persimpangan sibuk), jurangnya mengecil. Kalkulator memodelkan WiseStream II dengan faktor pengurangan 75% yang sama seperti H.265+, selaras dengan bitrate perancangan yang diterbitkan Hanwha.</p>",
    useCases: [
      "Menentukan saiz NVR Hanwha Wisenet siri XRN, SRN dan WRN",
      "Merancang storan kamera panoramik berbilang penderia Wisenet PNM, apabila setiap penderia menjadi strim tersendiri",
      "Membandingkan penjimatan WiseStream II sebelum menghidupkannya pada kamera sedia ada",
      "Perancangan kapasiti untuk pemasangan VMS SSM (Smart Security Manager)",
    ],
  },

  faqs: [
    {
      question: "Apakah WiseStream II dan bagaimana ia berbeza daripada H.265?",
      answer:
        "WiseStream II ialah codec pintar Hanwha yang dibina di atas H.265. Ia menggunakan kawalan GOP (kumpulan gambar) dinamik dan penyesuaian bitrate mengikut kawasan: ia mengenal pasti bahagian adegan yang tidak bergerak dan mengurangkan bitratenya sambil mengekalkan kualiti penuh pada objek bergerak. Hasilnya setanding dengan H.265+ Hikvision, iaitu fail kira-kira 50% lebih kecil daripada H.265 biasa pada adegan yang sama.",
    },
    {
      question:
        "Adakah WiseStream II berfungsi dengan NVR dan VMS pihak ketiga?",
      answer:
        "Ya. WiseStream II menghasilkan strim H.265 yang serasi sepenuhnya dan boleh dinyahkod oleh mana-mana NVR atau VMS yang menyokong H.265. Pemampatan pintar berlaku sepenuhnya pada kamera; perakam hanya melihat fail H.265 yang lebih kecil. Ini menjadikannya sesuai untuk pemasangan yang menggabungkan peralatan pelbagai jenama.",
    },
    {
      question:
        "Bitrate apakah yang terbaik untuk merancang storan kamera Wisenet?",
      answer:
        "Bagi kamera Wisenet 1080p dengan WiseStream II dihidupkan, sasarkan bitrate maksimum 2 Mbps dalam mod VBR. Bagi 4 MP: 3 hingga 4 Mbps. Bagi 4K: 6 hingga 8 Mbps. Ini purata sebenar; saiz fail akan lebih kecil pada adegan yang sunyi. Mulakan dengan nilai lalai kalkulator dan laraskan jika helaian spesifikasi kamera anda menunjukkan angka berbeza.",
    },
    {
      question: "Cakera apakah yang serasi dengan NVR Hanwha Wisenet?",
      answer:
        "Hanwha menerbitkan senarai keserasian bagi setiap model NVR; WD Purple, Seagate SkyHawk dan Toshiba S300 umumnya disahkan serasi di seluruh barisan produk. Saiz maksimum yang disokong bergantung pada model dan versi perisian tegar; NVR Wisenet terkini menyokong 16 hingga 20 TB bagi setiap petak. Semak dokumen keserasian cakera rasmi bagi model khusus anda.",
    },
    {
      question:
        "Mengapa kamera Wisenet saya menggunakan bitrate lebih tinggi daripada jangkaan?",
      answer:
        "Punca yang mungkin: (1) WiseStream II dimatikan dalam tetapan kamera; (2) adegan luar biasa dinamik sehingga mengurangkan manfaat codec pintar; (3) bitrate ditetapkan kepada CBR (tetap) dan bukan VBR; (4) kamera berjalan dalam mod yang mengutamakan kualiti berbanding pemampatan, contohnya rakaman gred bukti. Semak Persediaan → Video & Audio → Profil Video dalam antara muka web kamera.",
    },
    {
      question: "Adakah kalkulator ini menyokong kamera panoramik Wisenet?",
      answer:
        "Kamera panoramik Wisenet (PNM-9085RQZ, PNM-9322VQP) menggunakan berbilang penderia dan muncul sebagai beberapa strim berasingan. Tetapkan bilangan kamera kepada jumlah keseluruhan penderia (lazimnya dua atau empat) dan kalkulator akan menguruskan selebihnya. Setiap penderia merakam secara berasingan dan menggunakan storannya sendiri.",
    },
  ],
};

export default translation;
