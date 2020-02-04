import React from 'react';
import { connect } from 'react-redux';
import style from './Button.module.scss';
import Icon from '../../icon/Icon';
import { Icons } from '../../icon/Selection';
import { modalHandler } from '../../../../store/actions/modal';
import { FORM_TYPE } from '../../../../configs';

const Button = ({ type,
  payload = '',
  modalHandler,
  selectedItems,
  onClick,
  onChange,
  data,
  className,
  checked,
  ...props }) => {

  const { parentId, instance, id } = payload
  switch (type) {

    // EDIT
    case 'edit':
      return <button
        type="button"
        className={style.edit}
        onClick={() => modalHandler({ formType: FORM_TYPE.edit, instance, data })}
      >
        <Icon d={Icons.edit} className={style.icon} size='32' />
        {props.children}
      </button>;


    // MOVE
    case 'move':
      return <button
        type="button"
        disabled={selectedItems.length < 1}
        className={style.edit}
        onClick={onClick}
      >
        <Icon d={Icons.download} className={style.icon} size='32' />
        {props.children}
      </button>


    // ADD
    case 'add':
      return <button
        type='button'
        onClick={() => modalHandler({ formType: FORM_TYPE.add, instance, parentId })}
        className={style.add}
      >
        <Icon d={Icons.add} className={style.icon} size='32' />
        {props.children}
      </button>


    // DELETE
    case 'delete':
      return <button
        className={style.delete}
        type="button" onClick={() => modalHandler({ formType: FORM_TYPE.delete, instance, id, parentId })} >
        <Icon className={style.icon} d={Icons.delete} size='32' />
        {props.children}
      </button>


    // SUBMIT
    case 'submit':
      return <button
        type='submit'
        className={style.submit}
      >{props.children}</button>

    // CLOSE MODAL
    case 'modal':
      return <button type="button" onClick={() => modalHandler()}
        className={className}
      >
        {props.children}
      </button>


    // INFO
    case 'info': return <div className={style.info}>
      <button type="button" className={style.info_btn}>
        i
    </button>
    </div>


    // CHECK
    case 'check':
      return <button
        type="button"
        onClick={onClick}
        className={style.check}
      >
        <Icon className={style.icon} size='32' d={Icons.select} />
        {props.children}
      </button>


    // SEARCH
    case 'search':
      return <button type="submit" className={style.search}>
        {props.children}
      </button>


    default: return <button type="button" onClick={onClick}>{props.children}</button>
  }

}

const mapStateToProps = state => ({
  editMode: state.items.editMode,
  selectedItems: state.items.selectedItems
})

export default connect(mapStateToProps, { modalHandler })(Button)