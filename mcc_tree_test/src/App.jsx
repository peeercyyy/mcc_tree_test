import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Tree from './Components/Tree';
import treeData from './treeData';

function App() {
  const [tree, setTree] = useState(treeData);
  const [lastId, setLastId] = useState(5);
  const [onEdit, setOnEdit] = useState(null);
  const [onNodeClick, setOnNodeClick] = useState(null);

  const handleAddNode = () => {
    setOnNodeClick(() => handleAddNodeOnClick);
    setOnEdit(null);
  };

  const handleAddNodeOnClick = (id) => {
    const addTreeItemRecursive = (tree, id) => {
      return tree.map((item) => {
        if (item.id === id) {
          const newChildren = [...item.children, { id: lastId + 1, label: `Node ${lastId + 1}`, children: [] }];
          return { ...item, children: newChildren };
        }
        if (item.id !== id) {
          if (!!item.children.length) {
            const newChild = addTreeItemRecursive(item.children, id);
            return { ...item, children: newChild };
          }
          return item;
        }
      });
    };
    const newTree = addTreeItemRecursive(tree, id);
    setLastId((id) => id + 1);
    setTree(newTree);
    setOnNodeClick(null);
  };

  const handleRemoveNode = () => {
    setOnNodeClick(() => handleRemoveNodeOnCLick);
    setOnEdit(null);
  };

  const handleRemoveNodeOnCLick = (id) => {
    const removeTreeItemRecursive = (tree, id) => {
      return tree
        .map((item) => {
          if (item.id === id) {
            return null;
          }
          if (item.id !== id) {
            if (!!item.children.length) {
              const newChild = removeTreeItemRecursive(item.children, id);
              return { ...item, children: newChild };
            }
            return item;
          }
        })
        .filter((item) => item !== null);
    };
    const newTree = removeTreeItemRecursive(tree, id);
    setTree(newTree);
    setOnNodeClick(null);
  };

  const handleEditNode = () => {
    setOnNodeClick(() => handleEditNodeOnClick);
    setOnEdit(null);
  };

  const handleEditNodeOnClick = (id) => {
    setOnEdit(id);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newName = formData.get('newName');
    const editTreeItemRecursive = (tree, id, newName) => {
      return tree.map((item) => {
        if (item.id === id) {
          if (newName === item.name) {
            return item;
          }
          return { ...item, label: newName };
        }
        if (item.id !== id) {
          if (!!item.children.length) {
            const newChild = editTreeItemRecursive(item.children, id, newName);
            return { ...item, children: newChild };
          }
          return item;
        }
      });
    };

    const newTree = editTreeItemRecursive(tree, onEdit, newName);
    setTree(newTree);
    setOnEdit(null);
  };

  const handleResetNode = () => {
    setTree(treeData);
    setLastId(5);
    setOnNodeClick(null);
    setOnEdit(null);
  };

  const onEditEnter = (e) => {
    e.target.style.background = 'lightgrey';
  };

  const onEditLeft = (e) => {
    e.target.style.background = 'none';
  };

  return (
    <div className='App'>
      <Header></Header>
      <main className='main'>
        <Tree
          treeData={tree}
          onMouseEnter={onEditEnter}
          onMouseLeave={onEditLeft}
          onClick={onNodeClick}
          onEdit={onEdit}
          onFormSubmit={onFormSubmit}
        />
      </main>
      <Footer
        handleAdd={handleAddNode}
        handleRemove={handleRemoveNode}
        handleEdit={handleEditNode}
        handleReset={handleResetNode}
      />
    </div>
  );
}

export default App;
