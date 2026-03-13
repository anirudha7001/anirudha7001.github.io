let pages = [];

async function loadIndex() {
  const response = await fetch("search-index.json");
  pages = await response.json();
}

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", function () {

  const query = this.value.toLowerCase();

  resultsDiv.innerHTML = "";

  if (query.length < 2) return;

  const matches = pages.filter(page =>
    page.title.toLowerCase().includes(query) ||
    page.content.toLowerCase().includes(query)
  );

  matches.forEach(page => {

    const result = document.createElement("div");

    result.className = "note-card";

    result.innerHTML = `
      <a href="${page.url}" style="text-decoration:none;color:inherit;">
        <h4>${page.title}</h4>
        <p>${page.url}</p>
      </a>
    `;

    resultsDiv.appendChild(result);

  });

});

loadIndex();
