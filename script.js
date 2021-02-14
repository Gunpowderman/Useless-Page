function tricky() {
  const trickyElement = document.getElementById("trickyMove");
  trickyElement.style.left = Math.random() * 90 + "%";
  trickyElement.style.top = Math.random() * 90 + "%";
  document.getElementById("img1").style.visibility = "visible";
}

// $(function () {
//   $(".tricky").on({
//     mouseover: function () {
//       $(this).css({
//         left: Math.random() * 90 + "%",
//         top: Math.random() * 90 + "%",
//       });
//     },
//   });
//   $(".btn-wrap").hover(function () {
//     $(this).toggleClass("active");
//   });
// });

// $(".tricky").bind("touchstart", function () {
//   $(this).css({
//     left: Math.random() * 90 + "%",
//     top: Math.random() * 90 + "%",
//   });
// });
