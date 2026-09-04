import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-raid-6",
  title: "Kalkulator RAID 6",
  description:
    "Kalkulator RAID 6 dengan pengiraan pariti berganda. Kapasiti boleh guna, toleransi dua kegagalan cakera serta kelajuan baca dan tulis pada sebarang bilangan cakera. Percuma, tanpa pendaftaran.",
  tagline:
    "Striping dengan pariti berganda: mampu menahan dua kegagalan cakera serentak.",
  keywords: [
    "kalkulator raid 6",
    "cara kira raid 6",
    "kapasiti raid 6",
    "kalkulator storan raid 6",
  ],

  content: {
    intro:
      "RAID 6 ialah RAID 5 dengan jaring keselamatan tambahan. Ia menggunakan blok pariti kedua, jadi tatasusunan mampu menahan dua cakera gagal serentak dan bukan hanya satu. Kosnya ialah satu lagi cakera kapasiti, meninggalkan (N − 2) × saiz cakera sebagai ruang boleh guna. RAID 6 ialah pilihan piawai bagi tatasusunan besar lapan cakera ke atas. Apabila pembinaan semula cakera berbilang terabait mengambil masa sehari penuh, kebarangkalian cakera kedua gagal dalam tempoh itu tidak lagi boleh diabaikan, dan RAID 6 menjadikan senario tersebut dapat ditempuh.",
    formula:
      "<p><strong>Kapasiti boleh guna</strong> = <code>(N − 2) × saiz cakera</code></p>" +
      "<p><strong>Overhed pariti</strong> = <code>2 × saiz cakera</code></p>" +
      "<p><strong>Kecekapan kapasiti</strong> = <code>(N − 2) / N</code></p>" +
      "<p><strong>Toleransi kegagalan</strong> = 2 cakera (mana-mana dua)</p>" +
      "<p><strong>Kelajuan baca</strong> ≈ <code>N − 2</code>× (cakera data sahaja)</p>" +
      "<p><strong>Kelajuan tulis</strong> ≈ <code>(N − 2) / 6</code>×. Dua blok pariti perlu dikira semula pada setiap penulisan.</p>",
    useCases: [
      "Tatasusunan korporat besar dengan 8 hingga 24 cakera bersaiz berbilang terabait",
      "Arkib dan sasaran sandaran apabila kehilangan data tidak boleh diterima",
      "Menggantikan tatasusunan RAID 5 lama selepas saiz cakera melepasi ambang pembinaan semula yang selamat",
      "Menimbang kos satu cakera pariti tambahan berbanding kecekapan 50% RAID 10",
    ],
  },

  faqs: [
    {
      question: "Bila patut saya pilih RAID 6 berbanding RAID 5?",
      answer:
        "Mana-mana tatasusunan lapan cakera ke atas, atau yang menggunakan cakera melebihi kira-kira 4 TB, memperoleh manfaat besar daripada RAID 6. Blok pariti kedua melindungi daripada kegagalan cakera kedua yang menjadi berkemungkinan secara statistik semasa pembinaan semula yang panjang pada tatasusunan besar. Kos kapasiti satu cakera tambahan adalah kecil berbanding risiko yang dihapuskannya.",
    },
    {
      question: "Berapakah bilangan minimum cakera untuk RAID 6?",
      answer:
        "Empat. Dua cakera menyimpan data dan kapasiti bersamaan dua cakera digunakan untuk pariti. Di bawah empat cakera pengiraannya tidak lagi munasabah, dan RAID 1 atau RAID 10 menjadi pilihan yang lebih baik.",
    },
    {
      question: "Mengapa prestasi tulis RAID 6 lebih rendah daripada RAID 5?",
      answer:
        "RAID 5 memerlukan empat operasi cakera bagi setiap penulisan (baca data lama, baca pariti lama, tulis data baharu, tulis pariti baharu). RAID 6 memerlukan kira-kira enam kerana kedua-dua blok pariti perlu dibaca dan ditulis semula. Bagi beban kerja berat penulisan, RAID 10 biasanya lebih sesuai; RAID 6 menyerlah pada storan arkib yang berat bacaan.",
    },
    {
      question: "Adakah RAID 6 benar-benar menahan dua kegagalan serentak?",
      answer:
        "Ya, dan pada mana-mana dua cakera. Kedua-dua blok pariti bersama-sama mengandungi maklumat yang mencukupi untuk membina semula data yang hilang bagi apa jua kombinasi dua kegagalan. Itulah tujuan utama RAID 6 dan sebab ia lebih digemari bagi tatasusunan besar atau kritikal.",
    },
    {
      question: "Perlukah cakera ganti dengan RAID 6?",
      answer:
        "Selalunya ya. RAID 6 memberi anda masa tambahan, tetapi cakera ganti membolehkan pembinaan semula bermula serta-merta tanpa menunggu campur tangan manusia. Bagi tatasusunan 12 cakera ke atas ia insurans yang murah, dan kalkulator memaparkan kesannya pada kapasiti boleh guna.",
    },
  ],
};

export default translation;
