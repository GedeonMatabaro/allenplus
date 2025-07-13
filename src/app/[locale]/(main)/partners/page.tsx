
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Handshake, Globe, Heart, Users, Target } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// export default function PartnersPage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section with Partnership Image */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/placeholder.svg?height=1080&width=1920"
//             alt="ALLEN+ team collaborating with international partners"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
//         </div>

//         <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-20">
//           <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
//             Our Valued
//             <span className="block text-yellow-400">Partners</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
//             Together, we're building stronger communities and a more sustainable future
//           </p>
//         </div>
//       </section>

//       {/* Partnership Philosophy with Visual */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-7xl">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <Image
//                 src="/placeholder.svg?height=600&width=700"
//                 alt="Diverse hands coming together in partnership"
//                 width={700}
//                 height={600}
//                 className="rounded-2xl shadow-2xl"
//               />
//               {/* Floating Partnership Icon */}
//               <div className="absolute -top-8 -right-8 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
//                 <Handshake className="h-10 w-10 text-green-600" />
//               </div>
//               <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-100 rounded-2xl opacity-20"></div>
//             </div>
//             <div className="space-y-8">
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//                 Collaboration for
//                 <span className="text-green-600"> Greater Impact</span>
//               </h2>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Our partnerships are built on shared values of sustainability, community empowerment, and social
//                 justice. Together with our partners, we amplify our reach and deepen our impact across Eastern DRC and
//                 beyond.
//               </p>
//               <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
//                 <p className="text-lg text-gray-700 font-medium italic">
//                   "Alone we can do so little; together we can do so much."
//                 </p>
//                 <p className="text-gray-600 mt-2">— Our Partnership Philosophy</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partner Categories with Visual Cards */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Partnership Categories</h2>
//             <p className="text-xl text-gray-600">Diverse collaborations creating comprehensive solutions</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
//               <div className="relative h-64 overflow-hidden">
//                 <Image
//                   src="/placeholder.svg?height=400&width=500"
//                   alt="International organizations collaboration"
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <div className="flex items-center mb-3">
//                     <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
//                       <Globe className="h-6 w-6" />
//                     </div>
//                     <h3 className="text-xl font-bold">International Organizations</h3>
//                   </div>
//                   <p className="text-gray-200 text-sm">
//                     Global institutions bringing expertise and resources to local communities
//                   </p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
//               <div className="relative h-64 overflow-hidden">
//                 <Image
//                   src="/placeholder.svg?height=400&width=500"
//                   alt="Local NGOs working together"
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <div className="flex items-center mb-3">
//                     <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
//                       <Heart className="h-6 w-6" />
//                     </div>
//                     <h3 className="text-xl font-bold">Local NGOs</h3>
//                   </div>
//                   <p className="text-gray-200 text-sm">Grassroots organizations understanding unique community needs</p>
//                 </div>
//               </div>
//             </Card>

//             <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
//               <div className="relative h-64 overflow-hidden">
//                 <Image
//                   src="/placeholder.svg?height=400&width=500"
//                   alt="Government partnership meetings"
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <div className="flex items-center mb-3">
//                     <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
//                       <Handshake className="h-6 w-6" />
//                     </div>
//                     <h3 className="text-xl font-bold">Government Agencies</h3>
//                   </div>
//                   <p className="text-gray-200 text-sm">Policy implementation and sustainable community support</p>
//                 </div>
//               </div>
//             </Card>
//           </div>

//           {/* Partner Logos Showcase */}
//           <div className="bg-white rounded-2xl p-12 shadow-2xl">
//             <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Partner Network</h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
//               {Array.from({ length: 12 }, (_, i) => (
//                 <div key={i} className="group flex items-center justify-center p-4">
//                   <Image
//                     src={`/placeholder.svg?height=80&width=120&text=Partner+${i + 1}`}
//                     alt={`Partner ${i + 1} logo`}
//                     width={120}
//                     height={80}
//                     className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partnership Impact Stories */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Partnership Success Stories</h2>
//             <p className="text-xl text-gray-600">Real collaborations creating measurable change</p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             <Card className="overflow-hidden border-0 shadow-2xl">
//               <div className="relative h-80">
//                 <Image
//                   src="/placeholder.svg?height=400&width=600"
//                   alt="Joint project implementation with international partner"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <div className="flex items-center mb-3">
//                     <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
//                       <Users className="h-5 w-5" />
//                     </div>
//                     <h3 className="text-2xl font-bold">Expanded Reach</h3>
//                   </div>
//                   <p className="text-gray-200">
//                     Strategic partnerships enabling us to reach more communities across Eastern DRC
//                   </p>
//                 </div>
//               </div>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-3xl font-bold text-green-600">5x</div>
//                     <p className="text-gray-600">Increased Reach</p>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-2xl font-bold text-gray-800">15+</div>
//                     <p className="text-gray-600">New Communities</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="overflow-hidden border-0 shadow-2xl">
//               <div className="relative h-80">
//                 <Image
//                   src="/placeholder.svg?height=400&width=600"
//                   alt="Resource sharing and knowledge exchange"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <div className="flex items-center mb-3">
//                     <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
//                       <Target className="h-5 w-5" />
//                     </div>
//                     <h3 className="text-2xl font-bold">Resource Sharing</h3>
//                   </div>
//                   <p className="text-gray-200">
//                     Pooling expertise and resources for more effective sustainable solutions
//                   </p>
//                 </div>
//               </div>
//               <CardContent className="p-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <div className="text-3xl font-bold text-yellow-600">3x</div>
//                     <p className="text-gray-600">More Resources</p>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-2xl font-bold text-gray-800">100%</div>
//                     <p className="text-gray-600">Shared Knowledge</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Partnership Benefits Visual Timeline */}
//       <section className="py-20 px-4 bg-green-50">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Our Partnerships Achieve</h2>
//             <p className="text-xl text-gray-600">A visual journey of collaborative impact</p>
//           </div>

//           <div className="space-y-12">
//             {[
//               {
//                 number: "1",
//                 title: "Expanded Reach",
//                 description:
//                   "Through strategic partnerships, we can reach more communities and provide services to a broader population across Eastern DRC.",
//                 image: "/placeholder.svg?height=300&width=400",
//                 color: "green",
//               },
//               {
//                 number: "2",
//                 title: "Resource Sharing",
//                 description:
//                   "Collaborative efforts allow us to pool resources, expertise, and knowledge to create more effective and sustainable solutions.",
//                 image: "/placeholder.svg?height=300&width=400",
//                 color: "yellow",
//               },
//               {
//                 number: "3",
//                 title: "Innovation & Learning",
//                 description:
//                   "Partnerships foster innovation by bringing together diverse perspectives and approaches to complex challenges.",
//                 image: "/placeholder.svg?height=300&width=400",
//                 color: "cyan",
//               },
//               {
//                 number: "4",
//                 title: "Sustainable Impact",
//                 description:
//                   "Long-term partnerships ensure that our programs have lasting impact and continue to benefit communities over time.",
//                 image: "/placeholder.svg?height=300&width=400",
//                 color: "purple",
//               },
//             ].map((benefit, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-12`}
//               >
//                 <div className="flex-1 relative">
//                   <Image
//                     src={benefit.image || "/placeholder.svg"}
//                     alt={`${benefit.title} visualization`}
//                     width={400}
//                     height={300}
//                     className="rounded-2xl shadow-xl"
//                   />
//                   <div
//                     className={`absolute -top-4 ${
//                       index % 2 === 0 ? "-right-4" : "-left-4"
//                     } w-16 h-16 bg-${benefit.color}-500 rounded-full flex items-center justify-center shadow-lg`}
//                   >
//                     <span className="text-white font-bold text-xl">{benefit.number}</span>
//                   </div>
//                 </div>
//                 <div className="flex-1 space-y-4">
//                   <h3 className="text-3xl font-bold text-gray-800">{benefit.title}</h3>
//                   <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Partnership with Background Image */}
//       <section className="relative py-32 px-4 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/placeholder.svg?height=800&width=1600"
//             alt="Diverse group of partners working together"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-green-900/80"></div>
//         </div>

//         <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
//           <h2 className="text-4xl md:text-6xl font-bold mb-8">Become Our Partner</h2>
//           <p className="text-xl md:text-2xl mb-8 text-green-100">
//             Join us in creating sustainable change. Together, we can achieve more than we ever could alone.
//           </p>
//           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
//             <p className="text-lg mb-6">
//               Whether you're an organization, government agency, or individual looking to make a difference, we welcome
//               partnerships that align with our mission and values.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
//               >
//                 <Link href="/contact">Contact Us for Partnership</Link>
//               </Button>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4"
//               >
//                 <Link href="/programs">Explore Our Programs</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Globe, Heart, Users, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Partnership Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="ALLEN+ team collaborating with international partners"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Our Valued
            <span className="block text-yellow-400">Partners</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Together, we're building stronger communities and a more sustainable future
          </p>
        </div>
      </section>

      {/* Partnership Philosophy with Visual */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Diverse hands coming together in partnership"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Partnership Icon */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <Handshake className="h-10 w-10 text-green-600" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-100 rounded-2xl opacity-20"></div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Collaboration for
                <span className="text-green-600"> Greater Impact</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our partnerships are built on shared values of sustainability, community empowerment, and social
                justice. Together with our partners, we amplify our reach and deepen our impact across Eastern DRC and
                beyond.
              </p>
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <p className="text-lg text-gray-700 font-medium italic">
                  "Alone we can do so little; together we can do so much."
                </p>
                <p className="text-gray-600 mt-2">— Our Partnership Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories with Visual Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Partnership Categories</h2>
            <p className="text-xl text-gray-600">Diverse collaborations creating comprehensive solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="International organizations collaboration"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Globe className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">International Organizations</h3>
                  </div>
                  <p className="text-gray-200 text-sm">
                    Global institutions bringing expertise and resources to local communities
                  </p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Local NGOs working together"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Local NGOs</h3>
                  </div>
                  <p className="text-gray-200 text-sm">Grassroots organizations understanding unique community needs</p>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Government partnership meetings"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                      <Handshake className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">Government Agencies</h3>
                  </div>
                  <p className="text-gray-200 text-sm">Policy implementation and sustainable community support</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Partner Logos Showcase */}
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Partner Network</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="group flex items-center justify-center p-4">
                  <Image
                    src={`/placeholder.svg?height=80&width=120&text=Partner+${i + 1}`}
                    alt={`Partner ${i + 1} logo`}
                    width={120}
                    height={80}
                    className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Impact Stories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Partnership Success Stories</h2>
            <p className="text-xl text-gray-600">Real collaborations creating measurable change</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Joint project implementation with international partner"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold">Expanded Reach</h3>
                  </div>
                  <p className="text-gray-200">
                    Strategic partnerships enabling us to reach more communities across Eastern DRC
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-green-600">5x</div>
                    <p className="text-gray-600">Increased Reach</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">15+</div>
                    <p className="text-gray-600">New Communities</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Resource sharing and knowledge exchange"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold">Resource Sharing</h3>
                  </div>
                  <p className="text-gray-200">
                    Pooling expertise and resources for more effective sustainable solutions
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-yellow-600">3x</div>
                    <p className="text-gray-600">More Resources</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-800">100%</div>
                    <p className="text-gray-600">Shared Knowledge</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Benefits Visual Timeline */}
      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">What Our Partnerships Achieve</h2>
            <p className="text-xl text-gray-600">A visual journey of collaborative impact</p>
          </div>

          <div className="space-y-12">
            {[
              {
                number: "1",
                title: "Expanded Reach",
                description:
                  "Through strategic partnerships, we can reach more communities and provide services to a broader population across Eastern DRC.",
                image: "/placeholder.svg?height=300&width=400",
                color: "green",
              },
              {
                number: "2",
                title: "Resource Sharing",
                description:
                  "Collaborative efforts allow us to pool resources, expertise, and knowledge to create more effective and sustainable solutions.",
                image: "/placeholder.svg?height=300&width=400",
                color: "yellow",
              },
              {
                number: "3",
                title: "Innovation & Learning",
                description:
                  "Partnerships foster innovation by bringing together diverse perspectives and approaches to complex challenges.",
                image: "/placeholder.svg?height=300&width=400",
                color: "cyan",
              },
              {
                number: "4",
                title: "Sustainable Impact",
                description:
                  "Long-term partnerships ensure that our programs have lasting impact and continue to benefit communities over time.",
                image: "/placeholder.svg?height=300&width=400",
                color: "purple",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-12`}
              >
                <div className="flex-1 relative">
                  <Image
                    src={benefit.image || "/placeholder.svg"}
                    alt={`${benefit.title} visualization`}
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-xl"
                  />
                  <div
                    className={`absolute -top-4 ${
                      index % 2 === 0 ? "-right-4" : "-left-4"
                    } w-16 h-16 bg-${benefit.color}-500 rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white font-bold text-xl">{benefit.number}</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold text-gray-800">{benefit.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Partnership with Background Image */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Diverse group of partners working together"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Become Our Partner</h2>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Join us in creating sustainable change. Together, we can achieve more than we ever could alone.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-lg mb-6">
              Whether you're an organization, government agency, or individual looking to make a difference, we welcome
              partnerships that align with our mission and values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
              >
                <Link href="/contact">Contact Us for Partnership</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4"
              >
                <Link href="/programs">Explore Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
