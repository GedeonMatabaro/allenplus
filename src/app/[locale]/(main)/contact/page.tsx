import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Globe, Send, Heart, Users, Handshake, Target, Award } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Welcoming Team Image */}
      <section className="relative h-screen md:md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contactUs.jpg"
            alt="ALLEN+ team welcoming new partners and collaborators"
            fill
            className="object-cover object-[47%_20%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Get in
            <span className="block text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Ready to join our mission? We&apos;d love to hear from you and explore how we can work together for sustainable
            change.
          </p>
        </div>
      </section>

      {/* Contact Information with Visual Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl px-2 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Connect With ALLEN+</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Every conversation is a step toward building a more sustainable future together.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-6">
                        <Mail className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">contact@allenplus.com</p>
                        <p className="text-gray-500 dark:text-gray-300/80 text-sm mt-1">We typically respond within 24-48 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-6">
                        <MapPin className="h-8 w-8 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Address</h3>
                        <p className="text-gray-600 dark:text-gray-300  text-lg">
                          DRC, North-Kivu, Goma
                          <br />
                          Circulaire 219
                        </p>
                        <p className="text-gray-500 dark:text-gray-300/80  text-sm mt-1">Eastern Democratic Republic of Congo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mr-6">
                        <Globe className="h-8 w-8 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2">Organization</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">AID LIFE LEARN ENVIRONMENT</p>
                        <p className="text-gray-500 dark:text-gray-300/80 text-sm mt-1">Empowering communities since our founding</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Ways to Get Involved Visual */}
              <div className="bg-green-50/80 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ways to Get Involved</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: Handshake, text: "Partner with us on community programs", color: "green" },
                    { icon: Target, text: "Support our climate action initiatives", color: "yellow" },
                    { icon: Users, text: "Volunteer your skills and expertise", color: "cyan" },
                    { icon: Heart, text: "Donate to support our programs", color: "purple" },
                    { icon: Award, text: "Collaborate on research and innovation", color: "red" },
                    { icon: Globe, text: "Join our global advocacy efforts", color: "blue" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-${item.color}-100 rounded-full flex items-center justify-center`}>
                        <item.icon className={`h-5 w-5 text-${item.color}-600`} />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Side */}
            <div>
              <Card className="border-0 shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300  text-lg">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className=" gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300  mb-2">
                          Full Name *
                        </label>
                        <Input id="firstName" name="firstName" required className="h-12" />
                      </div>
                     
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input id="email" name="email" type="email" required className="h-12" />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-2">
                        Organization (Optional)
                      </label>
                      <Input id="organization" name="organization" className="h-12" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input id="subject" name="subject" required className="h-12" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us about your interest in partnering with ALLEN+ or how you'd like to get involved..."
                        required
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg font-semibold">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Thank You Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Community members expressing gratitude and hope"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Gratitude Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Thank You for Your
                <span className="text-green-600"> Interest</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Every message, partnership inquiry, and expression of support brings us closer to our goal of creating
                sustainable change in Eastern DRC and beyond. We appreciate your commitment to making a difference.
              </p>
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <p className="text-lg text-gray-700 font-medium italic">
                  "Together, we can achieve more than we ever could alone."
                </p>
                <p className="text-gray-600 mt-2">— ALLEN+ Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Promise with Visual Elements */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What to Expect</h2>
            <p className="text-xl text-gray-600">Our commitment to meaningful connections and timely responses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Mail className="h-10 w-10 text-green-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">24h</span>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">Quick Response</h3>
                <p className="text-gray-600">We typically respond within 24-48 hours to all inquiries</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">Global Impact</h3>
                <p className="text-gray-600">Your support creates ripple effects across communities worldwide</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-10 w-10 text-cyan-600" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">Personal Connection</h3>
                <p className="text-gray-600">We value building meaningful, long-lasting relationships</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Call to Action with Community Image */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="ALLEN+ community celebrating together, showing unity and hope"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Join Our Community</h2>
          <p className="text-xl md:text-2xl mb-12 text-green-100">
            Every partnership, every conversation, every shared vision brings us closer to a sustainable future for all.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">Growing</div>
                <p className="text-lg">Network of Partners</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">Expanding</div>
                <p className="text-lg">Global Reach</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">Creating</div>
                <p className="text-lg">Lasting Change</p>
              </div>
            </div>
            <p className="text-lg mb-6">Ready to be part of something bigger? Let's start the conversation today.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
