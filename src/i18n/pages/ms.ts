import type { StaticPages } from "~/i18n/types";

/**
 * Malay versions of the about + legal pages. Internal links point at the
 * Malay URLs so a visitor never falls back into the English tree mid-policy.
 */
const pages: StaticPages = {
  about: {
    slug: "tentang-kami",
    title: "Tentang Kami",
    description:
      "Tentang StorageCalc: mengapa laman kalkulator bebas ini wujud, siapa yang mengendalikannya, dari mana datangnya pengiraan, dan cara menghubungi kami.",
    heading: "Tentang StorageCalc",
    subtitle:
      "Koleksi kalkulator storan yang bebas dan percuma, lahir daripada kekecewaan terhadap kalkulator pengeluar yang menyembunyikan formula.",
    body: `
      <h2>Mengapa laman ini wujud</h2>
      <p>Setiap pengeluar penyelesaian storan (Hikvision, Synology, AWS, Azure) menyediakan kalkulator di laman masing-masing. Semuanya <em>memadai</em>, tetapi ada tiga masalah:</p>
      <ul>
        <li>Ia mengikat anda kepada produk satu pengeluar sahaja. Mahu membandingkan AWS S3 dengan Azure Blob? Anda terpaksa berulang-alik antara tiga tab sambil cuba mengingati kadar data keluar.</li>
        <li>Ia menyembunyikan formula. Anda masukkan nilai, satu angka muncul, dan anda tidak tahu bagaimana ia diperoleh.</li>
        <li>Ia dibina sebagai corong jualan: seruan tindakan di setiap skrin, gesaan membuka akaun, dan “hubungi pasukan jualan”.</li>
      </ul>
      <p>StorageCalc menyelesaikan ketiga-tiganya. Setiap kalkulator memaparkan formulanya. Setiap halaman percuma, tanpa pendaftaran, dan direka untuk memberi anda angka yang boleh dipercayai dengan pantas.</p>

      <h2>Dari mana datangnya pengiraan</h2>
      <p>Formula setiap kalkulator berasaskan piawaian industri yang didokumenkan secara terbuka:</p>
      <ul>
        <li><strong>RAID</strong>: takrifan RAID daripada SNIA serta formula piawai bagi kapasiti, pariti dan toleransi kegagalan.</li>
        <li><strong>Pengawasan</strong>: jadual perancangan yang diterbitkan oleh Hikvision, Hanwha (Wisenet) dan Axis. Bitrate rujukan pada 25 fps bagi setiap resolusi, diselaraskan mengikut kecekapan codec.</li>
        <li><strong>Awan</strong>: harga senarai AWS S3, Azure Blob, Google Cloud Storage dan Firebase Cloud Storage bagi wilayah AS.</li>
      </ul>
      <p>Apabila pengeluar tidak menerbitkan angka yang tepat, kami menggunakan nilai pertengahan yang berhemat dan selaras dengan pemasangan sebenar. Bahagian “Tentang kalkulator ini” pada setiap halaman menyatakan sumber yang digunakan.</p>

      <h2>Apa yang ada di sini</h2>
      <p>Koleksi kalkulator merangkumi RAID, pengawasan, NAS, storan awan dan beberapa bidang khusus. Senarai penuh ada di <a href="/ms/">laman utama</a>. Kami menambah lagi apabila mengesan keperluan yang belum dipenuhi dengan baik.</p>

      <h2>Apa yang TIADA di sini</h2>
      <ul>
        <li>Tiada akaun pengguna. Tiada apa-apa untuk didaftarkan.</li>
        <li>Tiada penjejakan sebelum anda menerima notis kuki. Rujuk <a href="/ms/dasar-privasi/">Dasar Privasi</a>.</li>
        <li>Tiada penempatan berbayar. Kalkulator disusun mengikut abjad atau kategori, bukan mengikut siapa yang membayar.</li>
        <li>Tiada tajaan pengeluar. Jika iklan muncul kelak, ia daripada Google AdSense dan dilabel dengan jelas.</li>
      </ul>

      <h2>Bagaimana laman ini kekal percuma</h2>
      <p>Laman ini dihoskan secara statik di Cloudflare Pages (pelan percuma) dan mungkin memaparkan iklan Google kelak bagi menampung pembaharuan domain. Pengiraan itu sendiri akan kekal percuma dan tanpa pendaftaran.</p>

      <h2>Sumbangan dan pembetulan</h2>
      <p>Jika anda menemui pepijat, spesifikasi pengeluar yang salah, atau ingin kalkulator baharu ditambah:</p>
      <ul>
        <li>Buka isu atau permintaan tarik di repositori projek (pautan menyusul).</li>
        <li>Atau e-mel pengendali laman (pautan menyusul).</li>
      </ul>
      <p>Laporan tentang pengiraan yang salah diberi keutamaan tertinggi, kerana ketepatan ialah tujuan utama laman ini.</p>

      <h2>Perundangan</h2>
      <ul>
        <li><a href="/ms/dasar-privasi/">Dasar Privasi</a></li>
        <li><a href="/ms/dasar-kuki/">Dasar Kuki</a></li>
        <li><a href="/ms/terma-perkhidmatan/">Terma Perkhidmatan</a></li>
        <li><a href="/ms/penafian/">Penafian</a>, yang paling penting. Bacalah sebelum anda membuat keputusan sebenar berdasarkan mana-mana angka di sini.</li>
      </ul>
    `,
  },

  disclaimer: {
    slug: "penafian",
    title: "Penafian",
    description:
      "Penafian StorageCalc: kalkulator memberi anggaran, harga pengeluar berubah, RAID bukan sandaran, dan perkara lain yang perlu diketahui sebelum bergantung pada sesuatu keputusan.",
    subtitle:
      "Apa yang kalkulator ini boleh dan tidak boleh beritahu anda. Bacalah sebelum membuat keputusan sebenar berdasarkan sesuatu angka.",
    updated: "Kemas kini terakhir: 18/05/2026",
    body: `
      <h2>Umum</h2>
      <p>Kalkulator di StorageCalc ialah <strong>alat anggaran untuk tujuan perancangan sahaja</strong>. Ia menggunakan formula piawai industri dan spesifikasi pengeluar yang didokumenkan secara terbuka, tetapi keputusan sebenar berbeza-beza. Sentiasa sahkan dengan dokumentasi pengeluar terkini sebelum membeli perkakasan, menandatangani kontrak awan, atau membuat keputusan kritikal keselamatan.</p>

      <h2>Kalkulator RAID</h2>
      <ul>
        <li><strong>RAID bukan sandaran.</strong> RAID melindungi daripada kegagalan cakera, bukan daripada fail rosak, perisian tebusan, pemadaman tidak sengaja, kebakaran atau kecurian. Sentiasa simpan salinan di luar tatasusunan bagi apa-apa yang anda tidak mampu kehilangannya.</li>
        <li>Pengganda kelajuan mengandaikan operasi masuk dan keluar selari yang ideal tanpa halangan pada pengawal. Pemindahan sebenar bergantung pada pengawal RAID, kelajuan bas, jenis cakera (HDD, SSD atau NVMe), saiz stripe dan beban kerja serentak.</li>
        <li>Angka toleransi kegagalan ialah kes terbaik dalam operasi mantap. Tempoh pembinaan semula dan kadar ralat bacaan yang tidak dapat dipulihkan (URE) boleh mengubah pengiraan ini dalam amalan, terutamanya pada tatasusunan besar dengan cakera bersaiz berbilang terabait.</li>
        <li>Overhed sistem fail (ext4, XFS, ZFS, NTFS) lazimnya mengambil 1 hingga 10% daripada kapasiti mentah. Syot kilat, penyahduaan dan blok simpanan mengurangkannya lagi.</li>
      </ul>

      <h2>Kalkulator pengawasan dan CCTV</h2>
      <ul>
        <li>Anggaran bitrate berdasarkan jadual perancangan yang diterbitkan pengeluar (Hikvision, Hanwha, Axis dan lain-lain). Bitrate sebenar berbeza ±20% mengikut kerumitan adegan: adegan sibuk menggunakan lebih banyak, adegan statik kurang.</li>
        <li>Penjimatan codec pintar (H.265+, WiseStream II, Zipstream) berkisar antara 50 hingga 80% bergantung pada aktiviti adegan. Kami memodelkan 75%, yang menghampiri adegan bandar biasa.</li>
        <li>Andaian kitaran tugas 40% bagi rakaman berdasarkan gerakan adalah berhemat. Dengan pengesanan peristiwa yang ditala baik (pengelasan orang atau kenderaan), masa rakaman sebenar boleh kurang daripada 10% tempoh aktif.</li>
        <li>Rakaman audio, arkib dwi-strim dan klip insiden menambah 5 hingga 15% pada anggaran video sahaja.</li>
        <li>Cakera yang disyorkan ialah cakera gred pengawasan sahaja (WD Purple, Seagate SkyHawk, Toshiba S300). Cakera pengguna biasa akan berfungsi seketika tetapi gagal lebih awal di bawah beban penulisan berterusan.</li>
      </ul>

      <h2>Kalkulator storan awan</h2>
      <ul>
        <li><strong>Harga kerap berubah.</strong> Angka dalam kalkulator ini ialah harga senarai bagi wilayah AS yang paling lazim setakat awal 2025. Kos sebenar bergantung pada wilayah, diskaun komitmen penggunaan, perjanjian korporat dan perubahan harga sejak penerbitan.</li>
        <li>Kuota percuma dimodelkan sebahagian sahaja. Kuota percuma data keluar (100 GB sebulan pada AWS, Azure dan GCP) ditolak. Kuota percuma storan (5 GB Firebase Spark, 5 GB peringkat percuma AWS selama 12 bulan) tidak ditolak kerana ia hanya untuk akaun baharu dan tertakluk pada syarat kelayakan.</li>
        <li>Harga operasi berbeza mengikut kelas; kami menggunakan harga senarai bagi setiap kategori operasi. Kapasiti tempahan, Savings Plans dan diskaun komitmen boleh mengurangkan kos sebenar sebanyak 20 hingga 50%.</li>
        <li>Pemindahan antara wilayah, caj lonjakan permintaan dan yuran peralihan kitaran hayat boleh menambah butiran bil yang tidak dimodelkan di sini.</li>
        <li><strong>Jangan gunakan kalkulator ini untuk pengebilan atau komitmen belanjawan tanpa mengesahkannya dengan kalkulator rasmi setiap penyedia dan kadar sebenar akaun anda.</strong></li>
      </ul>

      <h2>Kalkulator storan sendiri dan storan fizikal</h2>
      <ul>
        <li>Anggaran kapasiti mengandaikan kepadatan susunan yang munasabah. Barang yang sukar disusun (tilam, sofa, peralatan senaman) dan ruang perlindungan mengurangkan isi padu berguna sebanyak 20 hingga 40%.</li>
        <li>Harga unit storan berbeza dengan ketara mengikut lokasi, musim dan permintaan. Gunakan saiz yang disyorkan kalkulator, tetapi dapatkan sebut harga sebenar di kawasan anda.</li>
      </ul>

      <h2>Tanda dagangan pengeluar</h2>
      <p>StorageCalc menyebut beberapa pengeluar (Hikvision, Hanwha, Axis, Genetec, Ubiquiti, Synology, Amazon, Microsoft, Google, Firebase, WD, Seagate, Toshiba) menggunakan nama produk mereka. Tanda dagangan ini milik pemilik masing-masing. Penggunaannya di sini bersifat deskriptif semata-mata dan tidak membayangkan sokongan, perkongsian, gabungan atau tajaan.</p>

      <h2>Bukan nasihat profesional</h2>
      <p>Laman ini dikendalikan oleh penerbit bebas, bukan arkitek storan bertauliah, pemasang sistem pengawasan atau firma perundingan awan. Bagi keputusan storan yang kritikal kepada perniagaan, keselamatan atau pematuhan, sila rujuk profesional yang berkelayakan.</p>

      <h2>Tiada jaminan</h2>
      <p>Perkhidmatan ini disediakan “sebagaimana adanya” tanpa sebarang jaminan. Rujuk <a href="/ms/terma-perkhidmatan/">Terma Perkhidmatan</a> kami untuk penafian penuh dan had liabiliti.</p>
    `,
  },

  "privacy-policy": {
    slug: "dasar-privasi",
    title: "Dasar Privasi",
    description:
      "Apa yang dikumpul StorageCalc, mengapa, dan cara menolaknya. Ringkasnya: hampir tiada data peribadi, tetapi kami menggunakan Google Analytics dan mungkin memaparkan iklan Google.",
    subtitle:
      "Apa yang kami kumpul, mengapa, dan cara menolaknya. Ringkasnya: hampir tiada data peribadi, tetapi kami menggunakan Google Analytics dan mungkin memaparkan iklan Google.",
    updated: "Kemas kini terakhir: 18/05/2026",
    body: `
      <h2>Versi ringkas</h2>
      <p>StorageCalc ialah laman statik. Tiada pendaftaran pengguna, tiada pangkalan data yang menyimpan input anda, tiada borang hubungan dan tiada pengumpulan e-mel. Semua kalkulator berjalan sepenuhnya dalam pelayar anda.</p>
      <p>Satu-satunya data yang kami kumpul ialah statistik penggunaan tanpa nama melalui <strong>Google Analytics</strong>, dan kami mungkin memaparkan iklan melalui <strong>Google Ads</strong>. Kedua-duanya boleh ditolak melalui notis kuki.</p>

      <h2>1. Siapa kami</h2>
      <p>Laman ini, StorageCalc, dikendalikan oleh penerbit bebas yang menyediakan kalkulator storan percuma. Kami bukan syarikat, tidak disokong pelabur dan tidak menjual data. Anda boleh menghubungi kami melalui maklumat di halaman <a href="/ms/tentang-kami/">Tentang Kami</a>.</p>

      <h2>2. Maklumat yang kami kumpul</h2>
      <h3>2.1 Apa yang kami kumpul</h3>
      <ul>
        <li><strong>Data analitik</strong> melalui Google Analytics 4: paparan halaman tanpa nama, negara atau bandar anggaran, jenis peranti, URL rujukan dan tempoh di halaman. Ini membantu kami mengetahui kalkulator mana yang berguna dan mana yang perlu diperbaiki.</li>
        <li><strong>Data berkaitan iklan</strong> melalui Google Ads / AdSense apabila diaktifkan: kuki untuk pemperibadian iklan dan had kekerapan.</li>
      </ul>

      <h3>2.2 Apa yang TIDAK kami kumpul</h3>
      <ul>
        <li>Nama, alamat e-mel, nombor telefon atau apa-apa maklumat yang mengenal pasti anda.</li>
        <li>Input kalkulator anda (bilangan cakera, bitrate kamera, jumlah storan awan); semuanya kekal dalam pelayar anda sahaja.</li>
        <li>Kelayakan log masuk, kerana tiada akaun.</li>
        <li>Maklumat pembayaran, kerana laman ini percuma dan tiada apa-apa dijual.</li>
      </ul>

      <h2>3. Kuki</h2>
      <p>Rujuk <a href="/ms/dasar-kuki/">Dasar Kuki</a> khusus untuk butiran penuh. Ringkasnya:</p>
      <ul>
        <li>Tiada kuki dipasang sebelum anda menerimanya melalui notis.</li>
        <li>Jika anda menerima: kuki Google Analytics dan Google Ads dipasang.</li>
        <li>Jika anda menolak: tiada apa-apa dipasang dan anda boleh terus menggunakan semua kalkulator.</li>
        <li>Pilihan anda disimpan dalam <code>localStorage</code> pada peranti anda.</li>
      </ul>

      <h2>4. Google Analytics</h2>
      <p>Kami menggunakan Google Analytics 4 untuk mengukur trafik keseluruhan. Google mungkin memproses data tersebut mengikut <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">dasar privasi</a> mereka sendiri. Anda boleh memasang <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">tambahan penyahaktifan Google Analytics</a> untuk menyekat GA di semua laman, atau sekadar menolak kuki di sini.</p>
      <p>Kami tidak mengaktifkan Google Signals, laporan demografi mahupun ciri pengiklanan pada harta GA kami.</p>

      <h2>5. Google Ads / AdSense</h2>
      <p>Laman ini mungkin memaparkan iklan daripada Google AdSense atau rangkaian iklan lain. Rangkaian tersebut mungkin menggunakan kuki untuk memaparkan iklan yang relevan. Anda boleh menguruskan pemperibadian iklan di <a href="https://adssettings.google.com" rel="noopener" target="_blank">Tetapan Iklan Google</a>.</p>

      <h2>6. Perkhidmatan pihak ketiga</h2>
      <ul>
        <li><strong>Cloudflare</strong> (pengehosan dan CDN): melihat alamat IP untuk menghalakan trafik. Dasar privasi Cloudflare terpakai.</li>
        <li><strong>Google Fonts</strong>: fon Inter dimuatkan daripada CDN Google, yang mungkin merekod permintaan tersebut.</li>
        <li><strong>Google Analytics</strong>: rujuk seksyen 4.</li>
        <li><strong>Google Ads</strong>: rujuk seksyen 5.</li>
      </ul>

      <h2>7. Hak anda (GDPR / CCPA)</h2>
      <p>Oleh sebab kami tidak mengumpul data peribadi, kebanyakan hak subjek data tidak terpakai. Bagi pemprosesan data anda oleh Google Analytics, laksanakan hak anda terus dengan Google melalui pautan di atas. Anda juga boleh:</p>
      <ul>
        <li>Menolak semua kuki melalui notis kami.</li>
        <li>Memadamkan kuki dan <code>localStorage</code> pelayar anda pada bila-bila masa.</li>
        <li>Menggunakan mod penyamaran supaya tiada apa-apa disimpan.</li>
      </ul>

      <h2>8. Kanak-kanak</h2>
      <p>Laman ini tidak ditujukan kepada kanak-kanak bawah 13 tahun. Kami tidak mengumpul data sesiapa dengan sengaja.</p>

      <h2>9. Perubahan pada dasar ini</h2>
      <p>Jika dasar ini berubah dengan ketara, kami akan mengemas kini tarikh kemas kini terakhir di bahagian atas halaman. Penggunaan berterusan selepas perubahan bermakna anda menerima versi yang disemak.</p>

      <h2>10. Hubungi kami</h2>
      <p>Ada soalan tentang dasar ini? Maklumat hubungan ada di halaman <a href="/ms/tentang-kami/">Tentang Kami</a>.</p>
    `,
  },

  "cookie-policy": {
    slug: "dasar-kuki",
    title: "Dasar Kuki",
    description:
      "Kuki yang digunakan StorageCalc, tujuannya, dan cara anda mengawalnya.",
    subtitle:
      "Kuki yang digunakan StorageCalc, tujuannya, dan cara anda mengawalnya.",
    updated: "Kemas kini terakhir: 18/05/2026",
    body: `
      <h2>Versi ringkas</h2>
      <p>Kami tidak memasang sebarang kuki sehingga anda menekan <strong>Terima</strong> pada notis. Jika anda menekan <strong>Tolak</strong>, tiada kuki dipasang dan semua kalkulator terus berfungsi seperti biasa. Pilihan anda disimpan dalam <code>localStorage</code>, bukan dalam kuki.</p>

      <h2>1. Apakah kuki?</h2>
      <p>Kuki ialah fail teks kecil yang diletakkan laman web pada peranti anda. Ia boleh menyimpan keutamaan, menjejaki pergerakan anda antara halaman, atau membolehkan fungsi tertentu. Tujuannya berbeza-beza: sebahagian penting, sebahagian pilihan.</p>

      <h2>2. Kuki yang kami gunakan</h2>

      <h3>Kuki penting</h3>
      <p>Tiada. Laman ini berfungsi sepenuhnya tanpa sebarang kuki.</p>

      <h3>Kuki analitik (hanya jika anda menerima)</h3>
      <table class="my-4 w-full border-collapse text-sm">
        <thead>
          <tr class="border-b border-slate-300 text-start">
            <th class="py-2 pe-3 font-semibold text-slate-900">Kuki</th>
            <th class="py-2 pe-3 font-semibold text-slate-900">Penyedia</th>
            <th class="py-2 pe-3 font-semibold text-slate-900">Tujuan</th>
            <th class="py-2 font-semibold text-slate-900">Tempoh</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200">
            <td class="py-2 pe-3 font-mono text-xs">_ga</td>
            <td class="py-2 pe-3">Google Analytics</td>
            <td class="py-2 pe-3">Membezakan pengguna unik.</td>
            <td class="py-2">2 tahun</td>
          </tr>
          <tr class="border-b border-slate-200">
            <td class="py-2 pe-3 font-mono text-xs">_ga_*</td>
            <td class="py-2 pe-3">Google Analytics</td>
            <td class="py-2 pe-3">Menyimpan keadaan sesi.</td>
            <td class="py-2">2 tahun</td>
          </tr>
        </tbody>
      </table>

      <h3>Kuki pengiklanan (hanya jika anda menerima dan iklan dipaparkan)</h3>
      <table class="my-4 w-full border-collapse text-sm">
        <thead>
          <tr class="border-b border-slate-300 text-start">
            <th class="py-2 pe-3 font-semibold text-slate-900">Kuki</th>
            <th class="py-2 pe-3 font-semibold text-slate-900">Penyedia</th>
            <th class="py-2 pe-3 font-semibold text-slate-900">Tujuan</th>
            <th class="py-2 font-semibold text-slate-900">Tempoh</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-200">
            <td class="py-2 pe-3 font-mono text-xs">__gads / __gpi</td>
            <td class="py-2 pe-3">Google AdSense</td>
            <td class="py-2 pe-3">Penyampaian iklan, had kekerapan dan pencegahan penipuan.</td>
            <td class="py-2">13 bulan</td>
          </tr>
          <tr class="border-b border-slate-200">
            <td class="py-2 pe-3 font-mono text-xs">IDE / NID</td>
            <td class="py-2 pe-3">Google Ads</td>
            <td class="py-2 pe-3">Pemperibadian iklan merentas perkhidmatan Google.</td>
            <td class="py-2">13 bulan</td>
          </tr>
        </tbody>
      </table>

      <h2>3. localStorage</h2>
      <p>Kami menyimpan satu item sahaja dalam <code>localStorage</code> pelayar anda:</p>
      <ul>
        <li><code>consent</code>: menyimpan pilihan anda pada notis kuki (<code>accepted</code>, <code>rejected</code> atau <code>dismissed</code>) supaya kami tidak bertanya lagi.</li>
      </ul>
      <p>Ia bukan kuki dan tidak dihantar ke mana-mana pelayan. Anda boleh memadamkannya melalui alat pembangun pelayar atau dengan membersihkan data laman.</p>

      <h2>4. Cara mengurus kuki</h2>
      <ul>
        <li><strong>Di laman ini:</strong> gunakan notis untuk menerima atau menolak. Untuk menukar pilihan kemudian, bersihkan data laman dan muat semula halaman.</li>
        <li><strong>Google Analytics:</strong> pasang <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">tambahan penyahaktifan</a>.</li>
        <li><strong>Google Ads:</strong> layari <a href="https://adssettings.google.com" rel="noopener" target="_blank">Tetapan Iklan Google</a> untuk menguruskan pemperibadian.</li>
        <li><strong>Semua kuki:</strong> gunakan tetapan kuki pelayar anda (biasanya di bawah Tetapan → Privasi).</li>
      </ul>

      <h2>5. Isyarat “Do Not Track”</h2>
      <p>Laman ini belum bertindak balas terhadap isyarat “Do Not Track” pelayar kerana tiada persetujuan industri tentang cara mentafsirkannya. Gunakan notis kuki untuk menolak sebaliknya, kerana pilihan itu benar-benar dikuatkuasakan.</p>

      <h2>6. Perubahan pada dasar ini</h2>
      <p>Perubahan ketara akan dicatat pada tarikh kemas kini terakhir. Jika kategori kuki baharu diperkenalkan, notis akan meminta persetujuan anda semula.</p>
    `,
  },

  "terms-of-service": {
    slug: "terma-perkhidmatan",
    title: "Terma Perkhidmatan",
    description:
      "Dengan menggunakan StorageCalc anda bersetuju dengan terma ini. Ia ringkas, tetapi sila baca juga.",
    subtitle:
      "Dengan menggunakan StorageCalc anda bersetuju dengan terma ini. Ia ringkas, tetapi sila baca juga.",
    updated: "Kemas kini terakhir: 18/05/2026",
    body: `
      <h2>1. Penerimaan</h2>
      <p>Dengan mengakses atau menggunakan StorageCalc (“Perkhidmatan”), anda bersetuju untuk terikat dengan Terma Perkhidmatan ini. Jika anda tidak bersetuju, jangan gunakan Perkhidmatan ini. Perkhidmatan disediakan secara percuma tanpa memerlukan akaun.</p>

      <h2>2. Perkhidmatan</h2>
      <p>StorageCalc menyediakan kalkulator interaktif untuk menganggarkan kapasiti, kos dan konfigurasi storan bagi pelbagai teknologi (RAID, pengawasan, NAS, storan awan dan lain-lain). Semua pengiraan berjalan dalam pelayar anda; tiada data dihantar ke pelayan.</p>

      <h2>3. Lesen penggunaan</h2>
      <p>Kami memberikan anda lesen peribadi, tidak eksklusif dan tidak boleh dipindah milik untuk menggunakan Perkhidmatan bagi tujuan yang sah. Anda boleh:</p>
      <ul>
        <li>Menggunakan kalkulator untuk tujuan peribadi, pendidikan atau perancangan komersial.</li>
        <li>Berkongsi pautan ke halaman kalkulator tertentu.</li>
        <li>Memetik kalkulator dalam artikel, pembentangan atau spesifikasi (sila sertakan pautan).</li>
      </ul>
      <p>Anda tidak boleh:</p>
      <ul>
        <li>Mengikis, mencerminkan atau menghoskan semula kalkulator atau pengiraannya tanpa kebenaran.</li>
        <li>Melakukan kejuruteraan songsang, mengubah suai atau cuba mengeluarkan struktur data asasnya.</li>
        <li>Menggunakan Perkhidmatan dengan cara yang melanggar undang-undang atau hak pihak lain.</li>
      </ul>

      <h2>4. Tiada jaminan: kalkulator memberi anggaran</h2>
      <p><strong>Perkhidmatan disediakan “SEBAGAIMANA ADANYA” tanpa sebarang jaminan.</strong> Kalkulator ialah alat anggaran berdasarkan spesifikasi awam dan formula piawai industri. Kami tidak menjamin ketepatan, kelengkapan atau kesesuaiannya untuk sebarang tujuan tertentu.</p>
      <ul>
        <li>Spesifikasi pengeluar berubah. Formula RAID mempunyai kes tepi. Harga awan berubah setiap bulan. Bitrate pengawasan berbeza mengikut kerumitan adegan.</li>
        <li>Sentiasa sahkan angka kritikal dengan dokumentasi pengeluar terkini sebelum membeli, melaksanakan atau membuat komitmen kontrak.</li>
        <li>Rujuk <a href="/ms/penafian/">Penafian</a> kami untuk peringatan khusus bagi setiap kategori.</li>
      </ul>

      <h2>5. Bukan nasihat profesional</h2>
      <p>Perkhidmatan ini bukan pengganti nasihat daripada arkitek storan bertauliah, pemasang sistem pengawasan, arkitek awan atau pakar lain. Keputusan yang melibatkan belanjawan, keselamatan, pematuhan kawal selia atau infrastruktur kritikal perlu disemak oleh profesional yang berkelayakan.</p>

      <h2>6. Had liabiliti</h2>
      <p>Setakat yang dibenarkan undang-undang, StorageCalc, pengendalinya atau penyumbangnya tidak akan bertanggungjawab atas sebarang kerosakan tidak langsung, sampingan, khas, berbangkit atau punitif (termasuk kehilangan keuntungan, data, nama baik atau kerugian tidak ketara lain) yang timbul daripada penggunaan Perkhidmatan, walaupun telah dimaklumkan tentang kemungkinannya.</p>
      <p>Jumlah liabiliti terkumpul kami bagi sebarang tuntutan berkaitan Perkhidmatan terhad kepada <strong>USD $0</strong> (sifar), memandangkan Perkhidmatan disediakan secara percuma.</p>

      <h2>7. Pautan pihak ketiga dan iklan</h2>
      <p>Perkhidmatan mungkin mengandungi pautan ke laman pihak ketiga (dokumentasi pengeluar, alat berkaitan) dan mungkin memaparkan iklan daripada Google. Kami tidak mengawal laman atau iklan tersebut dan tidak bertanggungjawab atas kandungan, amalan privasi atau ketepatannya.</p>

      <h2>8. Harta intelek</h2>
      <p>Perkhidmatan ini, termasuk reka bentuk, kod dan pelaksanaan kalkulatornya, ialah harta intelek pengendali. Tanda dagangan yang disebut (Hikvision, AWS, Azure, Synology dan lain-lain) milik pemilik masing-masing. Penggunaan nama mereka di sini bersifat deskriptif sahaja dan tidak membayangkan sokongan, perkongsian atau gabungan.</p>

      <h2>9. Privasi</h2>
      <p>Penggunaan anda turut tertakluk pada <a href="/ms/dasar-privasi/">Dasar Privasi</a> dan <a href="/ms/dasar-kuki/">Dasar Kuki</a> kami.</p>

      <h2>10. Perubahan</h2>
      <p>Kami mungkin mengemas kini Terma ini dari semasa ke semasa. Perubahan ketara akan dicatat pada tarikh kemas kini terakhir. Penggunaan berterusan selepas perubahan bermakna anda menerimanya.</p>

      <h2>11. Penamatan</h2>
      <p>Kami boleh menggantung atau menghentikan Perkhidmatan pada bila-bila masa tanpa notis. Anda boleh berhenti menggunakannya pada bila-bila masa.</p>

      <h2>12. Undang-undang terpakai</h2>
      <p>Terma ini tertakluk pada undang-undang bidang kuasa tempat pengendali bermastautin, tanpa mengambil kira prinsip percanggahan undang-undang. Sebarang pertikaian akan diselesaikan di mahkamah bidang kuasa tersebut.</p>

      <h2>13. Hubungi kami</h2>
      <p>Ada soalan? Rujuk halaman <a href="/ms/tentang-kami/">Tentang Kami</a>.</p>
    `,
  },
};

export default pages;
