
<?php
function sama($satu, $dua, $tiga, $empat, $lima){
    $beda = $satu == $dua || $satu == $tiga || $satu == $empat || $satu == $lima || $dua == $tiga || $dua == $empat || $dua == $lima || $tiga == $empat || $tiga == $lima || $empat == $lima;
    return $beda;
}
   $angka = [];
if(isset($_POST['angka'])){
    if(sama( $_POST['satu'],  $_POST['dua'],  $_POST['tiga'],  $_POST['empat'],  $_POST['lima'])){
        echo "<script>
            alert('Tidak boleh ada angka yang sama!');
        </script>";
    }else{
        $angka['satu'] = $_POST['satu'];
        $angka['dua'] = $_POST['dua'];
        $angka['tiga'] = $_POST['tiga'];
        $angka['empat'] = $_POST['empat'];
        $angka['lima'] = $_POST['lima'];
    }
}
 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body{
            background-color: rgb(37, 37, 37);
            color : white;
            margin: 5%;
        }

    </style>
    <title>Mengurutkan Angka</title>
</head>
<body>
    <form action="" method="post">
        <label for="number" style="display:block; margin-bottom: 10px">Masukkan Angka : </label>
        <input type="number" name = 'satu' placeholder="pertama">
        <input type="number" name = 'dua' placeholder="kedua">
        <input type="number" name = 'tiga' placeholder="ketiga">
        <input type="number" name = 'empat' placeholder="keempat">
        <input type="number" name = 'lima' placeholder="kelima">
        <button type="submit" name="angka">Urutkan</button>
    </form>

    <h3>Angka Terkecil ke Terbesar :</h3>
        <table>
            <tr>
            
            <?php sort($angka); foreach($angka as $a  => $key):?>
            <td><?php  echo $key . ','; ?></td>
            <?php endforeach; ?>
            </tr>
        </table>
  <br>

    <h3>Angka Terbesar ke terkecil :</h3>
        <table>
            <tr>
            <?php rsort($angka);  foreach($angka as $a => $key):?>
            <td><?php echo $key . ','; ?></td>
            <?php endforeach; ?>
            </tr>
        </table>
  <br>
    <h3>Angka Ganjil :</h3>
        <table>
            <tr>
            <?php 
            sort($angka);  
            foreach($angka as $a => $key):
            if($key % 2 == 1) :
            ?>
            <td><?php echo $key . ','; ?></td>
            <?php endif; endforeach; ?>
            </tr>
        </table>
  <br>




      
    
</body>
</html>