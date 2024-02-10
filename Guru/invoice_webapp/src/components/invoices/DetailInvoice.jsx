import { ChevronLeft, FiberManualRecord } from "@mui/icons-material";
import { Box, Button, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DetailInvoice() {
  // const detailInvoice = useSelector(state => state.detailInvoice)
  const detailInvoice = {
    id: "XM41",
    createdAt: "2021-08-21",
    paymentDue: "2021-09-20",
    description: "Graphic Design",
    paymentTerms: 30,
    clientName: "Alex Grim",
    clientEmail: "alexgrim@mail.com",
    status: "pending",
    senderAddress: {
      street: "19 Union Terrace",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "84 Church Way",
      city: "Bradford",
      postCode: "BD1 9PB",
      country: "United Kingdom",
    },
    items: [
      {
        name: "Banner Design",
        quantity: 1,
        price: 156.0,
        total: 156.0,
      },
      {
        name: "Email Design",
        quantity: 2,
        price: 200.0,
        total: 400.0,
      },
    ],
    total: 556.0,
  };

  const {
    id,
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  } = detailInvoice;
  console.log(detailInvoice);
  return (
    <Box
      className="mx-auto max-w-2xl flex-grow rounded-lg text-xs text-white"
      component="section"
    >
      <Link to="/">
        <Button
          className="my-auto font-spartan text-xs capitalize text-white/85"
          startIcon={<ChevronLeft className="my-auto text-logo " />}
        >
          Go back
        </Button>
      </Link>
      <Box className="mt-6 flex items-center justify-between rounded-lg bg-items px-6 py-6 dark:bg-d-items ">
        <h2 className="sr-only">Detail Invoice</h2>

        <Box>
          <span className="pr-4 text-xs">Status</span>
          <Button
            className={`px-4 py-2 font-spartan text-[0.75rem] font-bold capitalize tracking-tight hover:bg-transparent ${status == "paid" ? "bg-paid/10 text-paid" : status == "draft" ? "bg-draft/10 text-draft" : "bg-pending/10 text-pending"}`}
            variant="contained"
            startIcon={<FiberManualRecord className="h-3.5 w-3.5" />}
            disableElevation
          >
            {status}
          </Button>
        </Box>
        <Box className="flex gap-2">
          <Button
            variant="contained"
            className="w-full rounded-full bg-d-side-nav px-6 py-4 font-spartan text-xs  font-bold capitalize tracking-tight hover:bg-d-side-nav/70 tab:w-fit"
            disableElevation
          >
            Edit
          </Button>
          <Button
            variant="contained"
            className="w-full rounded-full bg-red-400 px-6 py-4 font-spartan text-xs  font-bold capitalize tracking-tight hover:bg-red-400/80 tab:w-fit"
            disableElevation
          >
            Delete
          </Button>
          <Button
            variant="contained"
            className="w-full rounded-full bg-logo px-6 py-4 font-spartan text-xs  font-bold capitalize tracking-tight hover:bg-logo/70 tab:w-fit"
            disableElevation
          >
            Mark as Paid
          </Button>
        </Box>
      </Box>
      <Paper
        className="mt-8 rounded-lg  bg-items px-6 py-6 text-white dark:bg-d-items"
        elevation={30}
      >
        <Box className=" grid rounded-lg bg-items  text-white dark:bg-d-items">
          <Box className="flex flex-grow justify-between pb-8">
            <Box className="flex flex-col gap-1">
              <span className="text-base font-bold tab:col-span-2">
                <span className="text-hash">#</span>
                {id}
              </span>
              <span>{description}</span>
            </Box>
            <Box className="grid gap-1">
              <span>{clientAddress.street}</span>
              <span>{clientAddress.city}</span>
              <span>{clientAddress.postCode}</span>
              <span>{clientAddress.country}</span>
            </Box>
          </Box>
          <Box className="grid-col-12  grid-row-4 grid grid-flow-col">
            <Box className="col-span-3 row-span-2 flex flex-col gap-2">
              <span>Invoice Date</span>
              <span className="text-sm font-bold">
                {createdAt.split("-").reverse().join("/")}
              </span>
            </Box>
            <Box className="col-span-3 row-span-2 mt-auto flex flex-col gap-2">
              <span>Payment Due</span>
              <span className="text-sm font-bold">
                {paymentDue.split("-").reverse().join("/")}
              </span>
            </Box>
            <Box className="col-span-4 row-span-4 flex flex-col gap-2">
              <span>Bill to</span>
              <span className="text-sm font-bold">{clientName}</span>
              <Box className="grid gap-1">
                <span>{senderAddress.street}</span>
                <span>{senderAddress.city}</span>
                <span>{senderAddress.postCode}</span>
                <span>{senderAddress.country}</span>
              </Box>
            </Box>
            <Box className="col-span-5 row-span-4 flex flex-col gap-2">
              <span>Sent to</span>
              <span className="text-sm font-bold">{clientEmail}</span>
            </Box>
          </Box>
        </Box>
        <Box className="dark:bg-d-table mt-8 rounded-lg p-8">
          <table className="w-full">
            <thead>
              <tr className="child:text-xxs child:pb-4   child:font-normal">
                <th className="text-left">Item Name</th>
                <th className="text-left">QTY.</th>
                <th className="text-right">Price</th>
                <th className="text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="child:pb-6 child:font-bold">
                <td className="text-left">New Logo</td>
                <td className="pl-3 text-left">1</td>
                <td className="text-right">£1,532.33</td>
                <td className="text-right">£1,532.33</td>
              </tr>
            </tbody>
            <tfoot className="rounded-lg  dark:bg-d-side-nav/20">
              <tr>
                <th className="py-6 pl-4 text-left">Amount Due</th>
                <td></td>
                <td></td>
                <td className="pr-6 text-right text-2xl font-bold">
                  £4,032.33
                </td>
              </tr>
            </tfoot>
          </table>
        </Box>
      </Paper>
    </Box>
  );
}

export default DetailInvoice;
