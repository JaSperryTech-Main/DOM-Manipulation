// ============================================================ \\
const pageTitle = document.getElementById("pageTitle");
const pageTitleStyle = pageTitle.style;

pageTitleStyle.color = "darkblue";
pageTitleStyle.wordSpacing = "3px";
// ============================================================ \\

// ============================================================ \\
const featureBtn = document.getElementById("featureBtn");

featureBtn.onclick = () => {
  const snack = document.querySelector("li");

  snack.classList.add("highlight");
  snack.style.backgroundColor = "lightyellow";
  snack.style.textTransform = "uppercase";
};
// ============================================================ \\

// ============================================================ \\
const clearBtn = document.getElementById("clearBtn");

clearBtn.onclick = () => {
  const snack = document.querySelectorAll("li");

  for (let index = 0; index < 3; index++) {
    snack[index].classList.remove("highlight");
  }
};
// ============================================================ \\

// ============================================================ \\
const snackForm = document.getElementById("snackForm");
const snackList = document.getElementById("snackList");

snackForm.addEventListener("submit", (form) => {
  form.preventDefault();
  let fd = new FormData(snackForm);

  const item = document.createElement("li")

  if (fd.has("addToTop")) {
    snackList.prepend(item);
  } else {
    snackList.append(item);
  }

  item.innerText = fd.get("snackName")
  item.classList.add("snack")
  item.style.listStyle = `"${fd.get("snackEmoji")}"`
});
// ============================================================ \\

