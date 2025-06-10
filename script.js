document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", () => {
    document.querySelectorAll(".box").forEach((b) => {
      b.classList.remove("active");
      b.querySelector(".options").classList.add("hidden");
    });
    box.classList.add("active");
    box.querySelector(".options").classList.remove("hidden");
    box.querySelector("input[type=radio]").checked = true;
  });
});
