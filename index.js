// Your code goes here:

let displayPoster = function(event) {
  let theImage = jQuery(event.target)
  // console.log(theImage)
  let srcValue = theImage.attr("src")
  // console.log(srcValue)
  jQuery("#main-image").attr("src", srcValue)

}

jQuery("#thumbnails").on("click", displayPoster)
