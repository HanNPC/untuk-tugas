var password = prompt("Nama Mahasiswa:");

if(password == "Mamad"){
    document.write("<h2>Mamad</h2>");
} else {
    document.write("<h2>Nama Tidak Valid</h2>");
}

document.write("<p></p>");

       var nilai = prompt("Inputkan nilai akhir:");
        var grade = "";

        if(nilai >= 90) grade = "Lulus, Nilai: 90"
        else if(nilai >= 80) grade = "Lulus, Nilai: 80"
        else if(nilai >= 70) grade = "Lulus, Nilai: 70"
        else if(nilai >= 60) grade = "Tidak Lulus, Nilai: 60"
        else if(nilai >= 50) grade = "Tidak Lulus, Nilai: 50"
        else if(nilai >= 40) grade = "Tidak Lulus, Nilai: 40"
        else if(nilai >= 30) grade = "Tidak Lulus, Nilai: 30"
        else grade = "Tidak Lulus";

        document.write(`<p>Selamat anda: ${grade}</p>`);