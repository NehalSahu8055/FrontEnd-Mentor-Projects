import React from "react";
import mockDataInvoice from "./../../data/mockDataInvoice";
import { Button, IconButton, Pagination, Paper } from "@mui/material";
import { ChevronRight, FiberManualRecord } from "@mui/icons-material";

function PreviewInvoice() {
  return (
    <>
      {mockDataInvoice.map((invoice, index) => {
        const { id, paymentDue, clientName, status, total } = invoice;
        return (
          // <a href="/id">
          <Paper
            elevation={2}
            component="article"
            square={false}
            key={index + "prevInvoice"}
            className="mb-3 grid grid-cols-12 place-content-center rounded-md border border-transparent bg-card py-4 pl-6 pr-3 text-left text-xs text-white transition hover:border-logo dark:bg-d-card"
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
                  className={`px-4 font-spartan text-[0.75rem] font-bold capitalize tracking-tight hover:bg-transparent ${status == "paid" ? "bg-paid/10 text-paid" : status == "draft" ? "bg-draft/10 text-draft" : "bg-pending/10 text-pending"}`}
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
          </Paper>

          // </a>
        );
      })}
      <Pagination
        className="mx-auto pb-8 pt-6 text-logo child:child:child:text-base child:child:child:text-logo "
        count={10}
      />
    </>
  );
}

export default PreviewInvoice;
