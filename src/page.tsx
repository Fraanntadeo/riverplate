import { HeroBanner } from "@/components/hero-banner"
import { NextMatches } from "@/components/next-matches"
import { NewsFeed } from "@/components/news-feed"
import { SocialSection } from "@/components/social-section"
import { MembersCTA } from "@/components/members-cta"

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <HeroBanner />
      <NextMatches />
      <NewsFeed />
      <SocialSection />
      <MembersCTA />
    </main>
  )
}
