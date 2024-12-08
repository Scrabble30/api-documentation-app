import styled from "styled-components";

const PageContainer = styled.div`
    padding: 2rem;
    max-width: 800px;
    margin: auto;
    color: #e0e0e0;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: #4caf50;
    margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
    font-size: 1.8rem;
    color: #81c784;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const Paragraph = styled.p`
    margin-bottom: 1rem;
    line-height: 1.6;
`;

const List = styled.ul`
    margin-bottom: 1rem;
    padding-left: 2rem;
`;

const ListItem = styled.li`
    margin-bottom: 0.5rem;
`;

const LinkContainer = styled.div`
    margin-top: 2rem;
`;

const Link = styled.a`
    color: #4caf50;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Home = () => {
    return (
        <PageContainer>
            <Title>Welcome to the Game Vault API</Title>
            <Paragraph>
                The Game Vault API is a comprehensive database interface for
                video game information. It provides developers with access to a
                rich collection of game data, enabling the creation of diverse
                applications in the gaming domain.
            </Paragraph>

            <Subtitle>What Our API Offers</Subtitle>
            <Paragraph>
                Our API is designed to be a robust backend solution for
                applications requiring video game data. It includes:
            </Paragraph>
            <List>
                <ListItem>
                    Detailed information on a wide range of video games
                </ListItem>
                <ListItem>Game categorization by genres</ListItem>
                <ListItem>Platform information for each game</ListItem>
                <ListItem>User review system for games</ListItem>
                <ListItem>Authentication system for user management</ListItem>
            </List>

            <Subtitle>Key Features</Subtitle>
            <List>
                <ListItem>RESTful API design for easy integration</ListItem>
                <ListItem>
                    Comprehensive game data including metadata like release
                    dates, ratings, and playtime
                </ListItem>
                <ListItem>
                    Genre and platform categorization for advanced filtering and
                    sorting
                </ListItem>
                <ListItem>User-generated content through reviews</ListItem>
                <ListItem>
                    Secure authentication for protected endpoints
                </ListItem>
            </List>

            <Subtitle>Getting Started</Subtitle>
            <Paragraph>
                To start using the Game Vault API, check out our{" "}
                <a href="/endpoints">Endpoints</a> page for detailed information
                on available routes and data structures. If you&apos;re looking
                for ideas on what can be built with our API, visit our{" "}
                <a href="/vision">Vision</a> page.
            </Paragraph>

            <Paragraph>
                Whether you&apos;re building a game recommendation engine, a
                social platform for gamers, or a game library management tool,
                the Game Vault API provides the data foundation you need to
                bring your ideas to life.
            </Paragraph>

            {/* Links Section */}
            <LinkContainer>
                <Paragraph>
                    Check out our project on GitHub:
                    <Link
                        href="https://github.com/Scrabble30/SP2-GameVault"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        GitHub Repository
                    </Link>
                    .
                </Paragraph>
                <Paragraph>
                    Explore the API live at:
                    <Link
                        href="https://gamevault.projectnetwork.dk/api/games"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        Game Vault API
                    </Link>
                    .
                </Paragraph>
            </LinkContainer>
        </PageContainer>
    );
};

export default Home;
