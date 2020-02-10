import React from 'react';
import style from './fileuploader.module.scss';
import Button from '../../misc/Elements/Button'

const ImageInput = (props) => {

  const {
    data: { uploadPersentage, state: { img }, file, filePath },
    methods: {
      uploadFile,
      removeFile,
      selectImageHandler
    },
    loaders: {
      isUploading
    }
  } = props
  return (
    <form onSubmit={(e) => uploadFile(e, file)} className={style.form__loader}>
      {uploadPersentage > 0 ? <div>uploaded: {uploadPersentage} %</div> : <label htmlFor="customFile">{filePath}</label>}
      <input type="file" name="customFile" id="customFile" onChange={selectImageHandler} />
      {file && <Button type="submit" className={style.form__uploadBtn} >upload</Button>}
      {!isUploading && filePath && <img className={style.img} src={filePath} alt='not found' />}
      {img && <button type="button" onClick={() => removeFile()}>remove img</button>}
    </form>
  );
};

export default ImageInput;