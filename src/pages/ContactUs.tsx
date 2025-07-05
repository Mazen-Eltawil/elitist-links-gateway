import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="font-kepler text-5xl md:text-6xl font-bold text-charcoal-grey">
              Contact Us
            </h1>
            <p className="text-xl text-charcoal-grey/80 leading-relaxed max-w-2xl mx-auto">
              Ready to find your perfect timepiece or sell your collection? Get in touch with our expert team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="font-kepler text-2xl font-bold text-charcoal-grey">
                Send us a message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your watch interests or what you're looking to sell..."
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full bg-light-goldenrod text-charcoal-grey hover:bg-light-goldenrod/90 font-kepler uppercase tracking-wider">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-kepler text-2xl font-bold text-charcoal-grey">
                  Get in touch directly
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-charcoal-grey mb-2">Phone</h3>
                    <p className="text-charcoal-grey/80">
                      <a href="tel:+971509977198" className="hover:text-light-goldenrod transition-colors duration-300">+971 50 997 7198</a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-grey mb-2">Email</h3>
                    <p className="text-charcoal-grey/80">
                      <a href="mailto:ElitistLinks@gmail.com" className="hover:text-light-goldenrod transition-colors duration-300">ElitistLinks@gmail.com</a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-grey mb-2">Business Hours</h3>
                    <p className="text-charcoal-grey/80">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h3 className="font-kepler text-xl font-bold text-charcoal-grey">
                  Instant Contact
                </h3>
                <div className="space-y-3">
                  <a href="tel:+971509977198">
                    <Button 
                      className="w-full bg-transparent border-2 border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-charcoal-grey font-kepler uppercase tracking-wider"
                      size="lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us: +971 50 997 7198
                    </Button>
                  </a>
                  <a href="https://wa.me/971509977198">
                    <Button 
                      className="w-full bg-transparent border-2 border-light-goldenrod text-light-goldenrod hover:bg-light-goldenrod hover:text-charcoal-grey font-kepler uppercase tracking-wider"
                      size="lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp: +971 50 997 7198
                    </Button>
                  </a>
                  <a href="https://calendly.com/elitistlinks-coo/30min">
                    <Button 
                      className="w-full bg-light-goldenrod text-charcoal-grey hover:bg-light-goldenrod/90 font-kepler uppercase tracking-wider"
                      size="lg"
                    >
                      Schedule a Private Consultation
                    </Button>
                  </a>
                </div>
              </div>

              {/* Consultation Note */}
              <div className="bg-champagne-gold/10 p-6 rounded-lg">
                <h3 className="font-kepler text-lg font-bold text-charcoal-grey mb-2">
                  Private Consultation
                </h3>
                <p className="text-charcoal-grey/80 text-sm">
                  Schedule a private appointment to view our exclusive collection or discuss selling your timepieces. Our experts provide personalized service for serious collectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;