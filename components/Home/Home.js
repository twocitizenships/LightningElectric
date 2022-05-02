import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Heading,
  Text,
  FormControl,
  FormLabel,
  Link,
  Stack,
  VStack,
  Box,
  Flex,
} from "@chakra-ui/react";
import Button from "../Button";
import Input from "../Input";
import createPaywallLink from "utils/createPaywallLink";

export default function Home() {
  const router = useRouter();
  const username = "clusk"
  const { query } = useRouter();
  const [paywallLink, setPaywallLink] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const paywallLink = createPaywallLink({
      username: "clusk",
      title: "test",
      currency: "USD",
      amount: "0.01",
      redirectUrl: "something.com"
    });

    setPaywallLink(paywallLink);
    setIsLoading(false)
    //setIsLoading(true);
    //router.push(`/create/${username}`);
  };

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Lightning Electric ⚡ - Control Philips Hue Lightbulb with Lightning powered by Strike"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/distracted-boyfriend-meme.jpeg" />
        <meta property="og:url" content="https://plebpay.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lightning Electric Company ⚡" />
        <meta
          name="twitter:description"
          content="Create a Bitcoin Lightning paywall and get paid directly to your Strike
        account."
        />
        <meta
          name="twitter:image"
          content="https://www.plebpay.com/distracted-boyfriend-meme.jpeg"
        />
      </Head>
      <Flex height={626} direction="column" justifyContent="space-between">
        <Box maxW={388}>
          <Heading as="h1" size="3xl" mb={4}>
            Lightning Electric Company ⚡
          </Heading>
          <Text mb={8}>
            Control Philips Hue with Lightning.  Powered by the Strike API.
          </Text>
          <form onSubmit={handleSubmit}>
        <Text fontSize="xs" color="face.tertiary" mb={8}>
          By clicking &quot;Change The Light,&quot; you agree to our{" "}
          <Link href="https://strike.me/legal/tos/" isExternal>
            Terms
          </Link>{" "}
          and{" "}
          <Link href="https://strike.me/legal/privacy/" isExternal>
            Privacy Notice
          </Link>
        </Text>
        <Button isLoading={isLoading} type="submit" mb={8} >
          Change The Light
        </Button>

      </form>

        </Box>
        <Text>
          Need a username?{" "}
          <Link href="https://strike.me/download" isExternal variant="brand">
            Click here
          </Link>{" "}
          to download Strike and get started.
        </Text>
      </Flex>
      <a
        href="https://github.com/twocitizenships/LightningElectric"
        style={{ position: "fixed", top: 0, right: 0 }}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
          className="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
    </>
  );
}
