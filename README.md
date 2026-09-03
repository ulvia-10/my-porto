# Portofolio — Ulvia Yulianti

Portofolio pribadi dibangun dengan **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, dan **Framer Motion**. Sudah mendukung dark mode (tersimpan otomatis) dan animasi scroll yang halus.

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` di browser.

## Struktur project

```
app/
  layout.tsx     -> font, metadata, script anti-flash dark mode
  page.tsx       -> merangkai semua section
  globals.css    -> semua warna & token desain (edit di sini untuk ganti tema)
components/
  Nav.tsx        -> navigasi atas + tombol dark mode
  Hero.tsx       -> judul utama + kartu kode animasi
  Projects.tsx   -> kartu project (GANTI dengan project asli kamu)
  TShape.tsx     -> diagram T-shape skill kamu
  About.tsx      -> timeline pendidikan & pengalaman
  Contact.tsx    -> email & social link
  Footer.tsx
```

## Yang WAJIB diganti sebelum publish

1. **`components/Projects.tsx`** — array `projects` masih berisi 2 project contoh (Dashboard Analitik & Landing Page UMKM). Ganti `title`, `description`, `stack`, `live`, dan `code` dengan project asli kamu begitu selesai dibangun (sesuai timeline 1 bulan yang sudah kita susun).
2. **`components/Contact.tsx`** — link LinkedIn dan GitHub masih `href="#"`. Ganti dengan URL profil asli kamu.
3. **Screenshot/thumbnail project** — saat ini pakai gradasi warna sebagai placeholder. Kalau mau pakai screenshot asli, taruh gambar di folder `public/`, lalu ganti div gradient dengan komponen `<Image src="/nama-file.png" ... />` dari `next/image`.

## Cara ganti warna/tema

Semua warna diatur lewat CSS variable di `app/globals.css`:

```css
:root {
  --paper: #f6f3ec;   /* background mode terang */
  --accent: #2f4bd8;  /* warna aksen (link, highlight) */
}
.dark {
  --paper: #12141c;   /* background mode gelap */
  --accent: #7c93ff;
}
```

Ganti nilai hex-nya saja, seluruh halaman otomatis ikut berubah.

## Deploy ke Vercel (gratis, paling mudah untuk Next.js)

1. Push project ini ke repository GitHub kamu (buat repo baru, lalu `git init`, `git add .`, `git commit`, `git push`).
2. Buka vercel.com, sign in pakai akun GitHub.
3. Klik **Add New → Project**, pilih repo portofolio ini.
4. Biarkan semua setting default (Vercel otomatis mendeteksi Next.js) → klik **Deploy**.
5. Setelah selesai (biasanya 1–2 menit), kamu akan dapat URL publik seperti `nama-project.vercel.app`.
6. Opsional: di tab **Settings → Domains**, kamu bisa hubungkan domain custom kalau punya.

Setiap kali kamu `git push` perubahan baru, Vercel otomatis build ulang dan update situsnya — cocok dipakai saat kamu update portofolio sesuai progres timeline 1 bulan.

## Checklist sebelum publish

- [ ] Project di `Projects.tsx` sudah diganti dengan karya asli
- [ ] Link LinkedIn & GitHub di `Contact.tsx` sudah benar
- [ ] Cek tampilan di HP (buka lewat browser HP setelah deploy)
- [ ] Cek dark mode toggle berfungsi
- [ ] Jalankan `npm run build` sekali lagi secara lokal untuk pastikan tidak ada error sebelum push
