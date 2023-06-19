document.body.addEventListener("load", () => {
  alert("hello");
  document.getElementsByTagName("p")[0].innerHTML = "hello";
});