function contactTab() {
  const background = document.createElement("div");
  background.setAttribute("id", "contact-block");
  background.setAttribute("class", "block");

  const heading = document.createElement("h2");
  heading.textContent = "Make a reservation";
  background.appendChild(heading);

  const form = document.createElement("form");
  const name = document.createElement("input");
  name.setAttribute("placeholder", "Full name");
  form.appendChild(name);
  const email = document.createElement("input");
  email.setAttribute("type", "email");
  email.setAttribute("placeholder", "myname@email.com");
  form.appendChild(email);
  const date = document.createElement("input");
  date.setAttribute("type", "datetime-local");
  form.appendChild(date);
  const note = document.createElement("textarea");
  note.setAttribute("placeholder", "Your note here");
  note.setAttribute("rows", "6");
  note.setAttribute("cols", "43");
  form.appendChild(note);
  const submit = document.createElement("button");
  submit.textContent = "Make a reservation";
  form.appendChild(submit);

  background.appendChild(form);

  return background;
}

export default contactTab;
