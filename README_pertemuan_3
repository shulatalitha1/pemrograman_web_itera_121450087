## 📚 Book Management App

Aplikasi manajemen buku sederhana berbasis React, yang memungkinkan pengguna untuk menambahkan, mengedit, dan menghapus data buku. Aplikasi ini juga dilengkapi dengan fitur statistik untuk melihat jumlah total buku.

---

## 🛠️ Teknologi yang Digunakan

- **React.js** untuk antarmuka pengguna
- **React Hooks** (`useState`, `useEffect`, `useContext`, custom hooks)
- **Context API** untuk manajemen state global
- **Jest + React Testing Library** untuk pengujian
- **CSS Modules** untuk styling

---

## 🚀 Instalasi & Menjalankan Aplikasi

1. Clone repo ini:
   ```bash
   git clone https://github.com/username/book-management.git
   cd book-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan aplikasi:
   ```bash
   npm start
   ```

4. Jalankan unit test:
   ```bash
   npm test
   ```

---

## 🖼️ Screenshot Antarmuka

![Screenshot Home](./screenshots/home.png)  

---

## ⚙️ Fitur React yang Digunakan

| Fitur | Penjelasan |
|-------|------------|
| `useState` | Untuk mengelola state lokal komponen seperti input form. |
| `useEffect` | Menyimpan data buku ke localStorage dan memuat data saat aplikasi dijalankan. |
| `useContext` | Mengelola data buku secara global antar komponen. |
| Custom Hooks | `useLocalStorage` dan `useBookStats` untuk memisahkan logika reusable. |

---

## 🧠 Komentar dalam Kode

Kode sudah diberi komentar pada bagian-bagian penting, seperti:
- Penggunaan Context API
- Penggunaan `useEffect` untuk sinkronisasi localStorage
- Penggunaan Custom Hook

Contoh:
```js
// Menyimpan data ke localStorage setiap kali state berubah
useEffect(() => {
  localStorage.setItem(key, JSON.stringify(storedValue));
}, [key, storedValue]);
```

---

## ✅ Laporan Testing

![Hasil Test](./screenshots/testing-result.png)

- Semua unit test berhasil dijalankan ✅
- Termasuk pengujian untuk komponen utama: `App`, `BookList`, `BookForm`
- Menggunakan `render()` dan `screen.getByText()` dari RTL
