import './App.css'

const capabilities = [
  {
    title: 'Tenant-aware operations',
    description:
      'Keep every workspace isolated with scoped teams, clients, projects, and documents.',
  },
  {
    title: 'Project execution visibility',
    description:
      'Track progress, ownership, and approvals across active client deliverables.',
  },
  {
    title: 'Billing and usage control',
    description:
      'Manage subscriptions, invoices, and usage metrics from a single dashboard.',
  },
]

const plans = [
  { name: 'Starter', price: '₹999/mo', limits: '3 team members • 20 clients' },
  { name: 'Growth', price: '₹2,999/mo', limits: '15 team members • 100 clients' },
  {
    name: 'Business',
    price: '₹7,999/mo',
    limits: '50 team members • Unlimited clients',
  },
  { name: 'Enterprise', price: 'Custom', limits: 'SSO • Audit logs • Dedicated DB' },
]

const workflow = [
  'Onboard your tenant and configure branding',
  'Invite internal members and assign roles',
  'Set up clients, projects, and milestones',
  'Share progress through the client portal',
]
const currentYear = new Date().getFullYear()

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <p className="brand">ClientFlow</p>
        <nav aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#plans">Plans</a>
          <a href="#workflow">Workflow</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Client operations portal for service businesses</p>
          <h1>Operate every client account from one React-powered workspace.</h1>
          <p className="hero-copy">
            ClientFlow centralizes tenant management, project delivery, collaboration,
            and billing into a clean multi-tenant experience.
          </p>
          <div className="hero-actions">
            <button type="button">Start free trial</button>
            <button type="button" className="ghost">
              Schedule demo
            </button>
          </div>
        </section>

        <section id="features" className="section">
          <h2>Core product capabilities</h2>
          <div className="grid cards">
            {capabilities.map((item) => (
              <article key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="plans" className="section">
          <h2>Subscription plans</h2>
          <div className="grid plans">
            {plans.map((plan) => (
              <article key={plan.name} className="plan">
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p>{plan.limits}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="section workflow">
          <h2>How teams use ClientFlow</h2>
          <ol>
            {workflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </main>

      <footer>
        <p>© {currentYear} ClientFlow • Built with React</p>
      </footer>
    </div>
  )
}

export default App
