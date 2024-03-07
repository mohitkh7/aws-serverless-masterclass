import { socials } from './data';


const Social = () => {
  return <section className="card">
    <div className="card-body">
      <h3 className="card-title">Social</h3>
      <div className="d-grid gap-3">
        <div className="row gy-3">
          {socials.map((social) => {
            return <a className="col-4 text-decoration-none" target="_blank" rel="noreferrer"
              href={social.url} key={social.name}>
              {social.icon} {social.name}
            </a>
          })}
        </div>
      </div>
    </div>
  </section>
}

export default Social;