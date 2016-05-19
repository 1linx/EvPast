$(function(){
  
  $('#searchBtn').click(function() {
    searchFunction()
  });
  
  $('#searchbox').on('keyup', function(e){
   if(e.keyCode === 13) {
     searchFunction()
   }
  });  
  
  // when user clicks search button / presses enter, send GET request to External API Controller.
  function searchFunction() {
    
      // clears out any previous search results from pop-up box
      $('#category_unknown_popup').html("");
      
      console.log("submitted");
      
       var searchParameters = { search: $('#searchbox').val() };
       console.log("searched for: " + searchParameters.search);
       
       // begin internal Mongo search
       $.post('/search', searchParameters)
       .done(function(data) {
         if (data.length < 1) {           
         console.warn("No data matches your search.")
         } else {
            console.log(data);
         }                  
       })
       .fail(function() {
         console.warn("Search failed.")
       });
         
       
       
//        // begin Capital Collections search
//        $.get( '/capitalCollectionsCall', searchParameters, function(data) {
         
//          $('#category_unknown').addClass("category_unknown_popup_open")
         
         
//          // parse incoming data as XML.
//           var content = $.parseXML(data);
//           var $xml = $(content);
          
//           // find and separate out all returned items
//           var $items = $xml.find("item");          
          
//           // add a counter for returned results and display on page
//           var numberOfReturnedItems = $items.length
//           if (numberOfReturnedItems > 0) {            
//             $('#unknownResultsCounters').text(numberOfReturnedItems);
//             $('#searchResults').removeClass("invisible");
//           }
          
//           var titlesArray = [];
//           var descriptionsArray =[];
          
//           // process each of the found items.
//           $items.each(function() {
            
//               // make a note of the found item's ID because we'll need that to marry it up in the database
//               var $itemId = $(this).attr("item-id");            
//               console.log("This item's ID: " + $itemId);
               
//               // find all XML field tags.
//               var $fieldContent = $(this).find("field");
              
              
//               // process each one, display tag content and label attribute text
//               $fieldContent.each(function() {
//                 if ($(this).attr("label") == "Title") {
//                   titlesArray.push($(this).text());     
                  
//                 }
                
//                  if ($(this).attr("name") == "title" && $(this).attr("label") == "Description") {
//                   descriptionsArray.push($(this).text());   
//                 }
                
//                 var name = $(this).text();
//                 var fieldname = $(this).attr("label");
                
                
//             });    
//           });
          
//       buildPopupLayout(titlesArray, descriptionsArray);
//      });
//  }
 
 
//  function buildPopupLayout(titlesArray, descriptionsArray) {
   
//     for (var i = 0; i <= titlesArray.length - 1; i++) {
//       $('#category_unknown_popup').append("<h3>" + titlesArray[i] + "</h3>");       
//       console.log(titlesArray[i]);
      
//       $('#category_unknown_popup').append("<p>" + descriptionsArray[i] + "</p>"); 
//       console.log(descriptionsArray[i]);
      
//     }
    
 }
});