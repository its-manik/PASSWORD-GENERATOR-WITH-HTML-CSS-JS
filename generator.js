const lowerCaseCb = document.getElementById("lowerCaseCb"),
  upperCaseCb = document.getElementById("upperCaseCb"),
  digitsCb = document.getElementById("digitsCb"),
  specialCrCb = document.getElementById("specialCrCb"),
  rangeInput = document.querySelector('input[type="range"]'),
  genBtn = document.querySelector("button.generate"),
  rangeText = document.querySelector("div.range .ragneValue"),
  passInput = document.querySelector('input[type="text"]'),
  copyBtn = document.querySelector(".copy");

function generate() {
  let dictionary = "";
  if (
    !lowerCaseCb.checked &&
    !upperCaseCb.checked &&
    !digitsCb.checked &&
    !specialCrCb.checked
  ) {
    dictionary +=
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789!@#$%^&*()_+=}{][><?-~:;";
  } else {
    dictionary = "";
  }
  if (lowerCaseCb.checked) {
    dictionary += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (upperCaseCb.checked) {
    dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (digitsCb.checked) {
    dictionary += "123456789";
  }
  if (specialCrCb.checked) {
    dictionary += "!@#$%^&*()_+=}{][><?-~:;";
  }

  const length = rangeInput.value;

  if (length < 1 || dictionary.length === 0) {
    return;
  }
  console.log(dictionary);
  let password = "";

  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * dictionary.length);
    password += dictionary.charAt(pos);
  }

  passInput.value = password;
}

genBtn.addEventListener("click", generate);

rangeInput.addEventListener("input", (e) => {
  rangeText.innerHTML = e.target.value;
  generate();
});

copyBtn.addEventListener("click", async () => {
  const pass = passInput.value;
  const text = await navigator.clipboard.writeText(pass);
  copyBtn.innerHTML = "<span class='material-symbols-outlined'>done</span>";
  copyBtn.style.color = "#23c1ff";
  setTimeout(() => {
    copyBtn.innerHTML =
      "<span class='material-symbols-outlined'>copy_all</span>";
    copyBtn.style.color = "#000";
  }, 2000);
});

generate();
