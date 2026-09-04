import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-raid",
  title: "Kalkulator RAID",
  description:
    "Kalkulator RAID percuma untuk tahap 0, 1, 5, 6, 10, 50 dan 60. Dapatkan kapasiti boleh guna, toleransi kegagalan serta kelajuan baca dan tulis dalam beberapa saat.",
  tagline:
    "Pilih tahap RAID, masukkan bilangan dan saiz cakera, dan lihat dengan tepat berapa banyak storan yang boleh digunakan.",
  keywords: [
    "kalkulator raid",
    "cara kira kapasiti raid",
    "kalkulator storan raid",
    "pengiraan raid",
  ],

  content: {
    intro:
      "RAID menggabungkan beberapa cakera menjadi satu volum logik. Setiap tahap mempunyai pertukarannya sendiri antara kapasiti, prestasi dan bilangan kegagalan cakera yang mampu ditampung sebelum semua data hilang. Yang sukar bukan pengiraannya, tetapi memilih pertukaran yang sesuai dengan perkakasan dan tahap risiko yang anda boleh terima. Itulah tujuan alat ini. Masukkan bilangan cakera, saiznya, tahap RAID dan sebarang cakera ganti, dan anda akan memperoleh kapasiti boleh guna, toleransi kegagalan serta anggaran pengganda kelajuan baca dan tulis berbanding satu cakera.",
    formula:
      "<p>Kapasiti boleh guna bergantung pada tahap RAID:</p>" +
      "<ul>" +
      "<li><strong>RAID 0</strong>: <code>N × saiz</code>. Tiada redundansi.</li>" +
      "<li><strong>RAID 1</strong>: <code>saiz</code>. Setiap cakera menyalin data yang sama.</li>" +
      "<li><strong>RAID 5</strong>: <code>(N − 1) × saiz</code>. Bersamaan satu cakera pariti teragih.</li>" +
      "<li><strong>RAID 6</strong>: <code>(N − 2) × saiz</code>. Pariti berganda.</li>" +
      "<li><strong>RAID 10</strong>: <code>(N / 2) × saiz</code>. Cerminan yang distripe.</li>" +
      "<li><strong>RAID 50</strong>: <code>kumpulan × (cakera_per_kumpulan − 1) × saiz</code>.</li>" +
      "<li><strong>RAID 60</strong>: <code>kumpulan × (cakera_per_kumpulan − 2) × saiz</code>.</li>" +
      "</ul>" +
      "<p>Cakera ganti ditolak daripada kumpulan cakera aktif sebelum pengiraan RAID dijalankan.</p>",
    useCases: [
      "Menentukan saiz NAS atau pelayan baharu sebelum membeli cakera",
      "Membandingkan pertukaran RAID 5, RAID 6 dan RAID 10 dengan bilangan cakera yang sama",
      "Merancang simpanan cakera ganti tanpa mengorbankan terlalu banyak kapasiti",
      "Menganggarkan peningkatan pemindahan apabila set stripe diperluas",
    ],
  },

  faqs: [
    {
      question: "Apakah perbezaan antara RAID 5 dan RAID 6?",
      answer:
        "RAID 5 mengkhaskan kapasiti bersamaan satu cakera untuk pariti dan mampu menahan kegagalan satu cakera. RAID 6 mengkhaskan dua dan mampu menahan dua kegagalan serentak, yang penting bagi tatasusunan besar apabila pembinaan semula mengambil masa lama dan cakera kedua boleh gagal di pertengahan proses. RAID 6 mengorbankan satu lagi cakera kapasiti sebagai pertukaran bagi margin keselamatan itu.",
    },
    {
      question: "Bagaimana kapasiti boleh guna dikira untuk RAID 10?",
      answer:
        "RAID 10 memasangkan cakera dalam pasangan cermin, kemudian mengagihkan data secara stripe merentas pasangan tersebut. Kapasiti boleh guna ialah (N / 2) × saiz cakera, jadi RAID 10 dengan empat cakera 4 TB memberikan 8 TB boleh guna. Ia menahan satu kegagalan bagi setiap pasangan cermin, iaitu satu cakera dalam kes terburuk dan separuh daripada cakera dalam kes terbaik.",
    },
    {
      question: "Perlukah saya menggunakan cakera ganti?",
      answer:
        "Cakera ganti menggantikan cakera yang gagal secara automatik tanpa campur tangan manusia, lalu memendekkan tempoh pembinaan semula ketika kegagalan kedua akan menjadi bencana. Setiap cakera ganti mengurangkan kapasiti boleh guna sebanyak satu cakera, tetapi bagi tatasusunan lapan cakera ke atas, terutamanya RAID 5, ia amat disyorkan.",
    },
    {
      question: "Adakah kalkulator ini mengambil kira overhed sistem fail?",
      answer:
        "Tidak; keputusannya ialah kapasiti mentah pada peringkat blok. Sistem fail (ext4, XFS, ZFS, NTFS) lazimnya mengkhaskan 1 hingga 10% untuk metadatanya. Syot kilat, penyahduaan, pemampatan dan blok simpanan untuk root mengurangkannya lagi. Rancang sekitar 5% overhed sistem fail di samping overhed RAID yang dipaparkan di sini.",
    },
    {
      question:
        "Mengapa kelajuan tulis RAID 5 dan RAID 6 lebih rendah daripada kelajuan baca?",
      answer:
        "Setiap operasi tulis memerlukan pengiraan semula pariti merentas keseluruhan stripe. RAID 5 memerlukan kira-kira empat operasi cakera bagi setiap penulisan (baca data lama, baca pariti lama, tulis data baharu, tulis pariti baharu); RAID 6 memerlukan kira-kira enam. Sebaliknya, operasi baca boleh diselarikan merentas semua cakera data. Pengganda yang dipaparkan ialah nilai maksimum teori; angka sebenar bergantung pada cache pengawal, saiz stripe dan beban kerja.",
    },
    {
      question: "Apakah RAID 50 dan bila patut digunakan?",
      answer:
        "RAID 50 mengagihkan data secara stripe merentas dua atau lebih subkumpulan RAID 5. Ia membina semula lebih pantas daripada RAID 5 yang besar kerana hanya satu kumpulan perlu dibina semula, dan ia menahan satu kegagalan bagi setiap kumpulan. Ia sesuai untuk tatasusunan lapan cakera ke atas apabila tempoh pembinaan semula RAID 5 tulen menjadi berisiko. RAID 60 menggunakan prinsip yang sama dengan subkumpulan RAID 6 untuk ketahanan yang lebih tinggi.",
    },
  ],
};

export default translation;
