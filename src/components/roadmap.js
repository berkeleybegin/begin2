
/** @jsx jsx */
import { jsx, Heading, Text, Flex, Image, Link } from "theme-ui"
import moment from "moment"
import { StaticQuery, graphql } from "gatsby"

import sep from "../images/separator.png"


export default function RoadmapBlock() {
    const img = <Image src={sep} sx={{maxHeight: "300px", paddingRight: "40px", paddingLeft: "20px", alignSelf: "center"}}></Image>;

    return (
        <div sx={{marginTop: "30px", marginLeft: "40px", marginBottom: "70px", '@media screen and (max-width: 900px)': {display: "none"}}}>
            <Heading sx={{fontSize: "2em", paddingBottom: "20px"}}>Roadmap</Heading>
        <Flex sx={{alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100wh"}}>
        <Flex sx={{marginRight: "30px", justifyContent: "center", flexDirection: "row"}}>
            <Flex sx={{flexDirection: "column"}}>
                <Heading sx={{minWidth: "200px"}}> Campus Life</Heading>
                <RoadLink href="/courses">Classes</RoadLink>
                <RoadLink href="/events">Events</RoadLink>
                <RoadLink href="/directory">Student Groups</RoadLink>
                <RoadLink href="/opportunities">Competitions</RoadLink>
                <RoadLink href="https://bearx.co" target="blank">BearX</RoadLink>
                <RoadLink href="https://vcresearch.berkeley.edu" target="blank">Research</RoadLink>
            </Flex>
            {img}
            <Flex sx={{flexDirection: "column"}}>
                <Heading sx={{minWidth: "200px"}}> Academics</Heading>
                <RoadLink href="https://entrepreneurship.berkeley.edu" target="blank">Berkeley-Haas Entrepreneurship Program</RoadLink>
                <RoadLink href="https://blumcenter.berkeley.edu/" target="blank">Blum Center for Developing Economies</RoadLink>
                <RoadLink href="https://ipira.berkeley.edu/" target="blank">Intellectual Property & Industry Alliances (IPIRA)</RoadLink>
                <RoadLink href="https://jacobsinstitute.berkeley.edu/" target="blank">Jacobs Institute for Design Innovation</RoadLink>
                <RoadLink href="https://scet.berkeley.edu/" target="blank">Sutardja Center for Entrepreneurship & Technology</RoadLink>
            </Flex>
            {img}
            <Flex sx={{flexDirection: "column"}}>
                <Heading sx={{minWidth: "200px"}}> Accelerate</Heading>
                <RoadLink href="https://bigideascontest.org/" target="blank">Big Ideas Contest</RoadLink>
                <RoadLink href="https://citrisfoundry.org/" target="blank">Citris Foundry</RoadLink>
                <RoadLink href="https://bayicorps.com/" target="blank">NSF I-Corps</RoadLink>
                <RoadLink href="https://www.uclaunch.com/" target="blank">LAUNCH</RoadLink>
                <RoadLink href="https://skydeck.berkeley.edu/" target="blank">SkyDeck</RoadLink>
                <RoadLink href="https://www.law.berkeley.edu/experiential/startupberkeleylaw/" target="blank">Startup @ Berkeley Law</RoadLink>
            </Flex>
            {img} 
            <Flex sx={{flexDirection: "column"}}>
                <Heading sx={{minWidth: "200px"}}> Scale</Heading>
                <RoadLink href="/directory">Angels</RoadLink>
                <RoadLink href="/directory">Government Grants</RoadLink>
                <RoadLink href="https://bayicorps.com/" target="blank">NSF I-Corps</RoadLink>
                <RoadLink href="/directory">Incubators</RoadLink>
                <RoadLink href="/directory">Venture Capital</RoadLink>
            </Flex>
        </Flex>
    </Flex>
    </div>
    )
  }

  const RoadLink = ({href, target, children}) => (
    <Link href={href} sx={{paddingBottom: "10px"}} target={target}>{children}</Link>
  )