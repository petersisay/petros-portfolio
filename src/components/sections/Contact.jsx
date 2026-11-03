import React, { useState } from 'react'
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react'
import { Github, Linkedin, Telegram } from '../common/Icons'
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
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('https://formsubmit.co/ajax/petrossisay7164@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject || 'New Message'}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage('Failed to send message. Please email petrossisay7164@gmail.com directly.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage('Network error occurred. Please try again or reach out via email.')
    }
  }

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">06 / Contact</div>
          <h2 className="section-title">Get in Touch</h2>
        </div>

        <div className={styles.grid}>
          {/* Left Column */}
          <div className={`${styles.infoCol} reveal`}>
            <h3 className={styles.leftHeading}>Let&apos;s Work Together</h3>
            <p className={styles.leadText}>
              I&apos;m actively looking for internship opportunities and junior developer roles.
              Whether you have a project, an opportunity, or just want to connect — my inbox is
              always open.
            </p>

            <div className={styles.contactList}>
              {/* Email */}
              <a href="mailto:petrossisay7164@gmail.com" className={styles.contactCard}>
                <div className={styles.iconCircle}>
                  <Mail size={18} />
                </div>
                <div className={styles.contactTextGroup}>
                  <span className={styles.contactType}>Email</span>
                  <span className={styles.contactValue}>petrossisay7164@gmail.com</span>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/petrossisay1646"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <div className={styles.iconCircle}>
                  <Github size={18} />
                </div>
                <div className={styles.contactTextGroup}>
                  <span className={styles.contactType}>GitHub</span>
                  <span className={styles.contactValue}>github.com/petrossisay1646</span>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/petros-sisay-gelan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <div className={styles.iconCircle}>
                  <Linkedin size={18} />
                </div>
                <div className={styles.contactTextGroup}>
                  <span className={styles.contactType}>LinkedIn</span>
                  <span className={styles.contactValue}>linkedin.com/in/petros-sisay-gelan</span>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/Petros_sisay"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactCard}
              >
                <div className={styles.iconCircle}>
                  <Telegram size={18} />
                </div>
                <div className={styles.contactTextGroup}>
                  <span className={styles.contactType}>Telegram</span>
                  <span className={styles.contactValue}>t.me/Petros_sisay</span>
                </div>
                <ArrowUpRight size={16} className={styles.arrowIcon} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={`${styles.formCol} reveal`}>
            <form onSubmit={handleSubmit} className={styles.formCard}>
              <h4 className={styles.formTitle}>Send a Direct Message</h4>

              <div className={styles.fieldGroup}>
                <label htmlFor="name" className={styles.label}>
                  Your Name <span className={styles.req}>*</span>
                </label>
                <input
                  id="name"
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
                <label htmlFor="email" className={styles.label}>
                  Your Email <span className={styles.req}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. abebe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  disabled={status === 'loading'}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="subject" className={styles.label}>
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                  disabled={status === 'loading'}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="message" className={styles.label}>
                  Message <span className={styles.req}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Hi Petros, I reviewed your portfolio and would like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  disabled={status === 'loading'}
                />
              </div>

              {status === 'success' && (
                <div className={styles.successBanner}>
                  <CheckCircle2 size={18} />
                  <span>Message sent successfully! I will reply to your email shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className={styles.errorBanner}>
                  <AlertCircle size={18} />
                  <span>{errorMessage || 'Failed to send message.'}</span>
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
                    <span>Sending message...</span>
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
