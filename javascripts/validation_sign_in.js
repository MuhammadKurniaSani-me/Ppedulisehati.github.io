function check_username() {
    // data masukan 
    var value_username = document.form_sign_in.username.value;

    // penyeleksian kondisi apakah nama tim sudah diisi atau belum
    if (value_username == "") {
        // tampilkan peringatan pertama
        document.getElementById("empty-username").style.visibility = "visible";

        // sembunyikan peringatan kedua
        document.getElementById("invalid-username").style.visibility = "hidden";

        // fokus ke bidang isian nama tim
        document.form_sign_in.username.focus();
        return true;
    } else {
        // sembunyikan peringatan pertama
        document.getElementById("empty-username").style.visibility = "hidden";

        // penyeleksian kondisi mengecek jumlah huruf
        if (value_username.length <= 8) {
            // tampilkan peringatan kedua
            document.getElementById("invalid-username").style.visibility = "visible";

            // sembunyikan peringatan pertama
            document.getElementById("empty-username").style.visibility = "hidden";

            // fokus ke bidang isian nama tim
            document.form_sign_in.username.focus();
            return true;
        } else {
            // sembunyikan semua peringatan
            document.getElementById("invalid-username").style.visibility = "hidden";
            document.getElementById("empty-username").style.visibility = "hidden";
        }
        // masukan nama tim sudah benar
        return false;
    }
}

function submit() {
    const submit_button = document.getElementById("create-account");

    submit_button.addEventListener("click", () => {
        if (check_username()) {
            return true;
        } 
    });
}

// run functions
if (submit()) {
    console.log("sala");
}