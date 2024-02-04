import Image from "next/image"

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px]">
          <Image src="/documents.png" fill className="object-contain dark:hidden" alt="Doc" />
          <Image src="/documents-dark.png" fill className="object-contain hidden dark:block" alt="Doc" />
        </div>
        <div className="relative w-[400px] h-[300px] hidden md:block">
          <Image src="/reading.png" fill className="object-contain dark:hidden" alt="Reading" />
          <Image src="/reading-dark.png" fill className="object-contain hidden dark:block" alt="Reading" />
        </div>
      </div>
    </div>
  )
}

export default Heroes