import type { Route } from "./+types/art";

type Art = {
  title: React.ReactNode;
  alt: string;
  src: string;
};

const arts: Art[] = [
  {
    title: "makerbee sketch",
    alt: "makerbee sketch",
    src: "/art/images/makerbee.svg",
  },
  {
    title: "The logo of gopwt",
    alt: "The logo of gopwt",
    src: "/art/images/gopwt.svg",
  },
  {
    title: "The logo of ToQoz/api-gateway-mapping-template",
    alt: "The logo of api-gateway-mapping-template",
    src: "/art/images/api-gateway-mapping-template.png",
  },
  {
    title: (
      <>
        The character of{" "}
        <a href="http://github.com/ToQoz/Gokuraku">Gokuraku</a>
      </>
    ),
    alt: "The character of github.com/ToQoz/Gokuraku",
    src: "/art/images/gokura-kun.png",
  },
  {
    title: "The character of my game",
    alt: "The character of my game",
    src: "/art/images/vamp.png",
  },
  {
    title: "A bird",
    alt: "A bird",
    src: "/art/images/a-bird.png",
  },
  {
    title: "The logo of gog",
    alt: "The logo of gog",
    src: "/art/images/gog.png",
  },
  {
    title: "A knight",
    alt: "A knight",
    src: "/art/images/knight.png",
  },
  {
    title: "A barbarian",
    alt: "A barbarian",
    src: "/art/images/barbarian.png",
  },
  {
    title: "A princess",
    alt: "A princess",
    src: "/art/images/princess.png",
  },
];

export function meta({}: Route.MetaArgs) {
  return [{ title: "art | ToQoz.net" }];
}

export default function Art() {
  return (
    <section>
      <div className="container">
        <h2>List of /art/images</h2>
        {arts.map((a) => (
          <div className="art" key={a.src}>
            <h3 className="art-title">{a.title}</h3>
            <a href={a.src}>
              <img className="art-image" alt={a.alt} src={a.src} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
