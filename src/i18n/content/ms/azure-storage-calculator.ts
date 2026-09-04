import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-azure",
  title: "Kalkulator Storan Azure",
  description:
    "Kalkulator storan Azure untuk peringkat Blob Storage Hot, Cool, Cold dan Archive. Memodelkan transaksi, data keluar dan caj pengambilan semula dalam satu anggaran bulanan.",
  tagline:
    "Harga Azure Blob Storage tanpa selirat halaman biasa: keempat-empat peringkat dibandingkan.",
  keywords: [
    "kalkulator storan azure",
    "kos azure storage",
    "kalkulator harga azure blob storage",
    "cara kira kos storan azure",
  ],

  content: {
    intro:
      "Azure Blob Storage mempunyai empat peringkat akses: Hot, Cool, Cold dan Archive. Kesemuanya berkongsi satu API tetapi harganya berbeza dengan ketara. Kalkulator ini merangkumi keempat-empatnya pada harga senarai wilayah East US dengan LRS (storan berlebihan setempat). Kalkulator rasmi Microsoft memang menyeluruh tetapi membebankan; yang ini lebih fokus: pilih peringkat, masukkan angka anda, dan bil bulanan bagi keempat-empat peringkat dipaparkan bersebelahan.",
    formula:
      "<p><strong>Bil Azure</strong> = storan + transaksi + data keluar + pengambilan semula</p>" +
      "<ul>" +
      "<li><strong>Hot</strong>: storan 0.0184 $/GB sebulan, 0.0065 $ bagi setiap 10,000 operasi tulis. Akses kerap.</li>" +
      "<li><strong>Cool</strong>: 0.01 $/GB sebulan, minimum 30 hari, pengambilan semula 0.01 $/GB. Akses bulanan.</li>" +
      "<li><strong>Cold</strong>: 0.0036 $/GB sebulan, minimum 90 hari, pengambilan semula 0.02 $/GB. Akses jarang.</li>" +
      "<li><strong>Archive</strong>: 0.00099 $/GB sebulan, minimum 180 hari, pengambilan semula 0.022 $/GB serta masa penghidratan semula. Paling murah.</li>" +
      "</ul>" +
      "<p>Data keluar: 100 GB pertama sebulan percuma, kemudian 0.087 $/GB.</p>",
    useCases: [
      "Menganggarkan harga Azure Blob Storage bagi projek baharu sebelum penggunaan",
      "Membandingkan Hot dengan Cool dan Cold bagi pustaka media",
      "Menganggarkan kos peringkat Archive untuk simpanan mengikut kehendak undang-undang",
      "Memodelkan replikasi antara wilayah dan kos yang digandakannya",
    ],
  },

  faqs: [
    {
      question: "Apakah perbezaan antara peringkat Cool dan Cold?",
      answer:
        "Kedua-duanya menyasarkan akses jarang, tetapi Cold (diperkenalkan pada 2023) kira-kira tiga kali lebih murah daripada Cool untuk storan (0.0036 $ berbanding 0.01 $/GB) dan mensyaratkan minimum lebih panjang, 90 hari berbanding 30. Gunakan Cool untuk data yang diakses bulanan dan Cold untuk data yang diakses setiap suku tahun atau kurang. Kedua-duanya mempunyai kos transaksi lebih tinggi daripada Hot, jadi bagi beban kerja berat penulisan penjimatannya mungkin lenyap.",
    },
    {
      question: "Mengapa bacaan daripada Azure Archive begitu mahal?",
      answer:
        "Archive mengenakan 5.50 dolar bagi setiap 10,000 operasi baca, iaitu seribu kali ganda peringkat Hot. Tambahan pula terdapat caj pengambilan semula 0.022 $/GB dan penghidratan semula yang mengambil masa sehingga 15 jam pada keutamaan standard (atau satu jam pada keutamaan tinggi yang lebih mahal). Archive memang untuk senario “tulis sekali, baca jarang”: sandaran jangka panjang, pematuhan kawal selia dan arkib data mentah. Jika anda memang akan membacanya, modelkan kos pengambilan semula dengan teliti.",
    },
    {
      question: "Bagaimana LRS, ZRS dan GRS mempengaruhi kos?",
      answer:
        "Kalkulator ini menggunakan harga senarai LRS (storan berlebihan setempat), yang paling murah. ZRS (berlebihan antara zon) menambah kira-kira 25%. GRS (berlebihan geografi dengan replikasi tak segerak antara wilayah) menambah kira-kira 100%. RA-GRS (GRS dengan akses baca) menambah kira-kira 125%. Bagi data tidak kritikal, LRS memadai; bagi data pengeluaran yang memerlukan pemulihan bencana, ZRS atau GRS lebih sesuai. Darabkan baris storan dalam kalkulator mengikutnya.",
    },
    {
      question: "Adakah Azure mengenakan caj transaksi pada peringkat Archive?",
      answer:
        "Ya, dan dengan ketara. Operasi tulis ke Archive: 0.13 $ bagi setiap 10,000 berbanding 0.0065 $ pada Hot. Operasi baca pada Archive: 5.50 $ bagi setiap 10,000 berbanding 0.00052 $ pada Hot. Archive dioptimumkan untuk penulisan pukal sekali-sekala (memuat naik sandaran) dan pengambilan semula yang jarang (audit pematuhan), bukan untuk operasi harian.",
    },
    {
      question:
        "Bagaimana harga data keluar Azure berbanding AWS dan GCP?",
      answer:
        "Data keluar Azure (0.087 $/GB selepas 100 GB percuma) ialah yang termurah antara tiga penyedia besar, sedikit di bawah AWS (0.09 $) dan jauh di bawah GCP (0.12 $). Bagi beban kerja berat data keluar (asal CDN, data latihan AI, penstriman video), ini boleh menjadikan Azure 15 hingga 25% lebih murah daripada GCP pada bil keseluruhan walaupun harga storannya setanding.",
    },
    {
      question: "Bolehkah saya memindahkan data antara peringkat secara automatik?",
      answer:
        "Ya. Peraturan Azure Blob Lifecycle Management memindahkan objek secara automatik berdasarkan tarikh ubah suai atau akses terakhir. Contohnya: pindah ke Cool selepas 30 hari tanpa akses, ke Cold selepas 90, dan ke Archive selepas 365. Pelaksanaan peraturan tersebut dikira sebagai transaksi; dengan bilangan objek yang besar, kosnya terkumpul. Masukkan kos peralihan ini dalam pengiraan penjimatan pemindahan.",
    },
  ],
};

export default translation;
