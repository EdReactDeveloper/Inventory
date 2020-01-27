import React from 'react';
import { add } from './formData';
import Button from '../../misc/Elements/Button';

const Add = ({ name, description, tags, category, status, statusArray, count, location, type, onChange, submitFrom, changeCheckBox, shared, fetchingItem }) => {
  const payload = { name, description, tags, category, count, location, type, }
  
  return (
    <form onSubmit={submitFrom}>
      {add(payload).map(item => {
        switch (item.type) {
          case 'input': return <label key={item.name} htmlFor={item.name}>
            <h4>{item.heading}</h4>
            <input type="text" name={item.name} value={item.value} onChange={(e) => onChange(e)} />
          </label>;
          case 'textarea': return <label key={item.name} htmlFor={item.name}>
            <h4>{item.heading}</h4>
            <textarea type="text" name={item.name} value={item.value} onChange={(e) => onChange(e)} />
          </label>;
          default: return null
        }
      }
      )}
      <label htmlFor="status">
        <h4>status</h4>
        <select name='status' value={status} onChange={(e) => onChange(e)}>
          {statusArray && statusArray.map(item => {
            return <option key={item.name} value={item.value}>{item.value}</option>
          })}
        </select>
      </label>
      <label htmlFor="status">
        <h4>shared</h4>
        <input type="checkbox" checked={shared} name="shared" onChange={(e)=> changeCheckBox(e) }/>
      </label>
          
      <Button type="submit">
        {fetchingItem ? 'loading...' : 'save'}
        </Button>
    </form>
  );
};

export default Add;