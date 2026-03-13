function loadNote(file) {

  fetch(file)
    .then(response => response.text())
    .then(markdown => {

      const html = marked.parse(markdown);

      document.getElementById("content").innerHTML = html;

    });

}
