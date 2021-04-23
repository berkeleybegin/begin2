/** @jsx jsx */
import { jsx, Container, Flex, Box, Styled, MenuButton, Image, Link } from "theme-ui"
import { Sidenav } from "@theme-ui/sidenav"
import NavLink from "./nav_link"
import { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Head from "./head"
import Sidebar from "./sidebar.mdx"

const Layout = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const nav = useRef(null)

  const logoData = useStaticQuery(graphql`
    query logoQuery {
      allImageSharp(
        filter: {
          fluid: {
            originalName: {
              in: ["logo_graphic.png", "logo_text_horizontal.png"]
            }
          }
        }
      ) {
        nodes {
          fluid {
            originalName
            src
          }
        }
      }
    }
  `)

  const logoGraphic = logoData.allImageSharp.nodes.find(
    (image) => image.fluid.originalName === "logo_graphic.png"
  ).fluid.src
  const logoText = logoData.allImageSharp.nodes.find(
    (image) => image.fluid.originalName === "logo_text_horizontal.png"
  ).fluid.src

  return (
    <Styled.root>
      <Head />
      <Flex
        sx={{
          p: [3, 4],
          alignItems: "center",
        }}
        as="header"
      >
        {/* <MenuButton
          sx={{ display: [null, "none"], mr: 3 }}
          onClick={() => {
            setSidebarOpen(!sidebarOpen)
            if (!nav.current) return
            const navLink = nav.current.querySelector("a")
            if (navLink) navLink.focus()
          }}
        /> */}
        <Link href="/" sx={{margin: 0, padding:0}}>
          <Image sx={{ height: "32px", mr: 3 }} src={logoGraphic} />
          <Image sx={{ height: "32px", mt: 2 }} src={logoText} />
        </Link>

            <Flex
              sx={{
                // display: [null, "block"],
                // width: 256,
                display: 'flex',
                flexDirection: "row",
                justifyContent: 'right',
                marginLeft: 'auto',
                // margin: 'auto',
                // width: 'auto',
                top: [3, 4],
                pl: [3, 4],
                pr: 2,
                mt: [64, 0],
                '@media screen and (max-width: 800px)': {
                    display: 'none',
                },
              }}>
                <NavLink href="/opportunities" sx={{paddingRight: "20px"}}>Opportunities</NavLink>
                <NavLink href="/events" sx={{paddingRight: "20px"}}>Events</NavLink>
                <NavLink href="/articles" sx={{paddingRight: "20px"}}>News</NavLink>
                <NavLink href="/directory" sx={{paddingRight: "20px"}}>Directory</NavLink>
                <NavLink href="/courses" sx={{paddingRight: "20px"}}>Courses</NavLink>
                <NavLink href="/contact" sx={{paddingRight: "20px"}}>Contact</NavLink>
              </Flex>
      </Flex>
      <Flex
        sx={{
          flexDirection: "row",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            flex: "1 1 auto",
            display: ["block", "flex"],
          }}
        >
          <Container
            sx={{
              // p: 3,
              width: "100%",
              minWidth: 0,
              maxWidth: props.padding || 768,
              mx: "auto",
            }}
            as="main"
          >
            {props.children}
          </Container>
        </Box>
      </Flex>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
}

export default Layout
