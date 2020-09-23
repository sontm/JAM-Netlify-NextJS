import Head from "next/head";
import Navigation from "./Navigation";
import Container from '@material-ui/core/Container';
import {theme, cssVariables} from '../lib/theme';
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  isFullWidth: boolean;
  bgColor: string;
};
export default function Layout({ children, isFullWidth, bgColor }: Props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>
      
      <Navigation />

      <Container maxWidth={isFullWidth ? false : 'lg'} 
        style={bgColor ? {backgroundColor: bgColor,padding: 0} : {backgroundColor: cssVariables.color.contentbg,padding: 0}}>
        {children}
      </Container>

      <Footer />
    </div>
  );
}
