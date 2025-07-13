import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, Heart, Lightbulb, Users, Globe, Sprout, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Full-Width Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="ALLEN+ programs in action across communities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Our Programs:
            <span className="block text-yellow-400">Creating Lasting Impact</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Discover how we're empowering communities through innovative, practice-driven initiatives
          </p>
        </div>
      </section>

      {/* Green Youth Forum - Large Visual Section */}
      <section id="green-youth-forum" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Youth engaged in climate action discussions and activities"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl border-l-4 border-green-500">
                <div className="text-3xl font-bold text-green-600">234</div>
                <p className="text-gray-600 font-medium">Climate Activists</p>
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800">Green Youth Forum</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                A dynamic platform for youths and women to engage in informative dialogues, share experiences, and
                inspire innovative solutions to champion climate change.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">
                    Network building across local, national, and international levels
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Inspiring innovative approaches to environmental challenges</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Empowering youth leadership in climate action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solidarity + with Emotional Imagery */}
      <section id="solidarity-plus" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                  <Heart className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800">Solidarity +</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Supporting children living in Eastern DRC Internally Displaced People Camps, building resilience,
                sharing love, and sparking hope in the most challenging circumstances.
              </p>
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <div className="text-4xl font-bold text-yellow-600 mb-2">1,500+</div>
                <p className="text-gray-700 font-medium">Children Supported</p>
                <p className="text-gray-600 text-sm mt-1">Building resilience and hope in IDP communities</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Emotional support and community building</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Educational activities and skill development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Creating safe spaces for children to thrive</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 relative order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Children in IDP camps receiving support and care"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Impact Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border-l-4 border-yellow-500">
                <div className="text-2xl font-bold text-yellow-600">Hope</div>
                <p className="text-gray-600 font-medium">Restored Daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Program - Multi-Image Layout */}
      <section id="innovation" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-cyan-100 rounded-2xl flex items-center justify-center">
                <Lightbulb className="h-10 w-10 text-cyan-600" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Innovation in Agriculture, Renewable Energy, and Recycling
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe that young people can drive change, that's why we put practice at the center of all our
              programs. Leave no one behind as we innovate for sustainable development.
            </p>
          </div>

          {/* Three-Column Image Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Sustainable agriculture practices in action"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center mb-2">
                    <Sprout className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">Sustainable Agriculture</h3>
                  </div>
                  <p className="text-sm text-gray-200">Innovative farming techniques for food security</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Renewable energy solutions in communities"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center mb-2">
                    <Globe className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">Renewable Energy</h3>
                  </div>
                  <p className="text-sm text-gray-200">Clean energy solutions for communities</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Recycling and circular economy initiatives"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="h-6 w-6 mr-2" />
                    <h3 className="text-xl font-bold">Recycling Innovation</h3>
                  </div>
                  <p className="text-sm text-gray-200">Turning waste into valuable resources</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Practice-Driven Approach Visual */}
          <div className="bg-cyan-50 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Practice-Driven Innovation</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our approach puts hands-on learning and real-world application at the center of every program,
                  ensuring sustainable impact and community ownership.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-700">Community-led project identification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-700">Hands-on training and skill development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-700">Sustainable implementation and monitoring</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Community members learning through hands-on practice"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Background Image */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Community members celebrating program success"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Join Our Programs</h2>
          <p className="text-xl md:text-2xl mb-12 text-green-100">
            Ready to be part of the change? Get involved in our impactful programs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
            >
              <Link href="/contact">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4"
            >
              <Link href="/impact">See Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
