import React from "react";

function Edit({ name_of_author, title_of_book, publisher, publication_date }) {
  return (
    <div>
      <i>
        <p>{name_of_author}</p>
        <p>{title_of_book}</p>
        <p>{publisher}</p>
        <p>{publication_date}</p>
      </i>
    </div>
  );
}

export default Edit;
