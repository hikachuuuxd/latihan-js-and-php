<?php
$tglLahir = '2002-12-11';
$sekarang = Date('Y-m-d');
$tahun = (Date('Y', strtotime($tglLahir)) - Date('Y', strtotime($sekarang))) ;
$bulan = Date('m', strtotime($tglLahir)) - Date('m', strtotime($sekarang));
$ultah;

if(Date('m', strtotime($tglLahir)) > Date('m', strtotime($sekarang)) ){
    $ultah = $tahun + 1;
    $ket = 'kurang';
}else if(Date('m', strtotime($tglLahir)) < Date('m', strtotime($sekarang)) ){
    $ultah = $tahun;
    $ket = 'lebih';
}else if(Date('m', strtotime($tglLahir)) == Date('m', strtotime($sekarang)) ){
    $ultah = $tahun;
    $ket = 'pas';
};
// echo Date('m', strtotime($tglLahir));
// echo Date('m', strtotime($sekarang));
echo 'usia kamu tahun ini' . abs($ultah) . 'tahun' .' '. $ket. abs($bulan) . 'bulan';
?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cari Umur</title>
</head>
<body>
// Jika bulan lahir diatas bulan januari
// Jika bulan lahir == 0 kembalikan ke tahun semula
// Jika bulan lahir lebih dari bulan sekarang
</body>
</html> -->