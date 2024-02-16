import { ChevronLeft, FiberManualRecord } from "@mui/icons-material";
import { Box, Button, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import {
  deleteInvoiceData,
  fetchInvoiceData,
  updateStatusInvoiceData,
} from "../../actions/invoice";
import Loader from "./../shared/Loader";
import { setisEditing } from "../../features/invoiceSlice";
import OverlayLoader from "../shared/OverlayLoader";

function DetailInvoice() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userid } = useParams();
  const state = useSelector((state) => state);
  const invoiceData = state.invoice;
  const detailInvoice = invoiceData.find((item) => item.id == userid);

  useEffect(() => {
    dispatch(fetchInvoiceData());
  }, [dispatch, userid, detailInvoice]);

  return (
    <Box
      className="mx-auto max-w-2xl flex-grow rounded-lg text-xs text-t-regular dark:text-d-t-regular"
      component="section"
    >
      <Link to="/">
        <Button
          className="my-auto font-spartan text-xs capitalize text-t-bold  dark:text-white"
          startIcon={<ChevronLeft className="my-auto text-logo " />}
        >
          Go back
        </Button>
      </Link>
      {detailInvoice ? (
        <>
          <Box className="mt-6 flex  items-center justify-between rounded-lg bg-items px-6 py-6 dark:bg-d-items ">
            <h2 className="sr-only">Detail Invoice</h2>

            <Box className="flex flex-col items-center gap-2 tab:flex-row">
              <span className="pr-4 text-xs">Status</span>
              <Button
                className={`pointer-events-none px-4 py-2 font-spartan text-[0.75rem] font-bold capitalize tracking-tight hover:bg-transparent ${detailInvoice.status == "paid" ? "bg-paid/10 text-paid" : detailInvoice.status == "draft" ? "bg-draft/30 text-[rgb(103,112,168)]" : "bg-pending/10 text-pending"}`}
                variant="contained"
                startIcon={<FiberManualRecord className="h-3.5 w-3.5" />}
                disableElevation
              >
                {detailInvoice.status}
              </Button>
            </Box>
            <Box className="flex flex-col gap-2 tab:flex-row">
              <Button
                onClick={() => {
                  dispatch(
                    setisEditing({ isEditing: true, id: detailInvoice.id }),
                  );
                  console.log(state.editing);
                  // navigate("/new-invoice");
                }}
                variant="contained"
                className="relative w-full rounded-full bg-d-side-nav px-6 py-4 font-spartan text-xs font-bold  capitalize tracking-tight hover:bg-d-side-nav/70 disabled:text-gray-400 tab:w-fit"
                disabled={state.editing.isEditing}
                disableElevation
              >
                Edit
                {/* <Loader classes={"absolute  w-6 h-6"} /> */}
              </Button>
              <Button
                onClick={() => {
                  dispatch(deleteInvoiceData(detailInvoice.id));
                  navigate("/");
                }}
                variant="contained"
                className="w-full rounded-full bg-red-400 px-6 py-4 font-spartan text-xs  font-bold capitalize tracking-tight hover:bg-red-400/80 tab:w-fit"
                disableElevation
              >
                Delete
              </Button>
              <Button
                onClick={() => {
                  dispatch(updateStatusInvoiceData(detailInvoice.id));
                }}
                variant="contained"
                className="w-full rounded-full bg-logo px-6 py-4 font-spartan text-xs  font-bold capitalize tracking-tight hover:bg-logo/70 tab:w-fit"
                disableElevation
              >
                Mark as Paid
              </Button>
            </Box>
          </Box>
          <Paper
            className="mt-8 rounded-lg  bg-items px-6 py-6 text-t-bold dark:bg-d-items dark:text-white"
            elevation={10}
          >
            <Box className=" grid rounded-lg bg-items  text-t-bold dark:bg-d-items dark:text-white">
              <Box className="grid flex-grow justify-between gap-8 pb-8 tab:flex">
                <Box className="flex flex-col gap-1">
                  <span className="text-base font-bold tab:col-span-2">
                    <span className="text-hash">#</span>
                    {detailInvoice.id}
                  </span>
                  <span>{detailInvoice.description}</span>
                </Box>
                <Box className="grid gap-1">
                  <span>{detailInvoice.clientAddress.street}</span>
                  <span>{detailInvoice.clientAddress.city}</span>
                  <span>{detailInvoice.clientAddress.postCode}</span>
                  <span>{detailInvoice.clientAddress.country}</span>
                </Box>
              </Box>
              <Box className="grid-col-12  grid-row-4 grid grid-flow-col">
                <Box className="col-span-full row-span-2 flex flex-col gap-2 pb-4 tab:col-span-3 tab:pb-0">
                  <span>Invoice Date</span>
                  <span className="text-sm font-bold">
                    {/* {detailInvoice.createdAt.split("-").reverse().join("/")} */}
                  </span>
                </Box>
                <Box className="col-span-full  row-span-2 mt-auto flex flex-col gap-2  pb-4 tab:col-span-3 tab:pb-0">
                  <span>Payment Due</span>
                  <span className="text-sm font-bold">
                    {/* {detailInvoice.paymentDue.split("-").reverse().join("/")} */}
                  </span>
                </Box>
                <Box className="col-span-full  row-span-4 flex flex-col gap-2 pb-4  tab:col-span-4 tab:pb-0">
                  <span>Bill to</span>
                  <span className="text-sm font-bold">
                    {detailInvoice.clientName}
                  </span>
                  <Box className="grid gap-1">
                    <span>{detailInvoice.senderAddress.street}</span>
                    <span>{detailInvoice.senderAddress.city}</span>
                    <span>{detailInvoice.senderAddress.postCode}</span>
                    <span>{detailInvoice.senderAddress.country}</span>
                  </Box>
                </Box>
                <Box className="col-span-full row-span-4 flex flex-col gap-2 tab:col-span-5">
                  <span>Sent to</span>
                  <span className="text-sm font-bold">
                    {detailInvoice.clientEmail}
                  </span>
                </Box>
              </Box>
            </Box>
            <Box className="mt-8 rounded-lg p-8 dark:bg-d-table">
              <table className="w-full">
                <thead>
                  <tr className="hidden child:pb-4 child:text-xxs  child:font-normal   tab:table-row">
                    <th className="text-left ">Item Name</th>
                    <th className="text-left  ">QTY.</th>
                    <th className="text-right ">Price</th>
                    <th className="text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {detailInvoice.items.map((item) => {
                    return (
                      <tr key={nanoid()} className="child:pb-6 child:font-bold">
                        <th className="text-left"> {item.name}</th>
                        <th className="hidden  text-left tab:table-cell">
                          {item.quantity}
                        </th>
                        <th className=" hidden text-right tab:table-cell">
                          {"₹" + item.price}
                        </th>
                        <th className="text-right"> {"₹" + item.total}</th>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot className="rounded-l bg-d-side-nav/5 dark:bg-d-side-nav/20">
                  <tr>
                    <th className="py-6 pl-4 text-left">Amount Due</th>
                    <td className="hidden tab:table-cell"></td>
                    <td className="hidden tab:table-cell"></td>
                    <td className="pr-6 text-right text-2xl font-bold">
                      {/* {"₹" + detailInvoice.total} */}
                      {"₹" + "400"}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Box>
          </Paper>
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
}

export default DetailInvoice;
