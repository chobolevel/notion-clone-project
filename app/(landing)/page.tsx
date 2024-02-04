import Heading from "./_components/Heading"

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-1 flex-col items-center justify-center text-center gap-y-8 px-6 pb-10 md:justify-start">
        <Heading />
      </div>
    </div>
  )
}

export default LandingPage