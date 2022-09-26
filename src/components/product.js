import React from "react";
import Edit from "./edititem";
//ES6 destructuring props
function Books({
  name_of_author,
  title_of_book,
  publisher,
  publication_date,
  summary
}) {
  return (
    <div>
      <Edit
        name_of_author={name_of_author}
        title_of_book={title_of_book}
        publisher={publisher}
        publication_date={publication_date}
      />
      <h5>{summary}</h5>
    </div>
  );
}
export default Books;
