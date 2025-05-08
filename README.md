# minimal-text-editor

A simple, lightweight and minimal rich text editor component for React applications. Built using [Tiptap Editor](https://tiptap.dev/).

## 📦 Installation

You can install the editor as an npm package.

```bash
npm install minimal-text-editor
```

## 🛠️ Usage

1.  **Import the component**

    ```jsx
    import TextEditor from "minimal-text-editor";
    ```

2.  **Use it in your component**

    ```jsx
    export default function MyComponent() {
      const handleEditorChange = (html) => {
        console.log("Editor content:", html);
      };

      return (
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          <TextEditor onChange={handleEditorChange} />
        </div>
      );
    }
    ```

    ℹ️ The `onChange` prop returns the current HTML content whenever the editor updates.

## 🧩 Toolbar Options

The editor includes the following tools:

| Feature              | Description                     |
| -------------------- | ------------------------------- |
| **Bold**             | Toggle bold text                |
| _Italic_             | Toggle italic text              |
| <ins>Underline</ins> | Toggle underlined text          |
| Left Align           | Align text to the left          |
| Center Align         | Align text to the center        |
| Right Align          | Align text to the right         |
| Justify              | Justify the text                |
| Bullet List          | Create unordered lists          |
| Ordered List         | Create numbered lists           |
| Font Size            | Choose between predefined sizes |
| Font Family          | Change font family              |
| Text Color           | Pick a text color               |
| 🔗 Hyperlink         | Add a clickable link            |

## 🎨 Styling

Basic styles are included via `editor.css`. You can override or extend styles by targeting:

- `.editor-wrapper`
- `.toolbar`
- `.toolbar-button`
- `.toolbar-button.active`
- `.editor`

To adjust width, wrap the editor in a container and apply your preferred width:

```jsx
<div style={{ maxWidth: "500px" }}>
  <TextEditor onChange={...} />
</div>
```
