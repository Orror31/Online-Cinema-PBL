$(document).ready(function () {
    var $list = $(".card-product-box .synopsis-container-f").hide(),
      $curr;
  
    $(".button")
      .on("click", function () {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $curr = $list.filter("." + this.id).hide();
        $curr.slice(0, 4).show(400);
        $list.not($curr).hide(300);
      })
      .filter(".active")
      .click();

  });
