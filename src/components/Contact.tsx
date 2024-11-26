"use client";

import { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { Mail, LinkedinIcon, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import confetti from "canvas-confetti";

const MAX_MESSAGE_LENGTH = 500;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [scope, animate] = useAnimate();
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= MAX_MESSAGE_LENGTH) {
      setMessage(text);
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const socialButtonAnimate = () => {
    animate(scope.current, { y: [0, -5, 0] }, { duration: 0.3 });
  };

  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText("jadenbento@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <div className="relative flex min-h-[calc(100vh-theme(space.20))] w-full items-center justify-center overflow-hidden">
      {/* Background with grid */}
      <div className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-grid-black/[0.1] dark:bg-grid-white/[0.03]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <section
        id="contact"
        className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/90 backdrop-blur-sm border-2 hover:bg-white transition-all duration-300 shadow-lg focus:shadow-xl"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/90 backdrop-blur-sm border-2 hover:bg-white transition-all duration-300 shadow-lg focus:shadow-xl"
              />
              <div className="relative">
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={handleMessageChange}
                  required
                  maxLength={MAX_MESSAGE_LENGTH}
                  className="w-full bg-white/90 backdrop-blur-sm border-2 hover:bg-white transition-all duration-300 shadow-lg focus:shadow-xl h-32 resize-none"
                />
                <span className="absolute bottom-2 right-2 text-xs text-muted-foreground">
                  {message.length}/{MAX_MESSAGE_LENGTH}
                </span>
              </div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </motion.div>
            </form>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-xl font-semibold">Connect with me</h3>
            <div className="flex flex-col space-y-4">
              <motion.div
                ref={scope}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onHoverStart={socialButtonAnimate}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleEmailCopy}
                  className="w-full justify-start bg-white/90 backdrop-blur-sm border-2 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {emailCopied ? "Email Copied!" : "Email Me"}
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onHoverStart={socialButtonAnimate}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-start bg-white/90 backdrop-blur-sm border-2 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/maybeitsjaden/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
