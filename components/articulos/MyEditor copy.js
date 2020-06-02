import React, { useState, useContext } from 'react'
import { EditorState } from 'draft-js';

import dynamic from 'next/dynamic'
const Editor = dynamic(
    () => {
        return import('react-draft-wysiwyg').then((mod) => mod.Editor);
    },
    { loading: () => null, ssr: false },
);
const MyEditor = ({ guardarContArticulo, contEditArticulo }) => {

    return (
        <Editor
            toolbar={{
                image: {
                    uploadEnabled: true,
                    previewImage: true
                }
            }}
            // initialContentState={contEditArticulo}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={guardarContArticulo}
        />
    )
}


export default MyEditor;
