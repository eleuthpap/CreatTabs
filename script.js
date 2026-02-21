
  const buttons = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");
            console.log(buttons);

   buttons.forEach(button => {
    button.addEventListener("click",()=>{
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const tabId=button.dataset.tab;

    contents.forEach(content=> content.style.display="none");

    document.getElementById(tabId).style.display="block";
});
    });