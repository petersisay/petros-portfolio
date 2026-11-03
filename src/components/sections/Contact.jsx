import React, { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react'
import { Github, Linkedin, Telegram } from '../common/Icons'
import { siteConfig } from '../../data/config'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Please complete all required fields.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'Portfolio Project Inquiry',
          message: formData.message.trim(),
          _subject: `Portfolio Inquiry from ${formData.name.trim()}: ${formData.subject.trim() || 'New Message'}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(
          `Unable to deliver message right now. Please email ${siteConfig.email} directly.`
        )
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        `Network error encountered. Please verify your connection or email ${siteConfig.email} directly.`
      )
    }
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">07 / Contact</div>
          <h2 className="section-title">Initiate Collaboration</h2>
          <p className={styles.sectionSubtitle}>
            Whether you have an internship opportunity, full-stack project inquiry, or technical collaboration,
            my inbox is always accessible.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left Column: Direct verified channels */}
          <div className={`${styles.infoCol} reveal`}>
            <h3 className={styles.leftHeading}>Let&apos;s Build Together</h3>
            <p className={styles.leadText}>
              I am actively seeking software engineering internships, junior developer roles, and
              high-impact collaborative opportunities. Reach out via direct channels or send a message
              through the form.
            </p>

            <div className={styles.contactList}>
              {/* Email */}
              <a href={`mailto:${siteConfig.email}`} className={styles.contactCard}>
                <div className={styles.iconCircle}>
                  <Mail size={18} />
                </div>
                <div className={styles.contactTextGroup}>
                  <span className={styles.contactType}>Direct Email</span>
                  <span className={styles.contactValue}>{siteConfig.email}</span>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <div className={styles.iconCircle}>
                  <Github size={18} />
                </div>
                <div className={styles.contactTextGroup}>
                  <span className={styles.contactType}>GitHub Codebase</span>
                  <span className={styles.contactValue}>github.com/{siteConfig.githubUsername}</span>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <div className={styles.iconCircle}>
                  <Linkedin size={18} />
                </div>
                <div className={styles.contactTextGroup}>
                  <span className={styles.contactType}>LinkedIn Profile</span>
                  <span className={styles.contactValue}>linkedin.com/in/petros-sisay-gelan</span>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>

              {/* Telegram */}
              <a
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <div className={styles.iconCircle}>
                  <Telegram size={18} />
                </div>
                <div className={styles.contactTextGroup}>
                  <span className={styles.contactType}>Telegram Messaging</span>
                  <span className={styles.contactValue}>{siteConfig.telegramHandle}</span>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={`${styles.formCol} reveal`}>
            <form onSubmit={handleSubmit} className={styles.formCard} noValidate>
              <h4 className={styles.formTitle}>Send a Direct Message</h4>

              <div className={styles.fieldGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  Your Name <span className={styles.req}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Abebe Bikila"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  disabled={status === 'loading'}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                  Your Email <span className={styles.req}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. abebe@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  disabled={status === 'loading'}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="contact-subject" className={styles.label}>
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. Software Engineering Opportunity / Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                  disabled={status === 'loading'}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message <span className={styles.req}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Hi Petros, I reviewed your software portfolio and would like to connect regarding..."
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'success' && (
                <div className={styles.successBanner} role="alert">
                  <CheckCircle2 size={18} />
                  <span>Your message was delivered successfully! I will reply to your email shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className={styles.errorBanner} role="alert">
                  <AlertCircle size={18} />
                  <span>{errorMessage || 'Failed to dispatch message.'}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className={styles.submitBtn}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className={styles.spinner} />
                    <span>Transmitting message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
