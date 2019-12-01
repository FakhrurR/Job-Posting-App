-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 01 Des 2019 pada 10.29
-- Versi Server: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbjobposting`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(8, 'IT'),
(9, 'Kimia'),
(10, 'Makanan'),
(11, 'Farmasi'),
(12, 'Sastra'),
(13, 'Kasir'),
(14, 'Marketing'),
(15, 'Sales'),
(16, 'Accounting/Auditing');

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
--

CREATE TABLE `company` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `logo` text NOT NULL,
  `location` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`id`, `name`, `logo`, `location`, `description`) VALUES
('3dde8d15-0959-453a-9149-33be11038f95', 'WAHANA VISI INDONESIA', 'http://localhost:2000/public/images/logo-1573515256790.png', 'Tangerang Selatan', 'Wahana Visi Indonesia (WVI) adalah yayasan sosial kemanusiaan Kristen yang bekerja untuk membuat perubahan yang berkesinambungan pada kehidupan anak, keluarga, dan masyarakat yang hidup dalam kemiskinan. WVI mendedikasikan diri untuk bekerjasama dengan masyarakat yang paling rentan tanpa membedakan agama, ras, etnis, dan jenis kelamin.'),
('4a3a4075-c04f-44c4-b32a-75aba17046f2', 'GADJIAN', 'http://localhost:2000/public/images/logo-1573514788106.png', 'Jakarta Selatan, Jakarta', 'Gadjian is a Software-as-a-Service (SaaS) tool that empowers Indonesia’s SMEs to scale and improve their productivity. Working at Gadjian equals solving one of the most complex problems faced by Indonesia’s businesses. Hence, we are constantly in the lookout for team members who are passionate problem solvers and love to help other people achieve greater things.\n\nLearn more about Gadjian at https://gadjian.com.'),
('90a8b820-a66d-481b-a450-2e4c49c131d5', 'PT. TRIJAYA ANUGRAH ESTETIKA', 'http://localhost:2000/public/images/logo-1573514532228.jpg', 'JAKARTA UTARA, JAKARTA', 'Trijaya Group, Perusahaan yang bergerak di bidang Estetika, jasa kecantikan, akademi, yang berkantor pusat dijakarta utara dan telah memiliki 12 cabang yang tersebar di Jakarta, Tanggerang, Bekasi, Bandung, Surabaya. Sedang mencari talenta terbaik untuk mengisi posisi di kantor pusat.'),
('9fb997c9-934b-4edc-83a7-2aa4b0933c20', 'HONEY LADY GROUP', 'http://localhost:2000/public/images/logo-1573514972193.png', 'MEDAN, SUMATERA UTARA', 'Honey Lady was first known for its expertise in manufacturing world class intimate apparels since 1977.\nIt has since grew to become a reliable supplier of many reputable intimate apparel brands in the world.\n\nIn 2007, Honey Lady started to diversify its portfolio of businesses.\nApart from strategic investments in properties in Indonesia and Hong Kong, Honey Lady also has branched out to consulting business.\nIt was the first among industry leaders to go live with SAP AFS / SAP FMS in Indonesia.\n\nHoney Lady is a proud employer of over 9000 workers across the industries.\nIn line with its mission, Honey Lady strongly believes in investing in People, achieving Excellence in everything it does, and not to forget in giving back to the Community.\nThus, living up to its vision of Impacting Lives.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `job`
--

CREATE TABLE `job` (
  `id` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `id_category` varchar(50) NOT NULL,
  `salary` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `id_company` varchar(50) NOT NULL,
  `date_added` varchar(50) NOT NULL,
  `date_updated` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `job`
--

INSERT INTO `job` (`id`, `name`, `description`, `id_category`, `salary`, `location`, `id_company`, `date_added`, `date_updated`) VALUES
('2ac820a7-ee76-44c1-a5d9-bd52987db2ec', 'Supervisor Finance Accounting Tax', 'Responsible for strategic planning, implementing, monitoring and controlling the company’s finances.\nAnalysis and monitoring the company assets.\nPlanning and monitoring all finance, accounting and tax activities.\nControlling income, cash flow, expenditure and managing budgets.\nAnalyze company cost and giving solution to reduce company cost.\nResponsible for project costing and controller.\nProducing long-term business plans.\n\nSyarat\n\nREQUIREMENTS\n\nMale/Female\nMaximum 40 years old\nMin Degree in Economic, Finance/Accounting/Banking\nMin 10 years working experience in related position\nAbility to work independently and with professional discreation\nMeticulous attention to detail, good numerical, organizational and time management skills\nStrong knowledge in financial statement, accounting reporting, cost accounting, tax and fund management.\nFamiliar with tax regulation.\nExcellent computing, interpersonal, team working and (written/verbal) communication\nAble to speak Mandarin, preferably can read and write as well.\nKeahlian yang dibutuhkan\n\nBenefit\n\n- BPJS Ketenagakerjaan\n\n- BPJS Kesehatan\n\n- Asuransi', '16', '2000000', 'MEDAN, SUMATERA UTARA', '9fb997c9-934b-4edc-83a7-2aa4b0933c20', '2019-11-12 06:43:20.763', '2019-11-12 06:43:20.763'),
('a2887237-ee2b-4ac9-9600-4b869d0b9384', 'Sales Supervisor', 'Tugas Pokok\n\nBertanggung jawab dalam semua fungsi penjualan, antara lain:\n\nMemenuhi target penjualan perusahaan secara nasional (diluar outlet franchise)\nBertanggung jawab dalam fungsi perencanaan penjualan produk dan jasa brand untuk sales\nMengawasi kerja tim sales (CRO/admin) di outlet\nMenganalisa serta menyajikan data berupa laporan penjualan, efektifitas kegiatan marketing, budget marketing dan rekapitulasi omset (diluar outlet franchise)\nMembuat perencanaan launching produk baru\n \n\nUraian Tugas & Tanggung Jawab \n\nMencapai target omset nasional baik secara omset maupun jumlah customer yang treatment (omset tidak termasuk outlet franchise)\nMengawasi pekerjaan CRO atau admin secara nasional (tidak termasuk outlet franchise) \nMelakukan meeting koordinasi mingguan dengan CRO\nMelakukan kunjungan store guna mengawasi kerja CRO\nPerencanaan tactical program, event atau program yang mendatangkan customer baru dan retensi\nMelakukan pemantauan omset per minggu dan per bulan\nMemantau sales & promotion staff dalam melakukan random check beautician\nMelakukan koordinasi rutin dengan sales & promotion supervisor\nMengolah dan menyajikan data berupa laporan penjualan, efektifitas kegiatan marketing, budget marketing keseluruhan dan rekapitulasi omset (diluar outlet franchise)\n \n\n\nSyarat\n\nKompetensi\n\nPendidikan minimal S1/D3\nMemiliki pengalaman kerja minimal 3 tahun pada fungsi sales/marketing support.\nMenguasai aplikasi komputer (program MS Office).\nBerbahasa Inggris baik lisan maupun tulisan.\nBerpengalaman memimpin tim kerja.', '15', '2000000', 'JAKARTA UTARA, JAKARTA', '90a8b820-a66d-481b-a450-2e4c49c131d5', '2019-11-12 06:45:31.884', '2019-11-12 06:45:31.884'),
('aedd50b0-12d7-459f-9f98-f31fe1da0609', 'Assisten manager & Digital Marketing', 'Tugas Pokok\n\nMembuat brand guidelines sebagai dasar dari perencaan visual dan online brand.\nMembuat planning dan menguasai program yang berkaitan dengan SEO dan SEM brand.\nMembuat perencanaan website brand (termasuk revamp dan build website jika diperlukan).\nMemantau efektivitas website sebagaimana fungsiya.\n(booking online, pembelian voucher, artikel, direct sosial media, direct aplikasi brand).\n\nMembuat perencanaan postingan instagram (feeds instagram).\nMemantau efektivitas sosial media (dalam bentuk laporan).\nMenjalankan aplikasi brand sesuai dengan perencanaan.\nMenguasai backend untuk website dan aplikasi.\nMembuat konten yang tepat guna dan menarik untuk semua sosial media, website dan aplikasi brand.\nMembuat laporan bulanan perkembangan website, sosial media dan aplikasi brand.\nBekerja sama serta dapat berkomunikasi baik dengan pihak-pihak guna mensukseskan setiap kegiatan marketing di bidang visual dan online.\n \n\nUraian Tugas & Tanggung Jawab \n\nMelaporkan setiap hasil kegiatan kepada marketing manajer.\nMengarahkan tim underlying agar sesuai dengan brand guidelines yang telah dibuat.\nMenganalisis hasil dari kegiatan marketing yang sudah berjalan.\nMenjelaskan secara terperinci brand guidelines kepada tim marketing.\nMemastikan semua proses (plan/do/check/action) kegiatan marketing berjalan dengan baik dan efisien.\nMemastikan setiap proses pekerjaan inline dengan KPI (Key Performance Indicator).\n\nSyarat\n\nKompetensi\n\nPendidikan minimal S1 Design Komunikasi Visual\nMemiliki pengalaman kerja minimal 2 tahun pada fungsi dan perencanaan aktivitas Digital Marketing Media seperti SEO & SEM\nMenguasai semua jenis MS Office\nBerbahasa Inggris baik lisan maupun tulisan\nBerpengalaman memimpin tim kerja\nMemiliki kemampuan presentasi dan komunikasi yang baik (lisan maupun tulisan)\n ', '14', '2000000', 'JAKARTA UTARA, JAKARTA', '90a8b820-a66d-481b-a450-2e4c49c131d5', '2019-11-12 06:47:11.081', '2019-11-12 06:47:11.081'),
('b992860a-b1f8-436d-998e-f33c32fe6872', 'Senior Business Development (Sales)', 'You will be responsible to execute business development strategies to achieve the company\'s revenue targets. Your job description will mainly entail, but not limited to:\n\nPresenting, promoting and selling the company\'s products/services, both to existing customers and new prospective customers.\nAnalyze existing/prospective customer needs.\nBuild, develop and maintain positive business relationships with customers.\nReach customers through cold calls.\nReach the sales target according to the specified deadline.\nUpdate the status and sales reports through CRM (Customer Relationship Management System)\nProvide information about customer needs, competitor activities, and potential new products and services to management\nSuggest improvements to the company’s applications/features based on the feedback and insight obtained from users\n\nSyarat\n\nBachelor degree in any major\nHaving a minimum of 3 years experience as a Sales Executive or related position\nHaving experience in B2G is preferred \nExcellent oral and written communication skills\nExcellent analytical and problem-solving skills\nExcellent persuasion and negotiation skills\nPleasant personality and appearance\nTarget-oriented, driven and have the ability to work under pressure in a fast-paced environment\nPositive, can-do attitude is a must\nHighly motivated to learn and have the ability to learn new concepts quickly and apply them to assigned tasks and responsibilities\nAbility to think and work as part of a team, to integrate with others and to show personal initiative Have the initiative and the ability to offer new ideas', '15', '2000000', 'JAKARTA SELATAN, JAKARTA', '4a3a4075-c04f-44c4-b32a-75aba17046f2', '2019-11-12 06:49:21.861', '2019-11-12 06:49:21.861');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_level` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `username`, `name`, `photo`, `email`, `password`, `user_level`) VALUES
('65175c4b-5757-4fe0-aeb7-98430dedc775', 'Admin', '', '', 'Admin', '$2b$10$oYrauVKttWPZ9CCJx.ynhOcwFMtT0p/VpV1QLPTawd7lC79kMmDEu', 'Admin'),
('b959f7d6-3dfc-4acc-849c-20b7790da35c', 'Lulu', 'Lulu Cila', 'photo-1575172202754.jpg', 'Lulu@gmail.com', '$2b$10$fSI3j4i3pWr/JntpV9qvo.CHOeXap//YthVrd3E3v60R./AJ8zrfS', 'User'),
('c49455ab-2891-4f5d-a747-8a0aa23201e0', 'Test1', '', '', 'test1@gmail.com', '$2b$10$pIIJiOlyaSRVYMkaa4oNSOFfj6JTNgzNbjOuNzhVLlEuC/OMx2Wxi', 'Company'),
('cf09f908-e76a-4b9d-9b72-f78f5fcfebab', 'coba', '', '', 'coba@gmail.com', '$2b$10$01wkAUU959Tj08nyCY.Pq.6xxNqUbBFKnHdNPi7ZGFdJ.2W42p6NW', 'User'),
('d7287f5f-393b-4e19-ade2-7a7251bc36bb', 'test', '', '', 'test@gmail.com', '$2b$10$8K9EJEuhqv0DJgCNQAIexuFokqxdO3HGytPLLJtSwinpbK2MHoFzG', 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
