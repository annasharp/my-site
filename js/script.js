// Рабочая копия данных — начинается с содержимого data.js
let items = [...initialItems];
let nextId = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;

const grid = document.getElementById("grid");
const form = document.getElementById("add-form");

function renderGrid() {
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<p class="empty-state">Пока пусто. Добавь первую карточку выше.</p>`;
    return;
  }

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = item.id;

    card.innerHTML = `
      ${item.tag ? `<span class="card-tag">${escapeHtml(item.tag)}</span>` : ""}
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <button class="card-remove" type="button">Удалить</button>
    `;

    card.querySelector(".card-remove").addEventListener("click", () => {
      removeItem(item.id);
    });

    grid.appendChild(card);
  });
}

function addItem(title, description, tag) {
  items.push({ id: nextId++, title, description, tag });
  renderGrid();
}

function removeItem(id) {
  items = items.filter((item) => item.id !== id);
  renderGrid();
}

// Простая защита от вставки HTML-тегов в текст карточки
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("input-title").value.trim();
  const description = document.getElementById("input-desc").value.trim();
  const tag = document.getElementById("input-tag").value.trim();

  if (!title || !description) return;

  addItem(title, description, tag);
  form.reset();
  document.getElementById("input-title").focus();
});

renderGrid();
