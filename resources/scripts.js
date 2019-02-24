var basePath = "./resources/img/";
var displayCustomers = "Y"

$(function(){
    console.log(products);
    var refItemDisp = $("div#refItemDispBox>div.product-container");
    var refProductGroup = $("div#refItemDispBox>div.panel")

    $.each(products, function(index, pdtGroup){
        var productGroupDiv = refProductGroup.clone();
        $(productGroupDiv).find("div.panel-heading").html(pdtGroup.sectionTitle);
        $("div#product-list").append(productGroupDiv);

//        $("div#product-list").append( $("<div class='product-group'></div>").html(pdtGroup.sectionTitle) );

        $.each(pdtGroup.images, function(index, image){
            var itemDisp = refItemDisp.clone();
            $(itemDisp).find("img").attr("src",basePath+image.src);
            $(itemDisp).find("span.product-description-title")
                .html(image.imageTitle);

            $("div#product-list").append(itemDisp);
        });
    });

})

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

});

$(function(){
    refCustList = $("div#refCustomerList div.customers-pdt");
    targetDiv = $("div#customerData");
    $.each(customerData, function(index, customersDataSinglePdt){
        loadCustomers(customersDataSinglePdt, refCustList, targetDiv);
    });
    
});

function imgPopup(title, content){
    $("div#img-popup").find("h4.modal-title").html(title);

    $("div#img-popup").find("div.modal-body").empty();
    $("div#img-popup").find("div.modal-body").append(content.clone());

    $("div#img-popup").modal("show");
}

function loadCustomers(customerData, templateDiv, targetDiv){
        customerList = $(templateDiv).clone();
        $(customerList).find("h3").html(customerData.tableTitle);
        $.each(customerData.tableHeader, function(index, header){
            $(customerList).find("table > thead > tr").append(
                $("<th></th>").html(header)
            );
        });

        $.each(customerData.tableData, function(index, rowData){
           $(customerList).find("table > tbody").append(
               $("<tr></tr>")
           ); 

           $.each(rowData, function(index, field){
            $(customerList).find("table > tbody > tr:last").append(
                $("<td></td>").html(field)
            ); 
           });
        });

        $(targetDiv).append(customerList);


}

function dispCustomers(){
    $("div#dispProductList").addClass("hidden");
    $("div#dispCustomerList").removeClass("hidden");
}