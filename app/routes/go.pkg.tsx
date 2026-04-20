import type { Route } from "./+types/go.pkg";

type Pkg = {
  name: string;
  url: string;
  description: string;
};

const pkgs: Pkg[] = [
  {
    name: "dou",
    url: "https://github.com/ToQoz/dou",
    description:
      "Package dou is tiny/flexible toolkit for creating a api server. This is **NOT** a framework.",
  },
  {
    name: "git-ls-untracked-files",
    url: "https://github.com/ToQoz/git-ls-untracked-files",
    description: "",
  },
  {
    name: "go-formspec",
    url: "https://github.com/ToQoz/go-formspec",
    description:
      "Package github.com/ToQoz/formspec validates a form. So it will expresses spec for form. This is generally used in http.Handler.",
  },
  {
    name: "go-irc",
    url: "https://github.com/ToQoz/go-irc",
    description: "under devlopment.",
  },
  {
    name: "go-unitypackage",
    url: "https://github.com/ToQoz/go-unitypackage",
    description:
      "under development. go-unitypackage is utility for *.unitypackage.",
  },
  {
    name: "godecls",
    url: "https://github.com/ToQoz/godecls",
    description: "godecls lists declarations in files",
  },
  {
    name: "godeps",
    url: "https://github.com/ToQoz/godeps",
    description: "github.com/ToQoz/go-deps reveals go pkg dependencies.",
  },
  {
    name: "goimps",
    url: "https://github.com/ToQoz/goimps",
    description: "goimps is utility for treating imports",
  },
  {
    name: "gomain",
    url: "https://github.com/ToQoz/gomain",
    description: "Write go code in your $EDITOR and run it!",
  },
  {
    name: "gopwt",
    url: "https://github.com/ToQoz/gopwt",
    description: "PowerAssert library for golang",
  },
  {
    name: "misc",
    url: "https://github.com/ToQoz/misc",
    description: "",
  },
  {
    name: "rome",
    url: "https://github.com/ToQoz/rome",
    description: "Rome is http router for golang",
  },
  {
    name: "scheman",
    url: "https://github.com/ToQoz/scheman",
    description:
      "!!! Under development !!! scheman is database schema migration tool.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [{ title: "go/pkg | ToQoz.net" }];
}

export default function GoPkg() {
  return (
    <section>
      <h2>Golang package I created</h2>
      <dl>
        {pkgs.map((p) => (
          <div key={p.name}>
            <dt>
              <a href={p.url}>{p.name}</a>
            </dt>
            <dd>
              <p>{p.description}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
