// Main function that finds links and chagnes their reference
function changeLinkHref(oldValue, newValue){
    // selector for links
    $(`a[href="${oldValue}"]`).each(function(index){
        // change and log old href to new href value
        console.log($(this).attr('href', newValue));
        // changes if the link opens in new tab or not
        $(this).attr('target', '_blank')
        // update link text in DOM
        $(this).text(`I am now a link to ${newValue}`);
        // remove highlight class if it exists
        $(this).removeClass('highlighted');
    });
    
}

// changes chosen links to new value on click
$('#changebutton').click(function(){
    // new value we want to chagne the links to
    let inputVal = $('#newurl').val();
    // the value of the links we want to find (the old value)
    let oldInputVal = $('#findurl').val();
    // link changing logic
    changeLinkHref(oldInputVal, inputVal)
})

// searches for links with the given href and highlights them in the DOM
$('#findbutton').click(function(){
    // value of links we are looking for
    let inputVal = $('#findurl').val();
    // adds a highlighted color to every link that exists with the 
    // given value
    $(`a[href="${inputVal}"]`).each(function(index){
       $(this).toggleClass('highlighted');
    });
})