import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Text,
} from "@react-email/components";

interface ThanksEmailProps {
  name: string;
}

export const ThanksEmail = ({ name }: ThanksEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://i.ibb.co/Jn4CXYd/logo.png"
          alt="TWC"
          style={logo}
          width={140}
          height={140}
        />
        <Text style={paragraph}>Welcome {name},</Text>
        <br />
        <Text style={paragraph}>
          Thank you for giving us this opportunity. We will get back to you
          shortly.
        </Text>
        <Text style={paragraph}>
          In the meantime, please take a sit and read our{" "}
          <Link href="https://www.instagram.com/i.twc.i/">magazine</Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
