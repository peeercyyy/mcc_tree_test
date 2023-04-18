import TreeNode from './TreeNode';

const Tree = ({treeData}) => {
  return (
    <ul className='tree'>
      {treeData.map(node => <TreeNode node={node} key={node.id} />)}
    </ul>
  )
};

export default Tree;