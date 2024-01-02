import React from "react";

function Display({findResult,copy,result }) {
  return (
    <div className="w-full sm:h-24 rounded-md my-2 p-2 border-solid border-white border-2 relative">
      <div className="w-full h-full rounded-xl grid grid-cols-2 grid-rows-2 text-xl font-bold text-font_white p-6">
        <div className="col-start-1 col-end-2 text-clr_blue">{`${copy ? "=" : ""}`}</div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 absolute right-4">
          {`${copy ? copy : ""}`}
        </div>

        <div className="col-start-2 col-end-3 row-start-2 row-end-3 absolute bottom-2 right-4">
          {result}
        </div>
      </div>
    </div>
  );
}

export default Display;
