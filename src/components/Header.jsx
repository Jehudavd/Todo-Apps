import React from "react";
import Input from "./Input";

const Header = ({ search, setQuery }) => {
  return (
    <div className="note-app__header">
      <h1>My Notes</h1>
      <div className="note-search">
        <Input
          value={search}
          onChange={setQuery}
          type="search"
          id="search_note"
          name="search_note"
          placeholder="Search Notes"
        />
      </div>
    </div>
  );
};

export default Header;
