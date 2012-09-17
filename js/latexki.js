$.extend($.fn.socialSharePrivacy.settings, {
    path_prefix: "/js/SocialSharePrivacy/",
    language: "de",
    title: "Mitschriebwiki",
    description: "Collaborative creation of lecture notes.", 
    uri: function() {return "http://mitschriebwiki.nomeata.de/" },
});


$(document).ready(function() {
	$(".tocLink a").tocify();
});

$(document).ready(function(){
        $('#socialshareprivacy').socialSharePrivacy();
    });

// More/Less for lectures: insert button, hide .more, toggle .more/button 
$(document).ready(function() {
	$("h4").wrapInner('<button class="moreButton">');
	$(".more").hide();
	$("h4").click(function() { 
		var moreLess = $(this).next(".more").is(':visible') ? 'More' : 'Less';
		$(this).next(".more").slideToggle();
		$(this).children("button").text(moreLess);
	});
});

// open jqueryUI Dialog for Inhaltsverzeichnis 
  $('.openDialog').each(function() {  
    $.data(this, 'dialog',
      $(this).next('.dialogMessage').dialog({
	autoOpen: false,
	height: "auto",
	width: 500,
	modal: true
      })
    );  
  }).click(function() {  
      $.data(this, 'dialog').dialog('open');  
      return false;  
  }); 



 

	
var $buoop = {
	vs:{i:8,f:3.6,o:10.6,s:4,n:9}, 
	text: "Ihr Browser kann diese Seite eventuell nicht korrekt darstellen - bitte beschweren Sie sich bei mir (mail@breitnerundbreitner.de) oder aktualisieren Sie Ihren Browser"
	} 
/*
$buoop.ol = window.onload; 
window.onload=function(){ 
 try {if ($buoop.ol) $buoop.ol();}catch (e) {} 
 var e = document.createElement("script"); 
 e.setAttribute("type", "text/javascript"); 
 e.setAttribute("src", "js/browserupdate.js"); 
 document.body.appendChild(e); 
} 
*/
