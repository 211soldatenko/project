import HomeCases from '../sections/home/HomeCases'
import HomeCompetencies from '../sections/home/HomeCompetencies'
import HomeExpertise from '../sections/home/HomeExpertise'
import HomeHero from '../sections/home/HomeHero'
import HomeOffers from '../sections/home/HomeOffers'
import HomePartners from '../sections/home/HomePartners'
import HomeReviews from '../sections/home/HomeReviews'
import HomeSupport from '../sections/home/HomeSupport'
import HomeTeam from '../sections/home/HomeTeam'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCompetencies />
      <HomeSupport />
      <HomeExpertise />
      <HomeOffers />
      <HomeCases />
      <HomeTeam />
      <HomeReviews />
      <HomePartners />
    </>
  )
}
