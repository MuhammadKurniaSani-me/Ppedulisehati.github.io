// add user profile

// validasi bidang 'nama'
function checkName() {
    // data masukan 
    var valueName = document.form_sign_in.username.value;

    // penyeleksian kondisi apakah nama sudah diisi atau belum
    if (valueName =="") {
        // tampilkan peringatan pertama
        document.getElementById("emptyUsername").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("invalidUsername").style.visibility = "hidden";

        // fokus ke bidang isian nama
        document.form_sign_in.username.focus();
        return true;
    }else { 
        // sembunyikan peringatan pertama
        document.getElementById("emptyUsername").style.visibility = "hidden";

        // penyeleksian kondisi mengecek jumlah huruf
        if (valueName.length <= 6) {
            // tampilkan peringatan kedua
            document.getElementById("invalidUsername").style.visibility = "visible";

            // sembunyikan peringatan pertama
            document.getElementById("emptyUsername").style.visibility = "hidden";

            // fokus ke bidang isian nama
            document.form_sign_in.username.focus();
            return true;
        } else {
            // sembunyikan semua peringatan
            document.getElementById("invalidUsername").style.visibility = "hidden";
            document.getElementById("emptyUsername").style.visibility = "hidden";
        }
        // masukan nama sudah benar
        return false;
    }
}

function checkPassword() {
    // data masukan 
    var valuePassword = document.form_sign_in.password.value;

    // penyeleksian kondisi apakah nama sudah diisi atau belum
    if (valuePassword =="") {
        // tampilkan peringatan pertama
        document.getElementById("emptyPassword").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("invalidPassword").style.visibility = "hidden";

        // fokus ke bidang isian nama
        document.form_sign_in.password.focus();
        return true;
    }else { 
        // sembunyikan peringatan pertama
        document.getElementById("emptyPassword").style.visibility = "hidden";

        // penyeleksian kondisi mengecek jumlah huruf
        if (valuePassword.length <= 6) {
            // tampilkan peringatan kedua
            document.getElementById("invalidPassword").style.visibility = "visible";

            // sembunyikan peringatan pertama
            document.getElementById("emptyPassword").style.visibility = "hidden";

            // fokus ke bidang isian nama
            document.form_sign_in.password.focus();
            return true;
        } else {
            // sembunyikan semua peringatan
            document.getElementById("invalidPassword").style.visibility = "hidden";
            document.getElementById("emptyPassword").style.visibility = "hidden";
        }
        // masukan nama sudah benar
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
function validasiFormulirMasukAkun() {
    // nama
    if (checkName()) {
        return false;
    }

    // alamat email
    else if (checkPassword()) {
        return false;
    }

    // jika semua data sudah benar
    else {
        // checkPasswordValues();
        // cek data pengguna
        if (pembertahuanValidasi()) {
            return true; 
        } else {
            return false;       
        }
    }
}


