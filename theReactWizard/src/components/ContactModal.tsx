import { useEffect, useState } from "react";
import "./ContactModal.css";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setShowFallback(false);
      setCopied(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with properly formatted body
    const subject = encodeURIComponent(
      "Consultancy Inquiry to the TheReactWizard Team"
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open mail client
    const mailtoLink = `mailto:alejandrobusiness2022@gmail.com?subject=${subject}&body=${body}`;

    // Try to open the mail client
    try {
      window.location.href = mailtoLink;

      // Check if mailto worked after a delay
      // If user is still on the page after 2 seconds, mailto likely failed
      const checkTimeout = setTimeout(() => {
        setShowFallback(true);
        toast.info("Email client not detected. Use the copy option below.", {
          duration: 4000,
        });
      }, 2000);

      // Clear timeout if user navigates away (mailto worked)
      const blurHandler = () => {
        clearTimeout(checkTimeout);
        window.removeEventListener("blur", blurHandler);
      };
      window.addEventListener("blur", blurHandler);

      toast.success("Opening your email client...", {
        duration: 2000,
      });
    } catch {
      // If mailto fails immediately, show fallback
      setShowFallback(true);
      toast.error("Unable to open email client. Use the copy option below.", {
        duration: 4000,
      });
    }
  };

  const copyToClipboard = async () => {
    const emailContent = `To: alejandrobusiness2022@gmail.com
Subject: Consultancy Inquiry to the TheReactWizard Team

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    try {
      await navigator.clipboard.writeText(emailContent);
      setCopied(true);
      toast.success("Email content copied to clipboard!", {
        duration: 3000,
      });
      setTimeout(() => setCopied(false), 3000);
    } catch {
      toast.error("Failed to copy. Please copy manually.", {
        duration: 3000,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="contact-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="contact-modal-content">
          <div className="contact-modal-header">
            <h2 className="contact-modal-title">
              Let's Build Something Amazing
            </h2>
            <p className="contact-modal-subtitle">
              Frontend Excellence • React Mastery • Modern Solutions
            </p>
          </div>

          <form className="contact-modal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project, timeline, and goals..."
              />
            </div>

            <button type="submit" className="contact-modal-submit">
              Send Message
            </button>
          </form>

          {showFallback && (
            <div className="contact-modal-fallback">
              <div className="fallback-header">
                <h3>Email Client Not Available</h3>
                <p>Copy the information below and send it manually:</p>
              </div>
              <div className="fallback-content">
                <div className="fallback-email-info">
                  <div className="email-field">
                    <span className="email-label">To:</span>
                    <span className="email-value">
                      alejandrobusiness2022@gmail.com
                    </span>
                    <button
                      className="copy-button"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "alejandrobusiness2022@gmail.com"
                        );
                        toast.success("Email address copied!", {
                          duration: 2000,
                        });
                      }}
                    >
                      Copy
                    </button>
                  </div>
                  <div className="email-field">
                    <span className="email-label">Subject:</span>
                    <span className="email-value">
                      Consultancy Inquiry to the TheReactWizard Team
                    </span>
                  </div>
                  <div className="email-field email-body">
                    <span className="email-label">Message:</span>
                    <div className="email-message-content">
                      <p>
                        <strong>Name:</strong> {formData.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Message:</strong>
                      </p>
                      <p>{formData.message}</p>
                    </div>
                  </div>
                </div>
                <button
                  className="contact-modal-copy-all"
                  onClick={copyToClipboard}
                >
                  {copied ? "✓ Copied!" : "Copy All to Clipboard"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
