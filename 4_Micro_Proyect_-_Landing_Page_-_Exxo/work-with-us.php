<!doctype html>
<html lang="en">

<head>

	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Exxo</title>

	<!-- CSS -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,600">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
		integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
		integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
	<link rel="stylesheet" href="assets/css/style.css">
	<link rel="stylesheet" href="assets/css/media-queries.css">

	<!-- Favicon -->
	<link rel="shortcut icon" type="image/png" href="assets/img/ico/favicon.png">

	<!-- reCAPTCHA -->
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>

</head>

<body class="home">
	<div id="wrapper">

		<!-- Loader: Terminar el javascript -->
		<div id="loading" class="spinner-border d-none positioner" role="status">
			<span class="sr-only">Loading...</span>
		</div>

		<!--Navigation bar-->
		<div id="nav-placeholder">
		</div>

		<!-- Main -->
		<div id="main">

			<div class="container">
				<div id="contactblock" class="row align-items-left">

					<!-- Menú left -->
					<div class="col-3">
						<div class="filters">
							<ul class="contacts">
								<li><a class="quote" href="quote.php">quote</a>
								</li>
								<li><a class="contact-us" href="contact.php">Just say hello!</a></li>
								<li class="active">work with us</li>
							</ul>
						</div>
					</div>

					<!-- Contact form -->
					<div class="col-6">
						<form id="formwwu">
							<div class="form-group">
								<input 	type="text" 
												name ="nameWWU"
												class="form-control form-control-lg border-black rounded-0" 
												placeholder="name">
							</div>
							<div class="form-group">
								<input 	type="email" 
												name ="emailWWU"
												class="form-control form-control-lg border-black rounded-0" 
												placeholder="email">
							</div>
							<div class="input-group">
								<div class="input-group-prepend">
									<span class="input-group-text" id="basic-addon3">https://www.linkedin.com/</span>
								</div>
								<input 	type="text" 
												name ="linkedInWWU"
												class="form-control form-control-lg border-black rounded-0" 
												placeholder="linkedin profile">
							</div>
							<div class="form-group">
								<textarea 	name="messajeWWU"
														class="form-control form-control-lg border-black rounded-0" 
														rows="5"
														placeholder="Tell us why you are the best">
									</textarea>
							</div>
							<p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>							

							<!-- reCAPTCHA Etiqueta: www.exxo.es work-with-us -->
							<div class="text-center">
								<div 	class="g-recaptcha" 
											data-sitekey="6LenzfgUAAAAACzhUWiTxGsAv1a_MRW4trQV6xXJ">
								</div>
							</div>

							<button 	type="submit" 
												name ="submitWWU"
												class="btn btn-outline-dark btn-lg btn-block">Send
							</button>
						</form>

						<div class="statusFormWWU">
							<?php 
								if(isset($_POST['submitWWU'])) 
								{ 
									$user_name 		= $_POST['nameWWU']; 
									$user_email		= $_POST['emailWWU']; 
									$linkedin			= $_POST['linkedInWWU']; 
									$user_message = $_POST['messajeWWU']; 
									
									/* Sender email */
									$email_from		 	= 'noreply@exxo.es'; 
									$email_subject 	= "New Form Submission"; 
									$email_body 		=	"Name: $user_name.\n". 
																		"Email Id: $user_email.\n". 
																		"LinkedIn: $linkedin.\n". 
																		"User Message: $user_messages.\n"; 

									/* Recipient email */
									$to_email = "devecchi@exxo.es"; 
									$headers 	= "From: $email_from\r\n"; 
									$headers .= "Reply-To: $user_email\r\n"; 

									/* reCAPCHA & send */
									$secretKey 	 	= "6LenzfgUAAAAAK5PanEH2bqe6ZteWKm_-UvgLVAX"; 
									$responseKey 	= $_POST['g-recaptcha-response']; 
									$UserIP 			= $_SERVER['REOMTE_ADDR']; 
									$url 					= "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$UserIP"; 
									
									$response = file_get_contents($url); 
									$response = json_decode($response); 
									
									If ($response->success) 
									{ 
										mail($to_email,$email_subject,$email_body,$headers); 
										echo "<p>Message sent Successfully</p>"; 
									} 
									else 
									{
										echo "<span>Invalid Captcha, Please Try Again</span>"; 
									} 
										
								}
							?>

						</div>

					</div>

					<!-- Menú right -->
					<div class="col-3">
					</div>
				</div>
			</div>

		</div> <!-- end main -->

	</div> <!-- end top content -->

	<!-- Footer (footer.html)-->
	<div id="loadfooter">
	</div>

	<!-- =================
		       Javascript 
       ================= -->
	<script src="assets/js/jquery-3.3.1.min.js"></script>
	<script src="assets/js/jquery-migrate-3.0.0.min.js"></script>

	<!-- Load Navigation.html and footer.html-->
	<script>
		$.get("navigation.html", function (data) {
			$("#nav-placeholder").replaceWith(data);
		});
		$.get("footer.html", function (data) {
			$("#loadfooter").replaceWith(data);
		});
	</script>

	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
		integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
		crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
		integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
		crossorigin="anonymous"></script>
	<script src="assets/js/scripts.js"></script>

</body>

</html>