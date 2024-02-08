import React, { useState } from "react";
import mockDataInvoice from "./../../data/mockDataInvoice";
import {
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  IconButton,
  Pagination,
  Paper,
  RadioGroup,
  Radio,
} from "@mui/material";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import {
  AddCircle,
  ChevronRight,
  FiberManualRecord,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import FilterDropdown from "./FilterDropdown";

function PreviewInvoice() {
  const [isFilterExpanded, setisFilterExpanded] = useState(false);
  const [filterInvoiceVal, setfilterInvoiceVal] = useState("all");
  {
    console.log(filterInvoiceVal);
  }
  return (
    <article className="mx-auto grid max-w-2xl">
      <div className="mb-12 mt-14 flex justify-between  text-white">
        <div>
          <h2 className="text-3.5xl font-bold "> Invoices</h2>
          <span className="text-xs">
            There are {mockDataInvoice.length} total invoices.
          </span>
        </div>
        <div className="flex  gap-14">
          <div className="relative self-center">
            <ClickAwayListener
              onClickAway={() => {
                setisFilterExpanded(false);
              }}
            >
              <>
                <Button
                  onClick={() => {
                    setisFilterExpanded((prev) => !prev);
                  }}
                  aria-expanded={isFilterExpanded}
                  aria-controls="filterInvoice"
                  aria-haspopup="true"
                  endIcon={<KeyboardArrowDown className="text-logo" />}
                  className="my-auto flex h-fit font-spartan  text-xs font-bold capitalize tracking-tight text-white "
                >
                  Filter by status
                </Button>
                <FilterDropdown
                  isFilterExpanded={isFilterExpanded}
                  setfilterInvoiceVal={setfilterInvoiceVal}
                />
              </>
            </ClickAwayListener>
          </div>

          <Button
            variant="contained"
            startIcon={<AddCircle className="h-8 scale-[1.4]" />}
            className="my-auto flex h-fit rounded-full bg-logo  font-spartan text-xs font-bold capitalize tracking-tight hover:bg-logo/80"
          >
            New Invoice
          </Button>
        </div>
      </div>

      {mockDataInvoice
        .filter((invoice) =>
          filterInvoiceVal == "all"
            ? invoice
            : invoice.status == filterInvoiceVal,
        )
        .map((invoice, index) => {
          const { id, paymentDue, clientName, status, total } = invoice;

          return (
            // <a href="/id">
            <Paper
              elevation={2}
              square={false}
              key={index + "prevInvoice"}
              className="mb-3 grid grid-cols-12  place-content-center rounded-md border border-transparent bg-card py-4 pl-6 pr-3 text-left text-xs text-white transition hover:border-logo dark:bg-d-card"
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
        className=" grid place-content-center pb-8 pt-6 text-logo child:child:child:text-base child:child:child:text-white  "
        count={10}
      />
    </article>
  );
}

export default PreviewInvoice;
