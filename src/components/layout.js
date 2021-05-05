/** @jsx jsx */
import { jsx, Container, Flex, Box, Styled, MenuButton, Image, Link } from "theme-ui"
import { Sidenav } from "@theme-ui/sidenav"
import NavLink from "./nav_link"
import { useState, useRef, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Head from "./head"
import Sidebar from "./sidebar.mdx"

import Footer from "./footer"

import logo from "../images/navbarlogo.png"
import logo2 from "../images/navbarlogoabbr.png"

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


  const logoText = logoData.allImageSharp.nodes.find(
    (image) => image.fluid.originalName === "logo_text_horizontal.png"
  ).fluid.src

  let [navColor, setNavColor] = useState('#f7f7f7');

  useEffect(()=> {
    window.addEventListener("scroll", handleScroll);
  })

  const handleScroll = () => {
    if (window.scrollY > 20 && navColor === '#f7f7f7') {
      setNavColor('#003262');
    } else if (window.scrollY <= 20 && navColor !== '#f7f7f7') {
      setNavColor("#f7f7f7");
    }
  }

  let propsx = {paddingRight: "20px", color: (navColor === '#f7f7f7') ? '#003263' : '#f7f7f7', transition: "color 100ms ease-in-out"};

  return (
    <Styled.root>
      <Head />
      <Flex
        sx={{
          p: [2, 3],
          alignItems: "center",
          position: 'fixed',
          bg: navColor,
          transition: "background-color 100ms ease-in-out",
          width: '100%', 
          zIndex: '1'
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
          {(navColor === "#f7f7f7") 
          ? <Image sx={{ height: "40px", mt: 2 }} src={logo} />
          : <Image sx={{ height: "40px", mt: 2 }} src={logo2} /> }
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
                <NavLink href="/opportunities" sx={propsx}>Opportunities</NavLink>
                <NavLink href="/events" sx={propsx}>Events</NavLink>
                <NavLink href="/articles" sx={propsx}>News</NavLink>
                <NavLink href="/directory" sx={propsx}>Resources</NavLink>
                <NavLink href="/courses" sx={propsx}>Courses</NavLink>
                <NavLink href="/contact" sx={propsx}>Contact</NavLink>
              </Flex>
      </Flex>
      <Flex
        sx={{
          flexDirection: "row",
          minHeight: "100vh",
          paddingTop: '100px',
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
      <Footer />
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
}

export default Layout
