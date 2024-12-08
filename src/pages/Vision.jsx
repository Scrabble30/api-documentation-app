import styled from "styled-components";

const PageContainer = styled.div`
    padding: 2rem;
    max-width: 800px;
    margin: auto;
    color: #e0e0e0; /* Light text color */
`;

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const Paragraph = styled.p`
    line-height: 1.6;
`;

const Vision = () => {
    return (
        <PageContainer>
            <Title>Welcome to GameVault!</Title>
            <Paragraph>
                Discover in-depth information on different video game titles,
                such as storyline, ratings, and other player reviews. Here you
                can search for classic favorites, latest releases, or explore
                and find hidden gems.
            </Paragraph>
            <Title>What is GameVault?</Title>
            <Paragraph>
                GameVault is an innovative gaming platform providing a
                self-hosted, source-available alternative to popular gaming
                platforms. It lets you and your friends enjoy DRM-free games
                stored on your file server in an organized way.
            </Paragraph>
            <Paragraph>
                Think of it as your personal Steam or Plex server, but for your
                personal video game collection (and without streaming). It
                allows you to enjoy your games from anywhere, as long as they
                are stored on your server.
            </Paragraph>
            <Paragraph>
                You simply place your game files (installers, binaries, etc.)
                into a designated folder, and the platform detects them,
                enriches them with metadata, and offers a user-friendly
                interface to easily organize, download, install, and play your
                games. It even tracks your playtimes and progress.
            </Paragraph>
            <Title>Key Features</Title>
            <ul>
                <li>Browse your server&apos;s game collection</li>{" "}
                {/* Escaped apostrophe */}
                <li>Securely download and install games</li>
                <li>Track playtimes and compare progress with friends</li>
                <li>Multi-user authentication and role-based access control</li>
                <li>Fully documented API for easy integration</li>
            </ul>
        </PageContainer>
    );
};

export default Vision;
