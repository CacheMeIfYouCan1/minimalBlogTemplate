export const theme = {
  navbar: {
    title: 'Blog Template', // Title which is used in /content/navbar/title.tsx, displayed in the center of the topbar
  },
  homepage: {
    title: 'This is the main page of the blog',               // Title, which is used in /content/homepage/components/homepage.tsx, first title on the main page
    subtitle: 'the button below links to the contact page',    // Subtitle, which is used in /content/homepage/components/homepage.tsx, second title on the main page
    buttonText: 'GET IN TOUCH',                                // Button text which is used in /content/homepage/components/homepage.tsx, contact button
  },
  blog: {
    title: '"This is some quote related to the blog"',        // Title used in /content/blog/components/banner.tsx, main title of the blog page
    subtitle: 'said by someone, someday',                      // Subtitle used in /content/blog/components/banner.tsx, subtitle of the blog page
  },
  contact: {
    title: 'Contact',                                          // Title used in /content/contact/components/contactform.tsx main title of the contact page
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', // Text used in /content/contact/components/contactform.tsx main title of the contact page

  },
  email: {

    from: 'MAILSENDER',                                       // the sender of the email from the contact form
    to: 'MAILRECEIVER',                                       // the receiver of the contact mail
    subject: 'Contact Request',                               // subject of the generated email
  },
};
