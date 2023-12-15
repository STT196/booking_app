import React from "react";
import { Link, useParams } from "react-router-dom";

function MyPlaces() {
  const { action } = useParams();
  console.log(action);
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            to={"/account/places/new"}
            className="bg-primary inline-flex px-3 py-1 rounded-full gap-1"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            add new
          </Link>
        </div>
      )}
      {action ==="new" && (
        <div>
            <form action="">
                <h2  className="text-xl mt-4">Title</h2>
                <input type="text" placeholder="title"/>
                <h2 className="text-xl mt-4">Address</h2>
                <input type="text"  placeholder="address"/>
                <h2 className="text-xl mt-4 mb-3">Photos</h2>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                <button className="border bg-transparent rounded-2xl p-8  text-2xl">+</button>

                </div>

            </form>
        </div>
      )}
    </div>
  );
}

export default MyPlaces;
