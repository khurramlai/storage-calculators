import type { CalculatorTranslation } from "~/i18n/types";

const translation: CalculatorTranslation = {
  slug: "kalkulator-raid-5",
  title: "Kalkulator RAID 5",
  description:
    "Kalkulator RAID 5: kapasiti boleh guna, overhed pariti, toleransi kegagalan dan pemindahan bagi sebarang bilangan dan saiz cakera. Percuma, serta-merta, tanpa pendaftaran.",
  tagline:
    "Striping dengan pariti tunggal: kecekapan tinggi, mampu menahan kegagalan satu cakera.",
  keywords: [
    "kalkulator raid 5",
    "cara kira raid 5",
    "kapasiti raid 5",
    "kalkulator storan raid 5",
  ],

  content: {
    intro:
      "RAID 5 mengagihkan data anda secara stripe merentas semua cakera dalam tatasusunan dan mengkhaskan kapasiti bersamaan satu cakera untuk pariti. Apabila sebuah cakera gagal, tatasusunan membinanya semula daripada blok pariti pada cakera yang masih ada. Kapasiti boleh guna ialah (N − 1) × saiz cakera. RAID 5 kekal popular pada pelayan kecil dan NAS rumah kerana pengiraannya menguntungkan: anda mengekalkan sebahagian besar kapasiti dengan perlindungan terhadap kegagalan satu cakera. Ia pilihan jelas apabila satu tahap redundansi sudah memadai.",
    formula:
      "<p><strong>Kapasiti boleh guna</strong> = <code>(N − 1) × saiz cakera</code></p>" +
      "<p><strong>Overhed pariti</strong> = <code>saiz cakera</code> (bersamaan satu cakera)</p>" +
      "<p><strong>Kecekapan kapasiti</strong> = <code>(N − 1) / N</code>. Menghampiri 100% apabila lebih banyak cakera ditambah.</p>" +
      "<p><strong>Toleransi kegagalan</strong> = 1 cakera</p>" +
      "<p><strong>Kelajuan baca</strong> ≈ <code>N − 1</code>× (bacaan selari merentas cakera data)</p>" +
      "<p><strong>Kelajuan tulis</strong> ≈ <code>(N − 1) / 4</code>×. Setiap penulisan memerlukan bacaan data lama dan pariti lama, kemudian penulisan data baharu dan pariti baharu.</p>",
    useCases: [
      "NAS perniagaan kecil dengan empat hingga enam cakera apabila kapasiti menjadi keutamaan",
      "Pelayan media rumah apabila satu tahap redundansi sudah memadai",
      "Sasaran sandaran apabila tatasusunan bukan salinan utama",
      "Membandingkan kecekapan dengan RAID 6 sebelum membeli cakera",
    ],
  },

  faqs: [
    {
      question: "Mengapa RAID 5 berisiko dengan cakera bersaiz besar?",
      answer:
        "Apabila saiz cakera meningkat ke julat berbilang terabait, tempoh pembinaan semula memanjang menjadi berjam-jam atau berhari-hari. Sepanjang tempoh itu tatasusunan berjalan tanpa perlindungan: jika cakera kedua gagal atau ralat bacaan yang tidak dapat dipulihkan berlaku pada cakera yang tinggal, semua data hilang. Bagi tatasusunan lapan cakera ke atas atau saiz cakera melebihi kira-kira 4 TB, ramai pentadbir memilih RAID 6 atau RAID 10.",
    },
    {
      question: "Berapakah bilangan minimum cakera untuk RAID 5?",
      answer:
        "Tiga. Dua cakera menyimpan data dan kapasiti bersamaan satu cakera dikhaskan untuk pariti. Dengan hanya dua cakera tiada apa-apa untuk distripe, jadi RAID 1 lebih sesuai.",
    },
    {
      question: "Adakah RAID 5 menggunakan cakera pariti khusus?",
      answer:
        "Tidak. Pariti diagihkan merentas semua cakera, tidak seperti RAID 4 yang menggunakan satu cakera pariti khusus. Ini mengelakkan cakera tersebut menjadi halangan penulisan dan membolehkan mana-mana cakera gagal tanpa kehilangan keseluruhan pariti.",
    },
    {
      question: "Berapa lama pembinaan semula RAID 5 mengambil masa?",
      answer:
        "Pembinaan semula lazimnya berjalan pada 50 hingga 150 MB/s bergantung pada pengawal, jenis cakera dan beban kerja serentak. Pembinaan semula cakera 4 TB sering mengambil masa 8 hingga 24 jam, manakala tatasusunan SSD jauh lebih pantas. Sepanjang proses itu tatasusunan berada dalam keadaan terjejas dan kegagalan cakera lain bermakna semua data hilang.",
    },
    {
      question: "Bolehkah saya menambah cakera ganti pada RAID 5?",
      answer:
        "Boleh, dan ia disyorkan bermula daripada enam cakera. Cakera ganti memulakan pembinaan semula secara automatik sebaik sahaja sebuah cakera gagal, lalu memendekkan tempoh terdedah. Masukkan bilangan cakera ganti dalam kalkulator untuk melihat kesannya pada kapasiti boleh guna.",
    },
  ],
};

export default translation;
