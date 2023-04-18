import Tree from './Tree';

const TreeNode = ({node, onMouseEnter, onMouseLeave, onClick}) => {
  const { id, label, children } = node;
  return(
    <li id={id} className='treeNode'>
      <span className='treeNode__title' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => onClick(id)}>{label}</span>
      {!!children.length && <Tree treeData={children} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}/>}
    </li>
  )
}

export default TreeNode;