const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    if (searchInput.value != "") {
      alert("Bạn đã nhập từ khóa: " + searchInput.value);
      searchInput.value = "";
    }
  }
})
searchBtn.onclick = (e) => {
  e.preventDefault();
  if (searchInput.value != "") {
    alert("Bạn đã nhập từ khóa: " + searchInput.value);
    searchInput.value = "";
  }
}