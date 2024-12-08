import styled from "styled-components";

const Section = styled.section`
    margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #4caf50;
`;

const CodeBlock = styled.pre`
    background-color: #1e1e1e;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
`;

const ErrorDescription = styled.div`
    margin-bottom: 1rem;
    background-color: #2c2c2c;
    padding: 0.5rem;
    border-radius: 4px;
`;

const ErrorCode = styled.span`
    background-color: #1e1e1e;
    padding: 2px 4px;
    border-radius: 3px;
    margin-right: 8px;
    font-weight: bold;
`;

const CommonErrors = () => {
    return (
        <Section>
            <SectionTitle>Common Errors</SectionTitle>
            <ErrorDescription>
                <ErrorCode>e1</ErrorCode> Internal Server Error (500)
            </ErrorDescription>
            <ErrorDescription>
                <ErrorCode>e2</ErrorCode> Malformed Request Body (400)
            </ErrorDescription>
            <ErrorDescription>
                <ErrorCode>e3</ErrorCode> Invalid Parameter Value (400)
            </ErrorDescription>
            <ErrorDescription>
                <ErrorCode>e4</ErrorCode> Item Not Found (404)
            </ErrorDescription>
            <ErrorDescription>
                <ErrorCode>e5</ErrorCode> Malformed Authorization Header (401)
            </ErrorDescription>
            <ErrorDescription>
                <ErrorCode>e6</ErrorCode> Invalid Password (401)
            </ErrorDescription>
            <ErrorDescription>
                <ErrorCode>e7</ErrorCode> Unauthorized User (403)
            </ErrorDescription>
            <ErrorDescription>
                <ErrorCode>e8</ErrorCode> User Already Exists (409)
            </ErrorDescription>

            <SectionTitle>Error Object Structure</SectionTitle>
            <CodeBlock>
                {`{
  "status": statusCode,
  "message": errorMessage
}`}
            </CodeBlock>
        </Section>
    );
};

export default CommonErrors;
