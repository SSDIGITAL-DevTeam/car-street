import Cta from "./_components/Cta";
import Discover from "./_components/Discover";
import WeProvide from "./_components/WeProvide";
import WhyChoose from "./_components/WhyChoose";

export default function Home() {
  return (
    <main>
      <section>
        <WhyChoose />
      </section>

      <section>
        <WeProvide />
      </section>

      <section>
        <Discover />
      </section>

      <section>
        <Cta />
      </section>
    </main>
  );
}
