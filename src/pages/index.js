/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image } from "theme-ui"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import "./index.css"
import mainImage from "../images/begin-hero.png"
import berkImage from "../images/berkeley.jpg"

function Paragraph({ children }) {
  return (
    <Text
      sx={{
        fontSize: 3,
        mb: 3,
      }}
    >
      {children}
    </Text>
  )
}
Paragraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

const NumBlock = () => (
  <Flex 
  sx={{
    flexWrap: "wrap", flexDirection: "row", alignItems: "center", justifyContent: "space-between", 
    textAlign: "center", bg: "#003262", color: "white", padding: ["50px", "70px"], marginTop: "40px", marginBottom: "40px", width: "100%", '@media screen and (max-width: 700px)': {flexDirection: 'column'}}}
    >
    <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}> <Text sx={{fontSize: "4em", padding: 0, margin: 0}}>#1</Text>Public University</Text>
    <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}> <Text sx={{fontSize: "4em", padding: 0, margin: 0}}>#2</Text>University for Entrepreneurs</Text>
    <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}> <Text sx={{fontSize: "4em", padding: 0, margin: 0, gap: "12px"}}>#4</Text>in Most Successful Founders</Text>

    <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}><Text sx={{fontSize: "4em", padding: 0, margin: 0}}>1652</Text>Startup Founders</Text>
    <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}><Text sx={{fontSize: "4em", padding: 0, margin: 0}}>1481</Text>Startups</Text>
    <Text sx={{flexBasis: "33%", paddingBottom: "20px"}}><Text sx={{fontSize: "4em", padding: 0, margin: 0}}>$779.8M</Text>in Research Funding</Text>

    <Text sx={{flexBasis: "33%", paddingBottom: "10px"}}><Text sx={{fontSize: "4em", padding: 0, margin: 0}}>1649</Text>Active Inventions</Text>
    <Text sx={{flexBasis: "33%", paddingBottom: "10px"}}><Text sx={{fontSize: "4em", padding: 0, margin: 0}}>774</Text>Active Patents</Text>
    <Text sx={{flexBasis: "33%", paddingBottom: "10px"}}><Text sx={{fontSize: "4em", padding: 0, margin: 0}}>814</Text>Active Foreign Patents</Text>
  </Flex>
)

const EntryPage = () => (
  <Flex sx={{height: "90vh", minHeight: "300px", alignItems: "center", justifyContent: "center", flexDirection: "column", background: `url(${mainImage}) no-repeat center center fixed`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', objectFit: 'contain'}}>
    <Heading sx={{fontSize: "3rem", color: "white", fontWeight: 200}}>Welcome to the</Heading>
    <Heading sx={{fontSize: "3rem", color: "white", fontWeight: 200}}><b>Be</b>rkeley <b>G</b>ateway to <b>In</b>novation</Heading> 
  </Flex> 
)

const WhyBlock = () => (
  <Flex sx={{height: "70vh", justifyContent: "space-between", flexDirection: "row", alignItems: "center", padding: "40px", '@media screen and (max-width: 700px)': {flexDirection: 'column', height: 'auto'}}}>
    <div sx={{flexBasis: "50%", paddingBottom: '20px'}}>
      <Heading sx={{fontSize: "2rem"}}>Why Berkeley?</Heading>
      <Text sx={{fontSize: "1.2rem"}}>The University of California, Berkeley is home to one of the most vibrant innovation ecosystems in the world. In 2020, Pitchbook ranked UC Berkeley as the #2 university for entrepreneurship. As of 2020, alumni startups have raised more than $36B in venture capital and helped create the world’s most valuable companies such as Apple, Softbank, Intel, Gap eBay, Tesla, and many more.</Text>
    </div>
    <Image src={berkImage} sx={{objectFit: "contain", width: "400px", backgroundColor: `rgba(253, 181, 21, 0.75)`, backgroundBlendMode: "screen multiply"}}></Image>
  </Flex>
)

export default function HomePage() {
  return (
    <Layout padding="10000">
      <link rel="stylesheet" href="https://use.typekit.net/gom7rch.css"></link>
      <EntryPage />
      <WhyBlock />
      <NumBlock />
 
    </Layout>
  )
}