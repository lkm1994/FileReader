import React from 'react';
import Dropzone from 'react-dropzone'
import './style.css'
const FileUploadComponent = (props: any) => {
    return (
        <Dropzone
            multiple={false}
            onDrop={acceptedFiles => props.handleChange(acceptedFiles)}
            accept=".pdf, .csv, .json, .txt" >
            {({ getRootProps, getInputProps }) => (
                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p className="file-upload-text">Drag 'n' drop file here, or click to select file</p>
                    </div>
                </section>
            )}
        </Dropzone>
    )
}

export default FileUploadComponent;