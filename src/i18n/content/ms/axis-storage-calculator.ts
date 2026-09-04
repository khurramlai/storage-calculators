import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-axis",
  title: "Kalkulator Storan Axis",
  description:
    "Kalkulator storan Axis dengan penjimatan pemampatan Zipstream dimodelkan. Nilai lalai sepadan dengan kamera IP siri P, Q dan M dalam pemasangan sebenar.",
  tagline:
    "Penentuan saiz storan kamera Axis dengan penjimatan bitrate dinamik Zipstream.",
  keywords: [
    "kalkulator storan axis",
    "cara kira storan kamera axis",
    "storan axis zipstream",
    "kalkulator axis communications",
  ],

  content: {
    intro:
      "Axis ialah pengeluar pertama yang memperkenalkan codec pintar (Zipstream, pada 2015) dan kini ia digunakan secara meluas dalam pemasangan korporat dan kerajaan. Zipstream mengurangkan bitrate sebanyak 50 hingga 80% bergantung pada sesibuk mana adegannya, dan adegan luar yang sunyi paling banyak dimampatkan. Kalkulator ini memodelkan Zipstream sebagai setara H.265+ dan bermula daripada tetapan lazim kamera Axis siri P pada 1080p, 25 fps. Gunakannya untuk menentukan saiz pelayan Axis Camera Station atau mana-mana NVR pihak ketiga dalam pemasangan yang didominasi Axis.",
    formula:
      "<p><strong>Storan Axis</strong> = <code>(bitrate × 3600 ÷ 8) × kamera × jam × hari</code></p>" +
      "<p>Zipstream ialah pengawal bitrate peka adegan milik Axis yang dibina atas H.264 dan H.265. Ia mengenal pasti kawasan yang penting dari sudut forensik (wajah, nombor plat, pergerakan) dan mengekalkan perinciannya, sambil memampatkan latar belakang statik dengan agresif. Penjimatan bersih berbanding H.264 ialah 50 hingga 80%: adegan luar yang sunyi (tempat letak kereta pada waktu malam) paling banyak mendapat manfaat, manakala ruang niaga atau hab pengangkutan yang sibuk kurang.</p>",
    useCases: [
      "Menentukan saiz storan pelayan rakaman Axis Camera Station (ACS)",
      "Merancang storan pada perakam Axis siri S atau NVR pihak ketiga yang serasi Axis",
      "Membandingkan Zipstream dengan penjimatan H.265 sahaja sebelum menghidupkannya pada kamera sedia ada",
      "Perancangan kapasiti untuk AXIS Camera Station Edge dan peranti S22",
    ],
  },

  faqs: [
    {
      question: "Apakah Axis Zipstream?",
      answer:
        "Zipstream ialah teknologi codec pintar Axis yang tersedia pada kebanyakan kamera semasa siri P, Q dan M. Ia menambah pengawal bitrate peka adegan di atas H.264 atau H.265: ia mengenal pasti kawasan penting (wajah, nombor plat, objek bergerak) dan mengekalkannya pada kualiti tinggi sambil mengurangkan perincian latar belakang statik. Strim yang terhasil mematuhi sepenuhnya H.264/H.265, jadi mana-mana perakam serasi boleh memainkannya semula.",
    },
    {
      question: "Berapa banyak storan dijimatkan Zipstream?",
      answer:
        "Axis menyatakan penjimatan 50 hingga 80% berbanding H.264 atau H.265 biasa, bergantung pada aktiviti adegan. Pratetap “H.265+ / codec pintar” dalam kalkulator memodelkan pengurangan 75%, yang menghampiri adegan pengawasan bandar biasa. Bagi pandangan yang kebanyakannya statik (kawasan perindustrian, pejabat di luar waktu kerja), Zipstream mungkin menjimatkan lebih banyak. Bagi adegan dinamik (ruang niaga, hab pengangkutan), jangkakan 50 hingga 60%.",
    },
    {
      question: "Adakah Zipstream memerlukan peralatan rakaman khas?",
      answer:
        "Tidak. Strim yang dikodkan Zipstream ialah H.264 atau H.265 piawai dan boleh dimainkan pada mana-mana NVR, VMS atau pemain yang serasi. Pemampatan pintar berlaku sepenuhnya pada kamera. Ini menjadikan kamera Axis pilihan yang baik untuk pemasangan pelbagai jenama apabila anda ingin mengekalkan sistem rakaman sedia ada.",
    },
    {
      question:
        "Apakah kesan kamera Axis berbilang penderia terhadap storan?",
      answer:
        "Kamera Axis berbilang penderia (Q3819-PVE, Q6010-E, P3727-PLE) muncul sebagai beberapa strim bebas, lazimnya dua atau empat penderia bagi setiap kamera. Tetapkan bilangan kamera kepada jumlah penderia, bukan bilangan unit fizikal. Setiap penderia merakam pada resolusinya sendiri dan menggunakan lebar jalur serta storannya sendiri.",
    },
    {
      question: "Bagaimana menghidupkan Zipstream pada kamera Axis?",
      answer:
        "Melalui antara muka web kamera (atau menerusi AXIS Device Manager): Video → Profil strim → Zipstream → pilih kekuatan (rendah, sederhana, tinggi, lebih tinggi, ekstrem). “Sederhana” ialah tetapan lazim untuk pengawasan am, manakala “tinggi” atau “lebih tinggi” sesuai untuk kawasan dengan corak aktiviti yang boleh dijangka. Perhatikan bahawa Zipstream dihidupkan secara lalai pada kebanyakan perisian tegar Axis terkini, jadi semak dahulu sebelum mengandaikan sebaliknya.",
    },
    {
      question:
        "Cakera apakah yang disyorkan untuk pelayan AXIS Camera Station?",
      answer:
        "AXIS Camera Station menyokong sebarang cakera gred pengawasan: WD Purple, Seagate SkyHawk atau cakera NAS perusahaan (WD Red Pro, Seagate IronWolf Pro). Bagi pemasangan ACS berbilang pelayan dengan bilangan kamera yang besar (50 ke atas), storan NAS atau SAN perusahaan disyorkan kerana kebolehpercayaan dan IOPS tambahannya. Kalkulator memberikan keperluan kapasiti mentah; rujuk dokumentasi ACS untuk perancangan IOPS.",
    },
  ],
};

export default translation;
