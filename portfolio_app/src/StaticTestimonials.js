import React, { useState } from "react";
import { staticTestimonials } from "./data";

const StaticTestimonials = () => {
  const [testimonials, setTestimonials] = useState(staticTestimonials);

  return <section className="card mt-3">
    <div className="card-body">
      <h3 className="card-title">Testimonials</h3>
      <div className="d-grid gap-3">
        {testimonials.map((testimonial) => {
          return <div className="testimonial" key={testimonial.name}>
            <p className="testimonial__content">{testimonial.feedback}</p>
            <p className="testimonial__overview"><b>{testimonial.name}</b>, {testimonial.designation}</p>
          </div>
        })}
      </div>
    </div>
  </section>
}

export default StaticTestimonials;