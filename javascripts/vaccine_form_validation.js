// validasi bidang 'nama tim'
function checkNameTim() {
    // data masukan 
    var valueName = document.Formulir_Pendaftaran.namaTim.value;

    // penyeleksian kondisi apakah nama tim sudah diisi atau belum
    if (valueName =="") {
        // tampilkan peringatan pertama
        document.getElementById("namaTimKosong").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("namaTimSalah").style.visibility = "hidden";

        // fokus ke bidang isian nama tim
        document.Formulir_Pendaftaran.namaTim.focus();
        return true;
    }else { 
        // sembunyikan peringatan pertama
        document.getElementById("namaTimKosong").style.visibility = "hidden";

        // penyeleksian kondisi mengecek jumlah huruf
        if (valueName.length <= 3) {
            // tampilkan peringatan kedua
            document.getElementById("namaTimSalah").style.visibility = "visible";

            // sembunyikan peringatan pertama
            document.getElementById("namaTimKosong").style.visibility = "hidden";

            // fokus ke bidang isian nama tim
            document.Formulir_Pendaftaran.namaTim.focus();
            return true;
        } else {
            // sembunyikan semua peringatan
            document.getElementById("namaTimSalah").style.visibility = "hidden";
            document.getElementById("namaTimKosong").style.visibility = "hidden";
        }
        // masukan nama tim sudah benar
        return false;
    }
}

// validasi bidang 'gender tim'
function checkGenderTim() {
    // data masukan dari tombol ke 1
    var radioValue1 = document.getElementById("genderTimMale").checked;
    // data masukan dari tombol ke 2
    var radioValue2 = document.getElementById("genderTimFemale").checked;

    // penyeleksian kondisi apakah gender tim kosong atau tidak
    if (radioValue1 == false && radioValue2 == false) {
        // tampilkan peringatan pertama
        document.getElementById("genderTimKosong").style.visibility = "visible";

        // pengguna fokus ke bidang isian gender tim
        document.getElementById("genderTimMale").focus();
        document.getElementById("genderTimFemale").focus();
        return true;
    } else {
        // sembunyikan peringatan pertama
        document.getElementById("genderTimKosong").style.visibility = "hidden";

        // masukan gender tim sudah benar
        return false;
    }
}

// validasi bidang 'email tim'
function checkEmailTim() {
    // format penulisan email
    var RegExpEmail = /(?<displaName>([a-z]|[A-Z]{1,}|[0-9]{1,}){2,})[\@](?<domainName>([a-z]|[A-Z]|[0-9]){2,})(?<domain>[\.]([a-z]|[A-Z]){2,})/g;

    // data masukan
    var valueEmail = document.Formulir_Pendaftaran.emailTim.value;

    // penyeleksian kondisi apakah e-mail sudah diisi atau belum
    if (valueEmail == "") {
        // tampilkan peringatan pertama
        document.getElementById("emailTimKosong").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("formatEmailSalah").style.visibility = "hidden";

        // pengguna fokus ke bidang isian e-mail tim
        document.Formulir_Pendaftaran.emailTim.focus();
        return true;
    } else {
        // sembunyikan peringatan pertama 
        document.getElementById("emailTimKosong").style.visibility = "hidden";

        // mengecek format penulisan email apakah valid atau tidak 
        if (!RegExpEmail.test(valueEmail)) {
            // tampilkan peringatan kedua
            document.getElementById("formatEmailSalah").style.visibility = "visible";

            // sembunyikan peringatan pertama
            document.getElementById("emailTimKosong").style.visibility = "hidden";

            // pengguna fokus ke bidang isian e-mail
            document.Formulir_Pendaftaran.emailTim.focus();
            return true;
        } else {
            // tutup semua peringatan jika format penulisan email sudah benar
            document.getElementById("formatEmailSalah").style.visibility = "hidden";
            document.getElementById("emailTimKosong").style.visibility = "hidden";
        }
        // masukan e-mail sudah benar
        return false;
    }
}

// validasi bidang 'nomor telepon instansi/universitas tim'
function checkNomorTeleponTim() {
    // data masukkan
    var valueNoTelp = document.Formulir_Pendaftaran.noTeleponTim.value;

    // regular expression untuk mencari huruf besar atau kecil pada masukkan nomor telepon tim
    RegExpcekHuruf = /[a-zA-Z]/g;

    // penyeleksian kondisi apakah sudah diisi atau belum
    if (valueNoTelp == "") {
        // tampilkan peringatan pertama
        document.getElementById("noTeleponTimKosong").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("noTeleponTimAdaHuruf").style.visibility = "hidden";

        // sembunyikan peringatan ketiga
        document.getElementById("noTeleponTimTidakValid").style.visibility = "hidden";

        // pengguna fokus ke bidang isian nomor telepon
        document.Formulir_Pendaftaran.noTeleponTim.focus();
        return true;
    } else {
        // sembunyikan peringatan pertama 
        document.getElementById("noTeleponTimKosong").style.visibility = "hidden";

        // penyeleksian kondisi mengecek banyak angka dari nomor telepon
        if (valueNoTelp.length <= 6 || valueNoTelp.length >= 15) {
            // tampilkan peringatan kedua 
            document.getElementById("noTeleponTimTidakValid").style.visibility = "visible";

            // sembunyikan peringatan pertama
            document.getElementById("noTeleponTimKosong").style.visibility = "hidden";

            // sembunyikan peringatan ketiga
            document.getElementById("noTeleponTimAdaHuruf").style.visibility = "hidden";

            // pengguna fokus ke bidang isian nomor telepon
            document.Formulir_Pendaftaran.noTeleponTim.focus();
            return true;
        } else {
            // sembunyikan peringatan kedua 
            document.getElementById("noTeleponTimTidakValid").style.visibility = "hidden";

            // perulangan for untuk mengecek setiap karakter dengan regular expression
            for (let index = 0; index < valueNoTelp.length; index++) {
                if (RegExpcekHuruf.test(valueNoTelp[index])) {
                    // tampilkan peringatan ketiga 
                    document.getElementById("noTeleponTimAdaHuruf").style.visibility = "visible";

                    // sembunyikan peringatan pertama
                    document.getElementById("noTeleponTimKosong").style.visibility = "hidden";

                    // sembunyikan peringatan kedua
                    document.getElementById("noTeleponTimTidakValid").style.visibility = "hidden";

                    // pengguna fokus ke bidang isian nomor telepon
                    document.Formulir_Pendaftaran.noTeleponTim.focus();
                    return true;
                } else {
                    // sembunyikan semua peringatan 
                    document.getElementById("noTeleponTimAdaHuruf").style.visibility = "hidden";
                    document.getElementById("noTeleponTimKosong").style.visibility = "hidden";
                    document.getElementById("noTeleponTimTidakValid").style.visibility = "hidden";
                }
            }
        }
        // masukkan nomor telepon sudah benar
        return false;
    }
}

// validasi bidang masukkan tanggal pendaftaran
function checkTanggalPendaftaran() {
    // format penulisan tanggal pada tahun 2021
    var RegExpTanggal = /^(?<hari>0?[1-9]|[12][0-9]|3[01])[/](?<bulan>0?[1-9]|[1][012])[/](?<tahun2021>2021)/g;

    // data masukkan
    var valueTanggal = document.Formulir_Pendaftaran.tanggalDaftarTim.value;

    // penyeleksian kondisi apakah sudah diisi atau belum
    if (valueTanggal == "") {
        // tampilkan peringatan pertama
        document.getElementById("tanggalDaftarTimKosong").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("tanggalDaftarTimSalah").style.visibility = "hidden";

        // pengguna fokus ke bidang isian tanggal
        document.Formulir_Pendaftaran.tanggalDaftarTim.focus();
        return true;
    } else {
        // sembunyikan peringatan pertama 
        document.getElementById("tanggalDaftarTimKosong").style.visibility = "hidden";

        // penyeleksian kondisi penulisan format tanggal
        if (!RegExpTanggal.test(valueTanggal)) {
            // tampilkan peringatan kedua
            document.getElementById("tanggalDaftarTimSalah").style.visibility = "visible";

            // sembunyikan peringatan pertama
            document.getElementById("tanggalDaftarTimKosong").style.visibility = "hidden";

            // pengguna fokus ke bidang isian tanggal
            document.Formulir_Pendaftaran.tanggalDaftarTim.focus();
            return true;
        } else {
            // sembunyikan semua peringatan
            document.getElementById("tanggalDaftarTimSalah").style.visibility = "hidden";
            document.getElementById("tanggalDaftarTimKosong").style.visibility = "hidden";
        }
        // masukan tanggal sudah benar
        return false;
    }
}

// validasi bidang alamat instasi/universitas tim
function checkAlamatInstansi() {
    // data masukkan
    var masukanDataAlamat = document.Formulir_Pendaftaran.alamatInstansiTim.value;

    // penyeleksian kondisi apakah sudah diisi atau belum
    if (masukanDataAlamat =="") {
        // tampilkan peringatan pertama
        document.getElementById("alamatInstansiTimKosong").style.visibility = "visible";

        // tampilkan peringatan kedua
        document.getElementById("alamatInstansiTimSalah").style.visibility = "hidden";

        // pengguna fokus ke bidang isian alamat universitas atau instansi
        document.Formulir_Pendaftaran.alamatInstansiTim.focus();
        return true;
    } else {
        // sembunyikan peringatan pertama 
        document.getElementById("alamatInstansiTimKosong").style.visibility = "hidden";

        // peyeleksian kondisi mengecek jumlah huruf
        if (masukanDataAlamat.length <= 7) {
            // tampilkan peringatan kedua
            document.getElementById("alamatInstansiTimSalah").style.visibility = "visible";

            // sembunyikan peringatan pertama 
            document.getElementById("alamatInstansiTimKosong").style.visibility = "hidden";

            // pengguna fokus ke bidang isian alamat 
            document.Formulir_Pendaftaran.alamatInstansiTim.focus();
            return true;
        } else {
            // sembunyikan semua peringatan
            document.getElementById("alamatInstansiTimSalah").style.visibility = "hidden";
            document.getElementById("alamatInstansiTimKosong").style.visibility = "hidden";
        }
        // jika masukan alamat sudah benar
        return false;
    }
}

// validasi bidang persetujuan terhadap syarat dan ketentuan
function checkboxSyaratKetentuan() {
    // data masukan
    var checkBoxValue = document.getElementById("aturanDanKetentuan").checked;

    // penyeleksian kondisi apakah sudah diisi atau belum
    if (!checkBoxValue) {
        // tampilkan peringatan pertama
        document.getElementById("checkBoxKetentuanKosong").style.visibility = "visible";

        // pengguna fokus ke bidang isian persetujuan syarat dan ketentuan
        document.Formulir_Pendaftaran.aturanDanKetentuan.focus();
        return true;
    } else {
        // sembunyikan peringatan pertama
        document.getElementById("checkBoxKetentuanKosong").style.visibility = "hidden";

        // tanda centang sudah terisi
        return false;
    }
}

// pemberitahuan akhir jika user telah yakin bahwa data yang dimasukkan adalah benar
function pembertahuanValidasi() {
    // pemberitahuan data yang terkirim tidak bisa diubah
    alert("PERINGATAN!\nData yang telah terkirim tidak bisa diubah!");

    // tanya kepada pengguna apakah data yang telah diisi sudah benar
    var checkDataValid = confirm("Apakah Anda yakin data Anda sudah benar?");

    // penyeleksian kondisi apakah data terikirim atau tidak
    if (checkDataValid) {
        alert("Data Anda berhasil terkirim!");
        return true;
    } else {
        return false;
    }
}

// fungsi validasi semua bidang pada formulir
// validasi formulir saat data di submit
function validasiFormulirPendaftaran() {
    // nama tim
    if (checkNameTim()) {
        return false;
    }

    // gender tim         
    else if (checkGenderTim()) {
        return false;
    } 
        
    // nomor telepon tim
    else if (checkNomorTeleponTim()) {
        return false;
    }

    // alamat email tim
    else if (checkEmailTim()) {
        return false;
    }

    // tanggal mendaftar    
    else if (checkTanggalPendaftaran()) {
        return false;
    }

    // alamat universitas atau instansi
    else if (checkAlamatInstansi()) {
        return false;
    }

    // checkbox pernyataan setuju terhadapat syarat dan ketentuan
    else if (checkboxSyaratKetentuan()) {
        return false;
    }

    // jika semua data sudah benar
    else {
        // cek data pengguna
        if (pembertahuanValidasi()) {
           return true; 
        } else {
            return false;       
        }
    }
}