import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-storan-genetec",
  title: "Kalkulator Storan Genetec",
  description:
    "Kalkulator storan Genetec untuk merancang kapasiti Archiver dalam Security Center. Direka untuk pemasangan korporat pelbagai jenama dengan tempoh simpanan yang panjang.",
  tagline:
    "Perancangan kapasiti Archiver bagi pemasangan Genetec Security Center berskala besar.",
  keywords: [
    "kalkulator storan genetec",
    "storan genetec security center",
    "kapasiti archiver genetec",
    "perancangan storan genetec",
  ],

  content: {
    intro:
      "Genetec Security Center berada dalam kategori VMS korporat. Peranan Archiver-nya menerima video daripada banyak kamera, kadangkala beratus-ratus, dengan tempoh simpanan yang panjang. Menentukan saiz storan untuk Genetec berbeza daripada menentukan saiz satu NVR: di sini anda memikirkan IOPS penulisan berterusan, simpanan berminggu-minggu, dan kadangkala storan berperingkat dengan cakera pantas untuk rakaman terkini dan cakera lebih murah untuk yang lama. Nilai lalai di sini mencerminkan skala korporat sederhana: 16 kamera dan simpanan 60 hari. Kapasiti mentah yang terhasil kemudian diterjemahkan oleh alat penentuan saiz Genetec kepada bilangan Archiver dan susun atur tatasusunan cakera.",
    formula:
      "<p><strong>Storan Archiver Genetec</strong> = <code>(bitrate × 3600 ÷ 8) × kamera × jam × hari</code></p>" +
      "<p>Security Center menyimpan video dalam format <em>G64x</em>, iaitu bekas termultipleks milik Genetec yang membungkus strim H.264 atau H.265 asas. G64x hanya menambah overhed yang kecil, di bawah 2%, jadi kapasiti mentah yang dikira boleh digunakan terus. Bagi pemasangan berperingkat apabila sebahagian rakaman berpindah ke storan arkib yang lebih perlahan, bahagikan tempoh simpanan kepada bahagian “panas” dan “sejuk” dan jalankan kalkulator dua kali.</p>",
    useCases: [
      "Menentukan saiz storan pelayan Archiver bagi pemasangan Security Center yang baharu",
      "Menyemak anggaran storan daripada rakan niaga Genetec berbanding pengiraan sebenar",
      "Merancang pengembangan Archiver apabila saluran kamera ditambah",
      "Perancangan storan berperingkat: cara membahagikan cakera antara arkib panas dan sejuk",
    ],
  },

  faqs: [
    {
      question: "Apakah Archiver Genetec?",
      answer:
        "Archiver ialah peranan dalam Security Center yang bertanggungjawab menerima video daripada kamera dan menulisnya ke cakera. Satu Archiver lazimnya mengendalikan 50 hingga 200 kamera bergantung pada bitrate dan jumlah pemindahan. Pemasangan berbilang Archiver adalah lazim bagi tapak dengan beribu-ribu kamera. Kalkulator ini memberikan keperluan storan bagi setiap Archiver; darabkan dengan bilangan Archiver untuk keseluruhan pemasangan.",
    },
    {
      question: "Adakah Security Center menyokong H.265 dan codec pintar?",
      answer:
        "Ya. Security Center menyokong H.265 sejak versi 5.7 dan menerima varian codec pintar (H.265+ Hikvision, WiseStream II Hanwha, Zipstream Axis) sebagai strim H.265 piawai, jadi penjimatan storan turut dinikmati Archiver. Pilihan “H.265+” dalam kalkulator memodelkan codec tersebut mengikut nisbah penjimatan yang diterbitkan.",
    },
    {
      question:
        "Apakah perbezaan storan antara rakaman berterusan dan rakaman berdasarkan gerakan dalam Security Center?",
      answer:
        "Security Center menyokong peraturan rakaman bagi setiap kamera dan setiap jadual. Rakaman berdasarkan gerakan lazimnya mengurangkan storan sebanyak 60 hingga 90% dalam persekitaran yang ditala baik, tetapi pemasangan korporat sering memerlukan rakaman berterusan atas sebab pematuhan (perbankan, pusat permainan, pengangkutan). Kalkulator menyokong kedua-dua mod: pilih “hanya apabila gerakan dikesan” untuk anggaran kitaran tugas 40%, atau “berterusan” untuk rakaman sepanjang masa.",
    },
    {
      question: "Adakah Genetec memerlukan perkakasan storan khas?",
      answer:
        "Security Center menyokong sebarang storan blok: cakera yang disambungkan terus pada pelayan Archiver, SAN, atau NAS melalui iSCSI atau SMB. Pemasangan korporat lazimnya menggunakan tatasusunan RAID dalaman dalam pelayan 2U atau 4U, atau storan SAN yang dikongsi antara beberapa Archiver. Cakera gred pengawasan (WD Purple Pro, Seagate Exos) lebih baik daripada cakera pengguna biasa. Kalkulator memberikan kapasiti mentah; perancangan IOPS ialah perkara berasingan yang didokumenkan dalam panduan perkakasan Genetec.",
    },
    {
      question:
        "Bolehkah Genetec memindahkan rakaman lama ke storan lebih murah secara automatik?",
      answer:
        "Ya. Security Center mempunyai pemindahan arkib terbina yang mengalihkan rakaman daripada storan utama (panas) ke storan sekunder (sejuk) selepas tempoh yang boleh ditetapkan. Storan sejuk boleh menggunakan cakera berkapasiti besar berkos rendah atau storan objek. Untuk merancang pemasangan berperingkat, jalankan kalkulator ini dua kali: sekali untuk simpanan panas (contohnya 14 hari) dan sekali untuk simpanan sejuk (60 hari tolak 14), kemudian jumlahkan hasilnya.",
    },
    {
      question:
        "Mengapa cakera Archiver saya penuh lebih cepat daripada jangkaan?",
      answer:
        "Paling lazim: (1) kamera menggunakan bitrate lebih tinggi daripada helaian spesifikasi, jadi sentiasa sahkan pada statistik strim masuk di Archiver; (2) rakaman audio dihidupkan pada banyak saluran; (3) main semula rakaman yang disimpan pada kamera turut diarkibkan; (4) penanda dan insiden menambah sedikit overhed. Paparan Statistik Strim dalam Security Center menunjukkan kadar penulisan sebenar bagi setiap kamera.",
    },
  ],
};

export default translation;
