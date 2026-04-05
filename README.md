cat > README.md << 'EOF'
# Bun MVC App

Aplikasi CRUD Mahasiswa menggunakan Bun.js + Hono + Prisma + MySQL + Tailwind CSS.

## Tech Stack

- **Runtime**: Bun.js
- **Framework**: Hono
- **ORM**: Prisma v5
- **Database**: MySQL 8
- **View Engine**: EJS
- **CSS**: Tailwind CSS v3
- **Dev Environment**: GitHub Codespaces

---

## Cara Menjalankan (Setiap Buka Codespaces)

### Normal (close tab biasa)
\`\`\`bash
bun run src/app.js
\`\`\`

### Kalau Ada Error Database (setelah rebuild container)
\`\`\`bash
bunx prisma migrate deploy
bun run src/app.js
\`\`\`

---

## Akses Aplikasi

| Layanan | Port | Keterangan |
|---|---|---|
| Aplikasi | 3000 | Set ke Public di tab Ports |
| phpMyAdmin | 8080 | Set ke Public di tab Ports |
| Prisma Studio | 5555 | `bunx prisma studio` |

---

## Struktur Folder

\`\`\`
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
│   ├── layout.ejs            # Layout utama
│   ├── home.ejs              # Halaman dashboard
│   └── mahasiswa/
│       ├── index.ejs         # List mahasiswa
│       ├── create.ejs        # Form tambah
│       └── edit.ejs          # Form edit
└── public/
    └── css/
        ├── input.css         # Tailwind input
        └── output.css        # Tailwind output (generated)
\`\`\`

---

## Kalau CSS Tidak Tampil

\`\`\`bash
bunx tailwindcss -i ./src/public/css/input.css -o ./src/public/css/output.css
\`\`\`

---

## Kalau Ada Error Prisma Client

\`\`\`bash
bunx prisma generate
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
EOF