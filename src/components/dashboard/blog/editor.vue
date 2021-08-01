<template>
  <div id="editorjs"></div>
</template>
<script>
import EditorJS from "@editorjs/editorjs";

const editor = new EditorJS({
  holder: "editorjs",
  autofocus: true,
  onReady: () => {
    console.log("Editor.js is ready to work!");
  },
});
</script>
