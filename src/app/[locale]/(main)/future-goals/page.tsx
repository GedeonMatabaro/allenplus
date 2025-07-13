
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, BookOpen, Users, Smartphone, Network, Target, ArrowRight, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FutureGoalsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Futuristic Imagery */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Digital connectivity and future technology empowering communities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Our Vision for the
            <span className="block text-cyan-400">Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Building tomorrow's solutions today through innovation and digital transformation
          </p>
        </div>
      </section>

      {/* Digital Platform Vision with Split Layout */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Digital platform connecting communities across Eastern DRC"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Tech Icons */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Network className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full font-semibold">
                Digital Innovation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Comprehensive Digital
                <span className="text-cyan-600"> Platform Vision</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are planning to create a revolutionary digital platform that will transform how we connect with our
                beneficiaries and deliver our services across Eastern DRC and beyond.
              </p>
              <div className="bg-cyan-50 p-6 rounded-xl border-l-4 border-cyan-500">
                <h4 className="font-bold text-gray-800 mb-2">Expected Impact</h4>
                <p className="text-gray-700">
                  This digital transformation will enable us to scale our impact exponentially, reaching communities
                  with vital resources, education, and real-time support.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-cyan-600">10x</div>
                <div>
                  <p className="font-semibold text-gray-800">Projected Reach Increase</p>
                  <p className="text-gray-600 text-sm">Through digital connectivity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features with Visual Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Platform Features & Capabilities</h2>
            <p className="text-xl text-gray-600">Innovative tools for community empowerment and connection</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Beneficiary Network",
                description: "Connect all beneficiaries in a unified digital community for peer-to-peer learning",
                color: "green",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: BookOpen,
                title: "Online Learning Hub",
                description: "Accessible courses covering climate action, agriculture, and community development",
                color: "yellow",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Globe,
                title: "Climate Information System",
                description: "Real-time climate news, weather updates, and agricultural guidance for farmers",
                color: "cyan",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Smartphone,
                title: "Mobile Accessibility",
                description: "Mobile-friendly design reaching users in remote areas with basic smartphones",
                color: "purple",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Network,
                title: "Partnership Integration",
                description: "Facilitate collaboration with stakeholders to amplify program effectiveness",
                color: "red",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Target,
                title: "Impact Tracking",
                description: "Real-time data collection and impact assessment tools for program monitoring",
                color: "blue",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={`${feature.title} visualization`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-${feature.color}-500 rounded-full flex items-center justify-center`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Roadmap with Visual Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Implementation Roadmap</h2>
            <p className="text-xl text-gray-600">A visual journey from concept to community transformation</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-yellow-500 via-cyan-500 to-purple-500 rounded-full"></div>

            <div className="space-y-16">
              {[
                {
                  phase: "Phase 1",
                  title: "Platform Development",
                  description:
                    "Design and develop core platform infrastructure, focusing on user experience and mobile accessibility for target communities.",
                  image: "/placeholder.svg?height=300&width=400",
                  color: "green",
                  timeline: "Months 1-6",
                },
                {
                  phase: "Phase 2",
                  title: "Content Creation",
                  description:
                    "Develop comprehensive online courses, climate information systems, and educational resources tailored to local needs.",
                  image: "/placeholder.svg?height=300&width=400",
                  color: "yellow",
                  timeline: "Months 4-9",
                },
                {
                  phase: "Phase 3",
                  title: "Community Integration",
                  description:
                    "Launch pilot programs with existing beneficiaries, gather feedback, and refine platform based on user experiences.",
                  image: "/placeholder.svg?height=300&width=400",
                  color: "cyan",
                  timeline: "Months 7-12",
                },
                {
                  phase: "Phase 4",
                  title: "Scale & Partnership",
                  description:
                    "Expand platform reach through strategic partnerships and scale to serve communities across Eastern DRC and beyond.",
                  image: "/placeholder.svg?height=300&width=400",
                  color: "purple",
                  timeline: "Months 10-18",
                },
              ].map((phase, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 bg-${phase.color}-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}
                    >
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <Card className="border-0 shadow-2xl">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={phase.image || "/placeholder.svg"}
                          alt={`${phase.title} visualization`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div
                            className={`inline-block px-3 py-1 bg-${phase.color}-500 rounded-full text-sm font-semibold mb-2`}
                          >
                            {phase.phase}
                          </div>
                          <h3 className="text-xl font-bold">{phase.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className={`text-${phase.color}-600 font-semibold mb-2`}>{phase.timeline}</div>
                        <p className="text-gray-600">{phase.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Impact Visualization */}
      <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Projected Impact</h2>
            <p className="text-xl text-gray-600">Visualizing the transformation we'll create together</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">100,000+</div>
                <p className="text-gray-600 font-medium">Connected Beneficiaries</p>
                <p className="text-gray-500 text-sm mt-2">Across Eastern DRC and beyond</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-yellow-600" />
                </div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
                <p className="text-gray-600 font-medium">Online Courses</p>
                <p className="text-gray-500 text-sm mt-2">Covering all sustainability topics</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Network className="h-10 w-10 text-cyan-600" />
                </div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
                <p className="text-gray-600 font-medium">Partner Organizations</p>
                <p className="text-gray-500 text-sm mt-2">Integrated into the platform</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action with Future Vision */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Bright future with connected communities and sustainable development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-blue-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Help Us Build the Future</h2>
          <p className="text-xl md:text-2xl mb-8 text-cyan-100">
            Our vision for a connected, empowered community requires support from partners, donors, and technology
            collaborators.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Zap className="h-8 w-8 text-yellow-400" />
              <p className="text-lg font-semibold">Join us in creating this transformative platform</p>
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
              >
                <Link href="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-cyan-800 text-lg px-8 py-4"
              >
                <Link href="/partners">View Current Partners</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Commitment */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our Commitment to Innovation</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Technology for Good</h3>
              <p className="text-gray-600 text-sm">Leveraging digital solutions for social change</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Community Connection</h3>
              <p className="text-gray-600 text-sm">Building bridges across communities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Sustainable Development</h3>
              <p className="text-gray-600 text-sm">Creating pathways to lasting change</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            At ALLEN+, we believe that technology and innovation are powerful tools for social change. Our future goals
            reflect our commitment to leveraging digital solutions to amplify our impact, connect communities, and
            create sustainable pathways to development. Together, we're not just planning for the future – we're
            actively building it.
          </p>
        </div>
      </section>
    </div>
  )
}
