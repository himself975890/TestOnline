let filled = [false, false, false];
let holder;
let nom = document.getElementById("nom");
let email = document.getElementById("mail");
let comment = document.getElementById("comment");
let bouton = document.getElementById("submit-container");
let thealert = document.getElementById("alert");
let confirmatio = document.getElementById("confirm");
bouton.addEventListener("click", (e) => {
  e.preventDefault();
  confirmatio.style.display = "flex";
  setTimeout(() => {
    confirmatio.style.display = "none";
  }, 2000);
});
bouton.addEventListener("mouseover", () => {
  filled.forEach((value, idx) => {
    if (value == false) {
      switch (idx) {
        case 0:
          holder = nom;
          break;
        case 1:
          holder = mail;
          break;
        case 2:
          holder = comment;
          break;
        default:
          holder = null;
      }
      if (holder != null) {
        bouton.classList.add("make-it-move");
        holder.style.borderColor = "#BD0404";
        thealert.style.display = "block";
        setTimeout(() => {
          thealert.style.display = "none";
        }, 2000);
      }
    }
  });
});
nom.addEventListener("input", () => {
  nom.style.borderColor = "#FFFFFF";
  if (nom.checkValidity()) {
    filled[0] = true;
    bouton.classList.remove("make-it-move");
  } else {
    filled[0] = false;
  }
});
email.addEventListener("input", () => {
  email.style.borderColor = "#FFFFFF";
  if (email.checkValidity()) {
    filled[1] = true;
    bouton.classList.remove("make-it-move");
  } else {
    filled[1] = false;
  }
});
comment.addEventListener("input", () => {
  comment.style.borderColor = "#FFFFFF";
  if (comment.checkValidity()) {
    filled[2] = true;
    bouton.classList.remove("make-it-move");
  } else {
    filled[2] = false;
  }
});
