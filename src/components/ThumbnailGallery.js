import { ActiveThumbnailWindow } from "./ActiveThumbnailWindow";
import { ThumbnailsGrid } from "./ThumbnailsGrid";
import { useState } from 'react';
import './Thumbnail.css';

export function ThumbnailGallery() {
    const selectedIds = [1015, 1016, 1019, 1022, 1039, 1043, 1057, 11];

    const [activeId, setActiveId] = useState(selectedIds[0])

    return (
        <div class="thumbnail-gallery">
            <div>
            <h1 class="title-style"> React Photo Viewer</h1>
                <ActiveThumbnailWindow activeId={activeId} />
                <ThumbnailsGrid selectedIds={selectedIds} setActiveId={setActiveId} activeId={activeId}/>
            </div>
        </div>
    );
}
