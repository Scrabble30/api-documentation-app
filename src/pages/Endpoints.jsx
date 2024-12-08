import { useRef, useEffect } from "react";
import styled from "styled-components";
import GameEndpoints from "../components/GameEndpoints";
import GenreEndpoints from "../components/GenreEndpoints";
import PlatformEndpoints from "../components/PlatformEndpoints";
import ReviewEndpoints from "../components/ReviewEndpoints";
import CommonErrors from "../components/CommonErrors";

const PageContainer = styled.div`
    padding: 2rem;
    max-width: 1200px;
    margin: auto;
    color: #e0e0e0;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const TableOfContents = styled.nav`
    background-color: #1e1e1e;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 2rem;
`;

const TOCTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #4caf50;
`;

const TOCList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const TOCItem = styled.li`
    margin-bottom: 0.5rem;
`;

const TOCLink = styled.a`
    color: #81c784;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const SectionWrapper = styled.div`
    scroll-margin-top: 2rem;
`;

const Endpoints = () => {
    const gameRef = useRef(null);
    const genreRef = useRef(null);
    const platformRef = useRef(null);
    const reviewRef = useRef(null);
    const errorsRef = useRef(null);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <PageContainer>
            <Title>API Endpoints</Title>

            <TableOfContents>
                <TOCTitle>Table of Contents</TOCTitle>
                <TOCList>
                    <TOCItem>
                        <TOCLink
                            href="#games"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToRef(gameRef);
                            }}
                        >
                            Game Endpoints
                        </TOCLink>
                    </TOCItem>
                    <TOCItem>
                        <TOCLink
                            href="#genres"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToRef(genreRef);
                            }}
                        >
                            Genre Endpoints
                        </TOCLink>
                    </TOCItem>
                    <TOCItem>
                        <TOCLink
                            href="#platforms"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToRef(platformRef);
                            }}
                        >
                            Platform Endpoints
                        </TOCLink>
                    </TOCItem>
                    <TOCItem>
                        <TOCLink
                            href="#reviews"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToRef(reviewRef);
                            }}
                        >
                            Review Endpoints
                        </TOCLink>
                    </TOCItem>
                    <TOCItem>
                        <TOCLink
                            href="#errors"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToRef(errorsRef);
                            }}
                        >
                            Common Errors
                        </TOCLink>
                    </TOCItem>
                </TOCList>
            </TableOfContents>

            <SectionWrapper id="games" ref={gameRef}>
                <GameEndpoints />
            </SectionWrapper>
            <SectionWrapper id="genres" ref={genreRef}>
                <GenreEndpoints />
            </SectionWrapper>
            <SectionWrapper id="platforms" ref={platformRef}>
                <PlatformEndpoints />
            </SectionWrapper>
            <SectionWrapper id="reviews" ref={reviewRef}>
                <ReviewEndpoints />
            </SectionWrapper>
            <SectionWrapper id="errors" ref={errorsRef}>
                <CommonErrors />
            </SectionWrapper>
        </PageContainer>
    );
};

export default Endpoints;
