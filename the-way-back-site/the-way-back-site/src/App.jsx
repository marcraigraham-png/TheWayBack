import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, CheckCircle2, Download, FileText, Flame, Mail, ShieldCheck, Users } from 'lucide-react'

const downloads = [
  {
    title: 'Full Companion Kit',
    description: 'The complete printable bundle in one PDF.',
    href: '/downloads/the_way_back_companion_kit_full_bundle.pdf',
    icon: FileText,
  },
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
    title: 'Brotherhood & Mission Prompts',
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

function Button({ children, variant = 'primary', href, type = 'button' }) {
  const className = variant === 'outline' ? 'btn btn-outline' : 'btn btn-primary'
  if (href) return <a className={className} href={href}>{children}</a>
  return <button className={className} type={type}>{children}</button>
}

export default function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert('Next step: replace this placeholder with your MailerLite embedded form or form action.')
  }

  return (
    <div className="site">
      <header className="hero">
        <div className="heroGlow" />
        <div className="container heroGrid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="heroText">
            <div className="eyebrow"><Download size={16} /> Free companion resources</div>
            <h1>The Way Back</h1>
            <p className="subtitle">Companion worksheets for men who refuse to stay lost.</p>
            <p className="lede">Use these printable tools alongside the book to complete the 30-Day Way Back Protocol, build your island, track your emotional patterns, and turn insight into action.</p>
            <div className="buttonRow">
              <Button href="#resources">View the resources <ArrowRight size={18} /></Button>
              <Button variant="outline" href="#email-kit">Get the PDF bundle by email</Button>
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
            <p>These materials support the book directly. You can download the worksheets below, or receive the full printable PDF bundle by email.</p>
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
              <h2>Want the full Companion Kit sent to your inbox?</h2>
              <p>Enter your details and receive the printable PDF bundle for the 30-Day Way Back Protocol. You may also receive occasional updates, essays, and future resources related to the book. Unsubscribe anytime.</p>
              <p className="finePrint">This signup is optional. The resources on this page are provided to support readers of the book.</p>
            </div>
            <form className="signupCard" onSubmit={handleSubmit}>
              <label>First name
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Marc" />
              </label>
              <label>Email address
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" required />
              </label>
              <Button type="submit"><Mail size={18} /> Send me the Companion Kit</Button>
              <p className="finePrint">By signing up, you agree to receive emails related to The Way Back and its companion resources. You can unsubscribe at any time. Add your Privacy Policy link here.</p>
            </form>
          </div>
        </section>

        <section className="section container">
          <div className="brotherhood">
            <div>
              <p className="smallCaps">Go Deeper</p>
              <h2>Join the Brotherhood.</h2>
              <p>The book gives you the map. The Brotherhood gives you a place to walk it with other men.</p>
              <p className="muted">This is a private space for men working through The Way Back: discipline, emotional control, dating, relationships, leadership, fatherhood, and building the island.</p>
              <Button href="#">Join the Brotherhood <ArrowRight size={18} /></Button>
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

        <section className="section container compact">
          <div className="closingCard">
            <p className="smallCaps">Start Here</p>
            <h2>You do not need to fix your whole life today.</h2>
            <p>Start with one stone. One kept promise. One honest action. The island rises through repetition.</p>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} The Way Back. All rights reserved.</p>
        <p>Add Privacy Policy · Terms · Contact links here</p>
      </footer>
    </div>
  )
}
