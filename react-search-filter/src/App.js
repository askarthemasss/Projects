import "./styles.css";
import { useState } from "react";
import Table from "./Table";
import { Users } from "./Users";
// import SimpleSearch from "./SimpleSearch";

export default function App() {
  const [query, setQuery] = useState("");

  /*          Method - 1
  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) ||
        item.last_name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };
  */

  // Method - 2
  // object keys
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      {/* <Table props={Users} /> */}
      <Table props={search(Users)} />
    </div>
  );
}
