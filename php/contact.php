<?php
  $to = "thepharmacypdx@gmail.com";
  if ($_GET['booking'] == "true") {
    $subject = "Booking Request Submitted";
  } else {
    $subject = "Website Contact Submitted";
  }
  if ($_GET['booking'] == "true") {
    $txt .= "\r\n" . "Portfolio Location: " . $_GET['portfolio'] . "\r\n \r\n";
  }
  $txt .= "Name: " . $_GET['contact-name'] . "\r\n \r\n" . "E-mail address: " . $_GET['contact-email'] . "\r\n \r\n" . "Message: \r\n" . $_GET['contact-message'];
  $headers = "From: no-reply@thepharmacypdx.com" . "\r\n" .
  "Reply-To:" . $_GET['contact-email'];
  
  mail($to,$subject,$txt,$headers);
  header("Location: http://thepharmacypdx.com/?contact-success=true");
?>