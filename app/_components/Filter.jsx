"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React from "react";

const Filter = () => {
  const search = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = search.get("capacity");

  function handlerFilter(filter) {
    const params = new URLSearchParams(search);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter={"all"}
        handleFilter={handlerFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </Button>
      <Button
        filter={"small"}
        handleFilter={handlerFilter}
        activeFilter={activeFilter}
      >
        1{" - "}3 guests
      </Button>
      <Button
        filter={"medium"}
        handleFilter={handlerFilter}
        activeFilter={activeFilter}
      >
        4{" - "}7 guests
      </Button>
      <Button
        filter={"large"}
        handleFilter={handlerFilter}
        activeFilter={activeFilter}
      >
        8{" - "}12 guests
      </Button>
    </div>
  );
};

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
