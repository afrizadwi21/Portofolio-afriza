export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  credentialId: string;
  year: string;
  image: string;
  category: string;
  description: string;
  verifyUrl: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  kind: "saas" | "api" | "pos" | "school" | "lms";
  previewCode: string;
  image?: string;
  highlights: string[];
  liveDemoUrl?: string;
  liveDemoLabel?: string;
  githubUrl?: string;
}

export interface TechLane {
  title: string;
  speedSec: number;
  items: string[];
}

export interface JourneyStep {
  phase: string;
  title: string;
  description: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "laundryflow",
    name: "LaundryFlow",
    type: "Backend",
    category: "Backend · Odoo 20 ERP & REST API",
    description:
      "Arsitektur backend sistem manajemen laundry terintegrasi Odoo 20 dan PostgreSQL. Menyediakan REST API modern (terdokumentasi dengan Scalar OpenAPI) untuk inventaris multi-batch, kalkulasi harga order dinamis di server, validasi alur status pesanan, dan integrasi WhatsApp.",
    tags: ["Python", "Odoo 20", "PostgreSQL", "REST API"],
    color: "var(--blue)",
    kind: "api",
    previewCode: "PATCH /api/laundry/orders/status",
    image: "/DocsScalar.png",
    highlights: [
      "REST API modern terdokumentasi Scalar OpenAPI (/docs)",
      "Kalkulasi total harga & validasi dimensi (m²/kg/pcs) di backend",
      "Stok real-time dari model stock.quant & tracking batch expired",
      "Keamanan sesi Odoo (Role-based: Portal, Pegawai, Admin)",
    ],
    liveDemoUrl: "http://117.53.47.93:8069/docs#description/introduction",
    liveDemoLabel: "API Docs (Scalar)",
    githubUrl: "https://github.com/afrizadwi21",
  },
  {
    id: "kelasku",
    name: "KelasKu",
    type: "Full-Stack",
    category: "EdTech · Learning Management System",
    description:
      "Platform Learning Management System (LMS) modern untuk manajemen kelas, materi pembelajaran digital, presensi check-in/check-out siswa dengan ekspor laporan CSV, dan pemantauan progres akademik terstruktur. Terpilih sebagai Top 15 Best Capstone Project.",
    tags: ["React.js", "Express.js", "Tailwind CSS", "REST API"],
    color: "#38bdf8",
    kind: "lms",
    previewCode: "POST /api/attendance/checkin",
    image: "/Kelasku.png",
    highlights: [
      "Top 15 Best Capstone Project pada program Coding Camp",
      "Modul absensi digital siswa dengan tracking jam masuk/pulang",
      "Katalog materi interaktif dan pemantauan progres tugas",
      "Integrasi full-stack responsif React.js + REST API Express.js",
    ],
    liveDemoUrl: "https://capstone-project-kelasku-omega.vercel.app/",
    liveDemoLabel: "Live Demo",
    githubUrl: "https://github.com/akhdann12/Capstone-Project-Kelasku.git",
  },
  {
    id: "pentol-mercon",
    name: "Pentol Mercon Lava",
    type: "Web App",
    category: "F&B · E-Commerce & Point of Sale",
    description:
      "Aplikasi pemesanan dan katalog digital untuk UMKM kuliner Pentol Mercon Lava. Dilengkapi integrasi pembayaran QRIS dinamis dengan countdown timer otomatis, pelacakan riwayat pesanan (pre-order & direct order), serta dashboard operasional admin.",
    tags: ["React 19", "Vite", "Tailwind CSS", "QRIS API"],
    color: "#f87171",
    kind: "pos",
    previewCode: "POST /api/orders/qris",
    image: "/PentolMercon.png",
    highlights: [
      "Sistem pemesanan pre-order & reguler langsung dari browser",
      "Integrasi pembayaran QRIS otomatis dengan timer kedaluwarsa",
      "Pengecekan riwayat status pesanan pelanggan via nomor HP",
      "Dukungan dual-theme (dark/light) dan UI modern cepat",
    ],
    liveDemoUrl: "https://project-penjualan-pentol.vercel.app/",
    liveDemoLabel: "Live Demo",
    githubUrl: "https://github.com/afrizadwi21",
  },
  {
    id: "sis-pplg",
    name: "Sistem Informasi PPLG",
    type: "Full-Stack",
    category: "School ERP · Sistem Akademik & Guru",
    description:
      "Sistem informasi manajemen sekolah dan portal akademik jurusan PPLG SMK Negeri 4 Padalarang. Menangani autentikasi berbasis peran (admin, guru, siswa), pengelolaan rekap nilai, data inventaris lab, dan manajemen jadwal kelas.",
    tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    color: "#a855f7",
    kind: "school",
    previewCode: "POST /login -> Auth::attempt()",
    image: "/sisteminformasi.png",
    highlights: [
      "Autentikasi multi-role aman (Admin, Guru, Siswa)",
      "Pengelolaan database terstruktur dengan Eloquent ORM & MySQL",
      "Dashboard rekap nilai dan informasi kurikulum jurusan PPLG",
      "Antarmuka modern terintegrasi SweetAlert2 dan Tailwind CSS",
    ],
    liveDemoUrl: "https://afrizadwi.pplgsmkn4.my.id/laravelAfriza/laravelAfriza/myapp/public/index.php/login",
    liveDemoLabel: "Portal Login",
    githubUrl: "https://github.com/afrizadwi21",
  },
  {
    id: "distribucore",
    name: "DistribuCore",
    type: "SaaS",
    category: "B2B SaaS · Distribution Management",
    description:
      "Proyek perancangan platform B2B SaaS untuk tata kelola alur distribusi logistik, integrasi inventory antar-gudang, dan sinkronisasi rantai pasok multi-lokasi skala menengah ke atas.",
    tags: ["B2B SaaS", "Business Process", "Architecture"],
    color: "var(--acc)",
    kind: "saas",
    previewCode: "Warehouse -> Hub -> Dispatch",
    highlights: [
      "Fokus pada workflow rantai pasok dan alokasi batch logistik",
      "Model domain distribusi terorganisir untuk efisiensi bisnis",
      "Arsitektur modular siap integrasi multi-channel",
    ],
    liveDemoUrl: "#",
    liveDemoLabel: "Coming Soon",
    githubUrl: "https://github.com/afrizadwi21",
  },
];

export const TECH_LANES: TechLane[] = [
  {
    title: "Programming",
    speedSec: 34,
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Go"],
  },
  {
    title: "Frontend",
    speedSec: 42,
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    speedSec: 38,
    items: ["Node.js", "Express.js", "Laravel", "Odoo", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & DevOps",
    speedSec: 32,
    items: ["Git", "GitHub", "Docker", "Postman", "Linux", "Vercel"],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "best-capstone",
    title: "Top 15 Best Capstone Project",
    issuer: "Coding Camp 2026 (DBS Foundation)",
    credentialId: "CFS085D6Y129",
    year: "2026",
    image: "/cert-capstone.jpg",
    category: "Award & Achievement",
    description:
      "Penghargaan Top 15 Best Capstone Project atas kontribusi frontend dan integrasi REST API platform KelasKu LMS.",
    verifyUrl: "https://www.linkedin.com/in/afrizadwi/",
  },
  {
    id: "coding-camp-completion",
    title: "Certificate of Completion — Coding Camp",
    issuer: "Coding Camp 2026 (DBS Foundation)",
    credentialId: "CFS085D6Y129",
    year: "2026",
    image: "/cert-completion.jpg",
    category: "Professional Training",
    description:
      "Kelulusan intensif program pengembangan web modern dengan penguasaan standar industri rekayasa software dan kolaborasi tim.",
    verifyUrl: "https://www.linkedin.com/in/afrizadwi/",
  },
  {
    id: "dicoding-logic",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    credentialId: "98XWO9GKLZM3",
    year: "2026",
    image: "/cert-98XWO9GKLZM3.png",
    category: "Computer Science & Logic",
    description:
      "Penguasaan logika dasar pemrograman, gerbang logika, algoritma problem-solving, dan computational thinking.",
    verifyUrl: "https://www.dicoding.com/certificates/98XWO9GKLZM3",
  },
  {
    id: "dicoding-software-dev",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    credentialId: "72ZDKLQDVPYW",
    year: "2026",
    image: "/cert-72ZDKLQDVPYW.png",
    category: "Software Engineering",
    description:
      "Tahapan rekayasa perangkat lunak dari analisis kebutuhan, perancangan arsitektur, implementasi kode, modifikasi, hingga dokumentasi.",
    verifyUrl: "https://www.dicoding.com/certificates/72ZDKLQDVPYW",
  },
  {
    id: "dicoding-ai",
    title: "Belajar Dasar AI (Artificial Intelligence)",
    issuer: "Dicoding Indonesia",
    credentialId: "EYX4KKY95PDL",
    year: "2025",
    image: "/cert-EYX4KKY95PDL.png",
    category: "Artificial Intelligence",
    description:
      "Konsep fundamental Artificial Intelligence, persiapan dataset, prinsip dasar Machine Learning, dan pengantar Deep Learning.",
    verifyUrl: "https://www.dicoding.com/certificates/EYX4KKY95PDL",
  },
  {
    id: "dicoding-financial-literacy",
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia · Coding Camp DBS Foundation",
    credentialId: "ERZR2O30QPYV",
    year: "2025",
    image: "/cert-ERZR2O30QPYV.png",
    category: "Professional Development",
    description:
      "Pelatihan literasi finansial, tata kelola keuangan proyek, dan perencanaan keberlanjutan ekonomi dalam ekosistem digital.",
    verifyUrl: "https://www.dicoding.com/certificates/ERZR2O30QPYV",
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    phase: "Foundation",
    title: "Software & Game Development",
    description:
      "Memulai perjalanan teknis di SMK Negeri 4 Padalarang (jurusan PPLG/RPL), mempelajari dasar algoritma pemrograman, logika berorientasi objek, struktur data, dan rekayasa perangkat lunak.",
  },
  {
    phase: "Expansion",
    title: "Modern Web & Interface Craft",
    description:
      "Menguasai ekosistem web modern (TypeScript, React, Next.js, Tailwind CSS) dengan fokus pada antarmuka yang presisi, performa tinggi, dan aksesibilitas ramah pengguna.",
  },
  {
    phase: "Architecture",
    title: "Backend & ERP Engineering",
    description:
      "Mendalami arsitektur sisi server: RESTful API, integrasi ERP Odoo 20, orkestrasi basis data PostgreSQL & MySQL, autentikasi sesi, serta validasi transaksi bisnis yang ketat.",
  },
  {
    phase: "Applied Work",
    title: "Real Projects & Production Delivery",
    description:
      "Membangun dan merilis solusi digital nyata untuk UMKM dan sekolah (LaundryFlow, Pentol Mercon Lava, Portal PPLG Laravel, dan Capstone KelasKu Top 15 Best Project).",
  },
  {
    phase: "Outlook",
    title: "Full-Stack & Systems Focus",
    description:
      "Terus memperdalam keahlian end-to-end: arsitektur microservices terdistribusi, containerization dengan Docker, Go, serta pengembangan produk perangkat lunak bernilai tinggi.",
  },
];

export const PROFILE_DATA = {
  name: "M. Afriza Dwi I",
  shortName: "Afriza",
  role: "Web Developer Student | Aspiring Full-Stack Developer",
  school: "SMK Negeri 4 Padalarang",
  major: "Software & Game Dev (PPLG/RPL)",
  learning: "Next.js · TypeScript · Go · Docker",
  direction: "Full-Stack Development",
  headline: "Building Digital Experiences Through Code.",
  quote:
    "“Saya percaya bahwa perangkat lunak yang andal bermula dari arsitektur backend yang disiplin dan dieksekusi dengan antarmuka yang bersih serta fungsional.”",
  lead:
    "I’m Afriza, a developer passionate about building modern web applications, backend systems, and practical digital solutions.",
  email: "afriza.dwi21@gmail.com",
  github: "https://github.com/afrizadwi21",
  linkedin: "https://www.linkedin.com/in/afrizadwi/",
  chips: [
    "Web Development",
    "Backend Engineering",
    "API Development",
    "ERP & Odoo Integrations",
    "SaaS Products",
  ],
};
