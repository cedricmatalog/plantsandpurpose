import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:py-4 md:text-4xl">
          Hola! I&apos;m Roni, a dedicated Registered Nutrition Dietitian with a passion for empowering vegans and vegetarians on their path to vibrant health.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          My mission is to provide you with expert guidance, personalized nutrition plans, and a wealth of knowledge to help you not just thrive but excel in your plant-based lifestyle. Together, we&apos;ll explore the delicious world of plant-based nutrition, discover the benefits of mindful eating, and tailor a plan that&apos;s as unique as you are. Whether you&apos;re looking to boost energy, manage weight, or simply embrace a more nourishing way of life, I&apos;m here to support you every step of the way. Let&apos;s embark on this journey to optimal health together!
        </p>
      </div>
      <div className="flex gap-4 md:py-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Schedule a Consultation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          Subscribe to Our Newsletter
        </Link>
      </div>
    </section>
  )
}
