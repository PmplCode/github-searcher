# GitHub Searcher

GitHub Searcher is a responsive single-page application (SPA) built with Next.js, Tailwind CSS, DaisyUI components, and NextUI components. It allows users to search for GitHub users and explore their repositories, with the ability to filter repositories by name and technology. The application also features a dark/light mode that adapts to your browser preferences.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/PmplCode/github-searcher.git
    ```

2. Navigate to the project directory:

    ```bash
    cd github-searcher
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

- Search for GitHub users
- View user repositories
- Filter repositories by name and technology
- Responsive design
- Dark/light mode based on browser preferences

## Project Structure

The important project files and directories are organized as follows:

- `app/page.tsx`: Main application file. You can start editing this file to customize the application.

## Libraries and Components

GitHub Searcher is built with the following libraries and components:

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [DaisyUI](https://daisyui.com/): A UI component library for Tailwind CSS.
- [NextUI](https://nextui.org/): A UI component library for React and Next.js.

# Future Improvements

GitHub Searcher is an evolving project, and there are several potential improvements and features that could enhance its functionality and user experience in the future. Here are some ideas:

## Code Quality and Testing

- Implement comprehensive unit tests and integration tests to ensure code reliability and maintainability.
- Conduct code reviews and refactor code as needed for improved readability and efficiency.
- Explore and adopt additional static analysis tools to catch potential issues early.

## UI/UX Enhancements

- Experiment with different color schemes for both dark and light modes to create a visually appealing and user-friendly interface.
- Incorporate user feedback and conduct usability testing to identify areas for improvement in the user experience.
- Enhance the responsiveness of the application for a seamless experience across various devices.

## Additional Features

- Implement user authentication to provide personalized features, such as saving favorite users or repositories.
- Explore integration with GitHub API features that could enhance search capabilities and provide more detailed user and repository information.
- Consider adding a "Recent Searches" feature to make it easier for users to revisit their past search queries.

## Performance Optimization

- Optimize API requests and responses to reduce load times and improve overall performance.
- Explore caching mechanisms to store frequently accessed data and minimize redundant API calls.

## Documentation

- Expand and improve project documentation to make it more accessible for contributors and users.
- Provide detailed instructions on how to contribute to the project and set up a development environment.

These are just a few ideas to consider for future development. Community feedback and contributions are always welcome!

## Learn More

To learn more about Next.js, Tailwind CSS, DaisyUI, and NextUI, refer to their respective documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Documentation](https://daisyui.com/docs)
- [NextUI Documentation](https://nextui.org/docs)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.