import './Thumbnail.css';

export function Thumbnails({ id, setActiveId, activeId }) {
    const style = id === activeId ? 'selected-style' : 'image-styles';
    
    return (
        <div class='thumbnail-styles' >
            <img class={style} alt={id} src={`https://picsum.photos/id/${id}/100/90.jpg`} data-testid={`thumbnail-image-${id}`} onClick={() => setActiveId(id)} />
        </div>
    )
}
