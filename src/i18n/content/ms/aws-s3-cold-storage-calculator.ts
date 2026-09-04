import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-sejuk-aws-s3",
  title: "Kalkulator Storan Sejuk AWS S3",
  description:
    "Kalkulator storan sejuk AWS S3 untuk ketiga-tiga kelas Glacier. Memodelkan caj pengambilan semula, minimum 90 dan 180 hari, serta kos bulanan sebenar dalam satu paparan.",
  tagline:
    "Pengiraan storan sejuk yang sebenar: harga setiap GB nampak murah, tetapi Glacier menyembunyikan kosnya dalam caj pengambilan semula.",
  keywords: [
    "kalkulator storan sejuk aws s3",
    "kalkulator s3 glacier",
    "kos glacier deep archive",
    "harga storan sejuk aws",
  ],

  content: {
    intro:
      "Kelas S3 Glacier ialah storan objek termurah yang dijual AWS. Deep Archive berharga kira-kira 1 dolar bagi setiap TB sebulan, iaitu kira-kira 25 kali lebih murah daripada S3 Standard. Namun harga setiap gigabait tidak menceritakan keseluruhannya. Setiap kelas Glacier mengenakan caj pengambilan semula apabila anda benar-benar menarik data keluar, mensyaratkan komitmen storan minimum 90 atau 180 hari dengan penalti pemadaman awal, dan mengenakan kos setiap permintaan yang lebih tinggi. Kalkulator ini bermula dengan senario arkib sejuk yang realistik: 10 TB disimpan dan 100 GB ditarik semula setiap bulan, supaya kos pengambilan semula terpapar bersebelahan kos storan, di tempat sepatutnya.",
    formula:
      "<p><strong>Jumlah kos Glacier</strong> = storan + operasi tulis + pengambilan semula + data keluar (jika data meninggalkan AWS)</p>" +
      "<p><strong>Glacier Instant Retrieval</strong>: storan 0.004 $/GB sebulan, pengambilan semula 0.03 $/GB, minimum 90 hari. Akses dalam milisaat. Sesuai untuk arkib yang mungkin perlu dipulihkan dengan cepat.</p>" +
      "<p><strong>Glacier Flexible Retrieval</strong>: storan 0.0036 $/GB sebulan, pengambilan semula 0.01 $/GB, minimum 90 hari. Pemulihan mengambil masa beberapa minit hingga jam.</p>" +
      "<p><strong>Glacier Deep Archive</strong>: storan 0.00099 $/GB sebulan, pengambilan semula 0.02 $/GB, minimum 180 hari. Pemulihan melebihi 12 jam. Paling murah sekali gus paling perlahan.</p>",
    useCases: [
      "Membandingkan kelas Glacier bagi arkib yang menggantikan pustaka pita",
      "Memodelkan kos pemulihan bagi senario simpanan mengikut kehendak undang-undang",
      "Mengira takat pulang modal Deep Archive berbanding pustaka pita di premis",
      "Menganggarkan kos pemindahan pukal sekali sahaja ke storan sejuk",
    ],
  },

  faqs: [
    {
      question: "Apakah kelas storan sejuk S3 yang paling murah?",
      answer:
        "Glacier Deep Archive pada 0.00099 $/GB sebulan, iaitu kira-kira 1 dolar bagi setiap TB sebulan. Halangannya: caj storan minimum 180 hari (jika dipadam lebih awal anda tetap membayar untuk 180 hari), caj pengambilan semula 0.02 $/GB, dan masa pemulihan melebihi 12 jam. Bagi arkib 100 TB yang tidak disentuh selama setahun, Deep Archive berharga kira-kira 1,200 dolar berbanding kira-kira 28,000 dolar pada S3 Standard.",
    },
    {
      question: "Bagaimana minimum 180 hari Deep Archive berfungsi?",
      answer:
        "Jika anda memadamkan objek sebelum 180 hari, AWS tetap mengenakan caj seolah-olah ia disimpan sepanjang tempoh tersebut. Contohnya: anda memuat naik 1 TB pada hari pertama dan memadamnya pada hari ke-30; anda masih dibilkan bagi baki 150 hari (0.50 dolar). Bagi data yang mungkin diubah atau dipadam, Glacier Flexible Retrieval dengan minimum 90 hari lebih selamat. Bagi arkib yang benar-benar tidak berubah seperti sandaran dan rekod pematuhan, penalti ini tidak relevan.",
    },
    {
      question:
        "Berapa lama sebenarnya pemulihan daripada Glacier Deep Archive?",
      answer:
        "Pemulihan standard: lazimnya 12 jam, dijamin sehingga 48 jam. Pemulihan pukal (pada skala petabait): sehingga 48 jam tetapi lebih murah bagi setiap GB. Tiada pilihan dipercepat bagi Deep Archive, tidak seperti Glacier Flexible. Rancang mengikutnya: jika anda memerlukan akses pada hari yang sama, Glacier Instant Retrieval (0.004 $/GB) lebih baik walaupun kosnya empat kali ganda.",
    },
    {
      question:
        "Adakah saya membayar caj pengambilan semula DAN data keluar semasa memuat turun daripada Glacier?",
      answer:
        "Ya. Pengambilan semula memulihkan data ke S3 Standard tempat ia berada selama tempoh yang ditetapkan, kemudian caj data keluar dikenakan apabila ia meninggalkan AWS. Jumlah kos memulihkan dan memuat turun 1 TB daripada Deep Archive: 20 dolar pengambilan semula ditambah 90 dolar data keluar, iaitu 110 dolar. Tetapkan salinan yang dipulihkan supaya tamat tempoh dengan cepat (S3 akan memadamnya secara automatik) bagi mengelakkan pembilan berganda.",
    },
    {
      question:
        "Bila Glacier Instant Retrieval mengatasi Standard-IA?",
      answer:
        "Glacier Instant (0.004 $/GB) lebih murah daripada Standard-IA (0.0125 $/GB) untuk storan, tetapi kosnya tiga kali ganda untuk pengambilan semula (0.03 $/GB berbanding 0.01 $/GB). Takat persilangannya: jika anda mengambil semula kurang daripada kira-kira 3% data yang disimpan setiap bulan, Glacier Instant menang. Melebihi itu, Standard-IA lebih murah. Kedua-duanya mempunyai minimum 90 hari yang setanding.",
    },
    {
      question:
        "Bolehkah saya menggunakan kitaran hayat S3 untuk berpindah ke Glacier secara automatik?",
      answer:
        "Ya. Peraturan kitaran hayat S3 boleh merangkai peralihan: Standard → Standard-IA selepas 30 hari → Glacier Instant selepas 60 → Deep Archive selepas 365. Inilah corak lazim bagi arkib log dan sandaran lama. Peralihan itu sendiri dikenakan caj (0.05 $ bagi setiap 1,000 permintaan ke Deep Archive), jadi ia paling berbaloi bagi objek bersaiz 128 KB ke atas.",
    },
  ],
};

export default translation;
