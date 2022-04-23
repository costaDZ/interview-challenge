import { MyTitle } from "./styles";

const ContentItem = ({ title, content }) => {
    return (
        <MyTitle><span>{title}</span> {content}</MyTitle>
    )
}

export default ContentItem;