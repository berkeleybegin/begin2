/** @jsx jsx */
import { jsx, Box, Checkbox, Input, Label, Textarea, Select, Button, Text, Flex } from "theme-ui"
import PageTitle from "../components/page_title"
import Layout from "../components/layout"

export default function ContactPage() {
  return (
    <Layout>
      <PageTitle>Newsletter Sign-Up</PageTitle>
      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/newsletter"
      >
        <input name="bot-field" type="hidden" />
        <input name="form-name" value="contact" type="hidden" />
        <Label htmlFor="name" sx={{ mb: 1}}>
          Name
        </Label>
        <Input required name="name" id="name-input" sx={{ mb: 3, width: "60%" }} />
        <Label htmlFor="name" sx={{ mb: 1 }}>
          Email
        </Label>
        <Input
          required
          name="email"
          type="email"
          id="email-input"
          sx={{ mb: 4, width: "60%" }}
        />
        <Button type="submit">Sign Me Up!</Button>
      </form>
    </Layout>
  )
}
