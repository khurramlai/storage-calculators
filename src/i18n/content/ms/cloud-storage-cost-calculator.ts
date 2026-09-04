import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-kos-storan-awan",
  title: "Kalkulator Kos Storan Awan",
  description:
    "Kalkulator kos storan awan untuk AWS S3, Azure Blob, GCS dan Firebase. Bandingkan caj storan, data keluar, permintaan dan pengambilan semula secara bersebelahan pada harga senarai.",
  tagline:
    "Satu kalkulator, empat awan utama: bandingkan harga senarai dalam beberapa saat.",
  keywords: [
    "kalkulator kos storan awan",
    "perbandingan harga storan awan",
    "kalkulator harga cloud storage",
    "cara kira kos storan awan",
  ],

  content: {
    intro:
      "Harga storan awan mempunyai jauh lebih banyak komponen daripada yang ditunjukkan harga setiap gigabait. Data keluar, bilangan permintaan, caj pengambilan semula dan tempoh storan minimum semuanya terkumpul. Kalkulator ini memodelkan empat penyedia utama (AWS S3, Azure Blob, Google Cloud Storage dan Firebase) pada harga senarai di wilayah AS yang lazim, supaya perbandingan benar-benar boleh dibuat. Bertukar penyedia boleh menjimatkan 20 hingga 50% bagi beban kerja yang sama, manakala bertukar kelas (panas, suam, sejuk, arkib) boleh menjimatkan 80% atau lebih bagi data yang jarang disentuh.",
    formula:
      "<p><strong>Kos bulanan</strong> = storan + data keluar + operasi tulis + operasi baca + pengambilan semula</p>" +
      "<ul>" +
      "<li><strong>Storan</strong>: <code>GB × harga/GB/bulan</code> bagi kelas yang dipilih</li>" +
      "<li><strong>Data keluar</strong>: <code>maks(0; GB keluar − kuota percuma) × harga/GB</code></li>" +
      "<li><strong>Operasi tulis</strong>: <code>(PUT ÷ 1000) × harga bagi setiap 1,000</code></li>" +
      "<li><strong>Operasi baca</strong>: <code>(GET ÷ 1000) × harga bagi setiap 1,000</code></li>" +
      "<li><strong>Pengambilan semula</strong>: <code>GB diambil × harga/GB</code>, pada kelas sejuk dan arkib sahaja</li>" +
      "</ul>" +
      "<p>Carta perbandingan di bahagian bawah halaman menunjukkan rupa bil anda pada setiap kelas bagi penyedia yang dipilih. Berguna untuk mengesan bahawa anda berada pada kelas yang salah bagi corak akses anda.</p>",
    useCases: [
      "Membandingkan AWS S3, Azure Blob dan GCS bagi projek baharu",
      "Menganggarkan penjimatan daripada memindahkan data sejuk daripada S3 Standard ke Glacier Deep Archive",
      "Memodelkan kos data keluar bagi aplikasi berlebar jalur tinggi (CDN, video, latihan AI)",
      "Membelanjawankan perbelanjaan awan sebelum pelancaran produk baharu",
    ],
  },

  faqs: [
    {
      question: "Awan manakah yang mempunyai storan objek termurah?",
      answer:
        "Bagi storan panas atau standard: Azure Blob Hot (0.0184 $/GB) paling murah, diikuti GCP Standard (0.020 $), AWS S3 Standard (0.023 $) dan Firebase (0.026 $). Namun storan panas jarang menjadi butiran terbesar: data keluar (AWS: 0.09 $/GB, Azure: 0.087 $, GCP: 0.12 $) dan jumlah permintaan selalunya lebih mendominasi. Jawapan sebenarnya bergantung pada corak akses anda.",
    },
    {
      question:
        "Mengapa data keluar begitu mahal pada penyedia awan?",
      answer:
        "Data keluar ialah mekanisme pengikatan utama dalam pasaran storan awan: memindahkan 100 TB keluar daripada mana-mana awan besar berharga kira-kira 9,000 dolar. Trafik masuk dan trafik dalam wilayah yang sama adalah percuma, manakala antara wilayah berada di pertengahan. Jika beban kerja anda banyak membaca data, masukkan data keluar dalam jumlah kos: bagi sesetengah beban video, AI atau CDN, ia boleh melebihi kos storan sepuluh kali ganda.",
    },
    {
      question: "Apakah kelas termurah untuk sandaran?",
      answer:
        "S3 Glacier Deep Archive (0.00099 $/GB sebulan) dan Azure Archive (0.00099 $/GB sebulan) seri sebagai yang termurah, kedua-duanya kira-kira 1 dolar bagi setiap TB sebulan. GCP Archive sedikit lebih tinggi pada 0.0012 $/GB. Kesemuanya mempunyai komitmen storan minimum 90 hingga 180 hari dan caj pengambilan semula (0.02 hingga 0.05 $/GB). Ia sesuai untuk sandaran yang jarang disentuh; jika anda mungkin memulihkannya setiap bulan, kira kos pengambilan semula terlebih dahulu.",
    },
    {
      question: "Adakah kalkulator ini mengambil kira kuota percuma?",
      answer:
        "Sebahagiannya: kuota percuma data keluar dimodelkan (100 GB pertama sebulan pada AWS, Azure dan GCP). Kuota percuma storan (5 GB Firebase Spark, 5 GB peringkat percuma AWS selama 12 bulan, 5 GB GCS Always Free) tidak ditolak kerana ia hanya terpakai untuk akaun baharu dan tertakluk pada syarat kelayakan. Pada skala pengeluaran, kuota tersebut tidak signifikan.",
    },
    {
      question: "Adakah ini harga sebenar yang akan saya bayar?",
      answer:
        "Ini harga senarai bagi wilayah AS yang paling lazim (us-east-1 pada AWS, East US pada Azure, us-central1 pada GCP). Kos sebenar bergantung pada wilayah (sesetengahnya 10 hingga 30% lebih mahal), diskaun komitmen penggunaan (Azure Reserved Capacity, CUD GCP dan AWS Savings Plans memberi diskaun 20 hingga 50%) serta sebarang diskaun korporat yang dirundingkan. Gunakan kalkulator ini untuk perbandingan, bukan untuk pengebilan.",
    },
    {
      question: "Bagaimana pula dengan Cloudflare R2 dan Backblaze B2?",
      answer:
        "Kedua-duanya menawarkan storan yang jauh lebih murah (0.015 $ bagi R2 dan 0.006 $ bagi B2 pada 2025) tanpa caj data keluar, yang mengubah keadaan sepenuhnya bagi beban kerja berat data keluar. Ia tidak dimasukkan dalam kalkulator ini kerana set cirinya (konsistensi, wilayah, pematuhan) berbeza daripada penyedia besar. Jika kos ialah keutamaan anda dan anda tidak memerlukan perkhidmatan khusus AWS, Azure atau GCP, kedua-duanya wajar dinilai secara berasingan.",
    },
  ],
};

export default translation;
