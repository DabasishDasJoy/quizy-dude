import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Radio } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import RadioGroup from "@mui/joy/RadioGroup";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Quiz = ({ question: { question, correctAnswer, options }, idx }) => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const handleChange = (event, correctAnswer) => {
    if (correctAnswer === event.target.value) {
      console.log("Correct");
      toast.success("Correct Answer", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } else {
      console.log("False");
      toast.error("Wrong Answer", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
    setValue(event.target.value);
  };

  const handleShowAnswer = () => {
    setVisible(!visible);
  };
  return (
    <div className="relative rounded-lg w-[50%] mx-auto backdrop-blur-[5px] bg-white/30 shadow-lg text-[#000A38]">
      <FormControl>
        <FormLabel>
          <span className="text-[28px] font-bold">
            Quiz {idx}: {question.replace(/(<([^>]+)>)/gi, "")}
          </span>
        </FormLabel>
        <RadioGroup
          defaultValue=""
          name="controlled-radio-buttons-group"
          value={value}
          onChange={(event) => handleChange(event, correctAnswer)}
          sx={{ my: 2, mx: 5 }}
        >
          {options.map((option, idx) => (
            <Radio
              key={idx}
              className="font-medium"
              size="lg"
              variant="outlined"
              value={option}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <div className={visible ? "visible" : "hidden"}>
        <h4>Correct Answer: {correctAnswer}</h4>
      </div>
      <button onClick={handleShowAnswer} className="absolute top-2 right-4">
        <FontAwesomeIcon icon={faEye} />
      </button>
    </div>
  );
};

export default Quiz;
