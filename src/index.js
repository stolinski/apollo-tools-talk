import React from "react"
import { render } from "react-dom"

import { MDXProvider } from "@mdx-js/react"

import {
  Deck,
  FlexBox,
  Slide,
  Box,
  Progress,
  FullScreen,
  Notes,
  mdxComponentMap,
} from "spectacle"

// SPECTACLE_CLI_MDX_START
import slides, { notes } from "./slides.mdx"
// SPECTACLE_CLI_MDX_END

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: "MonoLisa",
    body: "MonoLisa",
    text: "MonoLisa",
    paragraph: "MonoLisa",
  },
  colors: {
    primary: "#fff",
    secondary: "#82D8D8",
  },
}
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
)
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <MDXProvider components={mdxComponentMap}>
    <Deck loop theme={theme} template={template}>
      {slides
        .map((MDXSlide, i) => [MDXSlide, notes[i]])
        .map(([MDXSlide, MDXNote], i) => (
          <Slide backgroundColor="#191324" key={`slide-${i}`} slideNum={i}>
            <MDXSlide />
            <Notes>
              <MDXNote />
            </Notes>
          </Slide>
        ))}
    </Deck>
  </MDXProvider>
)

render(<Presentation />, document.getElementById("root"))
