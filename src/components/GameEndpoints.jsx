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

const GameEndpoints = () => {
    return (
        <Section>
            <SectionTitle>Games</SectionTitle>
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
                        <TableCell>/api/games</TableCell>
                        <TableCell>Get all games</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>GET</TableCell>
                        <TableCell>/api/games/{"{id}"}</TableCell>
                        <TableCell>Get a specific game</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                            <br />
                            <ErrorCode>e3</ErrorCode> Invalid parameter value
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>POST</TableCell>
                        <TableCell>/api/games</TableCell>
                        <TableCell>Create a new game</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                            <br />
                            <ErrorCode>e2</ErrorCode> Malformed request body
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>PUT</TableCell>
                        <TableCell>/api/games/{"{id}"}</TableCell>
                        <TableCell>Update a game</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                            <br />
                            <ErrorCode>e2</ErrorCode> Malformed request body
                            <br />
                            <ErrorCode>e3</ErrorCode> Invalid parameter value
                        </TableCell>
                    </tr>
                    <tr>
                        <TableCell>DELETE</TableCell>
                        <TableCell>/api/games/{"{id}"}</TableCell>
                        <TableCell>Delete a game</TableCell>
                        <TableCell>
                            <ErrorCode>e1</ErrorCode> Internal Server Error
                            <br />
                            <ErrorCode>e3</ErrorCode> Invalid parameter value
                        </TableCell>
                    </tr>
                </tbody>
            </EndpointTable>
            <SectionTitle>Game Object</SectionTitle>
            <CodeBlock>
                {`{
  "id": Long,
  "name": String,
  "release_date": String,
  "background_image": String,
  "metacritic": Integer,
  "playtime": Integer,
  "description": String,
  "rating": Double,
  "rating_count": Integer,
  "platforms": [
    {
      "id": Long,
      "name": String
    }
  ],
  "genres": [
    {
      "id": Long,
      "name": String
    }
  ]
}`}
            </CodeBlock>
        </Section>
    );
};

export default GameEndpoints;
