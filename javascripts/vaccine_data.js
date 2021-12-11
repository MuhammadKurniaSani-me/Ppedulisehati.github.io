const vaccine_datas = [
    {
        name: "Sinovac",
        province: "Sumatera",
        city: "Aceh",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Aceh",
    },
    {
        name: "Astrazeneca",
        province: "Sumatera",
        city: "Medan",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Medan",
    },
    {
        name: "Sinovac",
        province: "Sumatera",
        city: "Padang",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Padang",
    },
    {
        name: "Sinovac",
        province: "Sumatera",
        city: "Pekanbaru",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Pekanbaru",
    },
    {
        name: "Sinovac",
        province: "Sumatera",
        city: "Jambi",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Jambi",
    },
    {
        name: "Astrazeneca",
        province: "Sumatera",
        city: "Palembang",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Palembang",
    },
    {
        name: "Sinovac",
        province: "Sumatera",
        city: "Bengkulu",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Bengkulu",
    },
    {
        name: "Sinovac",
        province: "Sumatera",
        city: "Bandar Lampung",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Bandar Lampung",
    },
    {
        name: "Moderna",
        province: "Sumatera",
        city: "Pangkal Pinang",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Pangkal Pinang",
    },
    {
        name: "Sinovac",
        province: "Sumatera",
        city: "Tanjung Pinang",
        date: "1 Januari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Tanjung Pinang",
    },
    {
        name: "Moderna",
        province: "Jawa",
        city: "Jakarta",
        date: "10 Februari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Jakarta",
    },
    {
        name: "Pfizer",
        province: "Jawa",
        city: "Bandung",
        date: "10 Februari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Bandung",
    },
    {
        name: "Astrazeneca",
        province: "Jawa",
        city: "Semarang",
        date: "10 Februari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Semarang",
    },
    {
        name: "Astrazeneca",
        province: "Jawa",
        city: "Yogyakarta",
        date: "10 Februari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Yogyakarta",
    },
    {
        name: "Pfizer",
        province: "Jawa",
        city: "Surabaya",
        date: "10 Februari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Surabaya",
    },
    {
        name: "Sinovac",
        province: "Jawa",
        city: "Serang",
        date: "10 Februari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Serang",
    },
    {
        name: "Moderna",
        province: "Bali",
        city: "Denpasar",
        date: "15 Februari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Denpasar",
    },
    {
        name: "Sinovac",
        province: "Nusa Tenggara",
        city: "Mataram",
        date: "15 Februari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Mataram",
    },
    {
        name: "Sinovac",
        province: "Nusa Tenggara",
        city: "Kupang",
        date: "15 Februari 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Kupang",
    },
    {
        name: "Sinovac",
        province: "Kalimantan",
        city: "Palangkaraya",
        date: "1 Maret 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Palangkaraya",
    },
    {
        name: "Astrazeneca",
        province: "Kalimantan",
        city: "Samarinda",
        date: "1 Maret 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Samarinda",
    },
    {
        name: "Sinovac",
        province: "Kalimantan",
        city: "Pontianak",
        date: "1 Maret 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Pontianak",
    },
    {
        name: "Sinovac",
        province: "Kalimantan",
        city: "Banjarmasin",
        date: "1 Maret 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Banjarmasin",
    },
    {
        name: "Sinovac",
        province: "Kalimantan",
        city: "Tanjung Selor",
        date: "1 Maret 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Tanjung Selor",
    },
    {
        name: "Astrazeneca",
        province: "Sulawesi",
        city: "Manado",
        date: "25 April 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Manado",
    },
    {
        name: "Sinovac",
        province: "Sulawesi",
        city: "Palu",
        date: "25 April 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Palu",
    },
    {
        name: "Astrazeneca",
        province: "Sulawesi",
        city: "Makassar",
        date: "25 April 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Makassar",
    },
    {
        name: "Sinovac",
        province: "Sulawesi",
        city: "Kendari",
        date: "25 April 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Kendari",
    },
    {
        name: "Moderna",
        province: "Sulawesi",
        city: "Gorontalo",
        date: "25 April 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Gorontalo",
    },
    {
        name: "Sinovac",
        province: "Sulawesi",
        city: "Mamuju",
        date: "25 April 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Mamuju",
    },
    {
        name: "Pfizer",
        province: "Maluku",
        city: "Ambon",
        date: "1 Mei 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Ambon",
    },
    {
        name: "Pfizer",
        province: "Maluku",
        city: "Sofifi",
        date: "1 Mei 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Sofifi",
    },
    {
        name: "Pfizer",
        province: "Papua",
        city: "Jayapura",
        date: "1 Mei 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Jayapura",
    },
    {
        name: "Pfizer",
        province: "Papua",
        city: "Manokwari",
        date: "1 Mei 2021",
        time: "08.00 Pagi",
        place: "RSUD Kota Manokwari",
    },
];

const array_data = document.querySelector(".data-box");

for (let index = 0; index < vaccine_datas.length; index++) {

    let name = vaccine_datas[index]["name"];
    let province = vaccine_datas[index]["province"];
    let city = vaccine_datas[index]["city"];
    let date = vaccine_datas[index]["date"];
    let time = vaccine_datas[index]["time"];
    let place = vaccine_datas[index]["place"];
    
    document.getElementById("name").innerText = name;
    let text_provinsi = province;
    let text_kota = city;
    let text_tanggal = date;
    let text_waktu = time;
    let text_lokasi = place;
    
    document.getElementById("province").innerText = `Wilayah: ${text_provinsi}`;
    document.getElementById("city").innerText = `${text_kota}`;
    document.getElementById("date").innerText = `Tanggal: ${text_tanggal}`;
    document.getElementById("time").innerText = `Jam: ${text_waktu}`;
    document.getElementById("place").innerText = `Lokasi: ${text_lokasi}`;

    let clone = array_data.cloneNode(true);
    document.getElementById("list_datas").appendChild(clone);

}

function search_vaccine_name() {
    // short input
    let data_type = document.getElementById("shorter").value;

    // Declare variables
    var input, filter, data_names, item, all_data;
    input = document.getElementById('search');
    filter = input.value.toLowerCase();
    data_names = document.querySelectorAll(`#${data_type}`);
    all_data = document.querySelectorAll(".all");
    item = document.querySelectorAll('.data-box');

    // var c = document.querySelectorAll(".all");
    // console.log(c[139].textContent);

    

    for (let index = 0; index < data_names.length; index++) {
        var text = data_names[index].innerHTML.toLowerCase();
        if (text.indexOf(filter) > -1) {
            item[index].style.display = "";
            document.querySelector(".empty").style.display = "none";
        } else {
            item[index].style.display = "none";
            document.querySelector(".empty").style.display = "flex";
        } 
    }
}

function figure() {
    const container = document.querySelectorAll(".data-vaccine");
    container.forEach(box => {
        let vaccine_name = box.querySelector("#name").innerHTML.toLowerCase();
        box.querySelector(".vaccine-images").src = `../images/icons/${vaccine_name}.svg`;
    })
}

// run function
figure();
search_vaccine_name();

