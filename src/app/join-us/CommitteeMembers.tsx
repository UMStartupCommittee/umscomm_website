import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Mail, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { highCommittee } from "@/data/members"
import { directorMembers } from "@/data/members"
import { Member } from "@/data/members"

import { socialLinks } from "@/data/socialLinks"

export default function CommitteeMembers() {

  // console.log('directorMembers', directorMembers)
  // console.log('executiveMembers', highCommittee)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            {/* <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2"> */}
            <div className="flex justify-center items-center">
              <div className="max-w-3xl text-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About Our Club</h1>
                  <p className="text-muted-foreground md:text-xl">
                    The Universiti Malaya Startup Community is a vibrant hub for aspiring entrepreneurs, innovators, and business
                    enthusiasts.
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-center items-center mt-8 sm:flex-row">
                  <Button asChild>
                    <Link href={socialLinks.discord || "#"}>
                      Join Our Community
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/about">
                      Learn More
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground mt-8">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>500+ Members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Est. 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>University Malaya</span>
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Club members collaborating"
                  className="rounded-lg object-cover"
                />
              </div> */}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empowering Future Entrepreneurs</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We aim to foster innovation, provide resources, and build a supportive community for students
                  interested in entrepreneurship and startups.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 md:gap-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-muted-foreground">
                  Connect with like-minded individuals passionate about startups and innovation.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Events</h3>
                <p className="text-muted-foreground">
                  Participate in workshops, hackathons, and networking events throughout the year.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Resources</h3>
                <p className="text-muted-foreground">
                  Access mentorship, funding opportunities, and educational resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The dedicated individuals who make our club thrive and create opportunities for our members.
                </p>
              </div>
            </div>

            <Tabs defaultValue="executive" className="mt-8">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="executive">Executive Board</TabsTrigger>
                  <TabsTrigger value="directors">Directors</TabsTrigger>
                  {/* <TabsTrigger value="advisors">Faculty Advisors</TabsTrigger> */}
                </TabsList>
              </div>

              <TabsContent value="executive" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {highCommittee.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="directors" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {directorMembers.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </TabsContent>

              {/* <TabsContent value="advisors" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {advisorMembers.map((member) => (
                    <MemberCard key={member.name} member={member} />
                  ))}
                </div>
              </TabsContent> */}
            </Tabs>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Become a part of our vibrant community and take your first step towards entrepreneurial success.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  Apply for Membership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      {/* <footer className="w-full border-t bg-background py-6">
        <div className=" flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Startup Community Club. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

function MemberCard({ member }: { member: Member }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <Image
          src={member.imageUrl || "/placeholder.svg"}
          alt={member.name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-bold">{member.name}</h3>
          <p className="text-sm text-primary">{member.role}</p>
          <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
          {/* {member.links && (
            <div className="flex space-x-2 pt-2">
              {member.links.linkedin && (
                <Link href={member.links.linkedin} className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              )}
              {member.links.twitter && (
                <Link href={member.links.twitter} className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
              )}
              {member.links.email && (
                <Link href={`mailto:${member.links.email}`} className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Link>
              )}
            </div>
          )} */}
        </div>
      </CardContent>
    </Card>
  )
}