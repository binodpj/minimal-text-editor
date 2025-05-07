import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import FontSize from "./Fontsize";

import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link as LinkIcon,
} from "lucide-react";

import "./editor.css";

const RichTextEditor = ({ onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontFamily,
      FontSize,
      Link.configure({ openOnClick: false }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "<p>Hello world!</p>",
    onUpdate({ editor }) {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  useEffect(() => {
    return () => {
      if (editor) editor.destroy();
    };
  }, [editor]);

  if (!editor) return null;

  const setLink = () => {
    const url = window.prompt("Enter URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const fonts = [
    "Arial",
    "Courier New",
    "Georgia",
    "Times New Roman",
    "Verdana",
  ];

  const fontSizes = ["12px", "14px", "16px", "18px", "24px", "32px"];

  return (
    <div className="editor-container">
      <div className="toolbar">
        <select
          onChange={(e) =>
            editor.chain().focus().setFontFamily(e.target.value).run()
          }
          className="font-select"
          defaultValue=""
        >
          <option value="" disabled>
            Arial
          </option>
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>

        <select
          onChange={(e) =>
            editor.chain().focus().setFontSize(e.target.value).run()
          }
          className="font-select"
          defaultValue=""
        >
          <option value="" disabled>
            16 px
          </option>
          {["12px", "14px", "16px", "18px", "24px", "32px"].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`toolbar-button ${
            editor.isActive("bold") ? "active" : ""
          }`}
        >
          <Bold size={18} strokeWidth={3} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`toolbar-button ${
            editor.isActive("italic") ? "active" : ""
          }`}
        >
          <Italic size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`toolbar-button ${
            editor.isActive("underline") ? "active" : ""
          }`}
        >
          <UnderlineIcon size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`toolbar-button ${
            editor.isActive({ textAlign: "left" }) ? "active" : ""
          }`}
        >
          <AlignLeft size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`toolbar-button ${
            editor.isActive({ textAlign: "center" }) ? "active" : ""
          }`}
        >
          <AlignCenter size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`toolbar-button ${
            editor.isActive({ textAlign: "right" }) ? "active" : ""
          }`}
        >
          <AlignRight size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={`toolbar-button ${
            editor.isActive({ textAlign: "justify" }) ? "active" : ""
          }`}
        >
          <AlignJustify size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`toolbar-button ${
            editor.isActive("bulletList") ? "active" : ""
          }`}
        >
          <List size={18} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`toolbar-button ${
            editor.isActive("orderedList") ? "active" : ""
          }`}
        >
          <ListOrdered size={18} />
        </button>
        <button
          onClick={setLink}
          className={`toolbar-button ${
            editor.isActive("link") ? "active" : ""
          }`}
        >
          <LinkIcon size={18} />
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
