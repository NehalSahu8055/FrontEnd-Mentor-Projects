import React from "react";
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

function FilterDropdown({ setfilterInvoiceVal }) {
  return (
    <>
      <Paper
        elevation={4}
        id="filterMenu "
        className="absolute top-16 w-[10rem] rounded-lg bg-items py-2 pl-4 text-white dark:bg-d-items"
      >
        <FormControl>
          <RadioGroup
            className="-space-y-2"
            onChange={(e) => {
              setfilterInvoiceVal(e.target.value);
            }}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
          >
            <FormControlLabel
              className="tracking-tight child:my-auto child:font-spartan child:text-xs child:font-bold"
              value="all"
              control={
                <Radio className="text-logo child:text-logo" size="small" />
              }
              label="All"
            />
            <FormControlLabel
              className="tracking-tight child:my-auto child:font-spartan child:text-xs child:font-bold"
              value="paid"
              control={
                <Radio className="text-logo child:text-logo" size="small" />
              }
              label="Paid"
            />
            <FormControlLabel
              className="tracking-tight child:my-auto child:font-spartan child:text-xs child:font-bold"
              value="pending"
              control={
                <Radio className="text-logo child:text-logo" size="small" />
              }
              label="Pending"
            />
            <FormControlLabel
              className="tracking-tight child:my-auto child:font-spartan child:text-xs child:font-bold"
              value="draft"
              control={
                <Radio className="text-logo child:text-logo" size="small" />
              }
              label="Draft"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </>
  );
}

export default FilterDropdown;
