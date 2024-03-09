import React, { useState } from "react";
import { FaPen } from "react-icons/fa";

const API_URL = "https://fc72s36hl3.execute-api.ap-south-1.amazonaws.com/dev/recommendations";

const WriteTestimonial = () => {
  const [showForm, setShowForm] = useState(false);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    postTestimonial();
    setInputs({});
    e.target.reset();
  }

  const postTestimonial = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: inputs
      })
      console.log(response.json());
    } catch (error) {
      console.error(error);
    }
  }

  return <>
    <div className="text-center mt-3">
      <button className="btn btn--border" onClick={() => setShowForm(!showForm)}><FaPen /> Write Testimonial</button>
    </div>
    <form style={{ display: showForm ? 'block' : 'none' }} onSubmit={handleSubmit}>
      <div class="row mt-4">
        <div class="col-6">
          <input type="text" class="form-control" name="name" placeholder="Name" onChange={handleChange} />
        </div>
        <div class="col-6">
          <input type="text" class="form-control" name="designation" placeholder="Designation" onChange={handleChange} />
        </div>
        <div class="col mt-2">
          <input type="text" class="form-control" name="content" placeholder="Content" onChange={handleChange} />
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-2 mx-2">Submit</button>
      <button type="button" class="btn btn--border mt-2 mx-2" onClick={() => setShowForm(false)}>Close</button>
    </form>
  </>
}

export default WriteTestimonial;