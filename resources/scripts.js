$(function(){
    $("div#product-list").on("click", "div.product-container", 
        function(){
            title = $(this).find("span.product-description-title").html();
            desciption = $(this).find("span.product-description-detail").html();
            imgContent = $(this).find("img").clone();

            $(imgContent).removeClass("img-thumbnail");
            $(imgContent).addClass("img-responsive");

            imgPopup(title, imgContent);
    });

    $("div.carousel").on("click", "div.item", 
        function(){
            title = $(this).find("h3").html();
            //desciption = $(this).find("span.product-description-detail").html();
            imgContent = $(this).find("img").clone();

            imgPopup(title, imgContent);
    });

})

function imgPopup(title, content){
    $("div#img-popup").find("h4.modal-title").html(title);

    $("div#img-popup").find("div.modal-body").empty();
    $("div#img-popup").find("div.modal-body").append(content.clone());

    $("div#img-popup").modal("show");
}