import React, { Component } from 'react'
import { EditorState } from 'draft-js';
import dynamic from 'next/dynamic'
const Editor = dynamic(
    () => {
        return import('react-draft-wysiwyg').then((mod) => mod.Editor);
    },
    { loading: () => null, ssr: false },
);
class MyEditor extends Component {

    render() {

        return (
            <Editor
                toolbar={{
                    image: {
                        uploadEnabled: true,
                        previewImage: true
                    }
                }}

                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.props.guardarContArticulo}
            />
        )
    }
}

export default MyEditor;
