import styled from "styled-components";

const Section = styled.section`
    margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #4caf50;
`;

const EndpointTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
`;

const TableHeader = styled.th`
    text-align: left;
    padding: 0.5rem;
    border-bottom: 1px solid #4caf50;
`;

const TableCell = styled.td`
    padding: 0.5rem;
    border-bottom: 1px solid #333;
`;

const CodeBlock = styled.pre`
    background-color: #1e1e1e;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
`;

const ErrorCode = styled.span`
    background-color: #2c2c2c;
    padding: 2px 4px;
    border-radius: 3px;
    margin-right: 4px;
`;

const ReviewEndpoints = () => {
    return (
        <Section>
            <SectionTitle>Reviews</SectionTitle>
            <EndpointTable>
                <thead>
                    <tr>
                        <TableHeader>Method</TableHeader>
                        <TableHeader>URL</TableHeader>
                        <TableHeader>Description</TableHeader>
                        <TableHeader>Potential Errors</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <TableCell>GET</TableCell>
                        <TableCell>/api/games/{"{id}"}/reviews</TableCell>
                        <TableCell>Get reviews for a specific game</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                            <br />
                            <ErrorCode>e3</ErrorCode> Invalid parameter value
                            <br />
                            <ErrorCode>e4</ErrorCode> Item not found
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>GET</TableCell>
                        <TableCell>/api/reviews/{"{id}"}</TableCell>
                        <TableCell>Get a specific review</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                            <br />
                            <ErrorCode>e3</ErrorCode> Invalid parameter value
                            <br />
                            <ErrorCode>e4</ErrorCode> Item not found
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>POST</TableCell>
                        <TableCell>/api/reviews</TableCell>
                        <TableCell>Create a new review</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                            <br />
                            <ErrorCode>e2</ErrorCode> Malformed request body
                            <br />
                            <ErrorCode>e3</ErrorCode> Invalid parameter value
                            <br />
                            <ErrorCode>e4</ErrorCode> Item not found
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>PUT</TableCell>
                        <TableCell>/api/reviews/{"{id}"}</TableCell>
                        <TableCell>Update a review</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                            <br />
                            <ErrorCode>e2</ErrorCode> Malformed request body
                            <br />
                            <ErrorCode>e3</ErrorCode> Invalid parameter value
                            <br />
                            <ErrorCode>e4</ErrorCode> Item not found
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>DELETE</TableCell>
                        <TableCell>/api/reviews/{"{id}"}</TableCell>
                        <TableCell>Delete a review</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                            <br />
                            <ErrorCode>e3</ErrorCode> Invalid parameter value
                            <br />
                            <ErrorCode>e4</ErrorCode> Item not found
                        </TableCell>
                    </tr>
                </tbody>
            </EndpointTable>
            <SectionTitle>Review Object</SectionTitle>
            <CodeBlock>
                {`{
  "id": Long,
  "username": String,
  "game_id": Long,
  "rating": Double,
  "review": String
}`}
            </CodeBlock>
        </Section>
    );
};

export default ReviewEndpoints;
