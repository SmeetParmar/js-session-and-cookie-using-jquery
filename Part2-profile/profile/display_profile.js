"use strict";

$(document).ready( () => {
	// display data from session storage
	
	$("#email").text(sessionStorage.email);
	$("#phone").text(sessionStorage.phone);
	$("#postal").text(sessionStorage.postal);
	$("#dob").text(sessionStorage.dob);


	$("#back").click( () => {
		window.history.back();
	}); // end of click()

	$("#delete").click( () => {
		sessionStorage.removeItem("email");
		sessionStorage.removeItem("phone");
		sessionStorage.removeItem("postal");
		sessionStorage.removeItem("dob");

		$("#email").text("");
		$("#phone").text("");
		$("#postal").text("");
		$("#dob").text("");

		if(confirm("All data deleted, would you like to enter it again?")) {window.location.href="index.html";}
	}); // end of click()
	
}); // end of ready()