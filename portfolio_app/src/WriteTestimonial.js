import React, { useState } from "react";
import { FaPen } from "react-icons/fa";

// const API_URL = "<<<<<INSERT HERE>>>>>";

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
        body: JSON.stringify(inputs)
      })
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return <>
    <div className="text-center mt-3">
      <button className="btn btn--border" onClick={() => setShowForm(!showForm)}><FaPen /> Write Testimonial</button>
    </div>
    <form style={{ display: showForm ? 'block' : 'none' }} onSubmit={handleSubmit}>
      <div className="row mt-4">
        <div className="col-6">
          <input type="text" className="form-control" minLength="2" name="name" placeholder="Name" onChange={handleChange} />
        </div>
        <div className="col-6">
          <input type="text" className="form-control" minLength="5" name="designation" placeholder="Designation" onChange={handleChange} />
        </div>
        <div className="col mt-2">
          <input type="text" className="form-control" minLength="5"name="feedback" placeholder="Share your thoughts..." onChange={handleChange} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-2 mx-2">Submit</button>
      <button type="button" className="btn btn--border mt-2 mx-2" onClick={() => setShowForm(false)}>Close</button>
    </form>
  </>
}

export default WriteTestimonial;