import TreeNode from './TreeNode';

const Tree = ({treeData, onMouseEnter, onMouseLeave, onClick, onEdit, onFormSubmit}) => {
  return (
    <ul className='tree'>
      {treeData.map(node => 
        <TreeNode 
          onMouseEnter={onMouseEnter} 
          onMouseLeave={onMouseLeave} 
          node={node} 
          key={node.id} 
          onClick={onClick} 
          onEdit={onEdit}
          onFormSubmit={onFormSubmit}
        />)}
    </ul>
  )
};

export default Tree;