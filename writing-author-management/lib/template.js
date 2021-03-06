module.exports = {
  HTML: function (title, list, body, control) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB2 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB1</a></h1>
        <a href="/author">author</a>
        ${list}
        ${control}
        ${body}
      </body>
      </html>
      `;
  },
  list: function (topics) {
    var list = "<ul>";
    var i = 0;
    while (i < topics.length) {
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list + "</ul>";
    return list;
  },
  authorSelect: function (authors, author_id) {
    var tag = '';
    var i = 0
    while (i < authors.length) {
      var selected = ''
      if (authors[i].id === author_id) {
        selected = ' selected';
      }
      tag = tag + `<option value=${authors[i].id}${selected}>${authors[i].name}</option>`
      i = i + 1;
    }
    return `
    <select name="author">
     ${tag}
    </select>
    `
  },
  authorTable: function (authors) {
    var tag = '<table>';
    var i = 0
    while (i < authors.length) {
      tag += `
      <tr>
        <td>${authors[i].name}</td>
        <td>${authors[i].profile}</td>
        <td><a href="/author/update?id=${authors[i].id}">update</td>
        <td>
          <form action="/author/delete_process" method="post">
            <p><input type="hidden" name="id" value="${authors[i].id}"></p>
            <p><input type="submit" value="delete"></p>
          </form>
        </td>
      </tr>
       `
      i++;
    }
    tag += "</table>";
    return tag;
  }
}

