import React, { useState } from 'react';
import style from './Input.module.scss';

const ImageInput = (props) => {

  const {
    data: { uploadPersentage, filePath },
    methods: {
      uploadFile
    }, 
    loaders: {
      isUploading
    }
  } = props

  const [file, setFile] = useState()
  const [filename, setFilename] = useState()

  const onChangeHandler = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }


  return (
    <form onSubmit={(e) => uploadFile(e, file)}>
      {uploadPersentage > 0 ? <div>uploaded: {uploadPersentage} %</div> : null}
      <label htmlFor="customFile">{filename}</label>
      <input type="file" name="customFile" id="customFile" onChange={onChangeHandler} />
      <input type="submit" value="upload" />
      {!isUploading && filePath && <img className={style.img} src={filePath} alt={filePath}/>}
    </form>
  );
};

export default ImageInput;