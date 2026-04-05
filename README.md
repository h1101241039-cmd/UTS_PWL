# Bun MVC App

Aplikasi CRUD Mahasiswa menggunakan Bun.js + Hono + Prisma + MySQL + Tailwind CSS berbasis GitHub Codespaces.

## Tech Stack

- **Runtime**: Bun.js v1.3.11
- **Framework**: Hono
- **ORM**: Prisma v5.22.0
- **Database**: MySQL 8
- **View Engine**: EJS
- **CSS**: Tailwind CSS v3
- **Dev Environment**: GitHub Codespaces + Docker Compose

---

## Cara Menjalankan (Setiap Buka Codespaces)

### Normal (setelah close tab biasa)
\`\`\`bash
bun run src/app.js
\`\`\`

### Kalau Ada Error Database (setelah rebuild container)
\`\`\`bash
bunx prisma migrate deploy
bun run src/app.js
\`\`\`

### Kalau Ada Error Prisma Client
\`\`\`bash
bunx prisma generate
bun run src/app.js
\`\`\`

### Kalau CSS Tidak Tampil
\`\`\`bash
bunx tailwindcss -i ./src/public/css/input.css -o ./src/public/css/output.css
\`\`\`

---

## Catatan Penting

- File `.env` tidak di-commit ke GitHub (ada di .gitignore)
- File `.env` dibuat **otomatis** setiap Codespaces dibuka via `postCreateCommand`
- Isi `.env` yang dibuat otomatis:
\`\`\`
DATABASE_URL="mysql://root:root@mysql:3306/bun_crud"
\`\`\`
- Data MySQL akan **reset** jika container di-rebuild (tabel tetap ada karena migrate deploy otomatis)

---

## Akses Aplikasi

| Layanan | Port | Cara Akses |
|---|---|---|
| Aplikasi | 3000 | Buka tab Ports → klik kanan → Public |
| phpMyAdmin | 8080 | Buka tab Ports → klik kanan → Public |
| Prisma Studio | 5555 | Jalankan `bunx prisma studio` → set Public |

Login phpMyAdmin:
- Server: `mysql`
- User: `root`
- Password: `root`

---

## Struktur Folder

\`\`\`
.devcontainer/
├── devcontainer.json         # Konfigurasi Codespaces + postCreateCommand
└── docker-compose.yml        # MySQL + phpMyAdmin container
prisma/
├── schema.prisma             # Schema database
└── migrations/               # Riwayat migrasi
src/
├── app.js                    # Entry point server
├── config/
│   └── viewEngine.js         # Konfigurasi EJS
├── controllers/
│   ├── homeController.js     # Controller dashboard
│   └── mahasiswaController.js# Controller CRUD mahasiswa
├── models/
│   └── mahasiswaModel.js     # Model Prisma mahasiswa
├── routes/
│   └── web.js                # Definisi route
├── views/
│   ├── layout.ejs            # Layout utama (sidebar + navbar)
│   ├── home.ejs              # Halaman dashboard
│   └── mahasiswa/
│       ├── index.ejs         # List mahasiswa
│       ├── create.ejs        # Form tambah mahasiswa
│       └── edit.ejs          # Form edit mahasiswa
└── public/
    └── css/
        ├── input.css         # Tailwind input
        └── output.css        # Tailwind output (generated)
\`\`\`

---

## Cek Koneksi Database

\`\`\`bash
node -e "
const mysql = require('mysql2/promise');
(async () => {
  const conn = await mysql.createConnection({
    host: 'mysql', user: 'root', password: 'root', database: 'bun_crud'
  });
  const [rows] = await conn.execute('SELECT * FROM mahasiswa');
  console.table(rows);
  await conn.end();
})();
"
\`\`\`

---

## Git Workflow

\`\`\`bash
git add .
git commit -m "pesan commit"
git push
\`\`\`

---

## Troubleshooting

| Error | Solusi |
|---|---|
| `Cannot find module '.prisma/client'` | `bunx prisma generate` |
| `Table mahasiswa does not exist` | `bunx prisma migrate deploy` |
| `Environment variable not found: DATABASE_URL` | `echo 'DATABASE_URL="mysql://root:root@mysql:3306/bun_crud"' > .env` |
| `Port 3000 already in use` | `kill $(lsof -t -i:3000)` |
| `HTTP ERROR 502` | Jalankan server + set port 3000 ke Public |
| CSS tidak tampil | `bunx tailwindcss -i ./src/public/css/input.css -o ./src/public/css/output.css` |
