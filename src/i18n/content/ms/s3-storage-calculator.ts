import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-s3",
  title: "Kalkulator Storan AWS S3",
  description:
    "Kalkulator storan S3 yang merangkumi enam kelas AWS: Standard, Standard-IA, One Zone-IA serta Glacier Instant, Flexible dan Deep Archive. Termasuk data keluar dan operasi.",
  tagline:
    "Anggarkan kos S3 merentas semua kelas storan, termasuk caj permintaan dan data keluar.",
  keywords: [
    "kalkulator storan s3",
    "kos aws s3",
    "kalkulator harga s3",
    "cara kira kos storan aws",
  ],

  content: {
    intro:
      "Amazon S3 menawarkan enam kelas storan yang menukar kelajuan akses, jaminan ketahanan dan tempoh minimum dengan kos setiap gigabait yang jauh lebih rendah. Kalkulator ini merangkumi kesemuanya: Standard, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval dan Glacier Deep Archive, pada harga senarai us-east-1. Namun storan jarang menjadi keseluruhan bil: permintaan PUT dan GET, data keluar ke internet dan caj pengambilan semula Glacier sering mendominasi jumlahnya, terutamanya bagi beban kerja yang aktif.",
    formula:
      "<p><strong>Bil S3</strong> = storan + operasi + data keluar + pengambilan semula</p>" +
      "<p>S3 Standard: <code>0.023 $/GB sebulan</code>. Standard-IA: <code>0.0125 $/GB sebulan</code> dengan caj pengambilan semula 0.01 $/GB. Deep Archive: <code>0.00099 $/GB sebulan</code>, iaitu kira-kira 1 $ bagi setiap TB sebulan, dengan minimum 180 hari dan caj pengambilan semula 0.02 $/GB. Harga permintaan berjulat daripada 0.005 $ bagi setiap 1,000 PUT pada Standard hingga 0.05 $ bagi setiap 1,000 PUT pada Deep Archive.</p>" +
      "<p>Data keluar ke internet: 100 GB pertama sebulan percuma, kemudian <code>0.09 $/GB</code> bagi 10 TB berikutnya, menurun sehingga 0.05 $/GB melebihi 150 TB.</p>",
    useCases: [
      "Menentukan saiz storan bagi baldi S3 baharu sebelum penggunaan",
      "Membandingkan S3 Standard dengan Standard-IA bagi baldi sedia ada",
      "Menganggarkan kos memindahkan data sejuk ke Glacier Deep Archive",
      "Memodelkan kos data keluar bagi aplikasi yang menyediakan muat turun daripada S3",
    ],
  },

  faqs: [
    {
      question: "Kelas storan S3 manakah yang paling murah?",
      answer:
        "Bagi storan sejuk jangka panjang yang jarang diakses, Glacier Deep Archive pada 0.00099 $/GB sebulan (kira-kira 1 $/TB sebulan) adalah paling murah, tetapi dengan caj minimum 180 hari, caj pengambilan semula 0.02 $/GB dan masa menunggu melebihi 12 jam. Bagi data yang kerap diakses: S3 Standard pada 0.023 $/GB. Bagi akses bulanan: Standard-IA pada 0.0125 $/GB dengan minimum 30 hari dan caj pengambilan semula 0.01 $/GB.",
    },
    {
      question: "Bagaimana mengurangkan kos S3 tanpa mengubah aplikasi saya?",
      answer:
        "Tiga langkah pantas: (1) hidupkan peraturan kitaran hayat S3 untuk memindahkan objek secara automatik ke Standard-IA selepas 30 hari dan ke Glacier selepas 90; (2) hidupkan Intelligent-Tiering bagi corak akses yang sukar dijangka, kerana S3 akan memindahkan objek mengikut penggunaan; (3) letakkan CloudFront atau CDN lain di hadapan S3 untuk menyimpan cache bacaan yang kerap, kerana data keluar melalui CDN lebih murah daripada S3 pada jumlah yang besar.",
    },
    {
      question: "Adakah kalkulator ini merangkumi S3 Intelligent-Tiering?",
      answer:
        "Tidak secara langsung, kerana harga Intelligent-Tiering bergantung pada cara S3 memindahkan objek anda, dan itu berbeza mengikut beban kerja. Sebagai panduan umum, kelas ini berada antara kos Standard dan Standard-IA (0.012 hingga 0.023 $/GB) berserta caj pemantauan kecil (0.0025 $ bagi setiap 1,000 objek). Bagi corak akses yang boleh dijangka, peraturan kitaran hayat antara Standard dan Standard-IA biasanya lebih murah.",
    },
    {
      question: "Adakah kos data keluar benar-benar 0.09 dolar bagi setiap GB?",
      answer:
        "Ya bagi wilayah piawai us-east-1, selepas 100 GB percuma sebulan. Harganya menurun mengikut jumlah: 0.085 $ bagi 40 TB berikutnya, 0.07 $ bagi 100 TB seterusnya, dan 0.05 $ melebihi 150 TB. Replikasi antara wilayah dan S3 Transfer Acceleration dikenakan caj berasingan. Jika anda menyediakan muat turun bervolum besar, CloudFront (0.085 $ menurun kepada 0.02 $ pada skala besar) biasanya lebih murah daripada S3 secara terus.",
    },
    {
      question: "Apakah perbezaan antara kelas Glacier?",
      answer:
        "Glacier Instant Retrieval (0.004 $/GB) memberikan pengambilan semula dalam milisaat seperti S3 Standard, dengan minimum 90 hari dan caj 0.03 $/GB. Glacier Flexible Retrieval (0.0036 $/GB) memerlukan beberapa minit hingga jam. Glacier Deep Archive (0.00099 $/GB) paling murah tetapi mengambil masa melebihi 12 jam dan mempunyai minimum 180 hari. Pilih mengikut tahap kesabaran anda ketika memulihkan data.",
    },
    {
      question: "Adakah S3 mengenakan caj bagi permintaan gagal atau dibatalkan?",
      answer:
        "Ya. Caj permintaan dikenakan pada semua panggilan API termasuk ralat 4xx akibat kesilapan pelanggan. Muat naik berbilang bahagian yang dibatalkan pula meninggalkan bahagian pada cakera yang dikira sebagai storan sehingga dibersihkan. Tetapkan peraturan kitaran hayat untuk membatalkan muat naik berbilang bahagian yang tidak lengkap selepas tujuh hari, kerana ini kejutan yang lazim pada bil AWS.",
    },
  ],
};

export default translation;
