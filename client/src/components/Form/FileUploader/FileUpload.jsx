import React from 'react';
import style from './fileuploader.module.scss';
import form from '../form.module.scss'
import Button from '../../misc/Elements/Button'
import { FORM_TYPE } from '../../../configs';

const ImageInput = (props) => {

  const {
    data: { uploadPersentage, file, filePath },
    methods: {
      uploadFile,
      removeFileHandler,
      selectImageHandler
    },
    loaders: {
      isUploading
    }, 
    checks: {
      formType
    }
  } = props
  const className = formType === FORM_TYPE.edit ? form.edit : form.add

  return (
    <form onSubmit={(e) => uploadFile(e, file)} className={className}>
      {uploadPersentage > 0 ? <div>uploaded: {uploadPersentage} %</div> : null}
      <input type="file" name="customFile" id="customFile" onChange={selectImageHandler} />
      {file && <Button type="submit" className={style.form__uploadBtn} >upload</Button>}
      {!isUploading && filePath && <img className={style.img} src={filePath} alt='not found' />}
      {filePath && <button type="button" className={style.form__deleteBtn} onClick={() => removeFileHandler()}>remove img</button>}
    </form>
  );
};

export default ImageInput;