import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import Section from "../components/section";

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="#313134"
        color="#929293"
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m indie app developer based in Canada.
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Gino is a freelance and a full-stack developer based in Canada with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{" "}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers.
        </Paragraph>
      </Section>
    </Container>
  );
};
export default Home;
