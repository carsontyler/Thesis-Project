import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import { useForm } from "react-hook-form";
import api from "../api";

export const ThankYouComp: React.FC = () => {
  
  let [submitted, setSubmitted] = useState(0);
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
    setSubmitted(1);
    let json = [{
      Name: values["name"],
      Email: values["email"]
    }];
    try {
      api.post('postcompensation', json).catch((error) => {
        console.log("error");
        console.log(error);
      }).then((data) => {
        console.log("then");
        console.log(data); 
      });
    } catch (error) {
      console.log("shouldn't be here :(");
    }
  }

  useEffect(() => {

  }, []);

  useEffect(() => {

  }, [submitted]);

  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <span>Thank you for participating!</span>
        <br /> <br />
        {submitted === 0 &&
          <div>
            <span>Please fill out this form if you wish to receive a $10.00 Amazon Gift Card</span>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <label>Name:  </label>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <input
                  name="name"
                  ref={register({
                    required: "Required"
                  })}
                />
                {errors.name && errors.name.message}
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <label>Email:  </label>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <input
                  name="email"
                  ref={register({
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    }
                  })}
                />
                {errors.email && errors.email.message}
              </View>
              <View
                style={{ flex: 1, flexDirection: "row", marginTop: "1em" }}
              >
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <Button
                    onPress={handleSubmit(onSubmit)}
                    title="Submit"
                    color="#4ECCA3"
                  />
                </View>
                <View style={{ flex: 5, flexDirection: "column" }} />
              </View>
            </form>
          </div>
        }
        {submitted === 1 &&
          <div>Form submitted!</div>
        }
      </View>

    </View>
  );
}