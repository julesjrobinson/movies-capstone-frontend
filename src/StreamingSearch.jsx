import axios from "axios";
import { useState } from "react";
export function StreamingSearch() {
  return (
    <div>
      <h1>Find Where It's Streaming!</h1>
      <form>
        <div>
          Search: <input className="form-control" name="name" type="text" />
        </div>
        <button className="btn btn-primary mt-4" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
