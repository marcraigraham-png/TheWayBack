import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Download,
  FileText,
  Flame,
  Mail,
  Menu,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react'

const downloads = [
  {
    title: '30-Day Protocol Tracker',
    description: 'Track daily movement, private promises, emotional ledgers, and island-building.',
    href: '/downloads/way_back_30_day_protocol_tracker.pdf',
    icon: FileText,
  },
  {
    title: 'Island Scorecard',
    description: 'Rate the core pillars: body, money, mission, brotherhood, home, values, discipline, solitude, standards, and spiritual weight.',
    href: '/downloads/way_back_island_scorecard.pdf',
    icon: ShieldCheck,
  },
  {
    title: 'Emotional Ledger',
    description: 'Track the gap between trigger and response so you can feel without being ruled.',
    href: '/downloads/way_back_emotional_ledger.pdf',
    icon: Flame,
  },
  {
    title: 'Relationship Standards Checklist',
    description: 'Choose women by character, not chemistry alone.',
    href: '/downloads/way_back_relationship_standards_checklist.pdf',
    icon: CheckCircle2,
  },
  {
    title: 'Personal Code Worksheet',
    description: 'Write a short code you can live by when approval, lust, fear, or shame tests you.',
    href: '/downloads/way_back_personal_code_worksheet.pdf',
    icon: BookOpen,
  },
  {
    title: 'Build the Island: Mission and Brotherhood',
    description: 'Prompts for rebuilding direction, male friendship, and purposeful momentum.',
    href: '/downloads/way_back_brotherhood_mission_prompts.pdf',
    icon: Users,
  },
  {
    title: 'Emergency Protocol',
    description: 'A quick protocol for moments when you are flooded and about to act from the old wound.',
    href: '/downloads/way_back_emergency_protocol.pdf',
    icon: ShieldCheck,
  },
]

const brotherhoodItems = [
  'Weekly guidance, essays, and challenges',
  'Private Discord community',
  'Q&A threads for real-life situations',
  'Support while completing the 30-Day Protocol',
  'Brotherhood, accountability, and direct conversation around the work',
]

const bookLessons = [
  'Stop confusing approval with love.',
  'Build a life that does not collapse when a woman pulls away.',
  'Set clean boundaries without becoming cruel.',
  'Handle shame, desire, rejection, and resentment without being ruled by them.',
  'Choose women by character, not chemistry alone.',
  'Lead in love without controlling or disappearing.',
]

const AMAZON_BOOK_LINK = 'https://www.amazon.com/dp/B0H2YSPHKY'

const MAILERLITE_FORM_URL = 'https://preview.mailerlite.io/forms/2384693/188645658661487982/share'

function Button({ children, variant = 'primary', href, type = 'button' }) {
  const className = variant === 'outline' ? 'btn btn-outline' : variant === 'gold' ? 'btn btn-gold' : 'btn btn-primary'
  if (href) return <a className={className} href={href}>{children}</a>
  return <button className={className} type={type}>{children}</button>
}

function Nav() {
  const [open, setOpen] = useState(false)
  const navLinks = [
    ['The Way Back', '/the-way-back'],
    ['Brotherhood', '/the-way-back/brotherhood'],
    ['Contact', '/contact'],
  ]
  return (
    <nav className="nav">
      <div className="container navInner">
        <a className="brand" href="/the-way-back"><Compass size={20} /> Morpheus Black</a>
        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className={open ? 'navLinks navLinksOpen' : 'navLinks'}>
          {navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="navCta" href="/the-way-back/resources">Free Resources</a>
        </div>
      </div>
    </nav>
  )
}

function AuthorHomePage() {
  return (
    <div className="site">
      <Nav />
      <header className="bookHero">
        <div className="heroGlow" />
        <div className="container bookHeroGrid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="heroText">
            <div className="eyebrow"><Compass size={16} /> Author of The Way Back</div>
            <h1>Morpheus Black</h1>
            <p className="subtitle">Direct, practical writing for men rebuilding self-respect, discipline, and emotional command.</p>
            <p className="lede">Morpheus Black writes at the intersection of masculinity, shame, desire, relationships, and the long road back to the self. His work is built for men who do not need softer slogans — they need a clear mirror, a hard truth, and a practical path they can actually walk.</p>
            <div className="buttonRow heroButtonRow">
              <Button variant="gold" href="/the-way-back">Explore The Way Back <ArrowRight size={18} /></Button>
              <Button variant="outline" href="/the-way-back/resources">Free Resources</Button>
              <Button variant="outline" href="/the-way-back/brotherhood">Join the Brotherhood</Button>
              <Button variant="outline" href="/contact">Contact</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="coverWrap">
            <img src="/images/the-way-back-cover.png" alt="The Way Back book cover" className="bookCover" />
          </motion.div>
        </div>
      </header>

      <main>
        <section className="section container">
          <div className="sectionIntro centered">
            <p className="smallCaps">Current Book</p>
            <h2>The Way Back</h2>
            <p>A roadmap for men who refuse to stay lost. Start with the book, use the resources, then go deeper inside the Brotherhood.</p>
          </div>
          <div className="threeGrid">
            <article className="featureCard">
              <BookOpen size={30} />
              <h3>Read the Book</h3>
              <p>Begin with the complete roadmap: shame, approval, women, desire, boundaries, leadership, intimacy, and legacy.</p>
              <a className="textLink" href="/the-way-back">View the book page <ArrowRight size={15} /></a>
            </article>
            <article className="featureCard">
              <Download size={30} />
              <h3>Use the Resources</h3>
              <p>Get worksheets for the 30-Day Protocol, Emotional Ledger, Island Scorecard, Relationship Standards, and Personal Code.</p>
              <a className="textLink" href="/the-way-back/resources">Open resources <ArrowRight size={15} /></a>
            </article>
            <article className="featureCard">
              <Users size={30} />
              <h3>Join the Brotherhood</h3>
              <p>Go deeper with weekly guidance, private discussion, Q&A threads, and accountability around the work.</p>
              <a className="textLink" href="/the-way-back/brotherhood">Learn more <ArrowRight size={15} /></a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function BookPage() {
  return (
    <div className="site">
      <Nav />
      <header className="bookHero">
        <div className="heroGlow" />
        <div className="container bookHeroGrid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="heroText">
            <div className="eyebrow"><Compass size={16} /> A roadmap for men who refuse to stay lost</div>
            <h1>The Way Back</h1>
            <p className="subtitle">A field guide for reclaiming your worth, rebuilding your life, and becoming the man who no longer abandons himself.</p>
            <p className="lede">For men who are tired of chasing approval, bleeding their worth into women, calling fear maturity, and living like strangers to their own strength.</p>
            <div className="buttonRow heroButtonRow">
              <Button variant="gold" href={AMAZON_BOOK_LINK}>Buy Now on Amazon <ArrowRight size={18} /></Button>
              <Button variant="outline" href="/the-way-back/pdf">Get the PDF</Button>
              <Button variant="outline" href="/the-way-back/resources">Free Resources</Button>
              <Button variant="outline" href="/the-way-back/brotherhood">Join the Brotherhood</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="coverWrap">
            <img src="/images/the-way-back-cover.png" alt="The Way Back book cover" className="bookCover" />
          </motion.div>
        </div>
      </header>

      <main>
        <section className="section container">
          <div className="sectionIntro centered">
            <p className="smallCaps">The Promise</p>
            <h2>This is not another book about becoming harder.</h2>
            <p>It is about becoming whole enough to love, lead, desire, grieve, say no, and build without losing yourself in the process.</p>
          </div>
          <div className="threeGrid">
            <article className="featureCard">
              <ShieldCheck size={30} />
              <h3>Reclaim Your Center</h3>
              <p>Understand shame, approval hunger, rejection, and emotional dependence without turning pain into identity.</p>
            </article>
            <article className="featureCard">
              <Compass size={30} />
              <h3>Build the Island</h3>
              <p>Create the foundation that makes love possible: body, work, money, mission, brotherhood, values, and order.</p>
            </article>
            <article className="featureCard">
              <Flame size={30} />
              <h3>Love Without Submission</h3>
              <p>Learn desire, dating, boundaries, leadership, intimacy, and legacy without control or self-erasure.</p>
            </article>
          </div>
        </section>

        <section className="section band">
          <div className="container split">
            <div>
              <p className="smallCaps">Who It Is For</p>
              <h2>For the man who knows something in him has been waiting to be trained.</h2>
              <p>This book is for the man who has been useful but unknown, desired but not grounded, strong in public but quietly ruled by shame, lust, approval, or loneliness.</p>
              <p>It does not ask him to hate women, worship himself, or become untouchable. It asks him to build a life sturdy enough to hold love without turning love into a rescue mission.</p>
            </div>
            <div className="insideCard">
              <h3>Inside the book, you will learn to:</h3>
              <ul className="cleanList">
                {bookLessons.map((item) => <li key={item}><CheckCircle2 size={20} /> {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="sectionIntro">
            <p className="smallCaps">Inside The Way Back</p>
            <h2>A complete arc from lost to grounded.</h2>
          </div>
          <div className="contentsGrid">
            <div className="contentsBlock">
              <p className="smallCaps">Part I</p>
              <h3>The Lie</h3>
              <p>You were not born broken. You were trained away from yourself.</p>
            </div>
            <div className="contentsBlock">
              <p className="smallCaps">Part II</p>
              <h3>The Wound</h3>
              <p>Approval, shame, women, and the younger self who still wants to drive.</p>
            </div>
            <div className="contentsBlock">
              <p className="smallCaps">Part III</p>
              <h3>The Rebuild</h3>
              <p>Build the island, guard the gates, and become emotionally untouchable.</p>
            </div>
            <div className="contentsBlock">
              <p className="smallCaps">Part IV</p>
              <h3>Women, Desire, and the Arena</h3>
              <p>Date with clarity, understand desire, and choose by character.</p>
            </div>
            <div className="contentsBlock">
              <p className="smallCaps">Part V</p>
              <h3>Love Without Submission</h3>
              <p>Lead, repair, protect intimacy, and build legacy.</p>
            </div>
            <div className="contentsBlock">
              <p className="smallCaps">Appendix</p>
              <h3>The 30-Day Protocol</h3>
              <p>A practical system for turning the book into action.</p>
            </div>
          </div>
        </section>

        <section className="quoteBand">
          <div className="container quoteInner">
            <p>“A woman can add beauty to your life. But she cannot become the ground beneath your feet. That ground is yours to build.”</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ResourcesPage() {
  return (
    <div className="site">
      <Nav />
      <header className="hero">
        <div className="heroGlow" />
        <div className="container heroGrid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="heroText">
            <div className="eyebrow"><Download size={16} /> Free companion resources</div>
            <h1>The Way Back</h1>
            <p className="subtitle">Companion worksheets for men who refuse to stay lost.</p>
            <p className="lede">Use these printable tools alongside the book to complete the 30-Day Way Back Protocol, build your island, track your emotional patterns, and turn insight into action.</p>
            <div className="buttonRow">
              <Button variant="gold" href="#email-kit">Get the Full PDF Bundle <ArrowRight size={18} /></Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="kitCard">
            <p className="smallCaps">Companion Kit</p>
            <h2>Build the island. Keep the promise. Walk the way back.</h2>
            <ul className="cleanList">
              {['Daily protocol tracker', 'Island scorecard', 'Emotional ledger', 'Relationship standards checklist', 'Personal code worksheet'].map((item) => (
                <li key={item}><CheckCircle2 size={20} /> {item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </header>

      <main>
        <section id="resources" className="section container">
          <div className="sectionIntro">
            <p className="smallCaps">Reader Resources</p>
            <h2>Use these tools as you work through the book.</h2>
            <p>Download selected worksheets below, or receive the full printable PDF bundle by email.</p>
          </div>
          <div className="resourceGrid">
            {downloads.map((resource, index) => {
              const Icon = resource.icon
              return (
                <motion.article key={resource.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.04 }} className="resourceCard">
                  <div className="iconBox"><Icon size={24} /></div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a className="textLink" href={resource.href} download>Download PDF <ArrowRight size={15} /></a>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="email-kit" className="section band">
          <div className="container split">
            <div>
              <p className="smallCaps">Printable Bundle</p>
              <h2>Get the full Companion Kit sent to your inbox.</h2>
              <p className="finePrint">This signup is optional. The resources on this page are provided to support readers of the book.</p>
            </div>
            <div className="signupCard embeddedSignup">
              <iframe
                src={MAILERLITE_FORM_URL}
                title="Get the full Companion Kit"
                className="mailerLiteFrame"
              />
              <a className="textLink" href={MAILERLITE_FORM_URL} target="_blank" rel="noreferrer">Open signup form in a new tab <ArrowRight size={15} /></a>
            </div>
          </div>
        </section>

        <BrotherhoodSection />

        <section className="section container compact">
          <div className="closingCard">
            <p className="smallCaps">Start Here</p>
            <h2>You do not need to fix your whole life today.</h2>
            <p>Start with one stone. One kept promise. One honest action. The island rises through repetition.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function BrotherhoodSection() {
  return (
    <section className="section container">
      <div className="brotherhood">
        <div>
          <p className="smallCaps">Go Deeper</p>
          <h2>Join the Brotherhood.</h2>
          <p>The book gives you the map. The Brotherhood gives you a place to walk it with other men.</p>
          <p className="muted">This is a private space for men working through The Way Back: discipline, emotional control, dating, relationships, leadership, fatherhood, and building the island.</p>
          <Button href="/the-way-back/brotherhood">Join the Brotherhood <ArrowRight size={18} /></Button>
        </div>
        <div className="insideCard">
          <h3>Inside the Brotherhood</h3>
          <ul className="cleanList">
            {brotherhoodItems.map((item) => <li key={item}><CheckCircle2 size={20} /> {item}</li>)}
          </ul>
          <p className="note">This is not a place for complaining, woman-hating, ego-posturing, or endless theory. It is a place for men who are doing the work: building the body, telling the truth, reclaiming their worth, strengthening their relationships, and walking the way back.</p>
        </div>
      </div>
    </section>
  )
}

function BrotherhoodPage() {
  return (
    <div className="site">
      <Nav />
      <header className="pageHero">
        <div className="container narrow">
          <p className="smallCaps">The Brotherhood</p>
          <h1>Walk the way back with other men doing the work.</h1>
          <p className="subtitle">A private community for men building discipline, emotional control, clean relationships, and a stronger island.</p>
          <div className="buttonRow centeredButtons">
            <Button variant="gold" href="#join">Join the Waitlist</Button>
            <Button variant="outline" href="/the-way-back/resources">Get the Free Resources</Button>
          </div>
        </div>
      </header>
      <main>
        <BrotherhoodSection />
        <section id="join" className="section band">
          <div className="container split">
            <div>
              <p className="smallCaps">Coming Soon</p>
              <h2>Start with the waitlist.</h2>
              <p>For now, connect this section to your MailerLite form. Later, this button can lead to Discord, Skool, Circle, Patreon, or a paid checkout page.</p>
            </div>
            <div className="signupCard">
              <h3>Brotherhood Waitlist</h3>
              <p>Replace this placeholder with your MailerLite, ConvertKit, Beehiiv, Gumroad, or Discord invite flow.</p>
              <Button variant="gold" href="#">Join the Waitlist</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function PdfCheckoutPage() {
  return (
    <div className="site">
      <Nav />
      <header className="pageHero">
        <div className="container narrow">
          <p className="smallCaps">Direct PDF Edition</p>
          <h1>PDF checkout coming soon.</h1>
          <p className="subtitle">This page will connect to your Payhip, Gumroad, Lemon Squeezy, or Stripe checkout once the direct PDF edition is ready.</p>
          <div className="buttonRow centeredButtons">
            <Button variant="gold" href="#">Get the PDF</Button>
            <Button variant="outline" href="/the-way-back">Back to the Book</Button>
          </div>
        </div>
      </header>
    </div>
  )
}

function SimplePage({ title, children }) {
  return (
    <div className="site">
      <Nav />
      <main className="section container legalPage">
        <p className="smallCaps">Morpheus Black</p>
        <h1>{title}</h1>
        <div className="legalContent">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Morpheus Black. All rights reserved.</p>
      <p><a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms</a> · <a href="/contact">Contact</a></p>
    </footer>
  )
}

export default function App() {
  const path = window.location.pathname

  if (path.startsWith('/the-way-back/resources') || path.startsWith('/resources')) return <ResourcesPage />
  if (path.startsWith('/the-way-back/brotherhood') || path.startsWith('/brotherhood')) return <BrotherhoodPage />
  if (path.startsWith('/the-way-back/pdf')) return <PdfCheckoutPage />
  if (path.startsWith('/the-way-back')) return <BookPage />
  if (path.startsWith('/privacy')) return (
    <SimplePage title="Privacy Policy">
      <p><strong>Effective date:</strong> May 27, 2026</p>
      <p>This Privacy Policy explains how Morpheus Black collects, uses, and protects information when you visit this website, download resources, join the email list, purchase products, or interact with The Way Back and related offers.</p>

      <h2>Information We Collect</h2>
      <p>We may collect information you choose to provide, including your name, email address, messages, form responses, and purchase-related details when you request resources, join the newsletter, contact us, or buy a product.</p>
      <p>We may also collect basic technical information through website tools and hosting providers, such as browser type, device information, referring pages, approximate location, pages visited, and general usage data.</p>

      <h2>How We Use Your Information</h2>
      <p>We use your information to send requested resources, deliver email updates, respond to messages, provide customer support, improve the website, operate paid products or community offers, and share content related to The Way Back, Morpheus Black, companion resources, newsletters, and the Brotherhood.</p>

      <h2>Email List and Unsubscribing</h2>
      <p>If you join the email list, your information may be processed by our email service provider, including MailerLite. You can unsubscribe at any time by using the unsubscribe link included in our emails.</p>

      <h2>Payments and Digital Products</h2>
      <p>If you purchase a product, payment information may be processed by third-party payment platforms such as Amazon, Payhip, Gumroad, Stripe, PayPal, or similar services. We do not intentionally store full payment card details on this website.</p>

      <h2>Third-Party Services</h2>
      <p>This website may use third-party services for hosting, analytics, email delivery, payment processing, digital downloads, and community access. These services may collect and process information according to their own privacy policies.</p>

      <h2>Cookies and Analytics</h2>
      <p>This website may use cookies or similar technologies to operate the site, understand how visitors use it, improve performance, and support marketing or analytics. You can adjust cookie settings through your browser.</p>

      <h2>How We Share Information</h2>
      <p>We do not sell your personal information. We may share information with trusted service providers who help operate the website, email list, downloads, payments, or community. We may also disclose information if required by law, to protect rights or safety, or to prevent misuse of the site.</p>

      <h2>Data Retention</h2>
      <p>We keep personal information only as long as reasonably necessary for the purposes described in this policy, unless a longer retention period is required or permitted by law.</p>

      <h2>Your Choices</h2>
      <p>You may unsubscribe from emails at any time. You may also contact us to request access, correction, or deletion of personal information we hold about you, subject to legal and operational limits.</p>

      <h2>Security</h2>
      <p>We take reasonable steps to protect personal information, but no website, email system, or online service can guarantee complete security.</p>

      <h2>Children</h2>
      <p>This website and its resources are intended for adults. We do not knowingly collect personal information from children.</p>

      <h2>Educational Disclaimer</h2>
      <p>The book, website, resources, newsletter, and community are for educational and personal development purposes only. They are not therapy, medical advice, legal advice, financial advice, or crisis support.</p>

      <h2>Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.</p>

      <h2>Contact</h2>
      <p>For privacy-related questions, contact: support@morpheusblack.com</p>
    </SimplePage>
  )
  if (path.startsWith('/terms')) return (
    <SimplePage title="Terms & Disclaimer">
      <p>Replace this placeholder with your full terms and disclaimer before launching paid products or a private community.</p>
      <p>The book, resources, newsletter, and community are for educational and personal development purposes only. They are not therapy, medical advice, legal advice, financial advice, or crisis support.</p>
    </SimplePage>
  )
  if (path.startsWith('/contact')) return (
    <SimplePage title="Contact">
      <p>Replace this placeholder with your contact email or contact form.</p>
      <p>Example: support@morpheusblack.com</p>
    </SimplePage>
  )

  return <AuthorHomePage />
}
