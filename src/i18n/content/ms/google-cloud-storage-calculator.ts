import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-google-cloud-storage",
  title: "Kalkulator Google Cloud Storage",
  description:
    "Kalkulator kos Google Cloud Storage untuk kelas Standard, Nearline, Coldline dan Archive. Termasuk operasi Kelas A dan B, data keluar dan caj pengambilan semula.",
  tagline:
    "Harga GCS untuk Standard, Nearline, Coldline dan Archive dengan anggaran kos serta-merta.",
  keywords: [
    "kalkulator google cloud storage",
    "kos google cloud storage",
    "kalkulator harga gcs",
    "cara kira kos storan google cloud",
  ],

  content: {
    intro:
      "Google Cloud Storage mempunyai empat kelas storan: Standard, Nearline, Coldline dan Archive. Kesemuanya berkongsi API dan model konsistensi yang sama, tetapi harga storan, operasi dan pengambilan semulanya sangat berbeza. Kalkulator ini menganggarkan kos bulanan bagi keempat-empatnya pada harga senarai us-central1. Struktur harga GCS sebenarnya lebih ringkas daripada AWS dengan lebih sedikit subkategori transaksi. Namun data keluarnya paling mahal antara tiga awan besar pada 0.12 dolar setiap gigabait, jadi jika anda menarik data keluar, modelkan baris itu dengan teliti.",
    formula:
      "<p><strong>Bil GCS</strong> = storan + operasi Kelas A + operasi Kelas B + data keluar + pengambilan semula</p>" +
      "<ul>" +
      "<li><strong>Standard</strong>: 0.020 $/GB sebulan. Tiada minimum. Pilihan lalai untuk data aktif.</li>" +
      "<li><strong>Nearline</strong>: 0.010 $/GB sebulan, minimum 30 hari, pengambilan semula 0.01 $/GB.</li>" +
      "<li><strong>Coldline</strong>: 0.004 $/GB sebulan, minimum 90 hari, pengambilan semula 0.02 $/GB.</li>" +
      "<li><strong>Archive</strong>: 0.0012 $/GB sebulan, minimum 365 hari, pengambilan semula 0.05 $/GB.</li>" +
      "</ul>" +
      "<p>Operasi Kelas A (tulis, senarai): 0.05 $ bagi setiap 10,000 pada Standard, lebih tinggi pada kelas yang lebih sejuk. Operasi Kelas B (baca): 0.004 $ bagi setiap 10,000 pada Standard. Data keluar ke internet: 100 GB pertama sebulan percuma, kemudian 0.12 $/GB.</p>",
    useCases: [
      "Membandingkan kelas GCS sebelum mencipta baldi baharu",
      "Menganggarkan penjimatan daripada memindahkan data lama ke Coldline atau Archive",
      "Memodelkan kos data keluar bagi BigQuery, data latihan AI atau eksport analitik",
      "Membandingkan GCS dengan S3 atau Azure bagi beban kerja yang sama",
    ],
  },

  faqs: [
    {
      question: "Apakah kelas Google Cloud Storage yang paling murah?",
      answer:
        "Archive pada 0.0012 $/GB sebulan (kira-kira 1.20 $/TB sebulan) adalah paling murah, tetapi dengan komitmen storan 365 hari dan caj pengambilan semula 0.05 $/GB. Bagi data yang mungkin diakses dalam tempoh setahun, Coldline (0.004 $/GB, minimum 90 hari, pengambilan semula 0.02 $/GB) ialah keseimbangan terbaik. Bagi akses bulanan: Nearline. Bagi data aktif: Standard.",
    },
    {
      question:
        "Mengapa data keluar GCS lebih mahal daripada AWS atau Azure?",
      answer:
        "Data keluar internet GCS berharga 0.12 $/GB selepas kuota percuma 100 GB, kira-kira 30% lebih tinggi daripada AWS (0.09 $) dan 40% lebih tinggi daripada Azure (0.087 $). Google mengaitkannya dengan kualiti rangkaian dan infrastruktur globalnya. Bagi beban kerja berat data keluar, ini boleh menjadikan GCS jauh lebih mahal secara keseluruhan walaupun storannya lebih murah. Rangkaian Premium Tier ialah tetapan lalai; Standard Tier lebih murah tetapi ada pertukaran dari segi prestasi.",
    },
    {
      question: "Apakah perbezaan antara operasi Kelas A dan Kelas B?",
      answer:
        "Operasi Kelas A ialah penulisan dan penyenaraian: insert, patch, list. Operasi Kelas B ialah bacaan: get, getIamPolicy. GCS mengenakan caj berbeza (0.05 $ bagi setiap 10,000 operasi Kelas A pada Standard berbanding 0.004 $ bagi Kelas B) kerana bacaan berskala lebih murah. Bagi beban kerja berat penulisan (log, telemetri), Kelas A mendominasi baris operasi; bagi beban berat bacaan (menyampaikan kandungan), Kelas B pula mendominasi.",
    },
    {
      question: "Adakah diskaun melalui kuota percuma?",
      answer:
        "Ya. Kuota Always Free GCS merangkumi 5 GB storan Standard, 5,000 operasi Kelas A, 50,000 operasi Kelas B dan 100 GB data keluar (ke kebanyakan destinasi) sebulan, dalam wilayah us-east1, us-west1 dan us-central1. Ia berguna untuk aplikasi kecil dan tidak signifikan pada skala pengeluaran. Kalkulator ini menolak kuota percuma data keluar 100 GB tetapi tidak menolak 5 GB storan Always Free kerana ia hanya terpakai di wilayah tertentu.",
    },
    {
      question: "Patutkah saya menggunakan baldi Multi-Region atau Dual-Region?",
      answer:
        "Harga dalam kalkulator ini adalah bagi baldi satu wilayah. Multi-Region (contohnya “us”) menambah kira-kira 30% pada kos storan dan mengurangkan kependaman bagi pengguna global, berguna untuk penyampaian kandungan. Dual-Region (contohnya nam4) menambah kira-kira 50% untuk replikasi antara wilayah. Satu wilayah dengan Cloud CDN di hadapannya selalunya lebih murah daripada storan Multi-Region bagi beban kerja berat bacaan.",
    },
    {
      question: "Bagaimana GCS Autoclass berfungsi?",
      answer:
        "Autoclass ialah ciri peralihan kelas automatik GCS: ia memindahkan objek antara Standard, Nearline, Coldline dan Archive berdasarkan corak akses, tanpa caj pemadaman awal. Penjejakannya berharga kira-kira 0.0025 $ bagi setiap 1,000 objek sebulan. Ia berguna bagi corak akses yang sukar dijangka; bagi corak yang boleh dijangka, peraturan kitaran hayat yang ditetapkan secara manual lebih murah.",
    },
  ],
};

export default translation;
