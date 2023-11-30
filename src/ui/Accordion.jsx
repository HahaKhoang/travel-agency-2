import AccordionItem from "./AccordionItem";
import styles from "./Accordion.module.scss";
import { useState } from "react";

const data = [
  {
    title: "Does the price include flights?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Will I need a visa to travel?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "How soon in advance can I book a trip?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Is it safe to travel alone?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias! Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Do I need vaccinations?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Is there a discount for large groups?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Can we hire a tour guide?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <ul className={styles.container}>
      {data.map((el, i) => (
        <AccordionItem
          onOpen={setCurOpen}
          curOpen={curOpen}
          title={el.title}
          num={i}
          key={i}
        >
          {el.text}
        </AccordionItem>
      ))}
    </ul>
  );
}

export default Accordion;
