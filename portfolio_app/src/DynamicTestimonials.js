import React, { useState, useEffect } from "react";
import WriteTestimonial from "./WriteTestimonial";

// const API_URL = "<<<<<INSERT HERE>>>>>";

const DynamicTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setTestimonials(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return <section className="card mt-3">
    <div className="card-body">
      <h3 className="card-title">Testimonials</h3>
      <div className="d-grid gap-3">
        {testimonials.map((testimonial) => {
          return <div className="testimonial" key={testimonial.id}>
            <p className="testimonial__content">{testimonial.feedback}</p>
            <p className="testimonial__overview"><b>{testimonial.name}</b>, {testimonial.designation}</p>
          </div>
        })}
      </div>
      <WriteTestimonial />
    </div>
  </section>
}

export default DynamicTestimonials;