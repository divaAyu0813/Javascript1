const daftarKaryawan = [
    {
        nama : "Devyn Ramirez",
        masaKerja : "10",
        nomorInduk : "10",
        gaji : "Rp 7000.000",
    },
    {
        nama : "Harmony Duncan",
        masaKerja : "5",
        nomorInduk : "9",
        gaji : "Rp 4000.000",
    },
    {
        nama : "Clarissa Burgess",
        masaKerja : "8",
        nomorInduk : "8",
        gaji : "Rp 7000.000",
    },
    {
        nama : "Reilly Blanchard",
        masaKerja : "7",
        nomorInduk : "7",
        gaji : "Rp 7000.000",
    },
    {
        nama : "Zion Brooks",
        masaKerja : "4",
        nomorInduk : "6",
        gaji : "Rp 4000.000",
    },
    {
        nama : "Jovanny Mays",
        masaKerja : "10",
        nomorInduk : "5",
        gaji : "Rp 7000.000",
    },
    {
        nama : "Cindy Chase",
        masaKerja : "9",
        nomorInduk : "4",
        gaji : "Rp 7000.000",
    },
    {
        nama : "Kristin Mcdaniel",
        masaKerja : "8",
        nomorInduk : "3",
        gaji : "Rp 7000.000",
    },
    {
        nama : "Macey Sanford",
        masaKerja : "7",
        nomorInduk : "2",
        gaji : "Rp 7000.000",
    },
    {
        nama : "BagasAlfredo Faulkner",
        masaKerja : "10",
        nomorInduk : "1",
        gaji : "Rp 7000.000",
    },
]
let mode = "tambah"

const tampilkanKaryawan = () => {
    const tblKaryawan = document.getElementById(`tblKaryawan`)
    tblKaryawan.innerHTML = "<tr><th>No</th><th>Nama</th><th>Masa Kerja</th><th>Nomor Induk</th><th>Gaji</th><th>Edit</th><th>Delete</th></tr>"

    for (let idx in daftarKaryawan) {
     console.log(`${parseInt(idx) +1}. ${daftarKaryawan[idx].nama}. masa Kerja ${daftarKaryawan[idx].masaKerja}. nomor induknya adalah ${daftarKaryawan[idx].nomorInduk}. gaji nya ${daftarKaryawan[idx].gaji}`);

     tblKaryawan.innerHTML += `<tr><td>${parseInt(idx) +1}</td><td>${daftarKaryawan[idx].nama}</td><td>${daftarKaryawan[idx].masaKerja}</td><td>${daftarKaryawan[idx].nomorInduk}</td><td>${daftarKaryawan[idx].gaji}</td><td><button class="btn btn-warning"  onclick="editKaryawan('${daftarKaryawan[idx].nama}')">Edit</button></td><td><button class="btn btn-danger" onclick="hapusKaryawan('${daftarKaryawan[idx].nama}')">Delete</button></td></tr>`

    }
    }
    const tambahKaryawan = () => {
        const nama = document.getElementById('txt-Nama').value;
        const masaKerja = document.getElementById('txt-masaKerja').value;
        const nomorInduk = document.getElementById('txt-nomorInduk').value;
        const gaji = document.getElementById('txt-Gaji').value;
    
        const KaryawanBaru = {
            nama : nama,
            masaKerja : masaKerja,
            nomorInduk : nomorInduk,
            gaji : gaji,
        }

        if (mode == "tambah") { 
            daftarKaryawan.push(KaryawanBaru)     
           }  else {
           daftarKaryawan[mode] = KaryawanBaru
           }
       
           document.getElementById('txt-Nama').value = ""
           document.getElementById('txt-masaKerja').value = ""
           document.getElementById('txt-nomorInduk').value = ""
           document.getElementById('txt-Gaji').value = ""
         
          tampilkanKaryawan()
     }
     const cariKaryawan = (nama) => {
        for (let i = 0; i < daftarKaryawan.length; i++) {
            if (daftarKaryawan[i].nama == nama) {
                return i
     }
        }
    }

     const hapusKaryawan = (target) =>  {
       const indexDihapus = cariKaryawan(target)
       if (indexDihapus !== -1) {
        daftarKaryawan.splice(indexDihapus, 1)
       }
        tampilkanKaryawan();
     }
    
     const editKaryawan = (target) => {
      const indexEdit = cariKaryawan(target)
      const karyawanDiedit = daftarKaryawan[indexEdit];

     document.getElementById('txt-Nama').value = karyawanDiedit.nama
     document.getElementById('txt-masaKerja').value = karyawanDiedit.masaKerja
     document.getElementById('txt-nomorInduk').value = karyawanDiedit.nomorInduk
     document.getElementById('txt-Gaji').value = karyawanDiedit.gaji

     mode = indexEdit
    
        //const namaBaru = prompt('Masukkan nama')
        //const masaKerjaBaru = prompt('Masukkan masaKerja')
        //const nomorIndukBaru = prompt('Masukkan nomorInduk')
        //const gajiBaru = prompt('Masukkan gaji')

        //daftarKaryawan[indexEdit] = {
        //nama : namaBaru,
        //masaKerja : masaKerjaBaru,
        //nomorInduk : nomorIndukBaru,
        //gaji : gajiBaru,
       // }
     }
     const batalKaryawan= (target) => {
        document.getElementById('txt-Nama').value = ""
        document.getElementById('txt-masaKerja').value = ""
        document.getElementById('txt-nomorInduk').value = ""
        document.getElementById('txt-Gaji').value = ""
        mode = 'tambah'
     }