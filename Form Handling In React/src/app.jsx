import { useState } from "preact/hooks";
import "./app.css";
import { useForm } from "react-hook-form";

// creating a basic form using react hook

export function App() {
  const {
    register,
    handleSubmit,
    setError,  //setError is a function

    // isSubmiting is a value not a function
    formState: { errors, isSubmitting },
  } = useForm();

  // onSubmit, storing the data
  // delay is a HOF
  // we simulate delay
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(2); //2sec deley means we simulating network delay

    // now, not want to delay want to submit in actual
    // fetching api
    let r = await fetch("http://localhost:3000/", {method: "POST",  body: JSON.stringify(data)})
    let res = await r.JSON()
    console.log(data, res)

    // while we are submitting the form
    // if(data.username !== "shubham"){
    //   setError("myform", {message : "your username is not in formate"})
    //   // messese inside the myform => myform.message
      
    // }
    // if(data.username === "rohan"){
    //   setError("blockedUser", {message : "Sorry this user is blocked"})
    //   // setError( "name of error", "message(must in form of object)")
    // }
  };

  return (
    <>
      {/* creating a basic form using react hook  */}

      {isSubmitting && <div>Loading....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {/* for register our input into the hook by invoking the "register" function */}
          <input placeholder="enter your username" {...register("username", {required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "Minimum Length is 3 required" } , maxLength: { value: 8, message: "Maximum length is 8 required" },})} type="text"/>
            {errors.username && ( <div className="red">{errors.username.message}</div>)}
             {/* { required: true } is validation for required username and its a 2nd argument */}
          <br />

          {/* after formating */}
          <input placeholder="enter your password" {...register("password", { required: { value: true, message: "Password is required" },
                minLength: {
                value: 8,
                message: "password should not less then from 8 character",
              },
            })}
            type="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />



          {/* for throwing custom error & myform is making for error*/}
          {errors.myform && ( <div className="red">{errors.myform.message}</div>)}
          {errors.blockedUser && ( <div className="red">{errors.blockedUser.message}</div>)}


        </form>
      </div>
    </>
  );
}
