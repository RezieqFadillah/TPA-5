# Dokumentasi TPA 5
### Database
Pertama kita perlu menghubungkan mongoDB nya secara online lewat compass. Kita gunakan link nya dari website monggoDB atlas nya.

![w1](https://user-images.githubusercontent.com/114371403/201922976-f7c2b174-551d-4e3c-9547-e0552d9af448.png)

Disini kita buat database dengan nama "dealer" di mongoDB Compass nya.

![w2](https://user-images.githubusercontent.com/114371403/201922981-6b65e3db-69e8-4301-8651-9c9b042263d2.png)

## Folder dan fungsi nya
### Koneksi database
Kita buat koneksi ke database, kita buat di folder config/koneksi.js.

![w3](https://user-images.githubusercontent.com/114371403/201922985-dfa9c84d-7471-49fa-869f-f20c844a9cf6.png)

![w4](https://user-images.githubusercontent.com/114371403/201922990-9d042897-4e43-4c3c-8354-9d3be0b5c770.png)

Di sini kita membutuhkan mongoose untuk dapat terhubung dengan database, kita import dengan require.

![w5](https://user-images.githubusercontent.com/114371403/201922995-800ba48e-3300-4c49-bcf7-b5eb3c176eec.png)

Kemudian kita buat variabel "URL" untuk menyimpan link cluster monggoDB kita, setelah itu kita buat variabel "db" untuk menghubungkan ke database.

![w6](https://user-images.githubusercontent.com/114371403/201923000-643ff3d4-b9d7-4fba-9311-2c2f2328d43b.png)

Terakhir kita exports variabel "db" agar bisa digunakan koneksinya.

### app.js
Di sini merupakan tempat sebagai awalnya sebelum diarahkan ke tujuan lain.

![w7](https://user-images.githubusercontent.com/114371403/201923007-ed698774-68ed-4ef0-ace4-54e4808f1840.png)

Di sini kita import express untuk dapat digunakan, disini kita buat variabel "app" pakai express nya. Di sini diimport juga "dotenv" agar bisa menggunakan file ".env" yang mana file tersebut tersembunyi.

![w8](https://user-images.githubusercontent.com/114371403/201923012-5a588604-f240-43fc-ba8a-acfb91918572.png)

Untuk link server nya kita simpan di file ".env".

![w9](https://user-images.githubusercontent.com/114371403/201923017-4bf45940-b3d0-42e5-bffb-a599e1cec918.png)

Kita panggil di variabel "PORT" untuk ngambil link nya dari file ".env".

![w10](https://user-images.githubusercontent.com/114371403/201923018-1f9e9556-31ba-49bc-a733-3044695c66ae.png)

Kemudian kita mengecek database nya, apakah terhubung atau tidak.

![w11](https://user-images.githubusercontent.com/114371403/201923023-48ee15d6-b881-425c-ad26-1aed5e99a267.png)

Jika terhubung maka servernya akan berjalan normal.

![w12](https://user-images.githubusercontent.com/114371403/201923031-85e835f8-7ea0-4d15-9a9e-c2f53b547669.png)

Kemudian di variabel "allRoutes" kita mau mengarahkan ke folder routes, dan juga kita gunakan "app.use" agar bisa menggunakan json dan masuk ke folder "allRoutes" nya.

![w13](https://user-images.githubusercontent.com/114371403/201923037-de22a840-2593-4960-9b8b-d6bb9bab894f.png)

### Routes
* #### index.js
    Ini adalah file awal yang dituju dari file "app.js". Di sini menyimpan berbagai endpoint dari link server nya, untuk itu kita gunakan router dari express.

    ![w14](https://user-images.githubusercontent.com/114371403/201923038-3be01f42-b46d-4cd1-bd86-92df1192e9ad.png)

    Ini adalah file yang akan dipakai untuk setiap endpointnya.

    ![w15](https://user-images.githubusercontent.com/114371403/201923040-cd66ec51-55e2-4039-9d8b-ba0abbf6cf17.png)

    Nah dibawah ini adalah endpointnya yang akan digunakan. jangan lupa kita exports seluruh endpointnya.

    ![w16](https://user-images.githubusercontent.com/114371403/201923042-4eca73ca-32c9-492e-8ad9-af6ef8e75c19.png)

    Untuk variabel "verifytoken" digunakan mengecek apakah ada token dari headers dan benar, jika tidak ada maka user tidak bisa masuk ke endpoint tersebut.

* #### router
    ![w17](https://user-images.githubusercontent.com/114371403/201923045-7a2db88a-0828-475f-a4cf-de251db83d3e.png)
    
    Di file router nya adalah tempat untuk menyimpan metode REST API dari endpointnya.

    Salah satu contoh nya adalah "regis.router.js". Di sini menyimpan metode get dan post. Untuk fungsi nya akan diarahkan ke folder lain, yaitu folder "controller".

    ![w18](https://user-images.githubusercontent.com/114371403/201923048-87b729d6-a09d-4029-afd0-e15a9e8a27dd.png)

    Kemudian ini adalah router yang lain.

    - login

        ![w19](https://user-images.githubusercontent.com/114371403/201923051-d24f14d9-06e9-45d7-8817-bfc7f0c07e3b.png)

    - motor

        ![w20](https://user-images.githubusercontent.com/114371403/201923053-3e964bc2-0c3c-4591-b513-17eef1fb6033.png)

### controllers
Disini file untuk menjalakan metode endpoint dari folder "routes".

![w21](https://user-images.githubusercontent.com/114371403/201923056-1c0aeb15-a337-49d2-ab7e-0bc1cf1f080e.png)

Disini untuk contohnya kita gunakan endpoint motor. Kita juga perlu membuat file yang dituju, yang terdapat model atau collection dari databasenya. Disini kita panggil dari model "motor".

![w22](https://user-images.githubusercontent.com/114371403/201923059-365ab166-8d5d-4546-8773-a2afe22b8bce.png)

Fungsi-fungsi nya antara lain :

- Mengambil seluruh data
    Ini akan mengambil seluruh data dari database. Ini adalah salah satu contoh nya dari endpoint motor.

    ![w23](https://user-images.githubusercontent.com/114371403/201923062-2c66cd6f-aaad-4f59-af9f-854028453e42.png)

    Disini terdapat asynchronous agar sistem nya dapat berjalan beriringan. Kita buat variabel "motors" dan kita gunakan fungsi "find()" untuk mengambil seluruh data dari collection nya. Jika berhasil maka datanya ditampilkan dengan respone dalam bentuk json.

    Jika terjadi eror dan masuk status 400 maka akan dikirim pesan "Aduh eror".

- Mengambil data berdasarkan id
    Kita akan mengambil salah satu data berdasarkan id nya.

    ![w24](https://user-images.githubusercontent.com/114371403/201923064-a578faff-9f80-4d05-bf8f-980bbf9e4ea4.png)

    Sama seperti sebelumnya terdapat async, dan disini kita panggil id nya dengan membuat variabel "id" dan mengambil data dari parameter atau atribut id nya dengan "req.params.id". Kemudian variabel "id" kita gunakan dengan fungsi "findById(id). Jika ada maka datanya akan ditampilkan, dan kalau tidak ada makan akan dikirim pesan dalma bentuk json "data tidak ada ni".

    Sama juga seperti sebelumnya, jika terjadi eror dan masuk status 400 maka akan dikirim pesan "Aduh eror".

- Menambah data baru
    Kita akan menambahkan data baru.

    ![w25](https://user-images.githubusercontent.com/114371403/201923068-f15db436-1f95-460e-a8b6-e7c8cc258f3e.png)

    Kita ambil seluruh data dari body nya, yaitu dengan request body (req.body). Kemudian buat objek baru untuk mengambil datanya (motor = new mtr(data)) dan objek baru tersebut dengan save. Jika berhasil maka akan dikirim pesan dalam bentuk json "data telah diinput".

- Menghapus data
    Kita menghapus data berdasarkan id nya.

    ![w26](https://user-images.githubusercontent.com/114371403/201923073-8ba628d8-6749-4488-b162-d5c63d5eb88e.png)

    kita perlu mengambil id nya, cara nya sama dengan mengambil data berdasarkan id yaitu dengan "req.params.id". Kemudian kita gunakan fungsi "findByIdAndDelete(id)". Jika datanya tidak ada dan masuk ke status 404 maka dikirim pesan dalam bentuk json "Data tidak ada", namun jika ada maka data akan dihapus dan mengirim pesan dalam bentuk json "Data berhasil dihapus".

- Memperbarui data
    Memperbarui data dengan id.

    ![w27](https://user-images.githubusercontent.com/114371403/201923074-febcf1b3-d20e-4c60-9b03-7bfe7512f8b9.png)

    Kita ambil id nya untuk mengambil data nya body nya untuk mengirim data yang diperbarui. Kita gunakan fungsi "findByIdAndUpdate" dan masukkan parameter id dan body nya. Jika tidak ada yang diperbarui maka akan dikirim pesan dalam bentuk json "Data tidak ada", dan jika berhasil maka data akan diperbarui dan dikirim pesan "Data berhasil di update".

Selain contoh dari endpoint motor di atas, penerapan nya pada endpoint lain juga mirip-mirip. Contoh dari endpoint regis dibawah ini.

![w28](https://user-images.githubusercontent.com/114371403/201923075-2d9db41e-002b-4b89-a9a2-02d5d85c722f.png)

Hal yang beda di sini adalah password nya yang di enkripsi.

![w29](https://user-images.githubusercontent.com/114371403/201923078-3958758a-b03d-4805-adc4-246f0aa41c20.png)

![w30](https://user-images.githubusercontent.com/114371403/201923085-7b08c5b4-0627-42ab-b110-449028678a0a.png)

Untuk melakukan itu kita memerlukan library "bcrypt". Kita buat variabel "saltRounds", dan di variabel "hash" kita buat fungsi untuk mengenkripsi password nya.

### models
Ini adalah tempat untuk membuat model atau collection dari database nya.

![w31](https://user-images.githubusercontent.com/114371403/201923087-7afa353a-8143-444f-adae-0855712fcdf2.png)

Untuk menghubungkan dengan database dari mongoDB nya kita perlu mongoose, oleh karena itu disini kita panggil/pakai.

![w32](https://user-images.githubusercontent.com/114371403/201923091-5df2ecf9-1c5e-4a23-bcd1-bb21d7868e3e.png)

Contohnya seperti model dari user, yang mana kita buat schema dan memiliki atribut nama dan password. Kita gunakan required maka datanya wajib dimasukkan.

![w33](https://user-images.githubusercontent.com/114371403/201923093-6a8d0966-af4c-4cdc-a9b6-5a222e8d900b.png)

Kemudian di model motor kita gunakan embed, embed nya berupa atribut "series" yang menyimpan informasi tambahan.

Terakhir jangan lupa untuk disimpan dan di exports.

![w34](https://user-images.githubusercontent.com/114371403/201923096-8f0cba0d-d5a5-4118-823d-9528c2816075.png)

### Token
Token disini berfungsi untuk memberikan akses kepada user. Untuk kunci token nya kita simpan di file ".env", sama seperti lokasi link server, sehingga tidak diketahui.

![w35](https://user-images.githubusercontent.com/114371403/201923099-8dc9f63a-a836-4fdb-a2df-7d67fd0ace10.png)

Untuk fungsi nya ini kita terapkan di middleware, dan kita membutuhkan library "jsonwebtoken" jadi perlu kita import.

![w36](https://user-images.githubusercontent.com/114371403/201923104-a74f68b5-ab98-4f4f-9474-b4dbf6329687.png)

Token diberikan saat kita melakukan proses login.

![w37](https://user-images.githubusercontent.com/114371403/201923108-fc4dfade-99d0-497f-9f7b-3d1832eb3e88.png)

Disini user harus memiliki akun terlebih dahulu.

![w38](https://user-images.githubusercontent.com/114371403/201923109-e77aae1f-e0e8-4b78-8039-2c38686eec28.png)

Disini kita menyamakan data yang diinput dengan data yang ada dalam dtabase. Karena password nya di enkripsi maka kita gunakan fungsi "bcrypt.compareSync".

![w39](https://user-images.githubusercontent.com/114371403/201923110-331de3d5-dd12-4136-870a-eb36d974b41b.png)

Jika user memiliki akun dan berhasil masuk, maka kita ambil token dari file ".env" dan kita berikan ke user yang login lewat header. Batas waktu token ini berlaku adalah 1 jam.

![w40](https://user-images.githubusercontent.com/114371403/201923112-276d582c-f13d-4034-985e-ce5a5ac8f9ca.png)

Kemudian kita buat middleware, jadi kita buat tahapan sebelum masuk ke server yang dituju.

![w41](https://user-images.githubusercontent.com/114371403/201923116-e23935ed-3549-4e87-8d80-32641eddd1c2.png)

Di sini akan dicek token nya yang dari header, apakah ada atau tidak.

![w42](https://user-images.githubusercontent.com/114371403/201923120-50eab7dd-456d-4468-8a1b-f965bd034905.png)

Buat fungsi yang akan memverifikasi dengan fungsi "jwt.verify(token, 'token yang ada')". Jika sesuai dengan token user, maka user bisa masuk ke server yang dituju.

![w43](https://user-images.githubusercontent.com/114371403/201923127-ae2f22f0-6251-4d4b-844b-86e84a338f5c.png)

Namun jika user tidak membawa token maka tidak akan bisa masuk dan dikirim pesan "Silahkan login terlebih dahulu". Dan jika token salah atau sudah kadaluarsa maka user tidak bisa masuk juga dan dikirimi pesan.

![w44](https://user-images.githubusercontent.com/114371403/201923128-f2a48eb4-d39e-4c36-83c6-6fcb162efac4.png)

Untuk memilih endpoint mana yang ingin kita berikan token maka kita buat fungsi yang membutuhkan token untuk dimasuki di file index.js.

![w45](https://user-images.githubusercontent.com/114371403/201923131-dd88fd31-b507-4480-8801-1228eb6f2a38.png)

## Alur Program
Untuk memulai program pertama kita perlu menjalankan servernya.

![w46](https://user-images.githubusercontent.com/114371403/201923136-3f9a6936-20e6-4be9-a1eb-cab8aa9c9ac3.png)

Nah server sudah berjalan.

* ### Registrasi
    Program dimulai dari registrasi, dimana user melakukan registrasi untuk membuat akun. Disini kita gunakan link server dengan endpoint "regis" dan method post untuk mengirim datanya.

    ![w47](https://user-images.githubusercontent.com/114371403/201923139-f1001e12-2414-4f7b-bd97-6ac65010f8b7.png)

    Dan kita berhasil membuat akun. Akun tersebut bisa kita lihat dari database dengan menggunakan method get.

    ![w48](https://user-images.githubusercontent.com/114371403/201923142-a78db443-fb56-47df-bfba-450905393231.png)
    
    Di sini terlihat juga kalau password yang kita inputkan telah di enkripsi.

* ### Login
    Login terdapat dalam link server dengan endpoint "login".

    ![w49](https://user-images.githubusercontent.com/114371403/201923144-8302f68a-e82b-4fd3-b253-10a810b84276.png)

    Jika atribut "nama" tidak ada, maka akan gagal kemudian masuk ke status 400, dan disini kita kirimi response pesan bahwa "Akun tidak ditemukan".

    ![w50](https://user-images.githubusercontent.com/114371403/201923146-b6960d49-50d4-44e0-9e75-2815b61829a7.png)

    Dan jika atribut "nama" ada namun password salah maka akan sama seperti sebelum nya namun dengan pesan yang berbeda.

    ![w51](https://user-images.githubusercontent.com/114371403/201923152-424ce454-b123-4e37-bd88-8a7d5c8d3bfc.png)

    Jika user benar dan berhasil login maka user akan dikasih token yang dapat dipakai untuk mengakses endpoint yang membutuhkan token.
    
    ![w52](https://user-images.githubusercontent.com/114371403/201923154-df2a3038-2595-4805-ad6a-31f6bcfb8cfc.png)

    Ini token untuk authentication nya, ada di headers.

    ![w53](https://user-images.githubusercontent.com/114371403/201923160-8ac8e06f-853f-4068-af17-89bc56588004.png)

* ### Authentication
    Nah disini user akan masuk ke dalam endpoint "/motor". 
    
    ![w54](https://user-images.githubusercontent.com/114371403/201923165-a3efcaf1-a00e-4cce-bc88-97b73dc570c8.png)

    Disini kita tempatkan token authenticationnya.

    ![w55](https://user-images.githubusercontent.com/114371403/201923168-92d4d87f-0676-44b9-9101-9f8a6c0d3640.png)

    Untuk masuk kesini membutuhkan sebuah token dari hasil authentication login sebelumnya. Jika user tidak membawa token maka tidak bisa mengakses endpoint "/motor".

    ![w56](https://user-images.githubusercontent.com/114371403/201923172-04697b2b-01d9-45cf-aa1f-58c434ad4e9a.png)
    
    Dan jika token dari user salah atau masa berlaku nya sudah habis maka user juga tidak bisa mengakses.

    ![w57](https://user-images.githubusercontent.com/114371403/201923179-cb6973fa-6c6d-49fa-9be7-f4b10e3c4e94.png)

    User baru bisa mengakses endpoint "/motor" jika memiliki token dan masih berlaku

* ### Todo
    Disini user yang berhasil masuk bisa menggunakan berbagai fungsi yang diberikan dari setiap endpoint. Disini kita gunakan endpoint "/motor".

    - Menginput data
        Di endpoint "/motor", user dengan metode post dapat menginputkan datanya.

        ![w58](https://user-images.githubusercontent.com/114371403/201923181-08878d21-efd3-4128-bdcb-9c57306a01a2.png)

        Berikut data yang ingin kita input.

        ![w59](https://user-images.githubusercontent.com/114371403/201923186-b3e6fb20-e477-48bd-8125-8ae51dc6e329.png)

        ![w60](https://user-images.githubusercontent.com/114371403/201923190-4a2ae566-f77d-462a-a279-a70b4b3c1f45.png)

    - Menampilkan data
        Masih sama dengan endpoint "/motor", namun kita gunakan metode get untuk menampilkan seluruh datanya.

        ![w61](https://user-images.githubusercontent.com/114371403/201923194-ebfc344d-7903-4a5d-88a3-9c1181d59089.png)

        Maka datanya akan ditampilkan.

        ![w62](https://user-images.githubusercontent.com/114371403/201923197-d82ef33a-99aa-43cd-b097-ff1a55611dc5.png)

    - Menampilkan data berdasarkan id
        Kita bisa menampilkan data tertentu dengan memanggil id nya, kita tambahkan id yang ingin kita tuju.

        ![w63](https://user-images.githubusercontent.com/114371403/201923199-56f33a9b-df23-447c-a4d3-3fdbcf10a652.png)

        Berikut data nya ditampilkan.

        ![w64](https://user-images.githubusercontent.com/114371403/201923203-c3a5d0a9-d2e7-47f7-a9a5-c4dffb63ad8b.png)

        Namun jika data id nya tidak ada maka akan dikirim pesan.

        ![w65](https://user-images.githubusercontent.com/114371403/201923206-c12566fd-5160-4eba-952d-b3db0f8bb183.png)

    - Menghapus data
        Menghapus data bisa digunakan dengan metode delete.

        ![w66](https://user-images.githubusercontent.com/114371403/201923209-a4f4b420-d1d1-4951-a0e9-4e550a64f233.png)

        Disini kita menghapus data id ke 2, maka datanya akan dihapus dan dikirim pesan.

        ![w67](https://user-images.githubusercontent.com/114371403/201923211-8a128b04-f307-4cea-8f6e-eb79a760e131.png)

        Jika kita cek maka tidak ada datanya.

        ![w68](https://user-images.githubusercontent.com/114371403/201923214-97c00203-3dfd-43b1-8873-e57567f1f8d0.png)

        Namun saat kita ingin menghapus dan data id nya tidak ada maka akan dikirim pesan.

        ![w69](https://user-images.githubusercontent.com/114371403/201923220-4a80092e-7a54-4c69-8a9d-6228375b72ea.png)

    - Mengupdate data
        Update data bisa dilakukan dengan metode put.

        ![w70](https://user-images.githubusercontent.com/114371403/201923223-ddfb3465-e4aa-4165-adf9-650f9206f1d7.png)

        Kita masukin data yang ingin diperbarui.

        ![w71](https://user-images.githubusercontent.com/114371403/201923227-8751c9fa-4d96-47f8-8c1f-f40374a23533.png)

        Maka hasil datanya akan diperbarui.

        ![w72](https://user-images.githubusercontent.com/114371403/201923228-af7a111d-0589-4610-ae6d-f80473a17570.png)

### Catatan
Sebenarnya saya disini ingin menerapkan reference dalam mongoose nya, yaitu saya buat sebuah model "series" dari model "motor" dengan model yang terpisah.

![w73](https://user-images.githubusercontent.com/114371403/201923230-bbec496f-39c9-4bd7-86a0-0013ac9c3577.png)

![w74](https://user-images.githubusercontent.com/114371403/201923232-9ecb5791-84f9-4391-8401-0ca04cbbae1c.png)

Namun saat saya terapkan di model motor nya malah terjadi eror, ObjectId nya tidak mau menangkap id nya.

![w75](https://user-images.githubusercontent.com/114371403/201923233-3ccabbda-1c64-447a-ae29-10942a693ffb.png)
