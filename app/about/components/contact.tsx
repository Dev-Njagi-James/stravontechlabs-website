'use client'

import { useId, useState } from "react";
import "./css/contact.css";

const projectTypes = [
  "Website",
  "Web application",
  "Branding",
  "E-commerce",
  "Other",
];
const budgetRanges = [
  "Ksh 1,000 – Ksh 5,000",
  "Ksh 5,000 – Ksh 10,000",
  "Ksh 10,000 – Ksh 25,000",
  "Ksh 25,000+",
  "Not sure yet",
];

type ContactFormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

type ContactFormProps = {
  onSubmit?: (formData: ContactFormData) => void | Promise<void>;
  className?: string;
};

/**
 * A drop-in contact form component.
 *
 * @param {{ onSubmit?: (formData: { name: string, email: string, projectType: string, budget: string, message: string }) => void | Promise<void>, className?: string }} props
 */
export default function ContactForm({
  onSubmit,
  className = "",
}: ContactFormProps) {
  const fieldId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;

  if (!onSubmit) {
    setSubmitError(
      "This form isn’t connected yet. Add an onSubmit handler to receive submissions.",
    );
    return;
  }

  const formData = Object.fromEntries(
    new FormData(form).entries(),
  ) as ContactFormData;

  try {
    await onSubmit(formData);
    setSubmitted(true);
    form.reset();
  } catch {
    setSubmitError("We couldn’t send your inquiry. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <section
      className={`contact-card ${className}`.trim()}
      aria-labelledby={`${fieldId}-title`}>
      <header className="contact-card__header">
        <p className="contact-card__eyebrow">LET’S MAKE IT HAPPEN</p>
        <h2 className="contact-card__title" id={`${fieldId}-title`}>
          Contact us<span>.</span>
        </h2>
        <p className="contact-card__intro">
          Tell us a little about your project and we’ll be in touch soon.
        </p>
      </header>

      {submitted && (
        <p className="contact-card__success" role="status">
          Thanks for reaching out — your inquiry was submitted.
        </p>
      )}
      {submitError && (
        <p className="contact-card__error" role="alert">
          {submitError}
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__grid">
          <div className="contact-form__field">
            <label htmlFor={`${fieldId}-name`}>Name</label>
            <input
              id={`${fieldId}-name`}
              name="name"
              type="text"
              placeholder="Jane Doe"
              autoComplete="name"
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor={`${fieldId}-email`}>Email</label>
            <input
              id={`${fieldId}-email`}
              name="email"
              type="email"
              placeholder="jane@company.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor={`${fieldId}-project-type`}>
              What are you looking to build?
            </label>
            <select
              id={`${fieldId}-project-type`}
              name="projectType"
              defaultValue={projectTypes[0]}>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-form__field">
            <label htmlFor={`${fieldId}-budget`}>
              What is your budget range?
            </label>
            <select
              id={`${fieldId}-budget`}
              name="budget"
              defaultValue={budgetRanges[1]}>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-form__field contact-form__field--full">
            <label htmlFor={`${fieldId}-message`}>
              Tell us about your project
            </label>
            <textarea
              id={`${fieldId}-message`}
              name="message"
              placeholder="A few details about your idea, goals, or timeline…"
              rows={3}
              required
            />
          </div>
        </div>

        <div className="contact-form__footer">
          <button
            className="contact-form__submit"
            type="submit"
            disabled={isSubmitting}>
            <span>{isSubmitting ? "Sending…" : "Send inquiry"}</span>
            <span className="contact-form__submit-icon" aria-hidden="true">
              ↗
            </span>
          </button>
          <p className="contact-form__note">
            We’ll get back to you within 1–2 business days.
          </p>
        </div>
      </form>
    </section>
  );
}
