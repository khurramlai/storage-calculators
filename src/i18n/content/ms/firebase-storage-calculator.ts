import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-firebase",
  title: "Kalkulator Harga Storan Firebase",
  description:
    "Kalkulator harga storan Firebase untuk pelan Blaze bayar mengikut penggunaan. Memodelkan kos storan, muat turun, muat naik dan operasi bagi aplikasi sebarang saiz.",
  tagline:
    "Harga Firebase Cloud Storage: storan, muat turun dan operasi pada pelan Blaze.",
  keywords: [
    "kalkulator harga storan firebase",
    "kos firebase storage",
    "kalkulator firebase cloud storage",
    "harga pelan blaze firebase",
  ],

  content: {
    intro:
      "Firebase Cloud Storage pada asasnya ialah lapisan nipis di atas Google Cloud Storage: infrastruktur yang sama, SDK yang lebih ringkas, dan penyepaduan dengan Firebase Auth serta peraturan keselamatan. Harganya mengikut GCS Standard dengan tambahan kecil, berserta pelan Spark percuma yang memberikan 5 GB storan dan 1 GB muat turun sehari. Kalkulator ini memodelkan pelan Blaze yang dibayar mengikut penggunaan, iaitu pelan yang akhirnya digunakan setiap aplikasi Firebase dalam pengeluaran. Jika anda mengira pada skala besar, bandingkan juga dengan kalkulator GCS biasa bagi beban kerja yang sama.",
    formula:
      "<p><strong>Firebase Storage pada pelan Blaze:</strong></p>" +
      "<ul>" +
      "<li><strong>Storan</strong>: 0.026 $/GB sebulan</li>" +
      "<li><strong>Muat turun</strong> (data keluar ke internet): 0.12 $/GB</li>" +
      "<li><strong>Muat naik</strong>: percuma</li>" +
      "<li><strong>Operasi</strong>: 0.05 $ bagi setiap 10,000 penulisan dan 0.004 $ bagi setiap 10,000 bacaan</li>" +
      "</ul>" +
      "<p>Pelan Spark menyediakan 5 GB storan, 1 GB muat turun sehari, 20,000 muat naik sehari dan 50,000 muat turun sehari secara percuma. Kebanyakan aplikasi melepasi had muat turun terlebih dahulu.</p>",
    useCases: [
      "Menganggarkan kos Firebase Storage bagi aplikasi mudah alih yang sedang berkembang",
      "Menentukan bila perlu beralih daripada Spark (percuma) kepada Blaze (bayar mengikut penggunaan)",
      "Membandingkan Firebase Storage dengan GCS mentah bagi beban kerja yang sama",
      "Memodelkan kos media yang dimuat naik pengguna (foto profil, video)",
    ],
  },

  faqs: [
    {
      question: "Bila saya patut beralih daripada Firebase Spark ke Blaze?",
      answer:
        "Had Spark lazimnya dicapai mengikut urutan ini: muat turun harian dahulu (had 1 GB sehari), kemudian bilangan operasi harian, dan akhirnya storan (had 5 GB). Bagi aplikasi pengguna, titik peralihannya biasanya antara 100 hingga 500 pengguna aktif harian. Blaze dibayar mengikut penggunaan tanpa minimum: bagi aplikasi kecil dengan 10 GB disimpan dan 50 GB muat turun sebulan, jangkakan kira-kira 6 hingga 7 dolar sebulan kesemuanya.",
    },
    {
      question:
        "Adakah Firebase Storage lebih mahal daripada Google Cloud Storage mentah?",
      answer:
        "Sedikit lebih mahal. Firebase Storage berharga 0.026 $/GB sebulan berbanding 0.020 $/GB pada GCS Standard. Tambahan itu membayar SDK yang ringkas, penyepaduan pengesahan, peraturan keselamatan dan konsol Firebase. Di bawah kira-kira 1 TB storan, perbezaannya tidak ketara dan masa pembangunan yang dijimatkan berbaloi. Pada 10 TB ke atas, beralih terus ke GCS mula berbaloi walaupun memerlukan kerja penyepaduan.",
    },
    {
      question: "Berapakah kos menyimpan satu foto profil pengguna?",
      answer:
        "Foto profil termampat lazimnya bersaiz kira-kira 500 KB, jadi 1 GB memuatkan kira-kira 2,000 foto. Pada 0.026 $/GB sebulan, 2,000 foto profil berharga kira-kira 0.026 dolar sebulan atau 0.31 dolar setahun. Tambah kira-kira 0.06 dolar bagi 100 muat turun setiap satu, yang lazim pada bulan pertama penggunaan. Bagi aplikasi 100,000 pengguna: kira-kira 13 dolar sebulan untuk storan berserta kos muat turun yang sangat berubah-ubah.",
    },
    {
      question: "Adakah peraturan keselamatan Firebase dikenakan caj tambahan?",
      answer:
        "Tidak, ia sebahagian daripada platform. Namun setiap operasi storan dinilai terhadap peraturan tersebut, dan itu dikira dalam kuota operasi. Peraturan rumit yang melibatkan carian pangkalan data boleh menjadi perlahan dan menambah kependaman; dalam kes melampau, had masa yang tamat menyebabkan operasi gagal tetapi tetap dikira. Pastikan peraturan ringkas dan terhad kepada storan jika boleh.",
    },
    {
      question:
        "Bolehkah saya menggunakan Firebase Cloud Storage dengan Cloud Functions?",
      answer:
        "Ya. Pencetus Cloud Storage (onFinalize, onDelete, onMetadataUpdate) lazim digunakan untuk memproses fail yang dimuat naik: mengecilkan imej, mengimbas virus dan menukar format. Setiap panggilan fungsi dikira berasingan pada baris Cloud Functions (kira-kira 0.40 dolar bagi setiap juta panggilan berserta masa pemproses dan memori). Ambil kira ini di samping kos storan.",
    },
    {
      question:
        "Apakah cara termurah menyimpan 1 TB fail pengguna?",
      answer:
        "Bagi kos storan sahaja pada Firebase Blaze: 1 TB berharga kira-kira 26 dolar sebulan. Namun muat turun mendominasi bagi kebanyakan aplikasi: 1 TB muat turun bulanan menambah 122 dolar sebulan. Bagi kes sebegini, pertimbangkan: (1) Firebase Storage dengan cache Firebase Hosting, (2) Firebase Storage dengan Cloud CDN, atau (3) penyedia dengan kos pemindahan rendah seperti Cloudflare R2 (0.015 $/GB storan tanpa caj data keluar).",
    },
  ],
};

export default translation;
