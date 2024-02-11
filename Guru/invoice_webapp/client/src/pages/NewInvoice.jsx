import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  ButtonGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { Delete } from "@mui/icons-material";
import generateRandomId from "../utils/generateRandomId";
import { getFormattedDate } from "../utils/getFormattedDate";

function NewInvoice() {
  const [hasEmailError, sethasEmailError] = useState(false);
  const [emailHelperText, setemailHelperText] = useState("");

  const [streetAddress, setstreetAddress] = useState("");
  const [city, setcity] = useState("");
  const [postCode, setpostCode] = useState("");
  const [country, setcountry] = useState("");

  const [clientName, setclientName] = useState("");
  const [clientEmail, setclientEmail] = useState("");
  const [billToStreetAddress, setbillToStreetAddress] = useState("");
  const [billToCity, setbillToCity] = useState("");
  const [billToPostCode, setbillToPostCode] = useState("");
  const [billToCountry, setbillToCountry] = useState("");
  const [invoiceDate, setinvoiceDate] = useState("");
  const [paymentTerms, setpaymentTerms] = useState("");
  const [description, setdescription] = useState("");
  const [itemList, setitemList] = useState([]);
  const [itemName, setitemName] = useState("");
  const [qty, setqty] = useState("");
  const [price, setprice] = useState("");
  const [overAllTotal, setoverAllTotal] = useState(0);

  const [billData, setbillData] = useState({});
  const [billFromData, setbillFromData] = useState({});
  const [billToData, setbillToData] = useState({});
  const [status, setstatus] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    setbillData({
      id: generateRandomId(),
      createdAt: getFormattedDate(),
      // paymentDue: {paymentDue},
      description: description,
      paymentTerms: paymentTerms,
      clientName: clientName,
      clientEmail: clientEmail,
      status: status,
      senderAddress: {
        street: streetAddress,
        city: city,
        postCode: postCode,
        country: country,
      },
      clientAddress: {
        street: billToStreetAddress,
        city: billToCity,
        postCode: postCode,
        country: country,
      },
      items: [
        {
          name: itemName,
          quantity: qty,
          price: price,
          total: price * qty,
        },
      ],
      // total: billData.items.reduce((acc, item) => {
      //   return acc + item.total;
      // }, 0),
    });
    console.log(billData);
  };
  const formFieldBillFromArray = [
    {
      id: "streetAddress",
      label: "Street Address",
      name: "streetAddress",
      value: streetAddress,

      autoComplete: "on",
      onChange: (e) => {
        setstreetAddress(e.target.value);
      },
    },
    {
      id: "city",
      label: "City",
      name: "city",
      value: city,

      autoComplete: "on",
      onChange: (e) => {
        setcity(e.target.value);
      },
    },
    {
      id: "postCode",
      label: "Post Code",
      name: "postCode",
      value: postCode,
      autoComplete: "on",
      onChange: (e) => {
        setpostCode(e.target.value);
      },
    },
    {
      id: "country",
      label: "Country",
      name: "country",
      value: country,
      autoComplete: "on",
      onChange: (e) => {
        setcountry(e.target.value);
      },
    },
  ];
  const formFieldBillToArray = [
    {
      id: "clientName",
      label: "Client Name",
      name: "clientName",
      value: clientName,
      autoComplete: "on",
      onChange: (e) => {
        setclientName(e.target.value);
      },
    },
    {
      id: "clientEmail",
      label: "Client Email",
      name: "clientEmail",
      value: clientEmail,
      autoComplete: "on",
      onChange: (e) => {
        setclientEmail(e.target.value);
      },
    },
    {
      id: "billToStreetAddress",
      label: "Street Address",
      name: "billToStreetAddress",
      value: billToStreetAddress,
      autoComplete: "on",
      onChange: (e) => {
        setbillToStreetAddress(e.target.value);
      },
    },

    {
      id: "billToCity",
      label: "City",
      name: "billToCity",
      value: billToCity,
      autoComplete: "on",
      onChange: (e) => {
        setbillToCity(e.target.value);
      },
    },
    {
      id: "billToPostCode",
      label: "Post Code",
      name: "billToPostCode",
      value: billToPostCode,
      autoComplete: "on",
      onChange: (e) => {
        setbillToPostCode(e.target.value);
      },
    },
    {
      id: "billToCountry",
      label: "Country",
      name: "billToCountry",
      value: billToCountry,
      autoComplete: "on",
      onChange: (e) => {
        setbillToCountry(e.target.value);
      },
    },
    {
      id: "invoiceDate",
      label: "Invoice Date",
      name: "invoiceDate",
      value: invoiceDate,
      autoComplete: "on",
      onChange: (e) => {
        setinvoiceDate(e.target.value);
      },
    },
    {
      id: "paymentTerms",
      label: "Payment Terms",
      name: "paymentTerms",
      value: paymentTerms,
      autoComplete: "on",
      onChange: (e) => {
        setpaymentTerms(e.target.value);
      },
    },
    {
      id: "description",
      label: "Description",
      name: "description",
      value: description,
      autoComplete: "on",
      onChange: (e) => {
        setdescription(e.target.value);
      },
    },
    // {
    //   id: "itemList",
    //   label: "Payment Terms",
    //   name: "paymentTerms",
    //   value: paymentTerms,
    //  autoComplete:"on", onChange: (e) => {
    //     setpaymentTerms(e.target.value);
    //   },
    // },
  ];

  const addItemsData = [
    {
      id: "itemName",
      label: "Item Name",
      name: "itemName",
      value: itemName,
      autoComplete: "on",
      onChange: (e) => {
        setitemName(e.target.value);
      },
    },

    {
      id: "qty",
      label: "Qty.",
      type: "number",
      name: "qty",
      value: qty,

      autoComplete: "on",
      onChange: (e) => {
        setqty(e.target.value);
      },
    },
    {
      id: "price",
      label: "Price",
      type: "number",
      name: "price",
      value: price,
      autoComplete: "on",
      onChange: (e) => {
        setprice(e.target.value);
      },
    },
  ];

  return (
    <Box
      className="mx-auto max-w-2xl flex-grow text-t-bold dark:text-white"
      component="section"
    >
      <h2 className="sr-only">Create New Invoice</h2>
      <h3 className="text-3.5xl font-bold  "> Create Invoice</h3>

      <legend className="pt-8 font-spartan text-sm font-bold text-logo/90">
        Bill From
      </legend>
      <Box
        component="form"
        className="grid gap-3 pt-4"
        // action='http://localhost:5173/dashboard'
        onSubmit={submitForm}
        noValidate
      >
        <TextField
          // error={hasEmailError}
          // helperText={emailHelperText}
          className="child2:before:border-b/80  childfocus:text-white/80 text-t-regular child:text-sm child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
          size="small"
          variant="filled"
          {...formFieldBillFromArray[0]}
          fullWidth
          required
        />
        <div className="flex flex-wrap gap-3 tab:flex-nowrap">
          {formFieldBillFromArray.map((props, index) => {
            if (index > 0)
              return (
                <TextField
                  key={+index}
                  className="child2:before:border-b/80 childfocus:text-white/80 text-t-regular child:text-sm child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
                  size="small"
                  // error={hasEmailError}
                  // helperText={emailHelperText}
                  variant="filled"
                  {...props}
                  fullWidth
                  required
                />
              );
          })}
        </div>

        <fieldset>
          <legend className="pt-8 font-spartan text-sm font-bold text-logo/90">
            Bill To
          </legend>
          <Box
            className="grid gap-3 pt-4"
            // action='http://localhost:5173/dashboard'
            onSubmit={submitForm}
            noValidate
          >
            <div className="flex flex-col flex-wrap gap-3 tab:flex-nowrap">
              {formFieldBillToArray.map((props, index) => {
                if (index >= 0 && index <= 2)
                  return (
                    <TextField
                      key={nanoid()}
                      className="child2:before:border-b/80 childfocus:text-white/80 text-t-regular child:text-sm child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
                      size="small"
                      // error={hasEmailError}
                      // helperText={emailHelperText}
                      variant="filled"
                      {...props}
                      fullWidth
                      required
                    />
                  );
              })}
            </div>

            <div className="flex flex-wrap gap-3 tab:flex-nowrap">
              {formFieldBillToArray.map((props, index) => {
                if (index >= 3 && index <= 5)
                  return (
                    <TextField
                      key={nanoid()}
                      className="child2:before:border-b/80 childfocus:text-white/80 text-t-regular child:text-sm child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
                      size="small"
                      // error={hasEmailError}
                      // helperText={emailHelperText}
                      variant="filled"
                      {...props}
                      fullWidth
                      required
                    />
                  );
              })}
            </div>
            <div className="flex flex-wrap gap-3 tab:flex-nowrap">
              {formFieldBillToArray.map((props, index) => {
                if (index >= 6 && index <= 7)
                  return (
                    <TextField
                      key={"ID3" + index}
                      className="child2:before:border-b/80 childfocus:text-white/80 text-t-regular child:text-sm child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
                      size="small"
                      // error={hasEmailError}
                      // helperText={emailHelperText}
                      variant="filled"
                      {...props}
                      fullWidth
                      required
                    />
                  );
              })}
            </div>
            <TextField
              className="child2:before:border-b/80 childfocus:text-white/80 text-t-regular child:text-sm child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
              size="small"
              // error={hasEmailError}
              // helperText={emailHelperText}
              variant="filled"
              {...formFieldBillToArray[8]}
              fullWidth
              required
            />
          </Box>
        </fieldset>
        <fieldset>
          <h3 className="text-gray pt-14 text-lg font-bold  text-t-bold dark:text-white">
            ItemList
          </h3>
          <Box className="flex flex-wrap gap-3 pb-10 pt-6 tab:flex-nowrap">
            {addItemsData.map((props, index) => {
              return (
                <TextField
                  key={"ID4" + index}
                  className="child2:before:border-b/80 childfocus:text-white/80 text-t-regular child:text-sm child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
                  size="small"
                  // error={hasEmailError}
                  // helperText={emailHelperText}
                  variant="filled"
                  {...props}
                  fullWidth
                  required
                />
              );
            })}
            <IconButton className="group">
              <Delete className="text-md text-gray-400 transition  group-hover:text-red-500" />
            </IconButton>
          </Box>
          <Button
            onClick={() => {
              // Todo
              // billData.items.push({ sdfsa: dfasd });
            }}
            className="h-12 w-full rounded-full font-spartan font-bold capitalize tracking-tight text-slate-500 hover:bg-gray-200 dark:bg-d-input/80 dark:hover:bg-d-input/100 "
            variant="contained"
          >
            +Add New Item
          </Button>
        </fieldset>
        <Box className="flex flex-wrap justify-between pt-14 tab:flex-nowrap">
          <Link to="/">
            <Button
              variant="contained"
              className="mb-3 w-full rounded-full bg-d-items px-6 py-4 font-spartan text-xs font-bold  capitalize tracking-tight hover:bg-d-items/70 tab:mb-0 tab:w-fit"
            >
              Discard
            </Button>
          </Link>
          <Box className="flex w-full flex-wrap gap-3 tab:w-fit tab:flex-nowrap">
            <Button
              onClick={() => {
                setstatus("draft");
              }}
              type="submit"
              variant="contained"
              className="w-full rounded-full bg-d-side-nav px-6 py-4 font-spartan text-xs  font-bold capitalize tracking-tight hover:bg-d-side-nav/70 tab:w-fit"
            >
              Save as Draft
            </Button>
            <Button
              type="submit"
              onClick={() => {
                setstatus("pending");
              }}
              variant="contained"
              className="w-full rounded-full bg-logo/70 px-6 py-4 font-spartan  text-xs font-bold capitalize tracking-tight hover:bg-logo tab:w-fit"
            >
              Save & Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NewInvoice;
