import Head from "next/head";
import { Heading } from "../components/Heading";
import { LogoLink } from "../components/LogoLink";
import { MenuLink } from "../components/MenuLink";
import { HtmlContnet } from "../components/HtmlContent";
import mock from "../components/HtmlContent/mock";

export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
     <HtmlContnet html={mock}/>
    </div>
  );
}
