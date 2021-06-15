import './Thumbnail.css';

export const ActiveThumbnailWindow = ({ activeId }) => {

    return (
        <div class='active-window'>
            <img class='image-window' alt={activeId} src={`https://picsum.photos/id/${activeId}/200/300.jpg`} data-testid="image" />
        </div>
    )
}