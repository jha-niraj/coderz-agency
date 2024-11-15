import ContactSection from "@/components/contact";
import FaqsAccrodian from "@/components/faqs";
import FollowUs from "@/components/followus";
import HeroSection from "@/components/herosection";
import Portfolio from "@/components/portfolio";
import Services from "@/components/servicesoffer";

export default function ServicesPage() {
    return (
        <main className={`h-full w-[95%] sm:w-[80%] relative flex flex-col items-center justify-center mx-auto`}>
            <HeroSection />
            <Services />
            <Portfolio />
            <FaqsAccrodian />
            <ContactSection />
            <FollowUs />
        </main>
    )
}