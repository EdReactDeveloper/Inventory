import React, { useState } from 'react';
import style from './Input.module.scss';

const ImageInput = (props) => {

  const {
    data: { uploadPersentage, filePath, state:{img} },
    methods: {
      uploadFile,
      removeFile
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
      <img className={style.img} src={!isUploading && filePath ? filePath : img} alt={filePath}/> 
      {img && <button type="button" onClick={()=>removeFile()}>remove img</button>}
    </form>
  );
};

export default ImageInput;