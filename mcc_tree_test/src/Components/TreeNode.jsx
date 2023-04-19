import Tree from './Tree';

const TreeNode = ({ 
    node, 
    onMouseEnter, 
    onMouseLeave, 
    onClick, 
    onEdit, 
    onFormSubmit
  }) => {
  const { id, label, children } = node;

  return(
    <li id={id} className='treeNode'>
      {onEdit != id ? 
      <span 
        className='treeNode__title' 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave} 
        onClick={() => onClick(id)}
      >
        {label}
      </span>
      : 
      <form onSubmit={onFormSubmit} 
>
        <input 
          className='treeNode__title_edit' 
          type='text'
          name='newName' 
          defaultValue={label} 
        />
        <input 
          className='button_edit_submit' 
          type='submit'
          value='Edit'
        />
      </form>
      }
      {!!children.length && 
        <Tree 
          treeData={children} 
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave} 
          onClick={onClick}
          onEdit={onEdit}
          onFormSubmit={onFormSubmit}
        />
      }
    </li>
  )
}

export default TreeNode;