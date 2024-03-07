import { testimonials } from "./data";

const Testimonials = () => {
    return <section className="card mt-3">
    <div className="card-body">
      <h3 className="card-title">Testimonials</h3>
      <div className="d-grid gap-3">
        {testimonials.map((testimonial) => {
          return <div className="testimonial">
            <p className="testimonial__content">{testimonial.content}</p>
            <p className="testimonial__overview"><b>{testimonial.name}</b>, {testimonial.designation}</p>
          </div>
        })}
      </div>
    </div>
  </section>
}

export default Testimonials;