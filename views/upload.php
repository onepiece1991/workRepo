<?php
if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/jpg")
|| ($_FILES["file"]["type"] == "image/png")
|| ($_FILES["file"]["type"] == "image/pjpeg"))
// && ($_FILES["file"]["size"] < 20000)
)
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {
    echo "Upload File Name: " . $_FILES["file"]["name"] . "<br />";
    echo "Type: " . $_FILES["file"]["type"] . "<br />";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
    echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";
    echo "Reset File Name:" . $_POST["name"] . "<br />";
    
    if (file_exists("../images/amuseYourself/" . $_POST["name"]))
      {
      echo $_POST["name"] . " already exists. ";
      }
    else
      {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "../images/amuseYourself/" . $_POST["name"]);
      echo "Stored in: " . "../images/amuseYourself/" . $_POST["name"];
      }
    }
  }
else
  {
  echo "Invalid file";
  }
?>