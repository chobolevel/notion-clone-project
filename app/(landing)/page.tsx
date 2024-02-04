import Footer from "./_components/Footer"
import Heading from "./_components/Heading"
import Heroes from "./_components/Heroes"

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-1 flex-col items-center justify-center text-center gap-y-8 px-6 pb-10 md:justify-start">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage