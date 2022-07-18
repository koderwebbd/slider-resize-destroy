             
<script>
  window.addEventListener('DOMContentLoaded', function() {
    (function($) {

      function check() {
          if ($(document).width() < 799 ) { 

              $('#shopify-section-{{section.id}} .m-s-c-list').flickity({
                cellAlign: 'left',
                contain: true,
                groupCells: true,
                wrapAround: true,
                fade: false,
                pageDots: false,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      wrapAround: true,
                      cellAlign: "center",
                      freeScroll: true,
                      prevNextButtons: true,
                      pageDots: false
                    }
                  }
                ]
              });

          }else{
            $('#shopify-section-{{section.id}} .m-s-c-list').destroy();
          }
      }

      check();  

      $(window).resize(function () {  
          check();
      }); 


         

    })(jQuery);
  });
</script>
