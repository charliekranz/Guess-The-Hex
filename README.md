<img src="#">

# <center>Guess the HEX Website</center>

Intro paragraphs

***

## UX (User Experience)

### User Stories
- #### First Time Visitor Goals
    1. As a First Time Visitor, I want to easily understand the content and subject matter of the website.
    2. As a First Time Visitor, I want to be able to easily navigate the site to see content and subject matter.
    3. As a First Time Visitor, I want to see visual examples of the subject matter.
    4. As a First Time Visitor, I want to read interesting and pertinent quotes and facts which help explain why the subject matter is remarkable.
    5. As a First Time Visitor, I want to learn how I might be able to visit the place in person.
    6. As a First Time Visitor, I want to see Social Media links to see further (real-time) information and content.

- #### Returning Visitor Goals
    1. As a Returning Visitor, I want to easily understand the content and subject matter of the website.
    2. As a Returning Visitor, I want to have the ability to ask questions directly of the website owners.
    3. As a Returning Visitor, I want to understand that the content matter stretches back thousands of years from the original city, 
    Akrágas, to moderns-day Agrigento and the Valley of the Temples.

- #### Frequent User Goals
    1. As a Frequent User, I want to be able to refer others to the website.
    2. As a Frequent User, I want to have the ability to book a visit to the actual site.

## Design
- ### Colours
    - Shades of red to echo Sicilian identity (flag), but using duskier tones.
    - A complimentary light dusky blue to emulate sky and sea.
    - White and bright red for contrast and important sections (About) and well as UX (Buttons).
    - I am pleased with this revised colour scheme as I feel it pays homage to traditional tones yet makes a feature of the bright red 
    which expresses the vitality that this ancient site still holds to this day.
    - Although I quite liked the bright red on maroon treatment for the timeline, I knew that accessibility was more important and 
    so used higher-contrast combination of white/grey on maroon.

- ### UI
    - A one page layout seemed the best fit for this content as it allows the user to peruse each section through scrolling or clicks.
    - The menu is clearly indicated across all views and the buttons are easy to see.
    - The footer menu offers a secondary ability to access sections directly.

- #### Typography
    - Typefaces used are Lexend Peta for titles/headers and Open Sans for body text with Sans Serif as the fallback if fonts aren't imported correctly.
    - Lexend Peta has a strong, wide face which expresses the epic and wide feeling of this historical site.
    - Open Sans is clean and compact which works well for blocks of text and also compliments Lexend Peta quite well.

- #### Imagery
    - Imagery is vitally important for conveying the scale and scope of this archaelogical site. 
    - I was fortunate to source an image close to what I envisioned for the hero image.
    - I felt that by using additional images such as the coins and map I could convey archealogical and historical aspects of the site.
    - I took advice to also include the starry sky imagery as background in the Gallery section, so that it works in concert with the Contact section.

- #### Video 
    - Video is further useful in showing how Akgrágas was believed to look when the ancient city was flourishing.
    - The 3D recreation video achieves so much in terms of communicating the size and scale of Akrágas at the height of its prominence.

- #### Wireframes
    - Desktop Wireframe: [View](filepath.pdf)<br>
    - Tablet Wireframe:  [View](filepath.pdf)<br>
    - Mobile Wireframe:  [View](filepath.pdf)<br>

## Features

* Header Section - allows user to see site identity and concept via iconography
* Navigation Section - allows user to navigate to different sections / features
* Hero-Home Section - captures user's attention and conveys subject matter using compelling images and quote
* About Section - shows user the 3d model recreation video, conveys a summary of topic and includes another interesting quote
* Timeline Section - allows user to see an overview of important events relating to topic
* The Temples Section - allows users to see an overview of Temples and breakdown of each, also highlights a third quote
* Gallery Section - allows users to see a selection of images
* Contact Section - allows users to send message and/or visit social media accounts
* Footer Section - a secondary navigation section. 
* Responsivity - Responsive across devices

<img src="/assets/images/timeline-compare-new.jpg" >

### Potential Future Features

* Past-to-Present Day Image Comparison - would allow users to move slider to compare what current ruins would have looked like in their original from, 
possibly using: <https://www.w3schools.com/howto/howto_js_image_comparison.asp>
* UNESCO Information - would inform user of the international standing and signifigance of the archaelogical site
* Latest News Section - recent news would also make the website more "sticky", encouraging return visits
* An Italian language version - would add functionality allowing user to toggle between English and Italian languages
* Would investigate moving favicos to their own directory to de-clutter root directory

## Development history

### Midway point - 18/9 <br>
- I am quite pleased at how the website is shaping-up. 
    * Creating the mock-up ahead of development was hugely helpful as it meant some of the vital critical thinking was done early in the process.
    * I still had some hang-ups with logic around rows and cols and expect I will continue to sort that code a bit further.
    * I was delighted at the ability to target and style elements and used the Development Tools often to test first.

- Some of the changes I made to the initial plan include the colour palette and header icon. 
    * I felt the yellow, although indicative of the Sicilian flag, didn't sit as nicely in the design.
    * I used colour palette resources on Adobe and Paletteon website to look at more harmonious palettes.
    * I didn't pursue designing a header icon because I was happy at how the font awesome icon looked and knew I would repeat it throughout the site.

- After speaking with Ignatius, who is mentoring me, I will focus on some restyling, using semantic code and clear annotation of code attribution.
There are one or two features such as relocating the social icons on smaller devices and possible using captions on image gallery (when clicked).

## Debugging
- Needed to address: baguetteBox.min.js:7 Uncaught (in promise) TypeError: Failed to execute 'exitFullscreen' on 'Document': Document not active. 
Appears to be a known error: https://github.com/feimosi/baguetteBox.js/issues/212. - *Fixed by replacing with fancybox*
- Surface Duo seemed to not conform to pixel size breakpoint of embed video box - *Fixed with CSS restyling*
- favico wasn't appearing. - *Got fix from <https://stackoverflow.com/questions/46163065/github-pages-website-favicon-not-showing>*
- Layout issues on Windows 11 with Video Box and Temples section, both caused by an unnecessary row, which I removed. 
Interesting to see that this row wasn;t causing any issues across the other browsers.

## Technologies Used

* HTML and CSS programming languages
* [Balsamiq](https://balsamiq.com/) - wireframing tool
* [Slack](https://slack.com/) - networking and communications
* [GitHub](https://github.com/) - code repository
* [GitPod](https://www.gitpod.io/) - cloud dev environment
* [Bootstrap](https://getbootstrap.com/) - responsive sourcetoolkit with components and Javascipt plugins
* [fancybox](http://fancybox.net/) - a jQuery tool for photo galleries
* [fontawesome](https://fontawesome.com/v4.7.0/) - vector icons customisable through CSS
* [HoverCSS](https://ianlunn.github.io/Hover/#effects) - a library of CSS hover effects
* [YouTube](https://www.youtube.com/) - online video library with embed code
* [Google Fonts](https://fonts.google.com/) - open source web font collection
* [Google Maps](https://www.google.com/maps) - online mapping resource with embed code
* [Photoshop](https://www.photoshop.com/en) - application for cropping, matteing and resizing images
* [Favicon.ico](https://favicon.io/favicon-converter/) - website for creating favicon 

## Testing

- Have tested using:
    * Responsive devices on Google Developer Tools
    * iPhone 5S & 6 and iPad Pro
    * OSX Browsers: Chrome, Safari, Firefox, Opera, Edge
    * Windows Browsers: Chrome, Edge, Explorer, Firefox

- Testing included looking at each section and functionality (anchor links, external links, galleries and forms) to ensure all is working optimally and properly

- Have also tested with validation checks:
    * https://validator.w3.org/ - passed
    * https://html5.validator.nu/ - passed
    * https://color.a11y.com/Contrast/ - passed (one reported issue with Gallery title contrast, however this was due to the validator not accounting for the BG image.
    As the contrast here is nearly the exact same as Contact section, I am disregarding.)
    * https://jigsaw.w3.org/css-validator/ - issues with bootstrap.min.css and .fancybox.min.css - but neither involved my code so haven't addressed

## Deployment

This was deployed on GitHub Pages and can be viewed at: <a href="https://charliekranz.github.io/Akragas/" target="_blank">https://charliekranz.github.io/Akragas/</a>

* Before my mid-point meeting I deployed the website by:
    * Selecting the repository in GitHub account
    * Clicked on Settings 
    * In GitHub Pages section, selected Master Branch as source
    * Clicked Save 
    * Shared the url of the published site

## Credits

### Content
* Quotes are attributed to original authors 
* All other text was written by Charlie Kranz based on a variety of online resources (and one book):
    - <https://www.brown.edu/Departments/Joukowsky_Institute/courses/greekpast/4770>
    - <http://www.perseus.tufts.edu/hopper/artifact?name=Akragas&object=site>
    - <https://www.ancient.eu/agrigento/>
    - <https://www.parcovalledeitempli.it/en/>
    - <https://www.wikiwand.com/en/Valle_dei_Templi>
    - <https://www.petersommer.com/blog/archaeology-history/goethe-in-sicily>
    - <https://www.wildwinds.com/coins/greece/sicily/akragas/i.html>
    - Sicily and Its Islands - A complete guide. Uga La Rosa, Editor

### Media
#### Images
* [Hero image - by Emanuele Simonaro from Agrigento Facebook page](https://www.facebook.com/assessoratobci/photos/3097187053652008?)
* [Coins image - from Wild Winds website](https://www.wildwinds.com/coins/greece/sicily/akragas/i.html)
* [Akrágas etching -  by Toni Pecoraro 2014](https://en.wikipedia.org/wiki/File:Akragas_406_a.C..jpg)
* [Dioscuri Pillars image - The Wandering Scot photo (retouched by Charlie Kranz)](http://thewanderingscot.com/photos/2014%20Tunisia-Sicily-Malta/Sicily/midis/IMG_4461.jpg)
* [Nighttime Starry Sky image in Gallery Section by Felix Mittermeier(retouched by Charlie Kranz)](https://pxhere.com/en/photo/1438039)
* [Nighttime Juno image in Contact Section - Rene Rauschenberger photo](https://pixabay.com/photos/temple-greek-sicily-agrigento-4570359/)
* All Gallery images attributed to photographer in Gallery Captions

#### Video
* 3D Recreation / Reconstruction by Altair4 Multimedia Archeo3D Production

### Code
* Navbar - Modified navbar code from <https://getbootstrap.com/docs/4.0/components/navbar/>
* Hover css - <https://ianlunn.github.io/Hover/#effects>
* Gallery Template (styling) - <https://tutorialzine.com/2018/03/3-amazing-bootstrap-4-gallery-templates>
* FancyApps (behaviour) - <http://fancyapps.com/fancybox/3/>
* HR line - <https://stackoverflow.com/questions/41411155/does-bootstrap-4-have-a-built-in-horizontal-divider>
* Timeline - modified code used in Code Institute UCD Resume project <https://github.com/charliekranz/UCD-resume>
* Contact Form - modified code used in Code Institute UCD Resume project <https://github.com/charliekranz/UCD-resume>

### Resources
#### README
- <https://github.com/Code-Institute-Solutions/readme-template/blob/master/README.md>
- <https://www.markdownguide.org/basic-syntax/>
- <https://github.com/AJGreaves/portrait-artist/blob/master/README.md>

#### Bootstrap
- <https://getbootstrap.com/docs/4.4/layout/grid/>
- <https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background>
- <https://hackerthemes.com/bootstrap-cheatsheet/>

#### Google Fonts
- <https://www.gyanblog.com/gyan/how-to-use-google-fonts-website-bootstrap/>

#### Colours
- <https://paletton.com/>

#### Validation Tips
- Took advice from MS1 PREPARATION CALL pdf regarding Validation links

#### Hints 
- I relied on Bootstrap Documentation, past Code Institute lessons and project code and W3 Schools threads for Hints
- Some examples: Centering the embedded video <https://stackoverflow.com/questions/22433616/how-can-i-align-youtube-embedded-video-in-the-center-in-bootstrap/22433845>

### Acknowledgelmets
* Thank you to my mentor, Ignatius Ukwuoma, for his valuable insight, feedback and suggestions throughout the project.
* The Online community and internet in general was enormously helpful for sharing code, media and tips.
* Eternal thanks to Grampa Verona (Giovanni Virone as he was known in the Akrágas area) for ensuring my existence and connecting me to such an amazing place
* Eternal thanks to his daughter, my Mom, for life - to my eldest brother John for taking me on a trip to the Valley of the Temples and to our family 
for sharing the same passion for "All Things Sicily"

### Disclaimer
This website was created for educational purposes only. 
