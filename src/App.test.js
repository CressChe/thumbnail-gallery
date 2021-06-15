import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import {ActiveThumbnailWindow} from './components/ActiveThumbnailWindow';
import {Thumbnails} from './components/Thumbnails';
import renderer from 'react-test-renderer';
import {ThumbnailGallery} from './components/ThumbnailGallery';


test('renders select your photo', () => {
  render(<App />);
  const linkElement = screen.getByText(/Select your photo/i);
  expect(linkElement).toBeInTheDocument();
});

test('Checks active thumbnail window renders images with active Id', () => {
  render(<ActiveThumbnailWindow activeId={1015}/>);

  const img = screen.getByTestId("image");

  expect(img).toBeInTheDocument();
  expect(img.src).toBe("https://picsum.photos/id/1015/200/300.jpg")
});

test('Checks thumbnail window renders images with id', () => {
  render(<Thumbnails id={1022}/>);

  const img = screen.getByTestId("thumbnail-image-1022");

  expect(img).toBeInTheDocument();
  expect(img.src).toBe("https://picsum.photos/id/1022/100/90.jpg")
});

test('should match snapshot of Active Window view', () => {
  const activeWindow = renderer.create(<ActiveThumbnailWindow/>).toJSON();

  expect(activeWindow).toMatchSnapshot();
});

test('should match snapshot of Active Window when activeId is set', () => {
  const activeWindow = renderer.create(<ActiveThumbnailWindow activeId={1022}/>).toJSON();

  expect(activeWindow).toMatchSnapshot();
})

test('should change active window image when a thumbnail image is clicked', async () => {
  render(<ThumbnailGallery activeId={1015}/>);
  const thumbnail = screen.getByTestId("thumbnail-image-11");

  userEvent.click(thumbnail);

  const image = screen.getByTestId("image");
  expect(image.src).toBe("https://picsum.photos/id/11/200/300.jpg")
})