<h1> Png Subtitles Displayer</h1> 

<h2>When to use this library?</h2>

In some cases we find subtitles of type TTML2+PNG, displaying them in a video requires to convert them into a supported type of subtitles (like .vtt or .srt) by using Subtitles Edit software, however it's a complicated OCR conversion which is not an accurate operation and takes long time to complete. On the other hand there is a way to display them in a sorted way in an HTML5 video by using this library.

<h2>How to use it ?</h2>

1-Include the library PngSubtitles.js with css file PngSubtitles.css in the head tag 
```html
<head>
  <link rel="stylesheet" href="PngSubtitles.css">
  <script src="PngSubtitles.js"></script>
</head>
 ```
2-The video tag where you want to display the subtitles must have an id.
```html

    <video id="myVideo" controls>
      <source src="test.mp4" type="video/mp4">
    </video>
  ```
Here we have "myVideo" as an id.

3-Place the subtitles folder that contains png files and JSON file somewhere in your web project.

P.S:Mostly there is XML instead of JSON so you have to convert it into JSON https://www.utilities-online.info/xmltojson
  
e.g:https://github.com/oussama-Kaifouf01/Display-PNG-JSON-subtitles-in-HTML5-video/tree/main/subtitles

4-Create a new pngSubtitles object by specifying id of the video tag and the path to JSON file in script tag

PS: creating the object must be after the video tag
 ```html
<script>
  //PngSubtitles( ID of the video tag , Path to JSON FILE)
 const arabic= new PngSubtitles("myVideo","subtitles/test.json")
</script>
   ```


