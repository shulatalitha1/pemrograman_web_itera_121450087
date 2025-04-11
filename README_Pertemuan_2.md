## 🧠 Student Productivity Dashboard

### ✨ Deskripsi Aplikasi
Aplikasi **Student Productivity Dashboard** adalah dashboard personal interaktif yang dirancang untuk membantu mahasiswa mengatur kegiatan sehari-hari seperti jadwal kuliah, tugas, catatan penting, serta menampilkan informasi cuaca dan waktu secara real-time. Semua data disimpan menggunakan `localStorage`, sehingga tidak hilang saat browser ditutup.

---

### 📌 Fitur-Fitur Utama
- **🗕️ Jadwal Kuliah**  
  Tambah, edit, dan hapus jadwal kuliah per hari.

- **✅ To-Do List / Daftar Tugas**  
  Tambah tugas, tandai sebagai selesai, atau hapus jika sudah tidak diperlukan.

- **📝 Catatan Cepat**  
  Simpan catatan atau ide penting dengan mudah.

- **🌤️ Informasi Cuaca & Waktu**  
  Menampilkan cuaca berdasarkan lokasi dan waktu saat ini menggunakan API.

---

### 🛠️ Implementasi Fitur ES6+
Berikut fitur ES6+ yang digunakan dalam pengembangan:

- ✅ **`let` dan `const`**  
  Digunakan secara tepat untuk deklarasi variabel agar tidak terjadi hoisting dan memperjelas scope.

- ✅ **Arrow Functions (min. 3)**  
  Contoh:
  ```js
  const addTask = () => { /*...*/ };
  const renderSchedule = () => { /*...*/ };
  const fetchWeather = async () => { /*...*/ };
  ```

- ✅ **Template Literals**  
  Digunakan untuk merender konten HTML secara dinamis:
  ```js
  taskContainer.innerHTML += `
    <div class="task">
      <p>${task.text}</p>
      <button onclick="deleteTask(${task.id})">Hapus</button>
    </div>
  `;
  ```

- ✅ **Async/Await**  
  Digunakan untuk mengambil data cuaca dari API:
  ```js
  const fetchWeather = async () => {
    const response = await fetch(weatherURL);
    const data = await response.json();
    // ...
  };
  ```

- ✅ **Classes**  
  Struktur data dikelola dengan menggunakan class:
  ```js
  class Task {
    constructor(id, text, isDone = false) {
      this.id = id;
      this.text = text;
      this.isDone = isDone;
    }
  }
  ```

---

### 🖼️ Screenshot Aplikasi
![Screenshot Dashboard](./screenshot(527).png)
