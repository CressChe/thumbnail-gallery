import { Thumbnails } from "./Thumbnails";
import './Thumbnail.css';

export function ThumbnailsGrid({ selectedIds, setActiveId, activeId }) {

    return (
        <div class='thumbnails-grid'>
            <h3 class="text-style">Select your photo</h3>
            {   
                selectedIds.map((id) => {
                    return (
                        <Thumbnails key={id} id={id} setActiveId={setActiveId} activeId={activeId} />
                    )
                })
            }
        </div>
    )
}

