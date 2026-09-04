import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-pengawasan-video",
  title: "Kalkulator Storan Pengawasan Video",
  description:
    "Kalkulator storan pengawasan video untuk kamera IP, NVR dan DVR. Menyokong H.264, H.265, codec pintar, rakaman berdasarkan gerakan serta sebarang bilangan kamera atau tempoh simpanan.",
  tagline:
    "Menentukan saiz storan rakaman untuk sebarang kamera, codec dan tempoh simpanan.",
  keywords: [
    "kalkulator storan pengawasan video",
    "cara kira storan sistem pengawasan",
    "kalkulator cctv pengawasan",
    "anggaran saiz rakaman pengawasan",
  ],

  content: {
    intro:
      "Perancangan storan pengawasan video boleh diringkaskan kepada satu formula: bitrate × kamera × jam × hari. Yang sukar bukan pengiraannya, tetapi memilih bitrate yang betul, kerana ia bergantung pada resolusi, kadar bingkai, codec dan sesibuk mana adegannya. Kalkulator ini menganggarkan bitrate yang munasabah daripada spesifikasi kamera anda dan menggunakan penjimatan codec pintar (H.265+, WiseStream II, Zipstream) apabila berkenaan. Anda akan memperoleh jumlah storan dan cadangan cakera gred pengawasan.",
    formula:
      "<p><strong>Jumlah storan</strong> = <code>(bitrate × 3600 ÷ 8) × kamera × jam_sehari × hari_simpanan</code></p>" +
      "<p>Bitrate diukur dalam bit sesaat. Kalkulator menganggarkannya daripada resolusi, kadar bingkai dan codec berdasarkan jadual yang diterbitkan Hikvision, Hanwha dan Axis. Pilih codec pintar untuk memodelkan penjimatan H.265+, WiseStream II atau Zipstream (kira-kira 75% lebih rendah daripada H.264).</p>" +
      "<p><strong>Rakaman berdasarkan gerakan</strong> menggunakan kitaran tugas 40% pada jam rakaman, satu nilai lazim bagi pengesanan gerakan yang ditala baik pada kamera luar.</p>",
    useCases: [
      "Menentukan saiz NVR sebelum membeli supaya kapasiti cakera benar-benar menepati tempoh simpanan yang dikehendaki",
      "Membandingkan codec untuk mewajarkan peralihan kepada H.265 atau H.265+",
      "Merancang pengawasan pelbagai lokasi dengan bilangan kamera berbeza bagi setiap tapak",
      "Membelanjawankan cakera gred pengawasan seperti WD Purple atau Seagate SkyHawk",
    ],
  },

  faqs: [
    {
      question: "Berapa banyak storan diperlukan satu kamera?",
      answer:
        "Kamera 1080p H.265 pada 25 fps yang merakam secara berterusan menghasilkan kira-kira 22 GB sehari, iaitu hampir 660 GB sebulan. Kamera yang sama dengan H.265+ (codec pintar) turun kepada kira-kira 5 GB sehari. Pada 4K dengan H.264 pula boleh mencecah 170 GB sehari bagi setiap kamera, jadi pilihan codec lebih berpengaruh daripada faktor lain.",
    },
    {
      question: "Apakah perbezaan antara H.264, H.265 dan H.265+?",
      answer:
        "H.264 ialah asas lama. H.265 (HEVC) mencapai kualiti visual yang setara pada separuh bitrate. H.265+ (Hikvision), WiseStream II (Hanwha) dan Zipstream (Axis) pula ialah varian “pintar” yang mengesan kawasan bergerak dan mengurangkan lagi bitrate pada bahagian statik, kira-kira 50% tambahan berbanding H.265, menghasilkan fail lebih kecil kira-kira 75% berbanding H.264.",
    },
    {
      question: "Perlukah saya menggunakan cakera keras gred pengawasan?",
      answer:
        "Ya. Cakera meja direka untuk kitaran tugas kira-kira lapan jam sehari dan cepat haus di bawah beban penulisan berterusan. Cakera pengawasan (WD Purple, Seagate SkyHawk) diperakui untuk penulisan berterusan, tahan getaran dalam petak berbilang cakera, dan ditala untuk beban penstriman dengan kependaman putaran rendah.",
    },
    {
      question:
        "Adakah rakaman berdasarkan gerakan benar-benar menjimatkan sebanyak itu?",
      answer:
        "Ya. Dalam kebanyakan persekitaran, aktiviti sebenar hanya 10 hingga 40% daripada tempoh 24 jam. Pratetap gerakan dalam kalkulator mengandaikan kitaran tugas 40%, satu andaian yang berhemat. Rakaman peristiwa pintar (hanya apabila orang atau kenderaan dikesan, bukan sebarang pergerakan) boleh menurunkannya di bawah 10%.",
    },
    {
      question: "Bagaimana alat ini mengira bitrate?",
      answer:
        "Kalkulator bermula daripada jadual bitrate rujukan H.264 pada 25 fps bagi setiap resolusi (diambil daripada dokumen perancangan awam Hikvision, Hanwha dan Axis), menskalakannya secara linear mengikut kadar bingkai, kemudian menggunakan pengganda kecekapan codec. Bitrate yang terhasil dipaparkan dalam keputusan supaya anda boleh membandingkannya dengan helaian spesifikasi kamera anda.",
    },
    {
      question: "Berapakah tempoh simpanan yang lazim?",
      answer:
        "30 hari ialah keperluan paling lazim bagi pemasangan komersial. Sesetengah bidang kuasa mensyaratkan lebih lama (60 atau 90 hari). Bank, pusat permainan dan infrastruktur kritikal sering menyimpan lebih setahun, manakala pemasangan rumah mungkin memadai dengan tujuh hari. Kalkulator ditetapkan pada 30 hari secara lalai.",
    },
  ],
};

export default translation;
