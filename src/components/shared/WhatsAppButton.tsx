// src/components/shared/WhatsAppButton.tsx
import React from "react";
import { MessageCircle, ExternalLink } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  variant?: "green" | "secondary";
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "Hello, I'm interested in learning more about Zanda Initiative.",
  className = "",
  variant = "green",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const baseStyles =
    "inline-flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg";

  const variants = {
    green: "bg-green-600 text-white hover:bg-green-700",
    secondary:
      "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={12} />
      <span>Chat on WhatsApp</span>
      <ExternalLink size={8} />
    </a>
  );
};

export default WhatsAppButton;
