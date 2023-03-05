
 <!-- <?php
$array = [6, 7];
asort($array);
arsort($array);
echo print_r($array);

$age = ["Peter"=>"35", "Ben"=>"37", "Joe"=>"43"];

foreach($age as $x => $x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>  -->

<?php
   $angka = [];
if(isset($_POST['angka'])){
    $angka['satu'] = $_POST['satu'];
    $angka['dua'] = $_POST['dua'];
    $angka['tiga'] = $_POST['tiga'];
    $angka['empat'] = $_POST['empat'];
    $angka['lima'] = $_POST['lima'];
}
 

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array</title>
</head>
<body>
    <form action="" method="post">
        <input type="number" name = 'satu'>
        <input type="number" name = 'dua'>
        <input type="number" name = 'tiga'>
        <input type="number" name = 'empat'>
        <input type="number" name = 'lima'>
        <button type="submit" name="angka">Angka</button>
    </form>

    <h3>Angka Terkecil ke Terbesar :</h3>
        <table>
            <tr>
            
            <?php sort($angka); foreach($angka as $a  => $key):?>
            <td><?php  echo $key; ?></td>
            <?php endforeach; ?>
            </tr>
        </table>
  <br>

    <h3>Angka Terbesar ke terkecil :</h3>
        <table>
            <tr>
            <?php rsort($angka);  foreach($angka as $a => $key):?>
            <td><?php echo $key; ?></td>
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
            <td><?php echo $key; ?></td>
            <?php endif; endforeach; ?>
            </tr>
        </table>
  <br>




      
    
</body>
</html>