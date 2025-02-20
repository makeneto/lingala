import styled from "styled-components";

const Highlight = styled.h4`
  color: #ffcc00; /* Cor amarela */
  font-weight: bold;
`;

const HighlightedQuestion = ({ text, highlight }) => {
    if (!highlight) return <p>{text}</p>;

    const parts = text.split(`${highlight}`);
    return (
        <h4>
            {parts[0]}
            <Highlight>{highlight}</Highlight>
            {parts[1]}
        </h4>
    );
};

export default HighlightedQuestion;
