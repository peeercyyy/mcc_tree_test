import Tree from './Tree';

const TreeNode = ({node}) => {
  const { id, label, children } = node;
  return(
    <li id={id}>
      <span>{label}</span>
      {!!children.length && <Tree treeData={children} />}
    </li>
  )
}

export default TreeNode;