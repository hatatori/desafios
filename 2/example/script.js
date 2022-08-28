function search(input_field, list_field) {
  [...list_field.children].map((e) => {
    e.onmousedown = (e) => (inp.value = e.target.innerText);
  });

  ["mousedown", "keyup"].map((ev) => {
    input_field.addEventListener(ev, function () {
      [...list_field.children].map((e) => {
        if (!e.innerText.toLowerCase().includes(this.value.toLowerCase()))
          e.style.display = "none";
        else e.removeAttribute("style");
      });
    });
  });
}

[...document.querySelectorAll("[field]")].map((e) => {
  _field = document.getElementById(e.getAttribute("field"));
  _input = document.getElementById(e.getAttribute("id"));

  search(_input, _field);
});
