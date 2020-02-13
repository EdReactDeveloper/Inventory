import React from 'react';
import style from './Input.module.scss';

const Field = (props) => {
  const {
    item,
    data: { statusArray },
    methods: {
      onChange, changeCheckBox,
    },
    checks: { required }
  } = props

  let field = null
  switch (item.field) {

    case 'input':
      field = <input type={item.type}
        name={item.name}
        value={item.value}
        onChange={(e) => onChange(e)}
        className={`${style.input} ${required[item.name] ? style.input_required : ''}`}
      />; break;

    case 'textarea':
      field = <textarea type="text"
        name={item.name} value={item.value}
        onChange={(e) => onChange(e)}
        className={style.textarea}
      />; break;

    case 'checkbox':
      field = <input
        type={item.type}
        name={item.name} checked={item.value} onChange={(e) => changeCheckBox(e)} />; break;

    case 'select':
      field = <select name='status' value={item.value} onChange={(e) => onChange(e)} className={style.input} >
        {statusArray && statusArray.map(item => {
          return <option key={item.name} value={item.value}>{item.value}</option>
        })}
      </select>; break


    default: return null
  }


  return (
    <label key={item.name} htmlFor={item.name} className={style.heading}>
      <h4>{item.heading}</h4>
      {field}
      {item.field !== 'checkbox' && <div className={style.danger}>{required[item.name]}</div>}
    </label>
  )
};

export default Field