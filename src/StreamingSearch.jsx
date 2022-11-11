import axios from "axios";
import { useState } from "react";
export function SteamingSearch() {
  return (
    <div>
      <h1>Find Where It's Streaming!</h1>
      <form>
        <div>
          Search: <input name="name" type="text" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
