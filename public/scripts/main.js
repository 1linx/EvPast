$(function(){
  
  $('#searchBtn').click(function() {
    searchFunction();
       console.log('test');
    
  });
  
  $('#searchbox').on('keyup', function(e){
   if(e.keyCode === 13) {
     searchFunction();
   }
  });  
  
  // when user clicks search button / presses enter, send GET request to External API Controller.
  function searchFunction() {
    
      // clears out any previous search results from pop-up box
      $('#category_unknown_popup').html("");
      
      console.log("submitted");
      
       var searchParameters = { search: $('#searchbox').val() };
       console.log("searched for: " + searchParameters.search);
       
       var totalItemsFound = 0;
       
       // begin internal Mongo search
       var mongoData = [];
       $.post('/search', searchParameters)
       .done(function(data) {
         if (data.length < 1) {           
         console.warn("No data matches your search.")
         } else {
            console.log(data);
            mongoData = data;
            $('#searchResults').removeClass("invisible");
         }                  
       })
       .fail(function() {
         console.warn("Search failed.");
       });
         var i = 0;
       mongoData.each(function() { 
         console.log(mongoData[0]);
         i++;
       });
       
    //    // begin Capital Collections search       
    //    $.get( '/capitalCollectionsCall', searchParameters, function(data) {
         
    //    console.log('test');
    //      $('#category_unknown').addClass("category_unknown_popup_open");
         
         
    //      // parse incoming data as XML.
    //       var content = $.parseXML(data);
    //       var $xml = $(content);
          
    //       // find and separate out all returned items
    //       var $items = $xml.find("item");          
          
    //       // add a counter for returned results and display on page
    //       var numberOfReturnedUnknownItems = $items.length;
          
    //       // add this to total number of returned items so that results only display if there are actually results to display
    //       totalItemsFound += numberOfReturnedUnknownItems;
          
    //       if (numberOfReturnedUnknownItems > 0) {            
    //         $('#unknownResultsCounters').text(numberOfReturnedUnknownItems);
    //         $('#searchResults').removeClass("invisible");
    //       }
          
    //       var titlesArray = [];
    //       var descriptionsArray =[];
          
    //       // process each of the found items.
    //       $items.each(function() {
            
    //           // make a note of the found item's ID because we'll need that to marry it up in the database
    //           var $itemId = $(this).attr("item-id");            
    //           console.log("This item's ID: " + $itemId);
               
    //           // find all XML field tags.
    //           var $fieldContent = $(this).find("field");
              
              
    //           // process each one, display tag content and label attribute text
    //           $fieldContent.each(function() {
    //             if ($(this).attr("label") == "Title") {
    //               titlesArray.push($(this).text());     
                  
    //             }
                
    //              if ($(this).attr("name") == "title" && $(this).attr("label") == "Description") {
    //               descriptionsArray.push($(this).text());   
    //             }
                
    //             var name = $(this).text();
    //             var fieldname = $(this).attr("label");
                
                
    //         });    
    //       });
          
    //   buildPopupLayout(titlesArray, descriptionsArray);
    //  });
     
    //    console.log(totalItemsFound);
    //  if (totalItemsFound > 0) {              
    //     $('#searchResults').removeClass("invisible");
    //  }
 }
 
 
 function buildPopupLayout(titlesArray, descriptionsArray) {
   
    for (var i = 0; i <= titlesArray.length - 1; i++) {
      $('#category_unknown_popup').append("<h3>" + titlesArray[i] + "</h3>");       
      console.log(titlesArray[i]);
      
      $('#category_unknown_popup').append("<p>" + descriptionsArray[i] + "</p>"); 
      console.log(descriptionsArray[i]);
      
    }
    
 }
});