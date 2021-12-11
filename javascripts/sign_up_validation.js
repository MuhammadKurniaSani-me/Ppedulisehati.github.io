// add user profile

// validasi bidang 'nama tim'
function checkName() {
    // data masukan 
    var valueName = document.form_sign_in.username.value;

    // penyeleksian kondisi apakah nama tim sudah diisi atau belum
    if (valueName =="") {
        // tampilkan peringatan pertama
        document.getElementById("emptyUsername").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("invalidUsername").style.visibility = "hidden";

        // fokus ke bidang isian nama tim
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

            // fokus ke bidang isian nama tim
            document.form_sign_in.username.focus();
            return true;
        } else {
            // sembunyikan semua peringatan
            document.getElementById("invalidUsername").style.visibility = "hidden";
            document.getElementById("emptyUsername").style.visibility = "hidden";
        }
        // masukan nama tim sudah benar
        return false;
    }
}

// validasi bidang 'email tim'
function checkEmail() {
    // format penulisan email
    const RegExpEmail = /(?<displaName>([a-z]|[A-Z]{1,}|[0-9]{1,}){2,})[\@](?<domainName>([a-z]|[A-Z]|[0-9]){2,})(?<domain>[\.]([a-z]|[A-Z]){2,})/g;

    // data masukan
    var valueEmail = document.form_sign_in.email.value;

    // penyeleksian kondisi apakah e-mail sudah diisi atau belum
    if (valueEmail == "") {
        // tampilkan peringatan pertama
        document.getElementById("emptyEmail").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("invalidEmail").style.visibility = "hidden";

        // pengguna fokus ke bidang isian e-mail tim
        document.form_sign_in.email.focus();
        return true;
    } else {
        // sembunyikan peringatan pertama 
        document.getElementById("emptyEmail").style.visibility = "hidden";

        // mengecek format penulisan email apakah valid atau tidak 
        if (!RegExpEmail.test(valueEmail)) {
            // tampilkan peringatan kedua
            document.getElementById("invalidEmail").style.visibility = "visible";

            // sembunyikan peringatan pertama
            document.getElementById("emptyEmail").style.visibility = "hidden";

            // pengguna fokus ke bidang isian e-mail
            document.form_sign_in.email.focus();
            return true;
        } else {
            // tutup semua peringatan jika format penulisan email sudah benar
            document.getElementById("invalidEmail").style.visibility = "hidden";
            document.getElementById("emptyEmail").style.visibility = "hidden";
        }
        // masukan e-mail sudah benar
        return false;
    }
}

function checkPassword() {
    // data masukan 
    var valuePassword = document.form_sign_in.password.value;

    // penyeleksian kondisi apakah nama tim sudah diisi atau belum
    if (valuePassword =="") {
        // tampilkan peringatan pertama
        document.getElementById("emptyPassword").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("invalidPassword").style.visibility = "hidden";

        // fokus ke bidang isian nama tim
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

            // fokus ke bidang isian nama tim
            document.form_sign_in.password.focus();
            return true;
        } else {
            // sembunyikan semua peringatan
            document.getElementById("invalidPassword").style.visibility = "hidden";
            document.getElementById("emptyPassword").style.visibility = "hidden";
        }
        // masukan nama tim sudah benar
        return false;
    }
}

function checkConfirmPassword() {
    // data masukan 
    var valuePassword = document.form_sign_in.confirmPassword.value;

    // penyeleksian kondisi apakah nama tim sudah diisi atau belum
    if (valuePassword =="") {
        // tampilkan peringatan pertama
        document.getElementById("emptyConfirmPassword").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("invalidConfirmPassword").style.visibility = "hidden";

        // fokus ke bidang isian nama tim
        document.form_sign_in.confirmPassword.focus();
        return true;
    }else { 
        // sembunyikan peringatan pertama
        document.getElementById("emptyPassword").style.visibility = "hidden";

        // penyeleksian kondisi mengecek jumlah huruf
        if (valuePassword.length <= 6) {
            // tampilkan peringatan kedua
            document.getElementById("invalidConfirmPassword").style.visibility = "visible";

            // sembunyikan peringatan pertama
            document.getElementById("emptyConfirmPassword").style.visibility = "hidden";

            // fokus ke bidang isian nama tim
            document.form_sign_in.confirmPassword.focus();
            return true;
        } else {
            // sembunyikan semua peringatan
            document.getElementById("invalidConfirmPassword").style.visibility = "hidden";
            document.getElementById("emptyConfirmPassword").style.visibility = "hidden";
        }
        // masukan nama tim sudah benar
        return false;
    }
}

function checkPasswordValues() {
    const valuePassword = document.form_sign_in.password.value;
    const valueConfirmPassword = document.form_sign_in.confirmPassword.value;

    console.log(valuePassword);
    console.log(valueConfirmPassword);

    if (valuePassword == valueConfirmPassword) {
        return true;
    } else {
        console.log("ssssssss")
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
function validasiFormulirDaftarAkun() {
    // nama tim
    if (checkName()) {
        return false;
    }

    // alamat email tim
    else if (checkEmail()) {
        return false;
    }

    else if (checkPassword()) {
        return false;
    }
    
    else if (checkConfirmPassword()) {
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


