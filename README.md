# Dokumentasi TPA 5
### Database
Pertama kita perlu menghubungkan mongoDB nya secara online lewat compass. Kita gunakan link nya dari website monggoDB atlas nya.

![w1](w1.png)

Disini kita buat database dengan nama "dealer" di mongoDB Compass nya.

![w2](w2.png)


## Folder dan fungsi nya
### Koneksi database
Kita buat koneksi ke database, kita buat di folder config/koneksi.js.

![w3](w3.png)

![w4](w4.png)

Di sini kita membutuhkan mongoose untuk dapat terhubung dengan database, kita import dengan require.

![w5](w5.png)

Kemudian kita buat variabel "URL" untuk menyimpan link cluster monggoDB kita, setelah itu kita buat variabel "db" untuk menghubungkan ke database.

![w6](w6.png)

Terakhir kita exports variabel "db" agar bisa digunakan koneksinya.

### app.js
Di sini merupakan tempat sebagai awalnya sebelum diarahkan ke tujuan lain.

![w7](w7.png)

Di sini kita import express untuk dapat digunakan, disini kita buat variabel "app" pakai express nya. Di sini diimport juga "dotenv" agar bisa menggunakan file ".env" yang mana file tersebut tersembunyi.

![w8](w8.png)

Untuk link server nya kita simpan di file ".env".

![w9](w9.png)

Kita panggil di variabel "PORT" untuk ngambil link nya dari file ".env".

![w10](w10.png)

Kemudian kita mengecek database nya, apakah terhubung atau tidak.

![w11](w11.png)

Jika terhubung maka servernya akan berjalan normal.

![w12](w12.png)

Kemudian di variabel "allRoutes" kita mau mengarahkan ke folder routes, dan juga kita gunakan "app.use" agar bisa menggunakan json dan masuk ke folder "allRoutes" nya.

![w13](w13.png)

### Routes
* #### index.js
    Ini adalah file awal yang dituju dari file "app.js". Di sini menyimpan berbagai endpoint dari link server nya, untuk itu kita gunakan router dari express.

    ![w14](w14.png)

    Ini adalah file yang akan dipakai untuk setiap endpointnya.

    ![w15](w15.png)

    Nah dibawah ini adalah endpointnya yang akan digunakan. jangan lupa kita exports seluruh endpointnya.

    ![w16](w16.png)

    Untuk variabel "verifytoken" digunakan mengecek apakah ada token dari headers dan benar, jika tidak ada maka user tidak bisa masuk ke endpoint tersebut.

* #### router
    ![w17](w17.png)
    
    Di file router nya adalah tempat untuk menyimpan metode REST API dari endpointnya.

    Salah satu contoh nya adalah "regis.router.js". Di sini menyimpan metode get dan post. Untuk fungsi nya akan diarahkan ke folder lain, yaitu folder "controller".

    ![w18](w18.png)

    Kemudian ini adalah router yang lain.

    - login

        ![w19](w19.png)

    - motor

        ![w20](w20.png)

### controllers
Disini file untuk menjalakan metode endpoint dari folder "routes".

![w21](w21.png)

Disini untuk contohnya kita gunakan endpoint motor. Kita juga perlu membuat file yang dituju, yang terdapat model atau collection dari databasenya. Disini kita panggil dari model "motor".

![w22](w22.png)

Fungsi-fungsi nya antara lain :

- Mengambil seluruh data
    Ini akan mengambil seluruh data dari database. Ini adalah salah satu contoh nya dari endpoint motor.

    ![w23](w23.png)

    Disini terdapat asynchronous agar sistem nya dapat berjalan beriringan. Kita buat variabel "motors" dan kita gunakan fungsi "find()" untuk mengambil seluruh data dari collection nya. Jika berhasil maka datanya ditampilkan dengan respone dalam bentuk json.

    Jika terjadi eror dan masuk status 400 maka akan dikirim pesan "Aduh eror".

- Mengambil data berdasarkan id
    Kita akan mengambil salah satu data berdasarkan id nya.

    ![w24](w24.png)

    Sama seperti sebelumnya terdapat async, dan disini kita panggil id nya dengan membuat variabel "id" dan mengambil data dari parameter atau atribut id nya dengan "req.params.id". Kemudian variabel "id" kita gunakan dengan fungsi "findById(id). Jika ada maka datanya akan ditampilkan, dan kalau tidak ada makan akan dikirim pesan dalma bentuk json "data tidak ada ni".

    Sama juga seperti sebelumnya, jika terjadi eror dan masuk status 400 maka akan dikirim pesan "Aduh eror".

- Menambah data baru
    Kita akan menambahkan data baru.

    ![w25](w25.png)

    Kita ambil seluruh data dari body nya, yaitu dengan request body (req.body). Kemudian buat objek baru untuk mengambil datanya (motor = new mtr(data)) dan objek baru tersebut dengan save. Jika berhasil maka akan dikirim pesan dalam bentuk json "data telah diinput".

- Menghapus data
    Kita menghapus data berdasarkan id nya.

    ![w26](w26.png)

    kita perlu mengambil id nya, cara nya sama dengan mengambil data berdasarkan id yaitu dengan "req.params.id". Kemudian kita gunakan fungsi "findByIdAndDelete(id)". Jika datanya tidak ada dan masuk ke status 404 maka dikirim pesan dalam bentuk json "Data tidak ada", namun jika ada maka data akan dihapus dan mengirim pesan dalam bentuk json "Data berhasil dihapus".

- Memperbarui data
    Memperbarui data dengan id.

    ![w27](w27.png)

    Kita ambil id nya untuk mengambil data nya body nya untuk mengirim data yang diperbarui. Kita gunakan fungsi "findByIdAndUpdate" dan masukkan parameter id dan body nya. Jika tidak ada yang diperbarui maka akan dikirim pesan dalam bentuk json "Data tidak ada", dan jika berhasil maka data akan diperbarui dan dikirim pesan "Data berhasil di update".

Selain contoh dari endpoint motor di atas, penerapan nya pada endpoint lain juga mirip-mirip. Contoh dari endpoint regis dibawah ini.

![w28](w28.png)

Hal yang beda di sini adalah password nya yang di enkripsi.

![w29](w29.png)

![w30](w30.png)

Untuk melakukan itu kita memerlukan library "bcrypt". Kita buat variabel "saltRounds", dan di variabel "hash" kita buat fungsi untuk mengenkripsi password nya.

### models
Ini adalah tempat untuk membuat model atau collection dari database nya.

![w31](w31.png)

Untuk menghubungkan dengan database dari mongoDB nya kita perlu mongoose, oleh karena itu disini kita panggil/pakai.

![w32](w32.png)

Contohnya seperti model dari user, yang mana kita buat schema dan memiliki atribut nama dan password. Kita gunakan required maka datanya wajib dimasukkan.

![w33](w33.png)

Kemudian di model motor kita gunakan embed, embed nya berupa atribut "series" yang menyimpan informasi tambahan.

Terakhir jangan lupa untuk disimpan dan di exports.

![w34](w34.png)

### Token
Token disini berfungsi untuk memberikan akses kepada user. Untuk kunci token nya kita simpan di file ".env", sama seperti lokasi link server, sehingga tidak diketahui.

![w35](w35.png)

Untuk fungsi nya ini kita terapkan di middleware, dan kita membutuhkan library "jsonwebtoken" jadi perlu kita import.

![w36](w36.png)

Token diberikan saat kita melakukan proses login.

![w37](w37.png)

Disini user harus memiliki akun terlebih dahulu.

![w38](w38.png)

Disini kita menyamakan data yang diinput dengan data yang ada dalam dtabase. Karena password nya di enkripsi maka kita gunakan fungsi "bcrypt.compareSync".

![w39](w39.png)

Jika user memiliki akun dan berhasil masuk, maka kita ambil token dari file ".env" dan kita berikan ke user yang login lewat header. Batas waktu token ini berlaku adalah 1 jam.

![w40](w40.png)

Kemudian kita buat middleware, jadi kita buat tahapan sebelum masuk ke server yang dituju.

![w41](w41.png)

Di sini akan dicek token nya yang dari header, apakah ada atau tidak.

![w42](w42.png)

Buat fungsi yang akan memverifikasi dengan fungsi "jwt.verify(token, 'token yang ada')". Jika sesuai dengan token user, maka user bisa masuk ke server yang dituju.

![w43](w43.png)

Namun jika user tidak membawa token maka tidak akan bisa masuk dan dikirim pesan "Silahkan login terlebih dahulu". Dan jika token salah atau sudah kadaluarsa maka user tidak bisa masuk juga dan dikirimi pesan.

![w44](w44.png)

Untuk memilih endpoint mana yang ingin kita berikan token maka kita buat fungsi yang membutuhkan token untuk dimasuki di file index.js.

![w45](w45.png)

## Alur Program
Untuk memulai program pertama kita perlu menjalankan servernya.

![w46](w46.png)

Nah server sudah berjalan.

* ### Registrasi
    Program dimulai dari registrasi, dimana user melakukan registrasi untuk membuat akun. Disini kita gunakan link server dengan endpoint "regis" dan method post untuk mengirim datanya.

    ![w47](w47.png)

    Dan kita berhasil membuat akun. Akun tersebut bisa kita lihat dari database dengan menggunakan method get.

    ![w48](w48.png)
    
    Di sini terlihat juga kalau password yang kita inputkan telah di enkripsi.

* ### Login
    Login terdapat dalam link server dengan endpoint "login".

    ![w49](w49.png)

    Jika atribut "nama" tidak ada, maka akan gagal kemudian masuk ke status 400, dan disini kita kirimi response pesan bahwa "Akun tidak ditemukan".

    ![w50](w50.png)

    Dan jika atribut "nama" ada namun password salah maka akan sama seperti sebelum nya namun dengan pesan yang berbeda.

    ![w51](w51.png)

    Jika user benar dan berhasil login maka user akan dikasih token yang dapat dipakai untuk mengakses endpoint yang membutuhkan token.
    
    ![w52](w52.png)

    Ini token untuk authentication nya, ada di headers.

    ![w53](w53.png)

* ### Authentication
    Nah disini user akan masuk ke dalam endpoint "/motor". 
    
    ![w54](w54.png)

    Disini kita tempatkan token authenticationnya.

    ![w55](w55.png)

    Untuk masuk kesini membutuhkan sebuah token dari hasil authentication login sebelumnya. Jika user tidak membawa token maka tidak bisa mengakses endpoint "/motor".

    ![w56](w56.png)
    
    Dan jika token dari user salah atau masa berlaku nya sudah habis maka user juga tidak bisa mengakses.

    ![w57](w57.png)

    User baru bisa mengakses endpoint "/motor" jika memiliki token dan masih berlaku

* ### Todo
    Disini user yang berhasil masuk bisa menggunakan berbagai fungsi yang diberikan dari setiap endpoint. Disini kita gunakan endpoint "/motor".

    - Menginput data
        Di endpoint "/motor", user dengan metode post dapat menginputkan datanya.

        ![w58](w58.png)

        Berikut data yang ingin kita input.

        ![w59](w59.png)

        ![w60](w60.png)

    - Menampilkan data
        Masih sama dengan endpoint "/motor", namun kita gunakan metode get untuk menampilkan seluruh datanya.

        ![w61](w61.png)

        Maka datanya akan ditampilkan.

        ![w62](w62.png)

    - Menampilkan data berdasarkan id
        Kita bisa menampilkan data tertentu dengan memanggil id nya, kita tambahkan id yang ingin kita tuju.

        ![w63](w63.png)

        Berikut data nya ditampilkan.

        ![w64](w64.png)

        Namun jika data id nya tidak ada maka akan dikirim pesan.

        ![w65](w65.png)

    - Menghapus data
        Menghapus data bisa digunakan dengan metode delete.

        ![w66](w66.png)

        Disini kita menghapus data id ke 2, maka datanya akan dihapus dan dikirim pesan.

        ![w67](w67.png)

        Jika kita cek maka tidak ada datanya.

        ![w68](w68.png)

        Namun saat kita ingin menghapus dan data id nya tidak ada maka akan dikirim pesan.

        ![w69](w69.png)

    - Mengupdate data
        Update data bisa dilakukan dengan metode put.

        ![w70](w70.png)

        Kita masukin data yang ingin diperbarui.

        ![w71](w71.png)

        Maka hasil datanya akan diperbarui.

        ![w72](w72.png)

### Catatan
Sebenarnya saya disini ingin menerapkan reference dalam mongoose nya, yaitu saya buat sebuah model "series" dari model "motor" dengan model yang terpisah.

![w73](w73.png)

![w74](w74.png)

Namun saat saya terapkan di model motor nya malah terjadi eror, ObjectId nya tidak mau menangkap id nya.

![w75](w75.png)
