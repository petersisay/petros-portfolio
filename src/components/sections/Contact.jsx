import React, { useState } from 'react';
import {
  Mail,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

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
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to deliver message.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      // Even if FormSubmit has a CORS/network hiccup, treat friendly or show error
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please email directly at petrossisay7164@gmail.com');
    }
  };

  return (
    <section id="contact" className={`section ${styles.contactSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <div className="section-label">&lt; Get In Touch /&gt;</div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Have an internship opening, freelance project, or full-stack engineering challenge?
            I am eager to connect and discuss how I can contribute.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className={styles.contactGrid}>
          {/* Left Column: Contact Info Cards */}
          <div className={`${styles.infoColumn} reveal-left`}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoHeading}>Contact Information</h3>
              <p className={styles.infoIntro}>
                Feel free to reach out directly through any of these communication channels.
                I typically respond within 24 hours.
              </p>

              <div className={styles.channelsList}>
                {/* Email */}
                <a
                  href="mailto:petrossisay7164@gmail.com"
                  className={styles.channelItem}
                >
                  <div className={`${styles.channelIconWrap} ${styles.iconViolet}`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className={styles.channelLabel}>Email Address</span>
                    <strong className={styles.channelValue}>petrossisay7164@gmail.com</strong>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/petrossisay1646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItem}
                >
                  <div className={`${styles.channelIconWrap} ${styles.iconCyan}`}>
                    <Github size={20} />
                  </div>
                  <div>
                    <span className={styles.channelLabel}>GitHub Profile</span>
                    <strong className={styles.channelValue}>github.com/petrossisay1646</strong>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/petros-sisay-gelan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItem}
                >
                  <div className={`${styles.channelIconWrap} ${styles.iconPink}`}>
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <span className={styles.channelLabel}>LinkedIn</span>
                    <strong className={styles.channelValue}>linkedin.com/in/petros-sisay-gelan</strong>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/Petros_sisay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.channelItem}
                >
                  <div className={`${styles.channelIconWrap} ${styles.iconOrange}`}>
                    <Send size={20} />
                  </div>
                  <div>
                    <span className={styles.channelLabel}>Telegram</span>
                    <strong className={styles.channelValue}>@Petros_sisay</strong>
                  </div>
                </a>
              </div>

              {/* Location Badge */}
              <div className={styles.locationFooter}>
                <MapPin size={18} className={styles.pinIcon} />
                <span>Adama Science and Technology University (ASTU), Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={`${styles.formColumn} reveal-right`}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <p className={styles.formSubtitle}>
                Fill out the form below to deliver an instant message to my inbox.
              </p>

              {/* Toast Notifications */}
              {status === 'success' && (
                <div className={styles.alertSuccess}>
                  <CheckCircle2 size={20} className={styles.alertIcon} />
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you for reaching out. I'll get back to you shortly.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className={styles.alertError}>
                  <AlertCircle size={20} className={styles.alertIcon} />
                  <div>
                    <strong>Message Delivery Notice</strong>
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Your Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Dawit Bekele"
                    className={styles.formInput}
                  />
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Your Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. dawit@example.com"
                    className={styles.formInput}
                  />
                </div>

                {/* Subject */}
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Internship Opportunity"
                    className={styles.formInput}
                  />
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message <span className={styles.required}>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className={styles.formTextarea}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`btn-primary ${styles.submitBtn}`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className={styles.spinner} />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
