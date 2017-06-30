$(function(){
  $('#gshsubmitbtn').on('click', function(e){
    e.preventDefault();
  
    
    var username = $('#gshusername').val();
	
    var requri  = 'https://api.github.com/users/'+username;
    var repouri = 'https://api.github.com/users/'+username+'/repos';
 
    var url   = 'https://api.github.com/users/'+username;



    $("button").click(function(){
	
        $.get(url, function(data, status){
		
		$('.left').append('<div class="car w3-card-4 w3-white"><div class="pn img-con w3-panel"></div><div  class="pn name w3-blue w3-panel"><p id="n"></p><br><br><p id="m"></p><br><br><p id="z"></p><br><br></div><div class="pn txt w3-panel"><div class="fs w3-red w3-panel"><p id="o"></p></div><div class="fw w3-green w3-panel"><p id="q"></p></div><div class="w3-panel w3-teal rp"><p id="r"></p></div></div>');
	    $('.img-con:last').append('<img  src="'+data.avatar_url+'"/>');
		 document.getElementById("n").innerHTML = "Name:"+data.login;

		  document.getElementById("m").innerHTML = "ID:"+data.id;

		 document.getElementById("o").innerHTML = "Followers: "+data.followers;

		  document.getElementById("r").innerHTML = "Following: "+data.following;

		    document.getElementById("q").innerHTML = "Repositories: "+data.public_repos;

			  document.getElementById("z").innerHTML = "Created at:"+data.created_at;
	   $('.name:last').append('<a href="'+data.html_url+'"><p style="color:black">Reachme</p></a>');
	
		
    
});

} );

});
} );