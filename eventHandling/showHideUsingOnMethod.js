$(".spoiler").on("click", "button",function(event){
    console.log(event.target);
    $(".spoiler span").show();
    $(event.target).hide();
});

const $button =$("<button>Reveal</button>");
$(".spoiler").append($button);

$(".spoiler span").hide();





