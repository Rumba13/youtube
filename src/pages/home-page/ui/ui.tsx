import "./styles.scss";
import {VideoTags} from "../../../widgets/video-tags";
import {VideoList} from "../../../widgets/video-list";

export function HomePage() {
    return <div className="home-page">
        <VideoTags/>
        <VideoList/>
    </div>
}