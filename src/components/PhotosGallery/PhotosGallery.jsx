import { Grid } from '..';
import { PhotosGalleryItem } from '..';
export const PhotosGallery = ({ listPhoto }) => {
  return (
    <Grid>
      {listPhoto.map(photo => (
        <PhotosGalleryItem key={photo.id} photo={photo} />
      ))}
    </Grid>
  );
};
