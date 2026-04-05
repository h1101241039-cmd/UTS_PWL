# Bun MVC App

Aplikasi CRUD Mahasiswa menggunakan Bun.js + Hono + Prisma + MySQL + Tailwind CSS berbasis GitHub Codespaces.

## Tech Stack

| | |
|---|---|
| **Runtime** | Bun.js v1.3.11 |
| **Framework** | Hono |
| **ORM** | Prisma v5.22.0 |
| **Database** | MySQL 8 |
| **View Engine** | EJS |
| **CSS** | Tailwind CSS v3 |
| **Dev Environment** | GitHub Codespaces + Docker Compose |

---

## Cara Menjalankan

### Normal
    bun run src/app.js

### Jika Terjadi Error Saat Buka Ulang Codespaces

Jalankan perintah berikut secara berurutan:

#### 1. Buat ulang file .env
    echo 'DATABASE_URL="mysql://root:root@mysql:3306/bun_crud"' > .env

#### 2. Buat ulang tabel database
    bunx prisma migrate deploy

#### 3. Jalankan server
    bun run src/app.js

#### Atau jalankan sekaligus dalam satu perintah
    echo 'DATABASE_URL="mysql://root:root@mysql:3306/bun_crud"' > .env && bunx prisma migrate deploy && bun run src/app.js

### Setelah Rebuild Container
    bunx prisma migrate deploy
    bun run src/app.js

### Error Prisma Client
    bunx prisma generate
    bun run src/app.js

### CSS Tidak Tampil
    bunx tailwindcss -i ./src/public/css/input.css -o ./src/public/css/output.css

---

## Catatan Penting

- File .env tidak di-commit ke GitHub karena ada di .gitignore
- File .env dibuat otomatis setiap Codespaces dibuka via postCreateCommand
- Isi .env yang dibuat otomatis: DATABASE_URL="mysql://root:root@mysql:3306/bun_crud"
- Data MySQL akan reset jika container di-rebuild, tabel tetap ada karena migrate deploy otomatis

---

## Akses Aplikasi

| Layanan | Port | Cara Akses |
|---|---|---|
| Aplikasi | 3000 | Tab Ports, klik kanan, Public |
| phpMyAdmin | 8080 | Tab Ports, klik kanan, Public |
| Prisma Studio | 5555 | bunx prisma studio, set Public |

Login phpMyAdmin: Server=mysql, User=root, Password=root

---

## Troubleshooting

| Error | Solusi |
|---|---|
| Cannot find module .prisma/client | bunx prisma generate |
| Table mahasiswa does not exist | bunx prisma migrate deploy |
| Environment variable not found DATABASE_URL | echo DATABASE_URL ke .env |
| Port 3000 already in use | kill $(lsof -t -i:3000) |
| HTTP ERROR 502 | Jalankan server + set port 3000 ke Public |
