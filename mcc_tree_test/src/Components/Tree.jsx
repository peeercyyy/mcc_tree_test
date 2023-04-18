import TreeNode from './TreeNode';

const Tree = ({treeData, onMouseEnter, onMouseLeave, onClick}) => {
  return (
    <ul className='tree'>
      {treeData.map(node => <TreeNode onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} node={node} key={node.id} onClick={onClick} />)}
    </ul>
  )
};

export default Tree;