alert('Youkoso!');

/* Pengulangan sederhana dengan pop up
    var ulang = true; 

    while(ulang === true){
        var nama = prompt('O Nama e wa?');
        alert('Watahshi no nama e wa' + ' ' + nama); 

        ulang = confirm('lagi?');
    } 
        alert('Terima Kasih telah berkunjung'); 
*/


/* Pengkondisian dengan confirm
    var coba = confirm('yakin?');
    if(coba == true){
        alert('ya saya yakin');
    }else{
        alert('Daijobu');
    } 
*/


/* Pengulangan sederhana
    for(var x = 1; x<=5; x++){
        alert('hello world' + ' '+ x);
    } 
*/

/* Pengkondisian sederhana
    var angka = prompt('masukkan angka');
    if(angka % 2 === 0){
        alert(angka+' '+'adalah bilangan genap');
    }else{
        alert(angka+' '+'adalah bilangan ganjil');
    } 
*/

/* contoh pengkonsian dan pengulangna sederhana
    var ulang = true;
    while(ulang){
        var angka = prompt('masukkan angka');
        if(angka % 2 === 0){
            alert(angka+' '+'adalah bilangan genap');
        }else{
            alert(angka+' '+'adalah bilangan ganjil');
        }

    ulang = confirm('coba lagi?');
    }
*/

/*Latihan Angkot menggunakan looping
    var noAngkot = 1;
    var jumlahAngkot = 15;
    var angkotBeroprasi = 10;
    while(noAngkot<=angkotBeroprasi){
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++; 
    }
    for(noAngkot = angkotBeroprasi + 1; noAngkot<=jumlahAngkot; noAngkot++){
        console.log('Angkot No. ' + noAngkot + ' tidak sedang beroperasi')
} */


/*
    var angka = prompt('Masukkan angka');
    if(angka % 2 == 0){
        alert('ini adalah bilangan genap');
    }else if(angka % 2 == 1){
        alert('ini adalah bilangan ganjil');
    }else{
        alert('yang anda masukkan bukan angka');
    }
*/

/* Latihan angkot 2
    var jumlahAngkot =  10;
    var angkotBeroprasi = 6;

    for(noAngkot=1; noAngkot<=jumlahAngkot; noAngkot++){
        if(noAngkot<=angkotBeroprasi && noAngkot!= 5){
            console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
        }else if(noAngkot == 5 || noAngkot == 8 || noAngkot == 10){
            console.log('Angkot No. ' + noAngkot + ' sedang lembur')
        }else{
            console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik')
        }
    } 
*/

/* Latihan Switch 1

    var angka = parseInt(prompt('Masukkan angka'));
    switch(angka){
        case 1 :
            alert('anda memasukkan nilai 1');
            break;
        case 2 :
            alert('anda memasukkan nilai 2');
            break;
        default :
            alert('anda memasukkan angka setelah angka 2');
            break;

    }
*/

/* Latihan Switch 2
var buah = prompt('Pilih Buah \n 1. mangga \n 2. durian \n 3. lemon');
switch(buah){
    case "mangga":
        alert('Mangga buah sehat, cocok untuk olahan sandwitch');
        break;
    case "durian":
        alert('Durian sangat enak, namun sebaiknya jangan terlalu berlebihan mengkonsumsinya');
        break;
    case "lemon":
        alert('Lemon sangat kaya vitamin C');
        break;
    default:
        alert('Buah yang anda masukkan tidak ada dalam pilihan');
        break;
}
*/

// Latihan pengkondisian dan pengulangan bersarang
/* mencetak  bintang 7 baris setiap baris 10 bintang
    var s ='';
    for(var i = 1; i<=7; i++){
        
        for(var x = 1; x<=10; x++){
            s += '*';
        }
        s += '\n';
    }
    console.log(s);
*/

/* setengah segitiga sisi kanan
    var s = '';
    for(var i = 5; i>=1; i--){
        for(var x = 1; x<=i; x++){
            s += '*';
        }
        s += '\n';
    }
    console.log(s);
*/

/* segitiga terbalik sisi kiri
    var s = '';
    for(var i =1; i<=5; i++){

        for(var j = 1; j<=5; j++){
            if(j >= i){
                s += '*';
            } else {
                s += ' ';
            }          
        } s += '\n';
    }
    console.log(s);
*/

/* setengah segitiga sisi kiri
    var s = '';
    for(var i = 1; i<= 5; i++){
        for(var j=5; j>=i; j--){
            s += ' ';
        }
        for(var k=1; k<=i; k++){
            s += '*';
        }
        s += '\n';
    }
    console.log(s);
*/

/* segitiga setengah belah ketupat sisi kanan
    var s = '';
    for(var i = 1; i<= 5; i++){
        for(var j=1; j<=i; j++){
            s += '*';
        }    s += '\n';
    } 
    for(var k=5; k>= 1; k--){
        for(var l=1; l<=k; l++){
            s +='*';
        } s += '\n'
    }
    console.log(s);
*/

/* segitiga 
    var s = '';
    for(var i = 1; i<= 5; i++){
        for(var j=5; j>i; j--){
            s += ' ';
        }
        for(var k=1; k<=i; k++){
            s += '*';
        }
        for(var l=1; l<i; l++){
            s += '*';
        }
        s += '\n';
    }
console.log(s);
*/


/* 
Latihan Game Suwit Jawa
ALgoritma 
1. menangkap pilihan player
2. menangkap pilihan komputer
3. membangkitkan bilangan random
4. menentukan rules
5. tampilkan hasilnya

    var ulang = true;
    while(ulang){
        var player = prompt('Pilih : gajah, semut, orang');
        var komputer = Math.random();
        if(komputer < 0.34){
            komputer = 'gajah';
        } else if( komputer > 0.34 && komputer < 0.67 ){
            komputer = 'semut';
        } else{
            komputer = 'orang';
        }

        var hasil = '';
        if(player == komputer){
            hasil = 'SERI';
        } else if(player == 'gajah'){
            hasil = (komputer == 'orang') ? 'MENANG' : 'KALAH';
        } else if(player == 'semut'){
            hasil = (komputer == 'gajah') ? 'MENANG' : 'KALAH';
        } else if(player == 'orang'){
            hasil = (komputer == 'semut') ? 'MENANG' : 'KALAH';
        } else{
            hasil = 'pilihan yang anda masukkan salah';
        }
        alert(player + ' melawan ' + komputer + ' = ' + hasil);

        ulang = confirm('coba lagi?');
    }
    alert('Terima Kasih Telah Bermain');
*/

/* Game Tebak angka
    var game = alert('Tebak angka 1-10 \nKamu memiliki 3 kesempatan');
    var ulang = true;
    while(ulang){
        var kesempatan = 3;
        var komputer = Math.floor(Math.random()*10)+1;
        for(kesempatan; kesempatan >= 0; kesempatan--){
            var player = prompt('Masukkan angka tebakan');
            if(player == komputer){
                alert('benar! \nangka yang dicari adalah ' + komputer);
                break;
            } else if(player < komputer){
                if(kesempatan == 0){
                    alert('angka terlalu rendah \nkesempatan telah habis');
                    alert('gagal! \nangka yang dicari adalah ' + komputer)
                }else{
                    alert('angka terlalu rendah \nmasih ada '+ kesempatan +' kesempatan');
                }
            } else if(player > komputer){
                if(kesempatan == 0){
                    alert('angka terlalu tinggi \nkesempatan telah habis');
                    alert('gagal! \nangka yang dicari adalah ' + komputer)
                }else{
                    alert('angka terlalu tinggi \nmasih ada '+ kesempatan +' kesempatan');
                }
            } 
        } 
        ulang = confirm('lagi?');
    } 
    alert('Terima Kasih Telah Bermain');
*/

/* Function 
Menjumlahkan vol 2 kubus
ALgoritma
 1. Ketahui sisi masing-masing kubus
 2. Hitung vol masing-masing kubus
 3. Jumlahkan hasilnya
 4. Kembalikan nilai jawabannya

    function jmlDuaKubus(a, b){
        return (a*a*a)+(b*b*b);
    }
    console.log(jmlDuaKubus(8, 3));
*/

/* Fungsi rekrsif
    fungsi yang memanggil dirinya sendiri 
function faktorial(n){
    if(n === 0 ){
        return 1;
    }
    return n * faktorial(n-1);
}
var nilai = faktorial(3);
console.log(nilai);
*/

/* Array 
1. Menambah isi Array Manual
    var arr = [];
    arr[0] = 'Asagiri';
    arr[2] = 'Maxaim';
    arr[3]=  'lalala';
    arr[5] = 'Hikari';

console.log(arr);
*/

/* 2. Menghapus isi Array Manual
    var arr = ['Asagiri', 'Maxaim', 'lalala'];
    arr[2] = undefined;
    console.log(arr);

*/

/* 3. Menampilkan isi Array 
    var arr = ['Asagiri', 'Maxaim', 'lalala'];
    for(var i = 0; i<3; i++){
        console.log(arr[i]);
    }
*/

/* Method Array
 1. Join (Menampilkan Array)
    var arr = ['Asagiri', 'Maxaim', 'lalala'];
    console.log(arr.join('-'));

 */

/* 2. Lenght (Menampilkan Array)
    var arr = ['Asagiri', 'Maxaim', 'lalala', 'baba'];
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
}

*/

/* 3. Push (Menambah Array di akhir Array)
    var arr = ['Asagiri', 'Maxaim', 'lalala', 'baba'];
    arr.push('Mikasa', 'rara');
    console.log(arr.join('-'));
*/

/* 4. Pop (Menghapus Array di akhir Array)
    var arr = ['Asagiri', 'Maxaim', 'lalala', 'baba'];
    arr.pop();
    arr.pop();
    console.log(arr.join('-'));
*/

/* 5. Unshift (Menambah Array di awal Array)
    var arr = ['Asagiri', 'Maxaim', 'lalala', 'baba'];
    arr.unshift('Mikasa', 'Rara');
    console.log(arr.join('-'));
*/

/* 6. Shift (Menghapus Array di awal Array)
    var arr = ['Asagiri', 'Maxaim', 'lalala', 'baba'];
    arr.shift();
    console.log(arr.join('-'));
*/

/* 7. Splice (menyambung elemen di tengah index)
    var arr = ['Asagiri', 'Maxaim', 'lalala', 'baba'];
    // rumus splice(dimulai di index berapa, jumlah di hapus, value tambahan)
    arr.splice(2, 2, 'elemen baru');
    console.log(arr.join('-'));

*/
/* 8. Slice (mengiris array dengan menambah array baru)
    var arr = ['Asagiri', 'Maxaim', 'lalala', 'baba'];
    // rumus splice(awal, akhir)
    var arr1 = arr.slice(1, 3);
    console.log(arr1.join('-'));
    // array lama masih bisa di akses
    console.log(arr.join('-'));
    */

/* 9. forEach (menampilkan array)
    var arr = ['Asagiri', 'Maxaim', 'lalala', 'baba'];
    arr.forEach(function(e){
        console.log(e);
    });
*/
  

/* 10. Map (menampilkan array dengan mengembalikan array)
var arr = [1, 2, 3, 4,5 ];
arr.map(function(e){
    return e*2;
});
console.log(arr.join('-'));
*/

/*  11. Filter (menampilkan array per element dengan mengembalikan array)
var arr = [1, 2, 3, 4,5 ];
var ar = arr.filter(function(e){
    return e == 4;
});
console.log(ar.join('-'));
*/

/* 12. Find (menampilkan satu nilai )
var arr = [1, 2, 3, 4,5 ];
var ar = arr.find(function(e){
    return e == 4;
});
console.log(ar);
*/


