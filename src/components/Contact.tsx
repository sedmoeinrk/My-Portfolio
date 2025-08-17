import { cn } from "@/lib/utils";
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  SendHorizontal,
  SendIcon,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast("Message Successfully Sent.", {
        description: "Thank you for your message. I will not answer you.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* contact info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="flex flex-col space-y-6 items-start">
              {/*  */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail size={20} />
                </div>
                <div className="flex gap-2">
                  <h4 className="font-medium ">Email :</h4>
                  <a
                    href="Hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Hello@gmail.com
                  </a>
                </div>
              </div>
              {/*  */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <Phone size={20} />
                </div>
                <div className="flex gap-2">
                  <h4 className="font-medium ">Call :</h4>
                  <a
                    href="tel:+98121"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    +98***********
                  </a>
                </div>
              </div>
              {/*  */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/20">
                  <MapPin size={20} />
                </div>
                <div className="flex gap-2">
                  <h4 className="font-medium ">Location :</h4>
                  <a
                    target="_blank"
                    href="https://maps.app.goo.gl/1CB4wWUCdVCbUiPH7"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    Qom, Iran
                  </a>
                </div>
              </div>
              {/*  */}
            </div>

            <div className="flex flex-col items-center justify-center pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="/">
                  <SendIcon size={30} />
                </a>
                <a href="/">
                  <Instagram size={30} />
                </a>
                <a href="/">
                  <Twitter size={30} />
                </a>
              </div>
            </div>
          </div>
          {/* end contact info */}
          {/* start form */}

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form action="" className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 ml-4 text-left "
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-card focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Moein Reiskarami"
                />
              </div>
              {/*  */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 ml-4 text-left "
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-card focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              {/*  */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 ml-4 text-left "
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-card focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="I'd like to talk about ..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <SendHorizontal size={16} />
              </button>
              {/*  */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
