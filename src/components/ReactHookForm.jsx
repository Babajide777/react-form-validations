import React from "react";
import { useForm } from "react-hook-form";
import "../styles/css/hookForm.css";

const ReactHookForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(errors);
    console.log("RESULT", data);
    alert(JSON.stringify(data));
  };
  return (
    <div className="react-hook-form">
      <h2>React Hook Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input
          type="text"
          {...register("First name", {
            required: "First name is required",
            maxLength: 80,
          })}
        />
        {errors["First name"] && (
          <p role="alert">{errors["First name"].message}</p>
        )}

        <label>Last name</label>
        <input
          type="text"
          {...register("Last name", {
            required: "Last name is required",
            maxLength: 100,
          })}
        />
        {errors["Last name"] && (
          <p role="alert">{errors["Last name"].message}</p>
        )}

        <label>Email</label>
        <input
          type="text"
          {...register("Email", {
            required: "Email is not valid",
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors["Email"] && <p role="alert">{errors["Email"].message}</p>}

        <label>Mobile number</label>
        <input
          type="tel"
          {...register("Mobile number", {
            required: "Mobile Number is not valid",
            maxLength: 11,
            minLength: 8,
          })}
        />
        {errors["Mobile number"] && (
          <p role="alert">{errors["Mobile number"].message}</p>
        )}

        <label>Title</label>
        <select
          name="Title"
          {...register("title", { required: "Select a title" })}
        >
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
        {errors["title"] && <p role="alert">{errors["title"].message}</p>}

        <label>Are you a developer?</label>
        <label>Yes</label>
        <input
          type="radio"
          value="Yes"
          {...register("developer", { required: true })}
        />
        <label>No</label>
        <input
          type="radio"
          value="No"
          {...register("developer", { required: true })}
        />

        {errors["developer"] && (
          <p role="alert">{errors["developer"].message}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactHookForm;
