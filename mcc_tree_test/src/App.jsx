import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Tree from './Components/Tree'
import treeData from './treeData'

function App() {
  const [tree, setTree] = useState(treeData);
  const [lastId, setLastId] = useState(5)
  const [selectedNode, setSelectedNode] = useState(null);
  const [onNodeClick, setOnNodeClick] = useState(null);
  
  const handleAddNode = () => {
    setOnNodeClick(() => handleAddNodeOnClick)
    console.log(onNodeClick)
  };

  const handleRemoveNode = () => {
    setOnNodeClick(() => handleRemoveNodeOnCLick)
  };

  const handleEditNode = () => {

  };

  const handleResetNode = () => {
    setTree(treeData);
    setLastId(5);
    setOnNodeClick(null)
  };
  
  const onEditEnter = (e) => {
    e.target.style.background = 'lightgrey' 
  }

  const onEditLeft = (e) => {
    e.target.style.background = 'none'
  }

  const handleAddNodeOnClick = (id) => {
    console.log(id)
  }

  const handleRemoveNodeOnCLick = (id) => {
    const removeTreeItem = (tree, id) => {
      return tree.map((item) => {
        if (item.id === id) {
          return null
        }
        if (item.id !== id) {
          if (!!item.children.length) {
            const newChild = removeTreeItem(item.children, id)
            return {...item, children: newChild };
          }
          return item;
        }
      }).filter(item => item !== null)
    }
    const newTree = removeTreeItem(tree, id)
    console.log(newTree)
    setTree(newTree)
  }

  return (
    <div className="App">
      <Header></Header>
      <main className='main'>
        <Tree treeData={tree} onMouseEnter={onEditEnter} onMouseLeave={onEditLeft} onClick={onNodeClick}/>
      </main>
      <Footer 
        handleAdd={handleAddNode} 
        handleRemove={handleRemoveNode} 
        handleEdit={handleEditNode} 
        handleReset={handleResetNode} 
      />
    </div>
  )
}

export default App
