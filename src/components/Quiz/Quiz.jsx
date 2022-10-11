import React, { useState } from "react";

import { Radio } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import RadioGroup from "@mui/joy/RadioGroup";

const Quiz = ({ question: { question, correctAnswer, options }, idx }) => {
  const [value, setValue] = useState("");

  const handleChange = (event, correctAnswer) => {
    if (correctAnswer === event.target.value) {
      console.log("Correct");
    } else {
      console.log("False");
    }
    setValue(event.target.value);
  };
  return (
    <div className="rounded-lg w-[50%] mx-auto backdrop-blur-[5px] bg-white/30 shadow-lg text-[#000A38]">
      <FormControl>
        <FormLabel>
          <span className="text-[28px] font-bold">
            Quiz {idx}: {question}
          </span>
        </FormLabel>
        <RadioGroup
          defaultValue=""
          name="controlled-radio-buttons-group"
          value={value}
          onChange={(event) => handleChange(event, correctAnswer)}
          sx={{ my: 2, mx: 5 }}
        >
          {options.map((option) => (
            <Radio
              className="font-medium"
              size="lg"
              variant="outlined"
              value={option}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Quiz;
