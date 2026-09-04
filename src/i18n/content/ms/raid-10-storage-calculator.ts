import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-raid-10",
  title: "Kalkulator RAID 10",
  description:
    "Kalkulator RAID 10 untuk tatasusunan cermin bertindan. Kapasiti boleh guna, overhed cerminan, toleransi kegagalan dan pemindahan mesra penulisan pada sebarang bilangan pasangan.",
  tagline:
    "Cerminan bertindan: RAID terpantas untuk penulisan, menahan satu cakera bagi setiap pasangan cermin.",
  keywords: [
    "kalkulator raid 10",
    "cara kira raid 10",
    "kalkulator raid 1+0",
    "kapasiti raid 10",
  ],

  content: {
    intro:
      "RAID 10 (kadangkala ditulis RAID 1+0) memasangkan cakera dalam pasangan cermin, kemudian mengagihkan data secara stripe merentas pasangan tersebut. Anda melepaskan separuh daripada kapasiti mentah, dan itu memang menyakitkan, tetapi prestasi penulisannya jauh mengatasi RAID 5 atau 6 yang berasaskan pariti. Pembinaan semula juga pantas kerana hanya data satu cakera perlu disalin. RAID 10 ialah pilihan lalai bagi pangkalan data, hos virtualisasi dan apa jua beban kerja dengan trafik penulisan berat atau keperluan kependaman yang ketat.",
    formula:
      "<p><strong>Kapasiti boleh guna</strong> = <code>(N / 2) × saiz cakera</code></p>" +
      "<p><strong>Overhed cerminan</strong> = <code>(N / 2) × saiz cakera</code>. Separuh daripada tatasusunan.</p>" +
      "<p><strong>Kecekapan kapasiti</strong> = <code>50%</code>, tetap tanpa mengira bilangan cakera</p>" +
      "<p><strong>Toleransi kegagalan</strong> = 1 cakera dalam kes terburuk, sehingga N/2 dalam kes terbaik (satu bagi setiap pasangan cermin)</p>" +
      "<p><strong>Kelajuan baca</strong> ≈ <code>N</code>×. Bacaan boleh dilayan oleh mana-mana cakera dalam setiap pasangan.</p>" +
      "<p><strong>Kelajuan tulis</strong> ≈ <code>N / 2</code>×. Setiap penulisan menyentuh dua cakera.</p>",
    useCases: [
      "Pelayan pangkalan data (MySQL, PostgreSQL, SQL Server) yang memerlukan kependaman penulisan rendah",
      "Hos virtualisasi (VMware, Hyper-V, Proxmox) yang menjalankan banyak mesin maya serentak",
      "Pelayan mel dan transaksi dengan operasi masuk dan keluar rawak yang berterusan",
      "Sebarang beban kerja apabila kelajuan pembinaan semula lebih penting daripada kecekapan kapasiti",
    ],
  },

  faqs: [
    {
      question: "Berapakah bilangan minimum cakera untuk RAID 10?",
      answer:
        "Empat, iaitu dua pasangan cermin yang distripe bersama. Bilangan cakera mestilah genap kerana ia disusun berpasangan. Kalkulator akan memberi amaran jika anda memasukkan bilangan ganjil dan menunjukkan berapa banyak cakera yang tidak digunakan.",
    },
    {
      question: "Mengapa RAID 10 lebih pantas daripada RAID 5 atau 6?",
      answer:
        "Tiada pengiraan pariti. Satu penulisan hanya menyentuh kedua-dua cakera dalam satu pasangan cermin secara serentak, tanpa kitaran baca-ubah-tulis. Bagi beban kerja masuk dan keluar rawak (pangkalan data, mesin maya), perbezaannya boleh mencecah tiga hingga lima kali ganda pada pemindahan dan satu magnitud pada kependaman.",
    },
    {
      question: "Berapa banyak cakera boleh gagal dalam RAID 10?",
      answer:
        "Dalam kes terburuk: satu. Jika kedua-dua cakera dalam pasangan cermin yang sama gagal, tatasusunan hilang. Dalam kes terbaik: separuh daripada cakera (N/2), asalkan tepat satu cakera gagal dalam setiap pasangan. Kalkulator memaparkan toleransi kegagalan bagi kedua-dua keadaan.",
    },
    {
      question: "Adakah RAID 10 sama dengan RAID 0+1?",
      answer:
        "Tidak. Namanya serupa, tetapi RAID 0+1 menstripe dahulu kemudian mencerminkan keseluruhan set stripe. Toleransi kegagalannya lebih lemah: kehilangan satu cakera dalam mana-mana set menjadikan seluruh bahagian itu tidak tersedia dan mendedahkan anda kepada sebarang kegagalan tunggal di bahagian lain. RAID 10 (cermin dahulu, kemudian stripe) hampir selalu pilihan yang betul.",
    },
    {
      question: "Mengapa RAID 10 lebih mahal daripada RAID 5 atau 6?",
      answer:
        "Anda membayar untuk redundansi 100%: setiap bait disimpan dua kali. RAID 5 dan 6 hanya mengkhaskan bersamaan satu atau dua cakera untuk pariti, jadi kecekapan kapasitinya meningkat apabila bilangan cakera bertambah. Bagi tatasusunan sepuluh cakera 4 TB, RAID 10 memberikan 20 TB boleh guna berbanding 36 TB pada RAID 5 dan 32 TB pada RAID 6. Kos tambahan itu membeli prestasi dan pembinaan semula yang pantas.",
    },
  ],
};

export default translation;
