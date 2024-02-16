import React, { memo, useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  ButtonGroup,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import generateRandomId from "../utils/generateRandomId";
import { getFormattedDate } from "../utils/getFormattedDate";
// import { postInvoiceData } from "../features/invoiceSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoiceData, postInvoiceData } from "../actions/invoice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewInvoice() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInvoiceData());
  }, [dispatch]);

  const [hasEmailError, sethasEmailError] = useState(false);
  const [emailHelperText, setemailHelperText] = useState("");
  const state = useSelector((state) => state);
  const invoiceData = state.invoice;

  const preFilledInvoice = invoiceData.filter(
    (invoice) => invoice.id == state.editing.id,
  );
  const preFilledBillData = {
    id: preFilledInvoice.id,
    createdAt: preFilledInvoice.createdAt,
    // paymentDue: {paymentDue},
    description: preFilledInvoice.description,
    paymentTerms: preFilledInvoice.paymentTerms,
    clientName: preFilledInvoice.clientName,
    clientEmail: preFilledInvoice.clientEmail,
    status: preFilledInvoice.status,
    senderAddress: {
      street: preFilledInvoice.streetAddress,
      city: preFilledInvoice.city,
      postCode: preFilledInvoice.postCode,
      country: preFilledInvoice.country,
    },
    clientAddress: {
      street: preFilledInvoice.billToStreetAddress,
      city: preFilledInvoice.billToCity,
      postCode: preFilledInvoice.postCode,
      country: preFilledInvoice.country,
    },
    items: preFilledInvoice.itemList,
    // total: itemList.reduce((acc, item) => {
    //   return acc + item.total;
    // }, 0),
  };

  const [billData, setbillData] = useState(
    state.editing.isEditing ? preFilledBillData : {},
  );
  const [streetAddress, setstreetAddress] = useState();
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

  const [billFromData, setbillFromData] = useState({});
  const [billToData, setbillToData] = useState({});
  const [status, setstatus] = useState("");
  const [itemIndexArr, setitemIndexArr] = useState([nanoid()]);
  const [itemFormNo, setitemFormNo] = useState(0);

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setbillData({
      id: generateRandomId(),
      createdAt: getFormattedDate(),
      // paymentDue: {paymentDue},
      description: description,
      paymentTerms: paymentTerms,
      clientName: clientName,
      clientEmail: clientEmail,
      status: status == "" ? "pending" : status,
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
      items: itemList,
      // total: itemList.reduce((acc, item) => {
      //   return acc + item.total;
      // }, 0),
    });
    navigate("/");
  };

  const handleItemData = (e) => {
    toast("Item Added!");
    e.preventDefault();
    e.stopPropagation();

    const form = document.querySelector("#main-form");

    const formData = new FormData(form);

    const newItem = {
      name: formData.get(`itemName${itemIndexArr[itemFormNo]}`),
      quantity: formData.get(`qty${itemIndexArr[itemFormNo]}`),
      price: formData.get(`price${itemIndexArr[itemFormNo]}`),
      total:
        formData.get(`price${itemIndexArr[itemFormNo]}`) *
        formData.get(`qty${itemIndexArr[itemFormNo]}`),
    };

    setitemList((prev) => {
      return [...prev, newItem];
    });
  };

  useEffect(() => {
    dispatch(postInvoiceData(billData));
    console.log(billData);
  }, [billData]);

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
      // id: `itemName${itemIndex}`,
      label: "Item Name",
      type: "text",
      name: "itemName",
      autoComplete: "on",
    },

    {
      // id: `qty${itemIndex}`,
      label: "Qty.",
      type: "number",
      name: "qty",
      autoComplete: "on",
    },
    {
      // id: `price${itemIndex}`,
      label: "Price",
      type: "number",
      name: "price",
      autoComplete: "on",
    },
  ];

  return (
    <Box
      className="mx-auto max-w-2xl flex-grow text-t-bold dark:text-white"
      component="section"
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className="sr-only">Create New Invoice</h2>
      <h3 className="text-3.5xl font-bold  "> Create Invoice</h3>

      <legend className="pt-8 font-spartan text-sm font-bold text-logo/90">
        Bill From
      </legend>
      <Box component="form" className="grid gap-3 pt-4" onSubmit={submitForm}>
        <TextField
          // error={hasEmailError}
          // helperText={emailHelperText}
          className="child2:before:border-b/80  text-t-regular child:text-sm child:focus:text-white/80 child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
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
                  key={index}
                  className="child2:before:border-b/80  text-t-regular child:text-sm child:focus:text-white/80 child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
                  size="small"
                  // error={hasEmailError}
                  // helperText={emailHelperText}
                  // value={}
                  // {...{
                  //   ...props,
                  //   value: props.value + itemIndexArr[itemFormNo],
                  // }}
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
          <Box className="grid gap-3 pt-4">
            <div className="flex flex-col flex-wrap gap-3 tab:flex-nowrap">
              {formFieldBillToArray.map((props, index) => {
                if (index >= 0 && index <= 2)
                  return (
                    <TextField
                      key={index}
                      className="child2:before:border-b/80  text-t-regular child:text-sm child:focus:text-white/80 child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
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
                      key={index}
                      className="child2:before:border-b/80  text-t-regular child:text-sm child:focus:text-white/80 child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
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
                      key={index + nanoid()}
                      className="child2:before:border-b/80 text-t-regular child:text-sm child:focus:text-white/80 child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
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
              className="child2:before:border-b/80 text-t-regular child:text-sm child:focus:text-white/80 child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
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
          <Box
            id="main-form"
            component="form"
            className="flex flex-col  gap-3 pb-10 pt-6"
          >
            {itemIndexArr.map((item, index) => {
              return (
                <Box
                  key={index + nanoid()}
                  className="flex flex-wrap gap-3  tab:flex-nowrap"
                >
                  {addItemsData.map((props, index) => {
                    // console.log(props.name);
                    return (
                      <TextField
                        key={itemIndexArr[itemFormNo] + index}
                        id={itemIndexArr[itemFormNo] + index}
                        className="child2:before:border-b/80 text-t-regular child:text-sm child:focus:text-white/80 child2:bg-items child2:after:border-b-logo dark:child:text-white/80 child2:dark:bg-d-items"
                        size="small"
                        // error={true}
                        // helperText={emailHelperText}
                        variant="filled"
                        {...{
                          ...props,
                          name: props.name + itemIndexArr[itemFormNo],
                        }}
                        fullWidth
                        required
                      />
                    );
                  })}
                  <div className="flex">
                    <IconButton onClick={handleItemData} className="group">
                      <CheckCircleIcon className="text-gray-300 group-hover:text-green-300" />
                    </IconButton>
                    {/* <IconButton className="group ">
                      <Delete className=" text-gray-300 transition  group-hover:text-red-500" />
                    </IconButton> */}
                  </div>
                </Box>
              );
            })}
          </Box>
          {/* <Button
            onClick={() => {
              const id = nanoid();
              setitemIndexArr((prev) => [...prev, id]);
              setitemFormNo((prev) => ++prev);
            }}
            className="h-12 w-full rounded-full font-spartan font-bold capitalize tracking-tight text-slate-500 hover:bg-gray-200 dark:bg-d-input/80 dark:hover:bg-d-input/100 "
            variant="contained"
          >
            +Add New Item
          </Button> */}
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

export default memo(NewInvoice);
