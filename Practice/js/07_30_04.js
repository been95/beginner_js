const data = photos;

const h1 = document.createElement("h1");
h1.textContent = "HELLO WORLD";
document.body.appendChild(h1);

const ul = document.createElement("ul");
document.body.appendChild(ul);

for (let i in data) {
  const li = document.createElement("li");
  li.textContent = data[i].title;

  const p = document.createElement("P");
  p.textContent = data[i].id;

  const img = document.createElement("img");
  img.setAttribute("src", data[i].thumbnailUrl);
  img.setAttribute("alt", data[i].title);

  const button = document.createElement("button");
  button.textContent = "Delete";

  li.appendChild(p);
  li.appendChild(img);
  li.appendChild(button);
  li.appendChild(h1);

  ul.appendChild(li);
}
