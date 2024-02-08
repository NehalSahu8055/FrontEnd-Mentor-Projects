import React from "react";
import mockDataInvoice from "../data/mockDataInvoice.js";
import { Button, IconButton } from "@mui/material";
import { ChevronRight, FiberManualRecord } from "@mui/icons-material";

function Main() {
  return (
    <main className="mx-auto grid w-2/3">
      {mockDataInvoice.map((invoice, index) => {
        const { id, paymentDue, clientName, status, total } = invoice;
        return (
          <a href="/id">
            <article
              key={index + "prevInvoice"}
              className="dark:bg-d-card bg-card hover:border-logo mb-3 grid grid-cols-12 place-content-center rounded-md border border-transparent py-4 pl-6 pr-3 text-left text-xs text-white transition"
            >
              <ul className="info col-span-7 grid grid-cols-8 place-content-center">
                <li className="col-span-2 font-bold">
                  <span className="text-hash">#</span>
                  {id}
                </li>
                <li className="col-span-3">{"Due " + paymentDue}</li>
                <li className="col-span-3">{clientName}</li>
              </ul>
              <ul className="price col-span-4  grid grid-cols-5 place-content-center text-right text-[0.875rem] font-bold">
                <li className="col-span-2 my-auto">{"₹" + total}</li>
                <li className="col-span-3">
                  <Button
                    className={`font-spartan px-4 text-[0.75rem] font-bold capitalize tracking-tight hover:bg-transparent ${status == "paid" ? "bg-paid/10 text-paid" : "bg-pending/10 text-pending"}`}
                    variant="contained"
                    startIcon={<FiberManualRecord className="h-3.5 w-3.5" />}
                    disableElevation
                  >
                    {status}
                  </Button>
                </li>
              </ul>
              <IconButton className=" ml-auto w-fit ">
                <ChevronRight className="text-logo" />
              </IconButton>
            </article>
          </a>
        );
      })}
    </main>
  );
}

export default Main;
