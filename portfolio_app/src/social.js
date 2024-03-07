import { socials } from './data';


const Social = () => {
  return <section className="card skills">
    <div className="card-body">
      <h3 className="skills__title card-title">Social</h3>
      <div className="skills__list d-grid gap-3">
        <div className="row gy-3">
          {socials.map((social) => {
            return <a className="col-4 text-decoration-none" target="_blank" key={social.name} rel="noreferrer"
              href={social.url}>
              {social.icon} {social.name}
            </a>
          })}
        </div>
      </div>
    </div>
  </section>
}

export default Social;