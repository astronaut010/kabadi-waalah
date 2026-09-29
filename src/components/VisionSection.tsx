const PARAS = [
  "We are from Madurai.",
  "The city of Meenakshi Amman Temple, of jasmine that perfumes the streets at dawn, of Jigarthanda on a hot afternoon. It is also a city where overflowing bins and roadside waste are part of everyday life, and we grew up walking past them.",
  "But we noticed something else too.",
  "Madurai is known as the sleepless city. Every morning, before most of us are awake, someone is already at work: the kabadiwala with a cycle cart, the waste picker with a sack on their shoulder. They collect the plastic, paper, metal and glass that the rest of us throw away. They keep our city from drowning in its own waste, and they get almost none of the credit.",
  "They also don't know what their work is worth.",
  "A kabadiwala often can't tell whether a buyer's price is fair. Copper, aluminium and PET bottles all have very different values, but the person holding them is usually left to trust whatever number is offered. The people who do the hardest part of recycling earn the least from it.",
  "That is why we built Scrap Value.",
  "Point your phone at a piece of waste, and the app tells you what it is, what it can become, what it is worth today, and which buyer nearby will pay a fair price. It works with icons first, words second, in Tamil and Hindi, and with your voice, because the people we built it for shouldn't need to read English to use it.",
  "We are not claiming to fix Madurai's waste problem. But we believe it becomes a little smaller when the person who collects the waste knows the value of what they hold.",
  "To us, waste is not garbage. It is someone's livelihood, and it is a city's second chance.",
];

export function VisionSection() {
  return (
    <section id="vision" className="scroll-mt-20 border-t border-border py-12 sm:py-16">
      <h2 className="font-display text-3xl tracking-tight text-heading sm:text-4xl">Our Vision</h2>
      <div className="mt-6 max-w-[70ch] space-y-4 text-body text-pretty">
        {PARAS.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <blockquote className="mt-8 border-l-4 border-primary pl-4 text-xl font-bold text-heading">
        "Because every kabadiwala deserves to know what their work is worth."
      </blockquote>
    </section>
  );
}
