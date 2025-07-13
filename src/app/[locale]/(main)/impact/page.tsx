
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Heart, Leaf, Target, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function ImpactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Powerful Impact Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Communities transformed through ALLEN+ programs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Our Impact:
            <span className="block text-yellow-400">Creating Lasting Change</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Measuring our progress and celebrating the communities we've empowered
          </p>
        </div>
      </section>

      {/* Visual Impact Statistics */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">By the Numbers</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                number: "123+",
                label: "Young people directly engaged in Youth Climate Activists program",
                color: "green",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Leaf,
                number: "234",
                label: "Young people involved in Green Academy Program as climate activists",
                color: "yellow",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Heart,
                number: "105+",
                label: "Women empowered through our initiatives",
                color: "violet",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                icon: Globe,
                number: "10,000+",
                label: "Community members reached through campaigns and sensitization",
                color: "cyan",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={stat.image || "/placeholder.svg"}
                    alt={`Visual representation of ${stat.label}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-${stat.color}-500 rounded-full flex items-center justify-center`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Advocacy with COP Images */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Chrispin Ngakani at COP conference representing Eastern DRC"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-blue-500">
                <Badge className="bg-blue-100 text-blue-800 text-sm font-semibold">Global Advocacy</Badge>
              </div>
              {/* COP Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl">
                <div className="text-2xl font-bold text-blue-600">COP 29 & 16</div>
                <p className="text-gray-600 font-medium">International Participation</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Amplifying Voices on the
                <span className="text-blue-600"> Global Stage</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our Executive Director, Chrispin Ngakani, has represented underserved communities at COP 29 and COP 16,
                ensuring that the voices of Eastern DRC are heard in international climate discussions.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">COP 29 & COP 16 Participation</h4>
                    <p className="text-gray-600">
                      Advocating for climate justice and community-led solutions on the world stage
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">International Recognition</h4>
                    <p className="text-gray-600">
                      Bringing Eastern DRC perspectives to global climate policy discussions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UN Recognition - Certificate Display */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Recognition & Achievements</h2>
            <p className="text-xl text-gray-600">
              Honored by international organizations for our commitment to environmental protection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="UN Environment Programme Certificate of Appreciation"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl mx-auto"
              />
              {/* Verification Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
                International Recognition
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                UN Environment Programme
                <span className="block text-yellow-600">Certificate of Appreciation</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Recognized by the United Nations Environment Programme for our outstanding contribution to environmental
                protection and community empowerment in Eastern DRC.
              </p>
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <p className="text-lg text-gray-700 font-medium italic">
                  "Exceptional dedication to sustainable development and environmental stewardship in challenging
                  circumstances."
                </p>
                <p className="text-gray-600 mt-2">— UN Environment Programme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement Photo Stories */}
      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Community Engagement in Action</h2>
            <p className="text-xl text-gray-600">Real stories, real impact, real change happening every day</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Community sensitization campaign in progress"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Sensitization Campaigns</h3>
                  <p className="text-gray-200">Reaching thousands with climate education and sustainable practices</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-green-600">10,000+</div>
                    <p className="text-gray-600">People Reached</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="text-green-600 font-semibold">Growing Impact</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Community gathering and cultural celebration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Community Gatherings</h3>
                  <p className="text-gray-200">Strengthening bonds while sharing environmental knowledge</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-violet-600">50+</div>
                    <p className="text-gray-600">Events Organized</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-violet-500" />
                    <span className="text-violet-600 font-semibold">Community Unity</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Impact Commitment */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Hopeful future with thriving communities"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Our Commitment Continues</h2>
          <p className="text-xl md:text-2xl mb-12 text-green-100">
            Every number represents a life touched, a community empowered, and a step toward a more sustainable future.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Growing</div>
              <p className="text-xl">Community Reach</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Expanding</div>
              <p className="text-xl">Program Impact</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Strengthening</div>
              <p className="text-xl">Global Partnerships</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
