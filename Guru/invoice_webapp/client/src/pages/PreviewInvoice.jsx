import React, { memo, useEffect, useState } from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  Pagination,
  Paper,
} from "@mui/material";
import {
  AddCircle,
  ChevronRight,
  FiberManualRecord,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import FilterDropdown from "../components/invoices/FilterDropdown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { fetchInvoiceData } from "../actions/invoice";
import ErrorPage from "../components/shared/ErrorPage";
import Loader from "../components/shared/Loader";

function PreviewInvoice() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const invoiceData = state.invoice;

  useEffect(() => {
    dispatch(fetchInvoiceData());
  }, [dispatch]);

  const [isFilterExpanded, setisFilterExpanded] = useState(false);
  const [filterInvoiceVal, setfilterInvoiceVal] = useState("all");
  return !state.error ? (
    <Box className="mx-auto grid  max-w-2xl" component="section">
      <h2 className="sr-only">Invoice HomePage</h2>
      <div className="mb-12 flex flex-wrap justify-between  text-t-bold dark:text-white">
        <div>
          <h3 className="text-3.5xl font-bold "> Invoices</h3>
          <span className="text-xs text-t-regular dark:text-d-t-regular">
            There are {invoiceData.length} total invoices.
          </span>
        </div>
        <div className="flex gap-4  pt-4 tab:gap-14">
          <div className="relative self-center">
            <Button
              onClick={(e) => {
                setisFilterExpanded((prev) => !prev);
              }}
              aria-expanded={isFilterExpanded}
              aria-controls="filterInvoice"
              aria-haspopup="true"
              endIcon={
                isFilterExpanded ? (
                  <KeyboardArrowUp className="text-logo" />
                ) : (
                  <KeyboardArrowDown className="text-logo" />
                )
              }
              className="my-auto flex h-fit font-spartan  text-xs font-bold capitalize tracking-tight text-t-bold dark:text-white "
            >
              Filter
              <span className="hidden lowercase tab:block">
                &nbsp;by status
              </span>
            </Button>

            {isFilterExpanded && (
              <ClickAwayListener
                onClickAway={() => {
                  setisFilterExpanded(false);
                }}
              >
                <div>
                  <FilterDropdown setfilterInvoiceVal={setfilterInvoiceVal} />
                </div>
              </ClickAwayListener>
            )}
          </div>

          <Link to="/new-invoice" className="grid place-content-center">
            <Button
              variant="contained"
              startIcon={<AddCircle className="h-8 scale-[1.4]" />}
              className=" flex h-fit rounded-full bg-logo  font-spartan text-xs font-bold capitalize tracking-tight hover:bg-logo/80"
            >
              New <span className="hidden tab:block">&nbsp; Invoice</span>
            </Button>
          </Link>
        </div>
      </div>
      {!state.loading ? (
        invoiceData
          .filter((invoice) =>
            filterInvoiceVal == "all"
              ? invoice
              : invoice.status == filterInvoiceVal,
          )
          .map((invoice, index) => {
            const { id, paymentDue, clientName, status, total } = invoice;

            return (
              <Link to={`/invoice/${id}`} key={nanoid()}>
                <Paper
                  elevation={2}
                  component="article"
                  square={false}
                  className="mb-3  flex justify-between rounded-md border  border-transparent bg-items py-4 pl-6 pr-3 text-left text-xs text-t-bold transition hover:border-logo dark:bg-d-items dark:text-white tab:grid tab:grid-cols-12 "
                >
                  <ul className="info flex  flex-col justify-between gap-2 tab:col-span-7 tab:grid tab:grid-cols-8 tab:items-center">
                    <li className="font-bold tab:col-span-2">
                      <span className="text-hash">#</span>
                      {id}
                    </li>
                    <li className="text-t-regular dark:text-d-t-regular tab:col-span-3">
                      {"Due " + paymentDue}
                    </li>
                    <li className="text-t-regular dark:text-d-t-regular tab:col-span-3">
                      {clientName}
                    </li>
                  </ul>
                  <ul className="price flex  flex-col items-center justify-between text-right  text-[0.875rem] font-bold tab:col-span-4 tab:grid tab:grid-cols-5">
                    <li className="-auto tab:col-span-2">{"₹" + total}</li>
                    <li className="tab:col-span-3">
                      <Button
                        className={`pointer-events-none px-4 font-spartan text-[0.75rem] font-bold capitalize tracking-tight hover:bg-transparent ${status == "paid" ? "bg-paid/10 text-paid" : status == "draft" ? "bg-draft/30 text-[rgb(103,112,168)]" : "bg-pending/10 text-pending"}`}
                        variant="contained"
                        startIcon={
                          <FiberManualRecord className="h-3.5 w-3.5" />
                        }
                        disableElevation
                      >
                        {status}
                      </Button>
                    </li>
                  </ul>
                  <IconButton className="ml-auto hidden w-fit tab:block">
                    <ChevronRight className="text-logo" />
                  </IconButton>
                </Paper>
              </Link>
            );
          })
      ) : (
        <Loader classes={"mt-20"} />
      )}
      {/* {TODO: Pagination from server */}
      {/* <Pagination
      className=" grid pt-8 text-logo child:child:child:text-base child:child:child:text-white  "
      count={10}
    /> */}
    </Box>
  ) : (
    <ErrorPage />
  );
}

export default memo(PreviewInvoice);
