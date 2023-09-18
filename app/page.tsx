import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/uberimaefidei"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-lg font-semibold text-[#1d9bf0]">
            Introducing Uberrimae Fidei
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>...of the utmost good faith.</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Insuring your Bitcoin through captive insurance that allows you to own part of an insurance company and earn underwriting profits
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >

          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/inDemniFi/Uberrimae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Review our</span> GitHub{" "}
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
          />
        ))}
      </div>
    </>
  );
}

const features = [

  {
    title: "Public Captive",
    description:
    "Learn more about the only publicly available Bitcoin Captive by reviewing our [documents](https://bitcoindocs.vercel.app/).",
    demo: <WebVitals />,
  },
  {
    title: "Comprehensive Coverage",
    description:
      "Extensive [underwriting criteria](https:twitter.com/indemnifi) ensures that all attack vectors are researched and fairly rated.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/shield1.jpg" width={150} height={150} />
      </div>
    ),
  },
  {
    title: "Market Hedge",
    description:
      "Whether its a bull or bear market, you earn [underwriting profits](https://twitter.com/indemnifi) on your insurance policy.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/logo.jpg" width={150} height={150} />
      </div>
    ),
  },
  {
    title: "Wallet Risk Analysis",
    description:
      "[Connect](walletconnect) your wallet and check out the risk dashboard available with your policy.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/70.jpg" width={150} height={150} />
      </div>
    ),
  },

  {
    title: "Capital Fund Management",
    description:
      "Management of the capital fund will align with your Captive Ownership interests.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/46.jpg" width={150} height={150} />
      </div>
    ),
  },

  {
    title: "About Us",
    description:
      "From miners to insurance, we work within Bitcoin and its economy.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/56.jpg" width={150} height={150} />
      </div>
    ),
  },
];
