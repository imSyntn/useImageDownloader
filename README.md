# use_image_downloader
A custom React hook for downloading and saving images with ease.

## Installation
Install the package using npm:

```bash
npm install use_image_downloader
```

## Usage

Example Usage in a Component

## Importing the Hook

```typescript
import { useImageDownloader } from 'use_image_downloader';
```
## Using the Hook

```typescript
function App() {
  const downloadImage = useImageDownloader()

  return (
    <div>
      <button onClick={()=>downloadImage('*link*', 'animal.png')}>download</button>
    </div>
  )
}
```
## API

### useImageDownloader()
Returns a function. Let's save it in **downloadImage** variable.

To download an image we need to call the **downloadImage('link of the image', 'file name.png or .jpg')** which takes two parameters

```typescript
onClick={()=> downloadImage('link of the image', 'file name.png or .jpg')}
```

### Parameters
- **url:** string - The URL of the image to be downloaded.

- **filename:** string - The name to save the image as which must include filetype like .png or .jpg etc.