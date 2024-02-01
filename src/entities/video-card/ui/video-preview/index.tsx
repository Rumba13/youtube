import "./styles.scss";

type PropsType = {
    preview: string
}

export function VideoPreview({preview}: PropsType) {
    return <div className="video-preview-wrapper">
        <div className="video-preview" style={{backgroundImage: `url(${preview})`}}>

        </div>
    </div>
}