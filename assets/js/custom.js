jQuery(document).ready(function($) {

  // Add class state--scrolled to body
  jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 72) {
        jQuery("#header").addClass("state--scrolled");
    } else {
        jQuery("#header").removeClass("state--scrolled");
    }
  });

  // Expand reading
  $( ".read-more" ).click(function() {
    $(this).toggleClass("btn-close"); 
    $(this).text($(this).text() == 'Visa alla' ? 'Visa färre' : 'Visa alla');
    $(this).parent().toggleClass("full-height").next().toggle();
    $(this).parent().find(".white-fade").toggleClass("fade-hidden");
  });

  // Toggle settings
  $( ".toggle-settings" ).click(function() {
    $(".site-settings").toggleClass("settings-active");
  });

  // Replace all SVG images with inline SVG
  $('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Replace image with new SVG
          $img.replaceWith($svg);

        }, 'xml');
        
    });

    // Scroll to top
    $('.to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0}, 500);
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 90
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
           // window.location.hash = hash;
        });
        } // End if
    });

});

// Sort table function
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("contact-table");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc"; 
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }




  // Site bg-color

  // Set variables
  var btnStandard = jQuery('.bg-standard');
  var btnYellow = jQuery('.bg-yellow');
  var btnGreen = jQuery('.bg-green');
  var btnRed = jQuery('.bg-red');
  var changeThis = jQuery('.white-bg');

  // Get localStorage value
  var storedBgColor = localStorage.getItem('.white-bg');

  // Check if value exists otherwise set default color
  if (storedBgColor) {
    changeThis.css('background-color', storedBgColor);
  } else {
      // Set default color to white
      changeThis.css('background-color', 'white');
  }

  // Save value to localStorage and change bg-color on the fly
  btnYellow.click(function() {
    changeThis.css('background-color', 'yellow');
    localStorage.setItem('.white-bg', 'yellow');
  });

  btnGreen.click(function() {
    changeThis.css('background-color', 'green');
    localStorage.setItem('.white-bg', 'green');
  });
  
  btnRed.click(function() {
    changeThis.css('background-color', 'red');
    localStorage.setItem('.white-bg', 'red');
  });

  btnStandard.click(function() {
    changeThis.css('background-color', 'white');
    localStorage.setItem('.white-bg', 'white');
  });