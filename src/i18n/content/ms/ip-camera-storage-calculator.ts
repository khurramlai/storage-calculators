import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-kamera-ip",
  title: "Kalkulator Storan Kamera IP",
  description:
    "Kalkulator storan kamera IP dengan pengiraan bitrate setiap kamera bagi H.264, H.265 dan codec pintar. Pilih resolusi dan kadar bingkai untuk mendapatkan storan tepat bagi setiap peranti.",
  tagline:
    "Perancangan storan kamera demi kamera dengan pengiraan codec dan resolusi yang realistik.",
  keywords: [
    "kalkulator storan kamera ip",
    "cara kira bitrate kamera ip",
    "storan kamera rangkaian",
    "pengiraan saiz rakaman kamera ip",
  ],

  content: {
    intro:
      "Kamera IP menstrim video digital melalui rangkaian, biasanya menerusi ONVIF, RTSP atau protokol khusus pengeluar, dan menyuap NVR, sistem VMS atau perakam pada NAS. Keperluan storannya ditentukan oleh tetapan pengekod dalam kamera itu sendiri, bukan oleh perakam. Oleh itu masuk akal untuk memodelkan satu kamera dahulu sebelum mendarabkannya. Nilai lalai di sini ialah satu kamera supaya anda boleh membandingkan resolusi dan codec bagi adegan yang sama sebelum mengira jumlah keseluruhan.",
    formula:
      "<p><strong>Storan setiap kamera</strong> = <code>(bitrate × 3600 ÷ 8) × jam × hari</code></p>" +
      "<p>Bitrate kamera IP ditetapkan dalam konfigurasi pengekodnya. Dalam mod VBR (bitrate berubah), puratanya menghampiri had yang ditetapkan; dalam mod CBR (bitrate tetap), ia kekal stabil. Codec pintar (H.265+ pada Hikvision, WiseStream II pada Hanwha, Zipstream pada Axis) melaraskan bitrate secara dinamik mengikut pergerakan adegan dan sering mengurangkan storan sebanyak 50 hingga 75% berbanding H.265 biasa.</p>",
    useCases: [
      "Membandingkan naik taraf resolusi (adakah 4K benar-benar memerlukan empat kali ganda storan 1080p?)",
      "Menyemak kecekapan codec bagi model kamera tertentu sebelum membeli",
      "Menentukan saiz storan pada kamera yang mempunyai slot kad SD",
      "Merancang lebar jalur rangkaian juga (bitrate × kamera = pemindahan rangkaian diperlukan)",
    ],
  },

  faqs: [
    {
      question: "Bitrate apakah yang patut saya tetapkan pada kamera IP?",
      answer:
        "Bagi 1080p H.264 pada 25 fps, 4 Mbps ialah asas yang baik untuk adegan pengawasan umum. Turunkan kepada 2 Mbps untuk adegan statik seperti tempat letak kereta, dan naikkan kepada 6 hingga 8 Mbps untuk kawasan yang memerlukan perincian seperti pembacaan nombor plat atau kaunter kedai. Bagi H.265, bahagikan nilai tersebut dengan dua. Codec pintar (H.265+) melaras sendiri: anda menetapkan bitrate maksimum dan kamera menggunakan apa yang perlu sahaja.",
    },
    {
      question: "VBR atau CBR, yang mana menggunakan lebih banyak storan?",
      answer:
        "CBR (bitrate tetap) menggunakan storan yang boleh diramal dan sedikit lebih tinggi, berguna apabila lebar jalur perlu kekal stabil untuk perancangan rangkaian. VBR (bitrate berubah) menggunakan kurang pada adegan sunyi dan lebih pada adegan sibuk, dengan had atas yang sama. Untuk perancangan, andaikan strim VBR berpurata 60 hingga 70% daripada hadnya. Anggaran bitrate kalkulator adalah setara VBR.",
    },
    {
      question: "Bagaimana storan 4K berbanding 1080p?",
      answer:
        "4K (3840×2160, 8 MP) mempunyai empat kali ganda piksel berbanding 1080p (2 MP), tetapi bitrate terkod hanya meningkat kira-kira tiga hingga empat kali ganda kerana kecekapan pemampatan bertambah baik pada resolusi tinggi. Dengan H.265+ jurangnya mengecil lagi: pada adegan yang sama, strim 4K H.265+ boleh jadi lebih kecil daripada strim 1080p H.264. Kalkulator mengambil kira perkara ini dengan betul.",
    },
    {
      question: "Adakah pemampatan berlaku pada kamera atau pada NVR?",
      answer:
        "Pada kamera. Kamera IP mempunyai pengekod terbina (biasanya cip Hi3516, GK7202 atau Ambarella) yang memampatkan sebelum penghantaran. NVR atau VMS menerima strim yang sudah dimampatkan dan menulisnya terus ke cakera. Justeru, mengubah tetapan codec pada kamera mengubah lebar jalur dan storan secara serentak.",
    },
    {
      question: "Apakah perbezaan antara strim utama dan sub-strim?",
      answer:
        "Kebanyakan kamera IP menghasilkan dua strim: strim utama pada resolusi penuh untuk rakaman, dan sub-strim pada resolusi rendah untuk paparan langsung dalam aplikasi dan grid berbilang kamera bagi menjimatkan lebar jalur. Kalkulator hanya menganggarkan strim utama. Jika NVR anda turut merakam sub-strim, yang lazim tetapi pilihan, tambah 5 hingga 15% pada jumlah keseluruhan.",
    },
    {
      question:
        "Bolehkah pengesanan gerakan mengurangkan storan kamera IP?",
      answer:
        "Ya. Rakaman berdasarkan gerakan lazimnya mengurangkan storan sebanyak 60 hingga 90% bergantung pada aktiviti adegan. Mod “hanya apabila gerakan dikesan” dalam kalkulator mengandaikan masa rakaman berkesan 40%, satu andaian yang berhemat. Rakaman peristiwa pintar (hanya apabila orang atau kenderaan dikesan) boleh menurunkannya di bawah 10% dengan kamera AI terkini.",
    },
  ],
};

export default translation;
