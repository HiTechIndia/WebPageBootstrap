var products = [
    {
        sectionTitle: "UNIVERSAL TESTING MACHINES",
        images: [
            {src:"Mechanical cum Computerised UTM with Digital Extensometer 100 tonnes capacity.jpg", imageTitle:"Mechanical cum Computerised UTM with Digital Extensometer 2000 kn capacity"},
            {src:"Analogue type UTM 100 kn to 1000 kn.jpg", imageTitle:"Analogue type UTM 100 kn to 2000 kn"},
            {src:"Microprocessor type UTM 40 tonnes capacity.jpg", imageTitle:"Microprocessor type UTM 40 tonnes capacity"},
            {src:"Analogue type UTM 60 tonnes capacity.jpg", imageTitle:"Analogue type UTM 60 tonnes capacity"},
            {src:"Computerised Servo control Hydraulic UTM with Electronic Extensometer.jpg", imageTitle:"Computerised Servo control Hydraulic UTM with Electronic Extensometer"},
            {src:"Microprocessor cum Computerised laminated & coil Spring Testing Machine.jpg", imageTitle:"Microprocessor cum Computerised laminated & coil Spring Testing Machine"},
            {src:"Digital Manhole Cover Testing Machine.png", imageTitle:"Digital Manhole Cover Testing Machine"}

        ]
    },

    {
        sectionTitle: "Accessories for UNIVERSAL TESTING MACHINES",
        images: [
            {src:"Electronic Extensometer.jpg", imageTitle: "Electronic Extensometer"},
            {src:"180 degree direct bend test attachment for TMT Bars.jpg", imageTitle:"180 degree direct bend test attachment for TMT Bars"},
            {src:"Bend & Rebend Pane.jpg", imageTitle:"Bend & Rebend Pane"},
            {src:"Bend & Rebend Test Panes & Mandrels.jpg", imageTitle:"Bend & Rebend Test Panes & Mandrels"},
            {src:"V Table 600 mm long.jpg", imageTitle:"V Table 600 mm long"},
            {src:"Water Heating arrangment for TMT rebend test.jpg", imageTitle:"Water Heating arrangment for TMT rebend test"},
            {src:"Roller Stand for Manhole Cover Testing Machine.jpg", imageTitle:"Roller Stand for Manhole Cover Testing Machine.jpg"}
        ]
    },

    {
        sectionTitle:"DYNAMIC BALANCING MACHINES",
        images: [
            {src:"Digital Dynamic Balancing Machine 3 tonnes capacity.jpg", imageTitle:"Digital Dynamic Balancing Machine 3 tonnes capacity"},
            {src:"Digital Dynamic Balancing Machine 7 tonnes capacity.jpg", imageTitle:"Digital Dynamic Balancing Machine 7 tonnes capacity"},
            {src:"Computerised Dynamic Balancing Machine 7 tonnes capacity.jpg", imageTitle:"Computerised Dynamic Balancing Machine 7 tonnes capacity"},
            {src:"End cum Belt Drive Computerised Balancing Machine with VFD(Variable Frequency Drive) 10 tonnes capacity.jpg", imageTitle:"End cum Belt Drive Computerised Balancing Machine with VFD(Variable Frequency Drive) 10 tonnes capacity"}
        ]
    },

    {
        sectionTitle: "HARDNESS TESTING MACHINES",
        images: [
            {src:"Brinell Hardness Tester 3000 kgf with Comparetor.jpg", imageTitle:"Brinell Hardness Tester 3000 kgf with Comparetor"},
            {src:"Computerised Brinell Hardness Tester 3000 kgf.jpg", imageTitle:"Computerised Brinell Hardness Tester 3000 kgf"},
            {src:"Rockwell Hardness Tester.jpg", imageTitle:"Rockwell Hardness Tester"}
        ]
    }
];

var basePath = "./resources/img/";

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

})

function imgPopup(title, content){
    $("div#img-popup").find("h4.modal-title").html(title);

    $("div#img-popup").find("div.modal-body").empty();
    $("div#img-popup").find("div.modal-body").append(content.clone());

    $("div#img-popup").modal("show");
}