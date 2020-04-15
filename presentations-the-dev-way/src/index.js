import React from 'react';
import ReactDOM from 'react-dom';

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  Stepper,
  SpectacleLogo,
  Text,
  UnorderedList,
  indentNormalizer
} from 'spectacle';

// SPECTACLE_CLI_THEME_START
const theme = {
  size: {
    width: 1366,
    height: 768,
    maxCodePaneHeight: 200
  },
  colors: {
    primary: '#ebe5da',
    secondary: '#8166AB',
    // secondary: '#fc6986',
    tertiary: '#1F2639',
    // tertiary: '#373744',
    // tertiary: '#353D4F', 
    // tertiary: '#1e2852',
    quaternary: '#FEF18F',
    // quaternary: '#ffc951',
    quinary: '#F0233B',
    // quinary: '#8bddfd'
    bone: '#E2D9D9',
    razzle: '#fc6986'
  },
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: 'MonoLisa, "Dank Mono", "Consolas", "Menlo", monospace'
  },
  fontSizes: {
    h0: '100px',
    h1: '72px',
    h2: '64px',
    h3: '56px',
    text: '44px',
    monospace: '20px'
  },
  space: [16, 24, 32]
};
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
);
// SPECTACLE_CLI_TEMPLATE_END

const formidableLogo =
  'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

const cppCodeBlock = indentNormalizer(`
#include <iostream>
#include <cstdlib>
#include <sstream>
#include <pthread.h>

struct thread_data_t
{
   int  thread_id;
   std::string message;
};

void *print_thread_message(void *thread_arg)
{
   struct thread_data_t *thread_data;
   thread_data = (struct thread_data_t *) thread_arg;

   cout << "Thread ID: " << thread_data->thread_id;
   cout << "Message: " << thread_data->message << endl;

   pthread_exit(NULL);
}

int main()
{
  pthread_t threads[NUM_THREADS];
  struct thread_data_t thread_data[NUM_THREADS];

  for (int i = 0; i < NUM_THREADS; i++)
  {
    auto curried_add = [](int x) -> function<int(int)> { return [=](int y) { return x + y; }; };
    auto answer = curried_add(i)(5);

    std::stringstream message;
    message << "The math result is " << answer << "!";
    thread_data.thread_id = i;
    thread_data.message = message.str();
    int err = pthread_create(&threads, NULL, print_thread_message, (void *)&thread_data[i]);

    if (err)
    {
      exit(-1)
    }
  }

  return 0;
}`);

const slideCodeBlock = indentNormalizer(`
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide>
      ...
    </Slide>
    <Markdown containsSlides>
      {\`
        ...
      \`}
    </Markdown>
  </Deck>
`);

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        
        <Heading margin="0px" fontSize="h0">
          Crafting A Presentation
        </Heading>

        <Heading margin="0px" fontSize="h2" color="primary">
          The Developer Way
        </Heading>

      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <SpectacleLogo size={500} />
      </FlexBox>

      <Notes>
        Kudos to the FormidableLabs team for the work they've done and continue to do on Spectacle!
      </Notes>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" >
          What is Spectacle?
        </Heading>
      </FlexBox>

      <Notes>
        It's a ReactJS Presentation Library
        <br/><br/>
        You can write your decks in JSX, Markdown, or MDX!
      </Notes>
    </Slide>

    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/master/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading color="razzle">Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>

      <Notes>
        Here's where we start to see some of the power of Spectacle.<br />
        You can reach out to a URL to get a photo, manipulate it a little, even build a photo component if you want.
      </Notes>
    </Slide>

    <Slide transitionEffect="slide">
      <Heading>Code Blocks</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [1, 1],
          [23, 25],
          [40, 42],
          [6, 10]
        ]}
      >
        {(value, step) => (
          <Box position="relative">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              fontSize={18}
              language="cpp"
              autoFillHeight
            >
              {cppCodeBlock}
            </CodePane>

            <Box
              position="absolute"
              bottom="0rem"
              left="0rem"
              right="0rem"
              bg="black"
            >
              {/* This notes container won't appear for step 0 */}

              {step === 1 && (
                <Text fontSize="1.5rem" margin="0rem">
                  This is a note on a highlited line of code.
                </Text>
              )}

              {step === 2 && (
                <Text fontSize="1.5rem" margin="0rem">
                  You can use the stepper state to render whatever you like as
                  you step through the code.
                </Text>
              )}

              {step === 3 && (
                <Text fontSize="1.5rem" margin="0rem">
                  You can even go back up and highlight a whole block.
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Stepper>

      <Text>
        Code Blocks now auto size and scroll when there is an overflow of
        content! They also auto-wrap longer lines.
      </Text>

      <Notes>
        Notes are on the slide itself.
      </Notes>
    </Slide>

    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>

        <Appear elementNum={0}>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>

        <Appear elementNum={2}>
          <ListItem>
            Just identify the order with the prop{' '}
            <CodeSpan>elementNum</CodeSpan>!
          </ListItem>
        </Appear>

        <Appear elementNum={1}>
          <ListItem>Out of order</ListItem>
        </Appear>

      </OrderedList>

      <Notes>
        It's really nice to see animations work so smoothly with the Appear tag, but there's a downside we'll talk about later.
      </Notes>
    </Slide>

    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>

      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>

      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>

      <Notes>
        So you've got a grid with two boxes in it and then you have a grid that uses array.map() to populate images.
      </Notes>
    </Slide>

    <Slide>
      <Markdown>
        {`
          # Layout Tables in Markdown

          | Browser         | Supported | Versions |
          |-----------------|-----------|----------|
          | Chrome          | Yes       | Last 2   |
          | Firefox         | Yes       | Last 2   |
          | Opera           | Yes       | Last 2   |
          | Edge (EdgeHTML) | No        |          |
          | IE 11           | No        |          |
        `}
      </Markdown>

      <Notes>
        Here we can see we have markdown inside of a markdown component inside of a slide.
      </Notes>
    </Slide>

    <Markdown containsSlides>
      {`
        ### Even write multiple slides in Markdown
        > Wonderfully formatted quotes

        1. Even create
        2. Lists in Markdown


        - Or Unordered Lists
        - Too!!
        Notes: Here we have markdown inside of a markdown component with the containsSlides property set
        ---
        ### This slide was also generated in Markdown!

        \`\`\`jsx
        const evenCooler = "is that you can do code in Markdown";
        // You can even specify the syntax type!
        \`\`\`

        ### A slide can have multiple code blocks too.

        \`\`\`c
        char[] someString = "Popular languages like C too!";
        \`\`\`

        Notes: Here we have another slide inside of the markdown tag, all separated by '---'
      `}
    </Markdown>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="razzle">
          Putting it All Together
        </Heading>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading color="razzle">Getting a Base</Heading>
      <OrderedList>
        <ListItem>Download NodeJS</ListItem>
        <ListItem>
          Create yourself a fresh new directory somewhere
          <CodePane>mkdir -p MyPresentation && cd $_</CodePane>
        </ListItem>
        <ListItem>
          Run the following code:
          <CodePane>npx -p spectacle-cli spectacle-boilerplate</CodePane>
        </ListItem>
      </OrderedList>
    </Slide>

    <Slide transitionEffect="slide">
      <Heading fontSize="h2" color="razzle">Presentation Basics</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [1, 1],
          [2, 4],
          [5, 9]
        ]}
      >
        {(value, step) => (
          <Box position="relative" height="1000px">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              fontSize={18}
              language="jsx"
              autoFillHeight
            >
              {slideCodeBlock}
            </CodePane>
          </Box>
        )}
      </Stepper>

      <Notes>
        Every presentation has a deck and inside of that deck is one or more slides.
        <br/><br/>
        Those slides can contain any number of other components.
        <br/><br/>
        Any number of those slides can be written in markdown.
      </Notes>
    </Slide>

    <Markdown containsSlides>
      {`
        # DEMO

        ---

        # Issues with Spectacle
        - Custom backgrounds don't play nice with PDF export!
        - Animations don't play nice with PDF export either.
        - Escaping curly braces is not intuitive. 
          - This is more of an issue with React itself
          - To print two curly braces use: {'{}'}
        - You're stuck with the primary, secondary, and tertiary color theme in markdown.

        Notes: Here we have markdown inside of a markdown component with the containsSlides property set
      `}
    </Markdown>

  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
